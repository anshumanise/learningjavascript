// // const fruits = [
// //   'Apple',
// //   'Mango',
// //   'Kiwi',
// //   'Berry',
// //   'banana',
// //   'lichi',
// // ];

// // //Binding Pattern

// // // const [a, , , k] = fruits;
// // // console.log(a, k);

// // const [a, m, ...[, be, ba]] = fruits;
// // console.log(ba);
// function main() {
//   // Example usage:
//   const userProfile1 = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     city: "New York",
//     street: "123 Main St",
//     zipCode: "10001",
//   };

//   const userProfile2 = {
//     name: "Marry Jane",
//     email: "marry.jane@example.com",
//     city: "L.A",
//     street: "154 Washington Road",
//     zipCode: "10011",
//   };

//     function getUserInfo(profile, key) {
//     // Check if the key exists in the object
//     // write your code here 
//         if (key in profile) {
//             return profile[key];
//         }
//         else {
//                 console.log("Not Available")
//             }
//           }

//   console.log(getUserInfo(userProfile1, "name")); // Output: "John Doe"
//   console.log(getUserInfo(userProfile2, "city")); // Output: "L.A"
//   console.log(getUserInfo(userProfile1, "phoneNumber")); // Output: "Not available"

//   return getUserInfo;
// }

// main();
// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
  const updatedUser = Object.assign(user, updates);
  return updatedUser;
  }
  
  function freezeProfile(user) {
    
    // Implement the code here
    return Object.freeze(user);
  }


  