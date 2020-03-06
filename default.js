/*function add(num1, num2) {
  num2 = num2 || 0;
  return num1 + num2;
}

const total = add(10);
console.log(total);
*/

function createUser(name, age = 18) {
  const user = {};
  user.name = name;
  user.age = age;
  return user;
}

const func = createUser("rashik");
console.log(func);
