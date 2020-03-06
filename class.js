class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
  }
}

const student1 = new Student(12, "Rashik");
const student2 = new Student(10, "Injamul");

console.log(student1, student2);
