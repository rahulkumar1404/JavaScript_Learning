// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = () => {
    console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = () => {
    console.log(`Hitesh says hello`);
};


heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() -> this leads to an error we cannot treat object as an array function calling

const User = {
    name: 'chai',
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = () => {
    console.log(`${this}`);
    // console.log(`True Length is : ${this.trim()}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();