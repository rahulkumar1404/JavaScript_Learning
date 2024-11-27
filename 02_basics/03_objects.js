// singleton
// Object.create

// object literals

const mySym = Symbol('key1');

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Kolkata",
    email: "rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();
