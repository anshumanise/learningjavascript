// const students = [
//   { id: 1, name: "Rahul", score: 45 },
//   { id: 2, name: "Sanya", score: 85 },
//   { id: 3, name: "Amit", score: 72 }
// ];
// // Hame wo student chahiye jiska score 80 se zyada ho
// const topStudent = students.find(student => student.score > 80);

// console.log(topStudent); 
// // Output: { id: 2, name: "Sanya", score: 85 }
// // Hame Amit ka index (position) dhoondhna hai
// const amitIndex = students.findIndex(student => student.name === "Amit");

// console.log(amitIndex); 
// // Output: 2 (kyunki counting 0 se shuru hoti hai: Rahul: 0, Sanya: 1, Amit: 2)
// List of names
// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// Function 1: Find names
function findNames(names, peopleName) {
    const nametofind = names.find(name => name === peopleName);
    if (!nametofind) return "Name not found"; 
    return nametofind;
}

// Function 2: Find index of a name
function findNamesIndex(names, peopleName) {
    const findind = names.findIndex(name => name === peopleName);
    if (findind === -1) return -1;
    return findind;
  
}

// Example Usage:
console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(findNamesIndex(names, "Emma")); // Output: 3
console.log(findNamesIndex(names, "Mark")); // Output: -1


