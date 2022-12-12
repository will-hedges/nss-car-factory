// No parameters defined because function needs nothing to do its job
const createChassis = () => {
  // Create a new object. No properties yet.
  const newChassisObject = {};
  return newChassisObject;
};

const addBody = (chassisObject) => {
  // Use dot notation to add a new property
  chassisObject.body = "Fever";
  // Return the chassis that now has a body property on it
  return chassisObject;
};

/*
  The addWheels() function should have a parameter for the incoming chassis object.
  It should add a new property to that object named wheels with a value of 4. 
  The function should return the chassis object.
*/
const addWheels = (chassisObject) => {
  chassisObject.wheels = 4;
  return chassisObject;
};

/*
  The addEngine() function should have a parameter for the incoming chassis object.
  It should add a new property to that object named engine with a value of "4.8L".
  The function should return the chassis object.
*/
const addEngine = (chassisObject) => {
  chassisObject.engine = "4.8L";
  return chassisObject;
};

/*
  The addSteeringWheel() function should have a parameter for the incoming chassis object. 
  It should add a new property to that object named steeringWheel with a value of "Tilting". 
  The function should return the chassis object.
*/
const addSteeringWheel = (chassisObject) => {
  chassisObject.steeringWheel = "Tilting";
  return chassisObject;
};

/*
  The addDriveTrain() function should have a parameter for the incoming chassis object. 
  It should add a new property to that object named driveTrain with a value of "Two wheel drive".
  The function should return the chassis object.
*/
const addDriveTrain = (chassisObject) => {
  chassisObject.driveTrain = "2WD";
  return chassisObject;
};

let chassis = createChassis();

let feverChassis = addBody(chassis);
feverChassis = addWheels(feverChassis);
feverChassis = addEngine(feverChassis);
feverChassis = addSteeringWheel(feverChassis);
feverChassis = addDriveTrain(feverChassis);

console.log(feverChassis);
