---
title: Intro to Javascript
excerpt: This is a basic introduction to JavaScript, which is the programming language of the web. The class is designed for anyone interested in developing a website, or creating an interactive data visualization. By the end of this course, you will be able to read JavaScript you find online, and adapt it to your needs. You will have an opportunity to work with common JavaScript libraries/tools.
cover_image: /images/workshop/img2.jpg
readings:
    - Want to learn programming, but not convinced that the Python language is the right language? Check out [Five Reasons Why Learning Python Is The Best Decision](https://medium.com/datadriveninvestor/)
    - "Some concrete ideas for how to use Python: [What Can I Do With Python?](https://realpython.com/what-can-i-do-with-python/)"
goals:
    - description: 'In this workshop, you will learn to:'
    - Become familiar with core programming concepts, including variables, loops, and conditionals.
    - Distinguish among five core data types—integers, floats, strings, booleans, and lists.
    - Engage with error output and use the internet and documentation to independently research language features.
    - Learn how to find and import code from external sources to solve more complex problems.
    - Run Python programs, both by interacting directly with the interpreter and by preparing and running scripts.
    - Understand what Python is and, in general terms, what it can do.

---

# What is JavaScript?

## JavaSCRIPT, not Java

Java is a programming language that became popular in the 1990s. It was used primarily for desktop applications, but as the web became a bigger deal, Java was positioned as the language of choice for web development.


<CodeEditor language='JavaScript'>
1 + 1
</CodeEditor>

## What am I doing here?

You the reader may have come to this page pre-convinced that you want to learn how to program. To the wholly unconvinced, I can only ask, "Why are you taking this class?" The majority, including myself at first, exist in a state between the two. I am not going to try to convince you of the 'value' of programming, as value is a personal question. Instead I will show you a few neat tools that  

## Cool, inspiring libraries

What's possible with JavaScript? JavaScript is a programming language that can be used to create dynamic web pages. It can be used to create interactive web applications, or to create data visualizations and animations. Here are some cool libraries that you can use with JavaScript.

- [Chart.js](https://www.chartjs.org/docs/latest/)
- [D3.js](https://d3js.org/)
- [p5.js](https://p5js.org/)
- [leaflet.js](https://leafletjs.com/)



# Types

Javascript deals in data types, which are the fundamental building blocks of the language. When a variable is declared, it is assigned a type. The five core data types are:

- Numbers
- Strings
- Booleans
- Arrays
- Objects

## Numbers

- Integers
- Floats

## Strings

## Booleans

- True
- False

## Arrays

- Lists
- Tuples

## Objects

- Dictionaries
- Classes

# Variables

Variables are like containers for data. They are named and can be assigned a value.

```JavaScript
var a = 1;
var b = 2;
var c = a + b;
```

Notice in the above example that the variable `c` is assigned the value of `a + b`. Now let's make something ever so slightly more interesting. Let's talk about the weather.

```JavaScript
var weather = 'sunny';
var statement = 'The weather is ' + weather + ' today.';
```

We can use the `+` operator to combine strings and variables. This is called concatenation.


# If and Then

Using 'if' statements, we can make decisions based on the value of a variable.

Here's a simple example:

```JavaScript
if ( true ) {
    console.log('It is true!');
}
```
So the thing inside the `if` statement is evaluated. If it is true, the code inside the `{}` block is executed.


```JavaScript
var a = 1;
if (a == 1) {
    console.log('a is 1');
}
```

```JavaScript
var weather = 'cold';
if (weather === 'sunny') {
    console.log('It is a beautiful day!');
} else {
    console.log('It is not a beautiful day.');
}
```
'console.log' is a function that prints a message to the console.

<JSConsole />

# Thinking in Code

Let's talk about the process of thinking in code. What does someone think about before they write code? In your head, how might you imagine what the code in action would look like? For me, I have two ideas:

1. The computer reads from top to bottom. It does things according to the instructions it reads, step by step. That's the sense in which we mean 'scripting'. My thought process is about the steps that are necessary to get from the beginning to a defined end. What kind of data do I have? How will it have to be transformed? What will be the result? That's the linear vision of scripting.
2. Digging into the code is a lot more difficult. It's about the structure of the code. What is the structure of the code? What is the structure of the data? What is the structure of the code? What is the structure of the data? That's the hierarchical vision of scripting.
3. OK actually I'm not sure what the third one is.
4. The branching vision of code is about the decisions that are made in the process of getting to the end. The use of `if` statements and loops is the equivalent of a decision tree. 

# Building something that sticks around

Up to this point our work has faded into the past at every screen refresh. Ephemerality is not a feature much appreciated in programming. To get started on something more permanent, let's set up a practice folder to hold our code. Call it `javascript`, or whatever you want, as long as you promise to remember it. Throughout this class, we will be working in this folder.
Click this button to download a couple of files we'll be needing. Add them to your working folder.
<Download files='index.html, script.js'>

## The HTML

First we need to understand the HTML. HTML is the markup language that is used to create web pages. It is a simple language that is used to describe the structure of a web page. 
    
```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <h1>This is my project!</h1>
    <div id="response">This is the #response div.</div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="scripts.js"></script>
  </body>
</html>
```

## The JavaScript

```javascript
alert('Hey, it worked!');
```

<JSConsole />

# Arrays

Arrays are a collection of data. They are similar to lists in other languages. They are denoted by square brackets. They can hold any type of data:

```javascript
var myArray = [1, 2, 3, 4, 5];
var myArray = ['a', 'b', 'c', 'd', 'e'];
var myArray = [true, false, true, false];
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
```

I find that lists are where programming starts to get interesting. "But why?" you might ask. Well, arrays are a great way to store data and process it. So if you have a list of tasks to do, you can go through them one by one. "But how?" you might ask. Well, you can use the `for` loop to do that.

## Slicing Arrays

    ```javascript
    var myArray = [1, 2, 3, 4, 5];
    var arraySlice = myArray.slice(1, 3);
    console.log(arraySlice);
    ```
When I write `myArray.slice(1, 3)`, I am telling the computer to take the array `myArray` and take the slice from index 1 to index 3. This is called slicing.
What is an index? An index is a number that represents the position of a value in an array. For example, the first value in an array is at index 0. The second value is at index 1. The third value is at index 2. So, if I want to get the third value in an array, I would write `myArray[2]`. 

What would this result in?

    ```javascript
    var myArray = [1, 2, 3, 4, 5];
    var chosenValue = myArray[2];
    console.log(chosenValue);
    ```

# Loops

Loops are a way to repeat a block of code a certain number of times. Deciding when and how often to repeat a block of code is a huge part of what makes programming useful. One key concept of looping is 'iteration'. Iteration is moving through a series of items, one at a time. Here is an example of a loop iterating through a list of numbers:

```javascript
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Notice that we set a variable called `i` to 0. This is called the 'initialization' of the loop. We then set the condition that the loop will run as long as `i` is less than the length of the array. This is called the 'test'. We then increment `i` by 1. This is called the 'update'. We use that index to get the value at that index in the array. So, in order, we initialize, test, and update.

Let's talk through the loop we made. First, we initialize the loop. We set `i` to 0. Then, we test the condition. We check to see if `i` is less than the length of the array. If it is, we move on to the next step. If it isn't, we exit the loop. Then, we update the loop. We increment `i` by 1. We repeat the loop until `i` is greater than or equal to the length of the array. Inside the loop, we use the index `i` to get the value at that index in the array. So, we get the value at index 0, then the value at index 1, then the value at index 2, etc.

Let's add a loop to our index.html file. We'll use the same code as before, but this time we'll add a button to the page that will run the loop.

## The HTML

```html
<!doctype HTML>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My JavaScripting Master's Student Project</title>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="scripts.js"></script>
    </head>
    <body>
        <h1>This is my project!</h1>
        <div id="response">This is the #response div.</div>
        <button id="button">Click me!</button>
    </body>
</html>
```

## The JavaScript

```javascript
var numbers = [1, 2, 3, 4, 5];
$('#button').click(function() {
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
```

See how we're connecting the button to the loop? We're using the `$` function to select the element with the id `button`. We're also using the `click` function to run the loop when the button is clicked.

# Functions

Functions are a way to group code together. They are useful for keeping your code organized. They are also a great way to reuse code. Here's an example:

```javascript
function add(a, b) {
    return a + b;
}
```

This function is called `add`. It takes two parameters, `a` and `b`. It then returns the sum of `a` and `b`. What does it mean to `return` something? Let's take a look:

```javascript
var newValue = add(1, 2);
console.log(newValue);
```

What does `newValue` equal? It equals 3. This is because we called the function `add` with the parameters 1 and 2, which returned 3. So, returning something is a way to get the value of something, just like getting the end result of a calculation.

So, you could call this function a machine that adds two numbers. Let's talk about the syntax:

```javascript
    `function name(parameter1, parameter2) {`
    `    code to run`
    `}`
``` 

Inside the parentheses, we're defining the parameters. This is just like defining variables, but they're used to pass values into the function. Let's try it out.

```javascript
var firstNumber = 1;
var secondNumber = 2;
var c = add(firstNumber, secondNumber);
console.log(c);
```

This is something that all learning programmers have to wrap their head around. INSIDE the function, `firstNumber` and `secondNumber` are known as `a` and `b`. We're calling the function `add` and passing `a` and `b` into it. The function then returns the sum of `a` and `b`. This move is confusing at first, but is key to understanding how functions work. Let's try another one.

```javascript
function howFeel(mood) {
    if (mood === 'happy') {
        return 'I feel happy!';
    } else if (mood === 'sad') {
        return 'I feel sad!';
    } else {
        return 'I feel neutral!';
    }
}
```

Notice that we've included an if/else statement. Everything we've learned up to this point can be used in a function. Here's another one, this time looping through a list:

```javascript
var NYBoroughs = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island'];
for (var i = 0; i < NYBoroughs.length; i++) {
    if (NYBoroughs[i] === 'Queens') {
        console.log('Queens has the best food!');
    } else {
        console.log(NYBoroughs[i]);
    }
}
```

<JSTerminal />

<CodeEditor language='javascript'>
var t = 10;
</CodeEditor>

# Errors in JavaScript

When encountering an error, the browser will stop running the code. It will show an error message. The error will show a few things:

- The line of code that caused the error
- The error message
- The stack trace

There are a few main types of errors:

- Syntax errors
- Runtime errors
- Logical errors

Syntax errors are when the code is not written correctly. Runtime errors are when the code is written correctly, but the computer is not able to run it. Logical errors are when the code is written correctly, but the computer is not able to run it because it is not doing what it should.

When you have a syntax error, the error report will show you the line of code that caused the error. It is not always clear where the error is. It is often the line of code that comes after the error (??). There are online resources that can help you find the error, such as [Stack Overflow](https://stackoverflow.com/). Stack Overflow is a great place to find answers to your questions. The people there are not always friendly.

If you get a runtime error, the error report will show you the line of code that caused the error. It will also show you the error message. The error message is often a little more specific than the line of code. It will also show you the stack trace. The stack trace is a list of the lines of code that were run before the error. It is often helpful to look at the stack trace to see where the error is.

If you get a logical error, the error report will show you the line of code that caused the error. It will also show you the error message. The error message is often a little more specific than the line of code. It will also show you the stack trace. The stack trace is a list of the lines of code that were run before the error. It is often helpful to look at the stack trace to see where the error is.

# Input

We're gonna add some INTERACTIVITY to our project. We're going to add a button to the page that will ask the user for their name. We're going to add a div to the page that will show the user their name. 

```html
<!doctype HTML>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My JavaScripting Master's Student Project</title>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="scripts.js"></script>
    </head>
    <body>
        <h1>This is my project!</h1>
        <div id="response">This is the #response div.</div>
        <button id="button">Click me!</button>
    </body>
</html>
```
## The JavaScript

```javascript
$('#button').click(function() {
    var name = prompt('What is your name?');
    $('#response').text(name);
}
```

# HTML & CSS

You've got to have a webpage with content in it in order to use JavaScript to manipulate it! We're going to use css Grid and Flexbox to get where we're going, so nothing like Bootstrap or etc.

# Finding Answers with Google

The absolute most important thing to learn is how to find answers to your questions. This means learning how to ask the right questions. It comes through practice. Seeing an error

# Objects in JavaScript

Objects are a way to store data in a structured way. They are useful for storing data that has a lot of different properties. Here's an example:

```javascript
    var person = {
        name: 'Sandra',
        age: 30,
        favoriteFood: 'pizza'
    };
```

What's nice about this is that we can access the properties of the object using dot notation. What is the difference between dot notation and bracket notation? Let's take a look:
```javascript
    person.name;
    person['name'];
```

# Documentation and How to Interpret It

Documentation exists to explain what a tool is and how to use it. Too often, whether because documentation is an afterthought, or because the people responsible for making it are better programmers than communicators, technical documentation fails to make itself clear. Paradoxically, it is often necessary to already be familiar with using a tool in order to interpret the instructions about how to use it.

# Leaflet

D3 is a JavaScript library that allows you to create visualizations. Other tools are higher-level libraries that have more assumptions about how to use them. D3 is less opinionated about how to use it. It is more flexible. It is more robust. It is more efficient. It is more powerful. BUT it is more complicated. Here's a quick example of how to use D3:

<HTMLEditor >

<html>
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"/>
 <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
    <div id="map"></div>
</html>
<css>
#map {
    height: 400px;
    width: 400px;
}
</css>
<javascript>
```
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
```
</javascript>

</HTMLEditor>

# Clicking Stuff

Let's make it so that when you click on something, something happens. 

# Planning a Project

Now we design the final project, drawing it out when necessary.

# Lab
asd

# Lab