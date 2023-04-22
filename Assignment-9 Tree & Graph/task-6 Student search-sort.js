class MinHeap
{
    constructor()
    {
        this.heap = [];
    }

    get size()
    {
        return this.heap.length;
    }

    insert(value)
    {
        this.heap.push(value);
    }

    extract()
    {
        const minValue = this.heap[ 0 ];
        const lastValue = this.heap.pop();
        if (this.size > 0)
        {
            this.heap[ 0 ] = lastValue;
        }
        return minValue;
    }

    peek()
    {
        return this.heap[ 0 ];
    }
}

class Student
{
    constructor(id, name, phone, rating, mentor)
    {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.rating = rating;
        this.mentor = mentor;
    }
}

class StudentList
{
    constructor(students)
    {
        this.students = students;
        this.unassignedHeap = new MinHeap();
        for (const student of this.students)
        {
            if (!student.mentor)
            {
                this.unassignedHeap.insert(student);
            }
        }
    }

    search(id,name, phone, rating)
    {
        let start = 0;
        let end = this.students.length - 1;
        while (start <= end)
        {
            const mid = Math.floor((start + end) / 2);
            const student = this.students[ mid ];
            if (student.id === id)
            {
                if (
                    student.name === name &&
                    student.phone === phone &&
                    student.rating === rating
                )
                {
                    return student.mentor
                        ? `${ student.name } is mentored by ${ student.mentor }`
                        : `${ student.name } has no mentor`;
                } else
                {
                    return "Invalid search criteria";
                }
            } else if (student.id < id)
            {
                start = mid + 1;
            } else
            {
                end = mid - 1;
            }
        }
        return "Student not found";
    }

    heapSort()
    {
        const result = [];
        const heap = new MinHeap();
        for (const student of this.students)
        {
            heap.insert(student);
        }
        while (heap.size > 0)
        {
            result.push(heap.extract());
        }
        return result;
    }
}


const student1 = new Student(1, "Urmil", "1234567890", 4.5, "Radhe");
const student2 = new Student(2, "Pritam", "123123123", 4.0, "Pyare");
const student3 = new Student(3, "Ram", "456465465", 3.5, null);
const studentList = new StudentList([ student1, student2, student3 ]);

console.table(studentList);

console.table(student1);
console.table(student2);
console.table(student3);

console.log(studentList.search(1, "Urmil", "1234567890", 4.5, "Radhe"));
console.log(studentList.search(3, "Ram", "456465465", 3.5, null));