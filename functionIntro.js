//Refactor the given impure function to pure function.
function removeVowels(obj) {
  // Hint: To make this function pure, do not modify the original obj.
  // Instead, create and return a new object with the modified value.
  obj.value = obj.value.replace(/[aeiou]/gi, "");
  const newObj = { value: obj.value.replace(/[aeiou]/gi, "") };
  return newObj;

}

// you don't need to do anything below. 
//you can use it for testing the code.
let strObj = { value: "Hello World" };
let newObj = removeVowels(strObj);
//For pure function
//let newObj = removeVowels(strObj);
removeVowels(strObj);
console.log(strObj.value);
console.log(newObj.value);
//console.log(newObj.value);