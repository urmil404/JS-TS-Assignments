// problem: find the sortest path in graph using djikstra's algorithm


// linkedlist to create nodes
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value)
    {
        const node = { value: value, next: null };
        if (this.tail)
        {
            this.tail.next = node;
            this.tail = node;
        } else
        {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    remove(node)
    {
        if (!node)
        {
            return null;
        }
        if (node === this.head && node === this.tail)
        {
            this.head = null;
            this.tail = null;
        } else if (node === this.head)
        {
            this.head = node.next;
            this.head.prev = null;
        } else if (node === this.tail)
        {
            this.tail = node.prev;
            this.tail.next = null;
        } else
        {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--;
    }
}

// graph implementation using linkedlist

class Graph
{
    constructor()
    {
        this.vertices = new Map();
    }

    addVertex(vertex)
    {
        this.vertices.set(vertex, new LinkedList());
    }

    addEdge(vertex1, vertex2, weight)
    {
        this.vertices.get(vertex1).append({ vertex: vertex2, weight: weight });
        this.vertices.get(vertex2).append({ vertex: vertex1, weight: weight });
    }

    // dijkstra's algorithm logic

    dijkstra(startVertex)
    {
        const distances = new Map();
        const visited = new Set();
        const previous = new Map();

        // Initialize distances with infinity for all vertices except the starting vertex
        for (const vertex of this.vertices.keys())
        {
            if (vertex === startVertex)
            {
                distances.set(vertex, 0);
            } else
            {
                distances.set(vertex, Infinity);
            }
            previous.set(vertex, null);
        }

        let currentVertex = startVertex;
        while (currentVertex) //(O^n2)
        {
            const neighbors = this.vertices.get(currentVertex);
            for (let neighborNode = neighbors.head; neighborNode; neighborNode = neighborNode.next)
            {
                const neighbor = neighborNode.value.vertex;
                const weight = neighborNode.value.weight;
                const distance = distances.get(currentVertex) + weight;
                if (distance < distances.get(neighbor))
                {
                    distances.set(neighbor, distance);
                    previous.set(neighbor, currentVertex);
                }
            }
            visited.add(currentVertex);

            let shortestDistance = Infinity;
            let nextVertex = null;
            for (const [ vertex, distance ] of distances)
            {
                if (!visited.has(vertex) && distance < shortestDistance)
                {
                    shortestDistance = distance;
                    nextVertex = vertex;
                }
            }
            currentVertex = nextVertex;
        }

        return { distances, previous };
    }

    getShortestPath(startVertex, endVertex)
    {
        const { distances, previous } = this.dijkstra(startVertex);
        const path = [];
        let currentVertex = endVertex;
        while (currentVertex !== startVertex)
        {
            path.unshift(currentVertex);
            currentVertex = previous.get(currentVertex);
        }
        path.unshift(startVertex);
        return path;
    }
}

//creating a new graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 5);
graph.addEdge('A', 'C', 1);
graph.addEdge('B', 'D', 2);


console.log(graph.dijkstra('A', 'D')); // returns mapped object for distaces

// finding sortest path
console.log(graph.getShortestPath('A', 'D'));

