// Flatten an object using recursion
// Flatten an object using recursion
var dictionary = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: "1",
    },
  },
};

// {'Key1': '1', 'Key2.a': '2','Key2.b' : '3', 'Key2.c.d' : '3', 'Key2.c.e' : '1'}
// flatten function


const flatObj =  {};

const flatten = (obj,keys,i,prefix='') => {
  if(i<keys.length){
    if(typeof obj[keys[i]]==='object'){
      prefix += keys[i] + '.';
      return flatten(obj[keys[i]],Object.keys(obj[keys[i]]),0,prefix);
    }else{
      // passing current key-value to the flatObj variable
      flatObj[prefix.concat(keys[i])] = obj[keys[i]];
      i++; // increment the index
      return flatten(obj,keys,i,prefix); //calling function
    }
  }
}

console.log("Befor Recursion",flatObj);
flatten(dictionary,Object.keys(dictionary),0);
console.log("After Recursion",flatObj);