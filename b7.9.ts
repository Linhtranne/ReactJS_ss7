function isAllPrime(numbers: number[]): boolean {
  for (const number of numbers) {
    if (!isPrime(number)) {
      return false;
    }
  }
  return true;
}
function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const input1: number[] = [1, 3, 4, 2, 7, 9, 32, 43, 12, 45];
const output1: boolean = isAllPrime(input1);
console.log(output1);"

const input2: number[] = [3, 5, 7, 11, 13];
const output2: boolean = isAllPrime(input2);
console.log(output2);
