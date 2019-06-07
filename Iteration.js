// Two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    }
    else {
        prototypeProps.push(property);
    }
}
