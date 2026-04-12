//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
function main(){
    //Implement your class here
    class Person{

        //properties
        name;
        age;
        gender;


        //constructor

        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        //methods
        speak() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
       }
    }

    //create an instance of the class and call the method
    const person1 = new Person("John", 20, "M");
    person1.speak();

    //Create the Student class that inherits from the Person class with mentioned properties and methods.
    class Student{
        person; major; gpa;
        constructor(person, major, gpa) {
            this.person = person;
            this.major = major;
            this.gpa = gpa;
        }
        study() {
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}`);
        }
        speak() {
            console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}`);
       }

    }
    const stud1 = new Student(person1,"CS",9);
    stud1.speak();

    stud1.study();

    
    return { Person, Student };
}

main();
