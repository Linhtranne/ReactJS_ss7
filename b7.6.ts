let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["Tran Quang Linh", 18];
numbers.push(6);
numbers[0] = "a";
let firstNumber: number = numbers[0];
let firstName: string = person[0];
let [name, age] = person;
let allNumbers: number[] = [...numbers, 6, 7];

console.log(numbers, person);