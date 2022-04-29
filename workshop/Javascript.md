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

- test
- test2


<CodeEditor language='JavaScript'>
1 + 1
</CodeEditor>

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


# Let's make a Thing

Using 'if' statements, we can make decisions based on the value of a variable.

Here's a simple example:

```JavaScript
if ( true ) {
    console.log('It is true!');
}
```
So the thing inside the `if` statement is evaluated. If it is true, the code inside the `{}` block is executed.

<Download files='index.html, script.js'>

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

# Functions
This is a function. a function is a block of code that can be called to perform a specific task. The function is defined with the keyword function. The function is followed by the name of the function and parentheses. The parentheses contain the parameters of the function. The parameters are separated by commas. The code block that contains the function is indented.


<JSTerminal />

# Errors in JavaScript

# Lists

# Loops


# Input

# Doing Things to Lists

# Finding Answers with Google

# Objects in JavaScript
