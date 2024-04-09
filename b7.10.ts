function removeProperties(obj: any): any {
  const result: any = {};
  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}
const input = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
};

const output = removeProperties(input);
console.log(output);
