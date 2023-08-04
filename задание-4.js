function ElDevice(name, power){
  this.name = name;
  this.power = power;
  this.toPlugIn = false;
}

ElDevice.prototype.isOn = function() {
  this.toPlugIn = !this.toPlugIn;
}

function Lamp(name, power, light){
  ElDevice.call(this, name, power);
  this.light = light;
}

Lamp.prototype = Object.create(ElDevice.prototype);
Lamp.prototype.constructor = Lamp;

function Computer(name, power, processor){
  ElDevice.call(this, name, power);
  this.processor = processor;
}

Computer.prototype = Object.create(ElDevice.prototype);
Computer.prototype.constructor = Computer;

function TV(name, power, channel){
  ElDevice.call(this, name, power);
  this.channel = channel;
}

TV.prototype = Object.create(ElDevice.prototype);
TV.prototype.constructor = TV;

let lamp = new Lamp('лампа', 100, 'светит ярко, как солнышко');
let computer = new Computer('компьютер', 300, 'работает мощно, как бык');
let tv = new TV('телевизор', 200 ,'СТС');

lamp.isOn();
computer.isOn();

function calculateTotalPower(devices) {
  let totalPower = 0;
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].toPlugIn === true) {
      totalPower += devices[i].power;
    }
  }
  return totalPower;
}

let devices = [lamp, computer];
let totalPower = calculateTotalPower(devices);
console.log('суммарно потребляемая мощность всех включенных приборов: '+ totalPower + 'Вт');