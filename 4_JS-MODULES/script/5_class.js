export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(name) {
        console.log(`Hello ${name} my name is ${this.name} umur ku ${this.age}`);
    }
}