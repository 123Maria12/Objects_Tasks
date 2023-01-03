function ElectricalApp(name, power) {   
    
    this.name = name,   
    this.power = power,   
    this.isPlugged = false; 

}

ElectricalApp.prototype.plugIn = function () {  

    console.log(this.name + " is plugged!");
    this.isPlugged = true;

};

ElectricalApp.prototype.getPowerUsed = function() {
    
    if (this.isPlugged == true){
        return this.power;
    }
    else {
        return 0;
    }
    
}

const lamp = new ElectricalApp('lamp', 45); 
const computer = new ElectricalApp('computer', 150 )
const tv = new ElectricalApp('tv', 1000);

console.log(lamp.getPowerUsed() + computer.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());

