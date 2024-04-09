// Hàm cộng
function add(a: number | string, b: number | string): number {
    let num1: number = toNumber(a);
    let num2: number = toNumber(b);
  
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Tham số không hợp lệ");
    }
  
    return num1 + num2;
  }
  
  // Hàm trừ
  function subtract(a: number | string, b: number | string): number {
    let num1: number = toNumber(a);
    let num2: number = toNumber(b);
  
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Tham số không hợp lệ");
    }
  
    return num1 - num2;
  }
  
  // Hàm nhân
  function multiply(a: number | string, b: number | string): number {
    let num1: number = toNumber(a);
    let num2: number = toNumber(b);
  
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Tham số không hợp lệ");
    }
  
    return num1 * num2;
  }
  
  // Hàm chia
  function divide(a: number | string, b: number | string): number {
    let num1: number = toNumber(a);
    let num2: number = toNumber(b);
  
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Tham số không hợp lệ");
    }
  
    return num1 / num2;
  }
  
  // Hàm chuyển đổi chuỗi sang số
  function toNumber(value: string): number {
    let num: number = Number(value);
    if (isNaN(num)) {
      throw new Error("Chuỗi không thể chuyển đổi sang số");
    }
    return num;
  }