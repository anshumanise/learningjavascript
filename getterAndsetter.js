class Circle{

    constructor(radius){
        this.radius=radius;
    }
    
    
    get diameter(){
        return this.radius*2;
    }

    set diameter(newdiameter){
        this.radius=newdiameter/2;
    }
    
    
}

const circle1=new Circle(4);
console.log(circle1.radius); // Output: 4
console.log(circle1.diameter); // Output: 8

// circle1.diameter=16;
// console.log(circle1.radius); // Output: 4
// console.log(circle1.diameter); // Output: 8

circle1.radius=6;
console.log(circle1.radius); // Output: 6
console.log(circle1.diameter); // Output: 12

circle1.diameter=16;
console.log(circle1.radius); // Output: 8
console.log(circle1.diameter); // Output: 16    
