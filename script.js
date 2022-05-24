//create a base human class
class Human{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  walk=()=>console.log(`${this.name} is walking...`);
}
// first subclass.
class Student extends Human{
  constructor(name,age, standard){
    super(name,age);
    this.standard=standard;
  }
  introduce=()=>{
    console.log(`I, ${this.name}, am ${this.age} years old and I study in ${this.standard}`);
  }

  get gender(){
    return this.#gender;
  }
}
// level two subclass.
class Girl extends Student{
  
  #gender="Female";
  
  constructor(name,age,standard){
    super (name, age,standard);
  }
  //method overloading
  introduce=()=>{
    console.log(`I, ${this.name}, am ${this.age} years old and I study in class ${this.standard}. I am a girl!`)
  }
  get gender(){
    this.#gender;
  }
}

