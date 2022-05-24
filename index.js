class Car{
  //Private fields 
    #isRunning;
  
  constructor(name, color,maxSpeed, horsePower){
    // state
    this.name=name;
    this.color=color;
    this.maxSpeed=maxSpeed;
    this.horsePower=horsePower;
    this.#isRunning=false;
    this.drift=false;
    this.turnOnMusic=false;
    
  }
  // behaviour
  drive=()=>{
    // state change boolean.
    this.#isRunning=true;
    console.log(`${this.name} is running at a speed of ${this.maxSpeed} kph`);
  }

  stop=()=>{
    this.#isRunning=false;
    console.log(`${this.name} stopped!`);
  }
  drift=()=>{
    this.drift=true;
    console.log(`${this.name} is on a drift at a speed of`);
    
  }
  //state of the property.
  get isRunning(){
    return this.#isRunning;
  }
}
class Sedan extends Car{
  #type="Sedan";

  constructor(name,color,maxSpeed, horsepower){
    super(name,color,maxSpeed,horsePower);
  }
  get type(){
    return this.#type;
  }
  
}

class Hatchback extends Car{
  #type="Hatchback";
 constructor(name,color,maxSpeed, horsePower){
    super(name,color,maxSpeed,horsePower);
 }
  get type(){
    return this.#type;
  }
}
const audi=new Car("Audi", "red", 89, 750);
audi.drive();
audi.stop();
// this.drift();




