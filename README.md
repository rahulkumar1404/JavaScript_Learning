# JavaScript Intro : -
1. **JavaScript** is a language used to make websites interactive and dynamic.

2. It is **lightweight**, meaning it doesn't take up much space or resources.

3. JavaScript works on different types of devices and browsers, making it **cross-platform**.
4. It runs one task at a time, which is called being **single-threaded**.
5. JavaScript reads and runs code one line at a time, which makes it an **interpreted language** and allows for more flexibility in coding.

#
# JavaScript Loops


- **JS for Loop**
  - Used when you know the number of iterations.
  - Syntax: `for (initialization; condition; increment/decrement) { // code }`
  - Example:
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

- **JS while Loop**
  - Continues as long as the condition is true.
  - Syntax: `while (condition) { // code }`
  - Example:
    ```javascript
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    ```

- **JS do...while Loop**
  - Executes the code block at least once before checking the condition.
  - Syntax: `do { // code } while (condition);`
  - Example:
    ```javascript
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
    ```

- **JS for...in Loop**
  - Iterates over the properties of an object.
  - Syntax: `for (key in object) { // code }`
  - Example:
    ```javascript
    const obj = {a: 1, b: 2, c: 3};
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
    ```

- **JS for...of Loop**
  - Iterates over the values of an iterable (like arrays).
  - Syntax: `for (value of iterable) { // code }`
  - Example:
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    for (let value of arr) {
        console.log(value);
    }
    ```

- **JS labeled Statement**
  - Names a loop or block of code for use with `break` or `continue`.
  - Syntax: `label: { // code }`
  - Example:
    ```javascript
    outerLoop: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                break outerLoop;
            }
            console.log('i = ' + i + ', j = ' + j);
        }
    }
    ```

#

- **JS Functions**
  - Reusable blocks of code that perform a specific task.

- **JS Function Definitions**
  - Define a function using the `function` keyword.
  - Syntax: `function functionName(parameters) { // code }`
  - Example:
    ```javascript
    function greet(name) {
        return `Hello, ${name}!`;
    }
    ```

- **JS Function Call**
  - Execute a function by calling its name followed by parentheses.
  - Example:
    ```javascript
    greet('Alice'); // Output: Hello, Alice!
    ```

- **JS Function Expression**
  - Define a function inside an expression.
  - Example:
    ```javascript
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    ```

- **JS Pure Functions**
  - Functions that do not cause side effects and return the same output for the same input.
  - Example:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```

- **JS Function Parameters**
  - Variables listed as a part of the function definition.
  - Example:
    ```javascript
    function multiply(a, b) {
        return a * b;
    }
    ```

- **JS Function Invocation**
  - The process of calling a function.
  - Example:
    ```javascript
    multiply(2, 3); // Output: 6
    ```

- **JS Anonymous Functions**
  - Functions without a name, often used as arguments to other functions.
  - Example:
    ```javascript
    setTimeout(function() {
        console.log('Hello!');
    }, 1000);
    ```

- **JS Arrow Functions**
  - A shorter syntax for writing functions using the `=>` arrow.
  - Example:
    ```javascript
    const greet = (name) => `Hello, ${name}!`;
    ```

- **JS Nested Functions**
  - Functions defined inside other functions.
  - Example:
    ```javascript
    function outer() {
        function inner() {
            console.log('Inner function');
        }
        inner();
    }
    ```

- **JS Function Generator**
  - Functions that can be paused and resumed, using the `function*` syntax.
  - Example:
    ```javascript
    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }
    ```

- **JS Function Binding**
  - The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
  - Example:
    ```javascript
    const person = {
        name: 'Alice',
        greet: function() {
            console.log(`Hello, ${this.name}`);
        }
    };
    const greet = person.greet.bind(person);
    greet(); // Output: Hello, Alice
    ```

- **JS Async/Await Function**
  - Functions that handle asynchronous operations using `async` and `await`.
  - Example:
    ```javascript
    async function fetchData() {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    }
    ```

- **Hoisting in JavaScript**
  - JavaScript's default behavior of moving declarations to the top.
  - Example:
    ```javascript
    console.log(x); // Output: undefined
    var x = 5;
    ```

- **JavaScript Code Execution**
  - The process by which the JavaScript engine executes the code, including parsing, compiling, and running.

#
# Events
- **JS Events**
  - Actions that occur in the browser, like clicks, key presses, or page loads.
  - Handled using event listeners and handlers.

- **JS onclick Event**
  - Triggered when an element is clicked.
  - Example:
    ```javascript
    document.getElementById('myButton').onclick = function() {
        alert('Button clicked!');
    };
    ```

- **JS dblclick Event**
  - Triggered when an element is double-clicked.
  - Example:
    ```javascript
    document.getElementById('myButton').ondblclick = function() {
        alert('Button double-clicked!');
    };
    ```

- **JS onload Event**
  - Triggered when the page or an image is fully loaded.
  - Example:
    ```javascript
    window.onload = function() {
        alert('Page fully loaded!');
    };
    ```

- **JS onresize Event**
  - Triggered when the browser window is resized.
  - Example:
    ```javascript
    window.onresize = function() {
        console.log('Window resized!');
    };
    ```

- **JS onblur Event**
  - Triggered when an element loses focus.
  - Example:
    ```javascript
    document.getElementById('myInput').onblur = function() {
        console.log('Input lost focus!');
    };
    ```

- **JS onchange Event**
  - Triggered when the value of an element changes.
  - Example:
    ```javascript
    document.getElementById('mySelect').onchange = function() {
        console.log('Selection changed!');
    };
    ```

- **JS Focus Event**
  - Triggered when an element gains focus.
  - Example:
    ```javascript
    document.getElementById('myInput').onfocus = function() {
        console.log('Input gained focus!');
    };
    ```

- **JS Clipboard Event**
  - Triggered during copy, cut, or paste operations.
  - Example:
    ```javascript
    document.getElementById('myInput').oncopy = function() {
        console.log('Content copied!');
    };
    ```

- **JS onscroll Event**
  - Triggered when an element's scrollbar is being scrolled.
  - Example:
    ```javascript
    window.onscroll = function() {
        console.log('Page scrolled!');
    };
    ```
#
# OOPS in JavaScript

- **JS Classes In JavaScript**
  - Templates for creating objects, encapsulating data with code.
  - Example:
    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    ```

- **JS class expression**
  - Another way to define a class, either named or unnamed.
  - Example:
    ```javascript
    const Person = class {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    ```

- **JS Object Constructors**
  - Functions used to create and initialize objects.
  - Example:
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person1 = new Person('Alice', 30);
    ```

- **JS Static Methods**
  - Methods defined on the class itself, not on instances of the class.
  - Example:
    ```javascript
    class MathUtil {
        static add(a, b) {
            return a + b;
        }
    }
    console.log(MathUtil.add(2, 3)); // Output: 5
    ```

- **JS Prototype**
  - Mechanism by which JavaScript objects inherit features from one another.
  - Example:
    ```javascript
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
    const person1 = new Person('Alice');
    person1.greet(); // Output: Hello, my name is Alice
    ```

- **JS Constructor Method**
  - Special method for creating and initializing objects created within a class.
  - Example:
    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    ```

- **JS Encapsulation**
  - Bundling data and methods that operate on the data within one unit, like a class.
  - Example:
    ```javascript
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(newName) {
            this._name = newName;
        }
    }
    ```

- **JS Inheritance**
  - Mechanism where one class inherits properties and methods from another class.
  - Example:
    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a noise`);
        }
    }
    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks`);
        }
    }
    const dog = new Dog('Rex');
    dog.speak(); // Output: Rex barks
    ```

- **JS Polymorphism**
  - Ability to call the same method on different objects and have each of them respond in their own way.
  - Example:
    ```javascript
    class Animal {
        speak() {
            console.log('Animal makes a noise');
        }
    }
    class Dog extends Animal {
        speak() {
            console.log('Dog barks');
        }
    }
    const animals = [new Animal(), new Dog()];
    animals.forEach(animal => animal.speak());
    ```

- **JS Abstraction**
  - Hiding the complex implementation details and showing only the necessary features.
  - Example:
    ```javascript
    class Car {
        startEngine() {
            console.log('Engine started');
        }
        drive() {
            this.startEngine();
            console.log('Car is driving');
        }
    }
    const myCar = new Car();
    myCar.drive(); // Output: Engine started, Car is driving
    ```

### **Prototype Inheritance in JavaScript**
- **Prototype inheritance** allows objects to inherit properties and methods from other objects.
- Every JavaScript object has a prototype property that is a reference to another object.
- Example:
  ```javascript
  function Person(name) {
      this.name = name;
  }
  Person.prototype.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
  };
  const person1 = new Person('Alice');
  person1.greet(); // Output: Hello, my name is Alice
  ```

### **Prototype Chain in JavaScript**
- The **prototype chain** is a series of links between objects, where each object has a reference to its prototype.
- If a property or method is not found on an object, JavaScript looks up the prototype chain until it finds it or reaches the end of the chain.
- Example:
  ```javascript
  const obj = { a: 1 };
  console.log(obj.toString()); // Inherited from Object.prototype
  ```

### **JS Object Constructors**
- **Object constructors** are functions used to create and initialize objects.
- The `new` keyword is used to create an instance of an object.
- Example:
  ```javascript
  function Car(make, model) {
      this.make = make;
      this.model = model;
  }
  const myCar = new Car('Toyota', 'Corolla');
  console.log(myCar.make); // Output: Toyota
  ```

### **JS Prototype in JavaScript**
- The **prototype** is an object that is associated with every function and object by default in JavaScript.
- It allows you to add properties and methods to an object.
- Example:
  ```javascript
  function Animal(name) {
      this.name = name;
  }
  Animal.prototype.speak = function() {
      console.log(`${this.name} makes a noise`);
  };
  const dog = new Animal('Dog');
  dog.speak(); // Output: Dog makes a noise
  ```
#
### **JS Memory Management**
- JavaScript uses **automatic memory management** to handle memory allocation and deallocation.
- Memory is allocated when objects are created and deallocated when they are no longer needed.
- This process is managed by the JavaScript engine, which helps prevent memory leaks and optimize performance.

### **JS Garbage Collection**
- **Garbage collection** is the process of identifying and reclaiming memory that is no longer in use.
- JavaScript engines use algorithms like **mark-and-sweep** to perform garbage collection.
  - **Mark-and-sweep**: The engine marks objects that are reachable (still in use) and sweeps away those that are not.
- Example:
  ```javascript
  let obj = { name: 'Alice' };
  obj = null; // The object is now eligible for garbage collection
  ```
#
### **JS Promise**
- **Promises** represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A promise can be in one of three states: **pending**, **fulfilled**, or **rejected**.
- Example:
  ```javascript
  let promise = new Promise((resolve, reject) => {
      let success = true;
      if (success) {
          resolve('Operation was successful');
      } else {
          reject('Operation failed');
      }
  });

  promise.then(result => {
      console.log(result); // Output: Operation was successful
  }).catch(error => {
      console.log(error);
  });
  ```

### **JS Promise Chaining**
- **Promise chaining** allows you to perform a sequence of asynchronous operations, where each operation starts when the previous one succeeds.
- Example:
  ```javascript
  let promise = new Promise((resolve, reject) => {
      resolve(1);
  });

  promise.then(result => {
      console.log(result); // Output: 1
      return result * 2;
  }).then(result => {
      console.log(result); // Output: 2
      return result * 2;
  }).then(result => {
      console.log(result); // Output: 4
  });
  ```

### **JS Errors Throw and Try to Catch**
- **Throw** is used to create a custom error.
- **Try...catch** is used to handle errors gracefully.
- Example:
  ```javascript
  function riskyOperation() {
      try {
          let result = riskyFunction();
          console.log(result);
      } catch (error) {
          console.error('An error occurred:', error);
      }
  }

  function riskyFunction() {
      throw new Error('Something went wrong');
  }

  riskyOperation(); // Output: An error occurred: Error: Something went wrong
  ```

### **JS Class Compositions in JavaScript**
- **Class composition** involves combining multiple classes or objects to create more complex structures.
- It can be achieved using mixins or by composing objects.
- Example using mixins:
  ```javascript
  const canEat = {
      eat() {
          console.log('Eating');
      }
  };

  const canWalk = {
      walk() {
          console.log('Walking');
      }
  };

  class Person {
      constructor(name) {
          this.name = name;
      }
  }

  Object.assign(Person.prototype, canEat, canWalk);

  const person = new Person('Alice');
  person.eat(); // Output: Eating
  person.walk(); // Output: Walking
  ```
## 


### **JS Iterator**
- **Iterators** are objects that allow you to traverse through a collection (like arrays or strings) one element at a time.
- They implement the `next()` method, which returns an object with `value` and `done` properties.
- Example:
  ```javascript
  const array = [1, 2, 3];
  const iterator = arraySymbol.iterator;

  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
  ```

### **JS Function Generator**
- **Generators** are functions that can be paused and resumed, using the `function*` syntax.
- They use the `yield` keyword to return values one at a time.
- Example:
  ```javascript
  function* generator() {
      yield 1;
      yield 2;
      yield 3;
  }

  const gen = generator();
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }
  ```

### **JS Form Validation**
- **Form validation** ensures that user input meets certain criteria before submitting a form.
- Example:
  ```javascript
  function validateForm() {
      const name = document.forms["myForm"]["name"].value;
      if (name == "") {
          alert("Name must be filled out");
          return false;
      }
  }
  ```

### **JS Email Validation**
- **Email validation** checks if the input is a valid email address.
- Example:
  ```javascript
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  console.log(validateEmail("test@example.com")); // true
  console.log(validateEmail("invalid-email")); // false
  ```

### **JS async/await**
- **Async/await** provides a way to handle asynchronous operations more easily and readably.
- `async` functions return a promise, and `await` pauses the execution until the promise is resolved.
- Example:
  ```javascript
  async function fetchData() {
      try {
          let response = await fetch('https://api.example.com/data');
          let data = await response.json();
          console.log(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  fetchData();
  ```
#

### **JS encodeURI(), encodeURIComponent() and decodeURIComponent() Method**
- **encodeURI()**: Encodes a URI by escaping special characters, except for `:, /, ? &`.
  - Example:
    ```javascript
    const uri = "https://example.com?name=John Doe";
    const encodedURI = encodeURI(uri);
    console.log(encodedURI); // Output: https://example.com?name=John%20Doe
    ```

- **encodeURIComponent()**: Encodes a URI component by escaping all special characters.
  - Example:
    ```javascript
    const uriComponent = "name=John Doe";
    const encodedURIComponent = encodeURIComponent(uriComponent);
    console.log(encodedURIComponent); // Output: name%3DJohn%20Doe
    ```

- **decodeURIComponent()**: Decodes a URI component by replacing each escape sequence with the character it represents.
  - Example:
    ```javascript
    const encodedURIComponent = "name%3DJohn%20Doe";
    const decodedURIComponent = decodeURIComponent(encodedURIComponent);
    console.log(decodedURIComponent); // Output: name=John Doe
    ```

### **JS eval() Method**
- **eval()**: Evaluates a string of JavaScript code and executes it.
  - Example:
    ```javascript
    const code = "console.log('Hello, world!')";
    eval(code); // Output: Hello, world!
    ```
  - **Note**: Use with caution as it can execute arbitrary code and pose security risks.

### **JS globalThis Property**
- **globalThis**: Provides a standard way to access the global object across different environments (browser, Node.js).
  - Example:
    ```javascript
    globalThis.myGlobalVar = "Hello, global!";
    console.log(globalThis.myGlobalVar); // Output: Hello, global!
    ```

### **JS Global property**
- **Global properties**: Built-in properties available globally, such as `NaN`, `Infinity`, `undefined`.
  - Example:
    ```javascript
    console.log(NaN); // Output: NaN
    console.log(Infinity); // Output: Infinity
    console.log(undefined); // Output: undefined
    ```

### **JS Infinity**
- **Infinity**: A global property representing infinity.
  - Example:
    ```javascript
    console.log(1 / 0); // Output: Infinity
    console.log(Infinity > 1000); // Output: true
    ```

### **JS Undefined vs Undeclared**
- **Undefined**: A variable that has been declared but not assigned a value.
  - Example:
    ```javascript
    let x;
    console.log(x); // Output: undefined
    ```

- **Undeclared**: A variable that has not been declared in the current scope.
  - Example:
    ```javascript
    console.log(y); // Output: ReferenceError: y is not defined
    ```

## Some other topics

### **JS this Keyword**
- **this**: Refers to the object from which the function was called.
  - Example:
    ```javascript
    const person = {
        name: 'Alice',
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person.greet(); // Output: Hello, my name is Alice
    ```

### **JS Strict Mode**
- **Strict mode**: A way to opt into a restricted variant of JavaScript, which helps catch common coding mistakes.
  - Example:
    ```javascript
    'use strict';
    x = 3.14; // This will cause an error because x is not declared
    ```

### **JS setTimeout() and setInterval() Method**
- **setTimeout()**: Executes a function after a specified delay.
  - Example:
    ```javascript
    setTimeout(() => {
        console.log('This message is delayed by 2 seconds');
    }, 2000);
    ```

- **setInterval()**: Repeatedly executes a function at specified intervals.
  - Example:
    ```javascript
    setInterval(() => {
        console.log('This message repeats every 2 seconds');
    }, 2000);
    ```

### **JS typeof Operator**
- **typeof**: Returns the type of a variable.
  - Example:
    ```javascript
    console.log(typeof 42); // Output: number
    console.log(typeof 'hello'); // Output: string
    console.log(typeof true); // Output: boolean
    ```

### **JS Debugging**
- **Debugging**: The process of finding and fixing errors in your code.
  - Tools: Browser developer tools (like Chrome DevTools), `console.log()`, breakpoints, etc.
  - Example:
    ```javascript
    console.log('Debugging message');
    ```

### **JS Local Storage**
- **Local Storage**: A web storage API that allows you to store data locally in the browser.
  - Example:
    ```javascript
    localStorage.setItem('name', 'Alice');
    console.log(localStorage.getItem('name')); // Output: Alice
    ```

### **JS Callback**
- **Callback**: A function passed as an argument to another function, to be executed after the first function completes.
  - Example:
    ```javascript
    function greet(name, callback) {
        console.log(`Hello, ${name}`);
        callback();
    }

    function afterGreet() {
        console.log('This is a callback function');
    }

    greet('Alice', afterGreet);
    ```

### **JS Closures**
- **Closures**: Functions that have access to the parent scope, even after the parent function has closed.
  - Example:
    ```javascript
    function outerFunction() {
        let outerVariable = 'I am outside!';
        function innerFunction() {
            console.log(outerVariable);
        }
        return innerFunction;
    }

    const myClosure = outerFunction();
    myClosure(); // Output: I am outside!
    ```

### **JS defer**
- **defer**: An attribute for the `<script>` tag that delays the execution of the script until the HTML document has been fully parsed.
  - Example:
    ```html
    <script src="script.js" defer></script>
    ```

### **JS scope**
- **Scope**: The context in which variables and functions are accessible.
  - Types: Global scope, function scope, block scope.
  - Example:
    ```javascript
    let globalVar = 'I am global';

    function myFunction() {
        let localVar = 'I am local';
        console.log(globalVar); // Accessible
        console.log(localVar); // Accessible
    }

    myFunction();
    console.log(globalVar); // Accessible
    console.log(localVar); // Error: localVar is not defined
    ```

### **JS void**
- **void**: An operator that evaluates an expression and returns `undefined`.
  - Example:
    ```javascript
    void function() {
        console.log('This function returns undefined');
    }();
    ```
