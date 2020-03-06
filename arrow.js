// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function myFunction(num) {
//   return num * 2;
// };
const doubleIt = num => num * 2;
const add = (num1, num2) => num1 + num2;
const give5 = () => 5;

const math = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const result4 = math(6, 5);

const result = doubleIt(50);
const result2 = add(10, 15);
const result3 = give5();
console.log(result4);
