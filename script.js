//complete this code
class Person {
	 constructor(name,age) {
    this._name = name;
    this._age = age;
  }
  get name(){
    return this._name;
  }
  set age(x){
    this._age = x;
  }
}

class Student extends Person {
	 study(){
    console.log(this._name + " is studing");
  }
}

class Teacher extends Person {
	teach(){
    console.log(this._name +" is taeching");
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
