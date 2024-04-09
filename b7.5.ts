// Khai báo biến
let anyVar: any;
let unknownVar: unknown;
anyVar = 10;
unknownVar = "Hello";
console.log(anyVar.length);
let sum: number = anyVar + 10;
if (typeof anyVar === "number") {
}

if (typeof unknownVar === "string") {
}
