class Parent {
  constructor() {
    this.fatherName = "Ekram";
  }
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName;
  }
}

const baby = new Child("Rashik");
const baby2 = new Child("Isha");

console.log(baby.getFullName());
console.log(baby2);
