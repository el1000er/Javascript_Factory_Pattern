//FACToRY PATTERN TEST
function Car (name,type){
    this.name = name;
    this.type=type;
  }
  
  function Truck (name,type){
    this.name = name;
    this.type=type;
  }
  
  function VehiclesFactoryMethod(){
    this.create = function (name,type){
      switch(type){
        case "Car":
          return new Car(name, type);
        case "Truck":
          return new Truck(name,type);
        default:
      }
    }
    
  }
          
  const VehiclesFactory = new VehiclesFactoryMethod();
          
  const vehicles = [];
          
    vehicles.push(VehiclesFactory.create('BMW','Car'));
           vehicles.push(VehiclesFactory.create('MACK','Truck'));
  
  function print(){
          console.log("Database of Vehicles: ")
          console.log("Name "+this.name);
           console.log("Type "+this.type);
          
          
      }
          
      console.log(vehicles)
      vehicles.forEach(vehicle =>{print.call(vehicle)});
          
    
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
      
          
          
          
          
          
          
          