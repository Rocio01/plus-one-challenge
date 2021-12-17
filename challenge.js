var plusOne = function(digits) {
  let number = BigInt(digits.join("")) + BigInt(1);
  let arr = Array.from(String(number), Number);
  return arr;  
};