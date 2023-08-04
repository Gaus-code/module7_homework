class Device{
    constructor (ownName, power){
        this.ownName = ownName;
        this.power = power;
        this.toPlugIn = false;
    }
}
class IsOn extends Device{
    constructor(ownName, power, toPlugIn){
        super(ownName, power);
        this.toPlugIn = !toPlugIn;
    }
}
class Lamp extends IsOn{
    constructor(ownName, power, light){
        super(ownName, power);
        this.light = light;
    }
}
class Computer extends IsOn{
    constructor(ownName, power, processor){
        super(ownName, power);
        this.processor = processor;
    }
}
class TV extends Device{
    constructor(ownName, power, channel){
        super(ownName, power);
        this.channel = channel;
    }
}
let lamp = new Lamp('лампа', 100, 'светит ярко, как солнышко');
let computer = new Computer('компьютер', 300, 'работает мощно, как бык');
let tv = new TV('телевизор', 200 ,'СТС');

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