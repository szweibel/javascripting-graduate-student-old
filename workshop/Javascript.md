---
title: Intro to Javascript
excerpt: This is a basic introduction to JavaScript, which is the programming language of the web. The class is designed for anyone interested in developing a website, or creating an interactive data visualization. By the end of this course, you will be able to read JavaScript you find online and adapt it to your needs. You will also have an opportunity to work with common JavaScript libraries/tools and enhance your own research practices.
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

# Getting Started with JavaScript

Let's begin our journey with the JavaScript language. As is tradition, we're first going to explore some ways to print a "Hello World!" message as output to the screen. In doing so, you will be introduced to the basics of working with the JavaScript console. As will become clearer, you can think of the console as an interactive way to run basic JavaScript commands in your browser. 

To become further acquainted with the console, we will end the lesson by exploring basic data types and variables in JavaScript, and how you can use these capabilities to calculate and display a variety of conditions.

## Hello, World!

### Alerts

One of the most basic ways to output a message is to use the `alert()` method. This method will display a message to the user visiting your web page, and then wait for the user to click on the "OK" button.

To create an alert, you can write the following line of code...

```JavaScript
alert("Hello, World!");
```

...into the box below, where you can see an instance of the interactive console that we have provided for you. If you click your mouse after the `>` symbol (called the _prompt_), you can begin writing your code, and then hit the <kbd>Enter</kbd> key to run it.

<JSTerminal />

You should now see a pop-up box that displays your message. __Note__: If you do _not_ see a pop-up message, you may need to disable your pop-up blocker.

As you can see, the alert dialog box takes the focus and forces the user to read the specified message on the current webpage. This being the case, it is wise to avoid overusing this method because it stops the user from accessing other parts of the webpage until the box is closed. It is best used as a kind of warning message. For instance, you may have seen developers use it to notify the user that they are heading to a new external website after clicking a link.

You'll notice that our message is enclosed in `()` (parentheses) as well as `""` double quotations marks. You'll understand why as we continue: this indicates part of the _syntax_, or the rules that define the structure of the JavaScript language.

You will also notice that there is a `;`(semicolon) after the `alert` command. Not including the semicolon won't throw an error, but it is good practice to include after each command, or statement--after each single instruction given to the console. You'll see more examples of this (and learn when _not_ to include semicolons) as we progress. For now, make sure to __include the semicolon__ at the end of each line of code.

### Using Your Browser's Console

While we have provided a console for you embedded into this web page, you can also use the console to run commands directly from your browser's developer tools. Most modern browsers allow you access to a developer console where you can work with JavaScript and read or manipulate data on a page. 

To open the developer console, you can use these methods:

__Chrome:__
- Command + Option + i (Mac)
- Ctrl + Shift + i (Windows/Linux).
- Open the Chrome settings menu in the top-right corner of your browser window and select `More Tools` > `Developer Tools`

__Firefox:__
- Command + Option + i (Mac)
- Ctrl + Shift + i (Windows/Linux)

__Safari:__
- Develop menu in Safari’s Advanced preferences
- Right-click on any page element and select Inspect Element
- Command + Option + i

__Opera:__
- Command + Option + i (Mac)
- Ctrl + Shift + i (Windows/Linux)

Using these shortcuts should open a console window that you can use to run commands. After the `>` prompt, create another new `alert` command and hit the <kbd>Enter</kbd> key to run it. You should again see a pop-up box that displays your message.

We should note here that the alert's system dialog box is not related to the design of the webpage currently being shown in the browser. Its appearance depends solely on your current operating system and browser (rather than on the HTML code of the current page). You will learn how to manipulate a webpage's content and appearance directly with JavaScript, HTML, and CSS in later lessons.  

### The console.log() Function

Let's use another technique to display "Hello, World!" This time, we will use the `console.log()` function, which writes a message to the console. In your browser's developer console, write the following line of code:

```JavaScript
console.log("Hello, World!");
```

You should see the message "Hello, World!" now printed out for you in the console itself.

The `console.log()` function is a useful tool for testing and debugging your code. As you continue learning JavaScript and begin building your own webpages, you will find it an effective way to display and understand the results of your programs.

__Note__: If you also receive a message of `undefined` in the console, don't worry! You will understand why this is happening as you continue learning more about how functions work in JavaScript.

For now, let's continue working with the JavaScript console by exploring the way the language deals with data and discrete bits of information.

## Data Types

__Data types__ form the atomic elements of JavaScript programs and are used to store and manipulate data. The basic data types in JavaScript are: __number__, __string__, __boolean__, __array__, and __object__. For now, let's just discuss the first three of these types and how you can use them.

### Numbers

Values of the `number` type are, as you might have guessed, numbers. Try typing the following numbers into the console, hitting the <kbd>Enter</kbd> key after each one:

```JavaScript
> 9;
> 3.8;
> -1.2;
```
<JSTerminal />

As you can see, JavaScript recognizes a variety of different number categories. Unlike other programming languages you may (or may not) be familiar with, JavaScript does not define different types of numbers, like integer, double, etc. All numbers are recognized as the same type.

We can also perform various mathematical calculations on these numbers. For example, try running each of the following mathematical operations in the console:

```JavaScript
> 5 + 5
> 5 - 5
> 5 / 5
> 5 * 5
> 5 % 6
```

<JSTerminal />

JavaScript effectively calculates the result of these operations for you. Whenever you can use a number, you can also create a mathematical expression using typical algebraic operators. The last example (in case you are unfamiliar) uses the <kbd>%</kbd> (remainder) symbol, which evaluates the remainder of a division.  

In the table below, you can see more of the various operators available to you as a JS programmer when working with data types. Many of the most useful operators deal in terms of comparison:  seeing if one value is equal to, greater than, or lesser than another value. Each of these comparisons will evaluate to either true or false. It is important to understand how these operators work, so try inputting some of the examples you might be unclear with into the JS console to check out the results for yourself.

<table>
    <caption><strong>Comparison Operators</strong></caption>
    <tr>
        <th>Operator</th>
        <th>Meaning</th>
        <th>Example</th>
        <th>Evaluation</th>
    </tr>
    <tr>
        <th rowspan = "2"> < </th>
        <td> less than? </td>
        <td> 5 < 5 </td>
        <td>false</td>
    </tr>
   <tr>
        <td> less than? </td>
        <td> 5 < 6 </td>
        <td>true</td>
    </tr>
    <tr>
        <th rowspan = "2"> > </th>
        <td> greater than? </td>
        <td> 5 > 5 </td>
        <td>false</td>
    </tr>
    <tr>
        <td> greater than? </td>
        <td> 5 > 4 </td>
        <td>true</td>
    </tr>
    <tr>
        <th rowspan = "2"><=</th>
        <td> less than or equal to? </td>
        <td> 5 <= 5 </td>
        <td>true</td>
    </tr>
    <tr>
        <td> less than or equal to? </td>
        <td> 5 <= 4 </td>
        <td>false</td>
    </tr>
    <tr>
        <th rowspan = "2">>=</th>
        <td> greater than or equal to? </td>
        <td> 5 >= 5 </td>
        <td>true</td>
    </tr>
    <tr>
        <td> greater than or equal to? </td>
        <td> 5 >= 6 </td>
        <td>false</td>
    </tr>
    <tr>
        <th rowspan = "3">==</th>
        <td> equal to? </td>
        <td> 5 == 5 </td>
        <td>true</td>
    </tr>
    <tr>
        <td> equal to? </td>
        <td> 5 == 4 </td>
        <td>false</td>
    </tr>
    <tr>
        <td> equal to? </td>
        <td> 5 == "5" </td>
        <td>true</td>
    </tr>
    <tr>
        <th rowspan = "3">!=</th>
        <td> not equal to? </td>
        <td> 5 != 5 </td>
        <td>false</td>
    </tr>
    <tr>
        <td> not equal to? </td>
        <td> 5 != 4 </td>
        <td>true</td>
    </tr>
    <tr>
        <td> not equal to? </td>
        <td> 5 != "5" </td>
        <td>false</td>
    </tr>
    <tr>
        <th rowspan = "2">===</th>
        <td> "strict" equal to (includes type)? </td>
        <td> 5 === "5" </td>
        <td>false</td>
    </tr>
    <tr>
        <td> "strict equal" to (includes type)? </td>
        <td> 5 === 5 </td>
        <td>true</td>
    </tr>
    <tr>
        <th rowspan = "2">!==</th>
        <td> "strict" not equal to (includes type)? </td>
        <td> 5 !== "5" </td>
        <td>true</td>
    </tr>
    <tr>
        <td> "strict" not equal to (includes type)? </td>
        <td> 5 !== 5 </td>
        <td>false</td>
    </tr>
</table>
<br />

<JSTerminal />

While nearly all of these operators are shared amongst the majority of modern programming languages, the `===` (triple equals) is unique to JavaScript. The distinctions between `==` (double equals) and `===` (triple equals) are important. The double equals `==` operator is used to compare _only_ the value of two variables, while the "strict" triple equals `===` operator is used to compare the value _and_ type of two variables. The strict operator will only return true if the two variables are _exactly_ the same, both in value and in type (e.g., number or string). So, while both `5 === 5` and `"5" === "5"` will return true because they are the same value and type, `5 === "5"` will return false because the latter is testing a number against a string (discussed below). Also note the difference between the double equals `==` and triple equals `===`, which test for equality, and the `!=` and `!==` operators, which test for _inequality_.

We'll continue to work with comparison/equality operators throughout the course, so don't worry if they're still a bit unclear. Additionally, we have for now purposefully left out the `=` (single equals) operator, as it has a different function than evaluating equality. We'll cover the single equals operator later in this lesson.

### Strings

As a data type, a __string__ is simply a series of alphanumeric characters, meaning it can combine both numbers and text into a phrase. Strings are mostly used for displaying or recognizing a series of text in your programs. You have actually already encountered a string--in the `console.log("Hello, World!");` command you ran above, everything enclosed in the double-quotation marks (namely, `Hello, World!`) is considered a string. In the `"5" == "5"` example you just saw, each 5 is actually considered a _string_, rather than a number, because they are enclosed in quotation marks.

Just like with numbers, you can simply type a string (for instance, `"Hello, World!"`) into the console and it will repeat your string back to you. It is important to note that were you to add a number to the string, e.g., `"Hello, World in the Year 3030!";`, the entire phrase would still be considered a string and _not_ a number. This is because you have enclosed it within double-quotation marks, which always indicates a `string` type.

It's worth noting that you can use both single- <kbd>'</kbd> and double-quotation <kbd>"</kbd> marks to identify a string. It is important, however, to keep your use consistent. For instance, if you were to write `"Hello, World!'`, beginning the phrase with double-quotes and ending with a single-quote, you will receive a `SyntaxError` (we'll cover how to deal with errors in a bit more detail later). It is best practice to primarily use double-quotes, as this allows you to use single-quotes _within_ a phrase without the console throwing errors. For example, `"It is Jill's birthday."` is a perfectly valid expression, while `'It is Jill's birthday.'` is not.

__Note__: If you need to use double-quotes inside of a string, there are two ways you can do this. You can, conversely, simply use single-quotation marks to surround a phrase, e.g., `'I wonder what "truth" means today?'`, or you can use a <kbd>\</kbd> (backslash) to precede a double-quotation mark within enclosed double-quotation marks, e.g. `"I wonder what \"truth\" means today?"`. 

Strings can also utilize the `+` operator to __concatenate__, or join, separate string phrases together. For example, `"Hello, " + "World!"` will return `"Hello, World!"`. Try it out in the console below.

<JSTerminal />

### Boolean

Unlike some real-world scenarios, determining what is true and false in JavaScript is refreshingly straightforward. __Booleans__ are data types that are either firmly `true` or `false`. In utilizing the comparison operators from the table earlier, you have already discovered how the console determines truth and falsity. For instance, typing `9 > 5` evaluates to `true`, whereas `5 > 9` evaluates to `false`. Similarly, `5 >= 5` as well as `5 <= 5` both resolve as `true`. If you simply type `true` or `false` into the console, the console recognizes it as a data type and will repeat it back to you.

Booleans may seem simple, but very often in programming you will need a data type that can only have one of two values, akin to a "yes" or "no" or "on" or "off" determination. We will work more with booleans as we progress through the course.

As a final step for this lesson, let's make using data types a bit more interesting by introducing __variables__.

## Variables

Now that we have explored a number of data types and how to use them, let's explore how to create variables in JavaScript to utilize data types more effectively.

You can think of __variables__ as kinds of containers for data. They are named and can be assigned a value based on whatever data type is appropriate. To create a variable, you simply type the `var` keyword along with the name of the variable you want to create, followed by a single equal sign (`=`) and then the value of the variable. For example, `var myMessage = "Hello, World!";` will create a new variable called `myMessage` and assign it the value `"Hello, World!"`. Creating a variable is called __declaring__ or __defining__ it, and attributing a value to it is called __assigning__ it.

As mentioned earlier, this drastically sets apart the single equals `=` operator from the double equals `==` operator. The single equals operator is used to __assign__ a value to a variable, while the double equals operator (as well as the triple equals) is used to __test__ if two values or variables are equal to each other (without modifying either value).

In the example below, we have replicated our `Hello, World!` message, only this time using a variable. You can see that instead of simply logging the string `"Hello, World!"` to the console, we have assigned the string to a variable called `myMessage` and then logged the value of `myMessage` to the console.

```JavaScript
    var myMessage = "Hello, World!";
    console.log(myMessage);
```

Understanding and working effectively with variables is probably the most important part of programming. They allow you to store data in memory, and then use that data to perform all kinds of operations upon it. Take a look at the example below:

```JavaScript
var a = 1;
var b = 2;
var c = a + b;
```

You'll notice that the variable `c` is assigned the value of `a + b`. In other words, here we are assigning the value of a variable to that of the addition of two other variables. What do you think the result would be if we were to `console.log(c);`? 

Now let's make something ever so slightly more interesting. Let's talk about the weather.

```JavaScript
var weather = 'sunny';
var statement = 'The weather is ' + weather + ' today.';
```

Earlier, you saw how we can concatenate strings together to form a compound phrase. You can also use the `+` operator to combine strings and variables. In the above example, the variable `statement`, assigned `"The weather is " + weather + " today."` will return the string `"The weather is sunny today."`.

Any of the data types you have already learned can be assigned to a variable. For example, you can assign a number to a variable, a string to a variable, a boolean to a variable, etc.

As your programs become more complex, it is generally good practice to declare all of your variables at the top of your program. This will make it easier to find and understand your code later. Take a look at the program below:

```JavaScript
var book, author, isbn, description;

book = "Hunger";
author = "Knut Hamsun";
isbn = 0374525285;

description = "The book " + book + " by " + author + " is on ISBN " + isbn;
console.log(description);

book = "The Master and Margarita";
author = "Mikhail Bulgakov";
isbn = 0679760806;

description = "The book " + book + " by " + author + " is on ISBN " + isbn;
console.log(description);
```

As you can see, we have declared all the variables we want to include for our categorization of the books at the top of the program.  It is important to note that these variables persist only for the duration of your particular session with the console. If you close the console, they will be deleted from memory. You will also notice, however, that the values of the variables are __mutable__, meaning that they can be changed as the program progresses. If you run this program in the console, each `console.log()` command will display a new description. __Note__: Certain variable types are immutable, meaning that they cannot be changed. We'll explore additional details about immutable variables in later lessons.

### Variable Naming Conventions

There are a few rules for variable naming conventions in JavaScript. 
- Variables must begin with a letter or an underscore. You can't begin a variable name with a number (although you can use numbers after). 
- Variables must not contain spaces or special characters. For example, `myVariable` is a valid variable name, but `my variable` is not.
- Variable names are case sensitive. That is, a variable named `My_Books` is treated as an entirely different variable than one named `my_books`.
- You can't use one of JavaScript's reserved words as a variable name. All programming languages have a supply of words that are used internally by the language. For a complete list, see here: [Reserved Words](https://www.w3schools.com/js/js_reserved.asp).
- Do not include hyphens `-`. Hyphens can be misconstrued by JavaScript as attempts to subtract one value from another and will cause errors.

In general, try to keep your variable names as short and descriptive of their purpose as possible.

## Using typeof

Let's end our discussion of variables with one more nifty tool: the `typeof` operator. The `typeof` operator is used to determine the data type of a variable. For example, if you have a variable named `myVariable`, you can use the `typeof` operator to determine what kind of data it is.

```JavaScript
var myVariable = "Hello, World!";
console.log(typeof myVariable);
```

If you look at your developer console, you should see a `string` correctly identified as the data type of `myVariable`. You can use this operator to determine the data type of any variable you have created. This can become very useful when you are working with data types that are not explicitly defined or when you are converting data types from one type to another (which we'll begin learning in the next lesson).

## Review Questions

Let's review some of the main concepts we've covered in this lesson and get some practice in.

1. `console.log()` is best used for (select one):

<Quiz>
- testing and debugging your code*
- changing the appearance of a webpage
- warning the user about something
</Quiz>

2. Select all of the following statements that will evaluate to `true`:

<Quiz>
- 5*
- 5 = 5
- 5 == 5*
- 5 != 5
- 5 === 5*
- 5 !== "5"*
</Quiz>

3. Which of these variable names are legal (valid) in JavaScript? (select all that apply)

<Quiz>
- my_books* 
- myBooks*
- my-books
- myBooks1*
- 1my_books
- myBooks&I
</Quiz>

## Challenges

1. In JavaScript, as in typical algebra, ambiguity in a mathematical expression is resolved by [rules of precedence (PEMDAS)](https://www.purplemath.com/modules/orderops.htm). For example, the expression `5 + 5` is evaluated as `10`, while the expression `5 + 5 * 5` is evaluated as `30`. Using the rules of precedence and the console, rework the expression `5 + 5 * 10 /2` so that it resolves to `50`. Next, utilizing the variables defined below, write an expression that resolves to `true` using the double equals `==` operator.

```JavaScript
var a = 15;
var b = 10;
var c = 30;
var d = 5;
```

<JSTerminal />

2. Using variables, write a simple program that 1) sends an `alert` to the user telling them to open the developer console in their browser and 2) logs a message to the console saying they have won a prize. __Note__: This is an imaginary practice scenario. In reality, you would want to avoid using `console.log()` to send messages to users when actually deploying your website. Any information you want the user of your webpage to see should be presented on the webpage itself.

## Key Terms

Do you recall the meaning of the following terms from this lesson?
- boolean
- string
- variable
- concatenation
- declaration/assignment
- mutability

# Control Flow

So far in this course, we have been working with fairly simple programming structures. Our code thus far has been written as a single, linear, ordered list of instructions. However, there are other ways to structure your code that takes account of various conditions and reacts accordingly. 

We are speaking here about __control flow__: the order in which the computer executes statements in a script.

In general, code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. We will explore several of these structures in this lesson and learn how to use them to create dynamic, branching programs. To put these skills to work, at the end of the lesson you will learn to build your own small text-based "Choose Your Own Adventure" game that allows players/readers to change the outcomes of a story based on their decisions. Let's get started! 

## Thinking in Code

Let's talk about the process of thinking in code. What does someone think about before they write code? In your head, how might you imagine what the code in action would look like? 

In general, we might present a few initial ideas about the process:
1. The computer reads from top to bottom. It does things according to the instructions it reads, step by step. That's the sense in which we mean 'scripting'. My thought process is about the steps that are necessary to get from the beginning to a defined end. What kind of data do I have? How will it have to be transformed? What will be the result? That's the linear vision of scripting.
2. Digging into the code is a lot more difficult and we really need to envision its structure. What might the structure of the code look like? What is the structure of the data itself? That's the hierarchical vision of scripting.
3. A branching, rather than linear, vision of code is about the decisions that are made in the process of getting to the end. The branches in the program are equivalent to a "decision tree." 

![Decision Tree](/images/decision-tree.drawio.png)

The decision tree is a visual representation of the process of getting to the end of a program. The diagram above shows how code will follow the different "branches" depending on the truth or falsity of a certain condition.

To aid us in thinking about what our program might look like, let's also consider what a typical "Choose Your Own Adventure" game would consist of. In simple terms, it would need:
1. A predefined story (the story that the player is told)
2. A set of choices that the player can make at certain points in the story 
3. An internal way to change the story based on the player's choices (code branching)
4. A set of outcomes that the player can see based on their choices 

Let's keep these ideas in mind and use them as a rough roadmap for the rest of the lesson.

For now, let's not worry about the details of the story. Let's first start by exploring a simple way to allow the player to make choices and a way to store those choices.

## Prompts

One of the simplest ways to gather user input is through the `prompt()` function. This function displays a message to the user and waits for them to enter a response in the response field. The `prompt()` function returns the user's response as a string. Let's take a look at it in detail.

```JavaScript
    var userName = prompt("What is your name?");
```
Here is a simple example of the `prompt()` function in action. The user is asked to enter their name and waits for them to type it out and hit <kbd>Enter</kbd>. Once the user completes their name, their response will be stored in the variable `userName`. In other words, the function __returns__ the value you enter and stores it in the variable. we'll learn more about returns in a later lesson discussion functions. For now, try running the code in the console below, answer the prompt, and then type `userName` in the console to see that the variable is now populated with the name you have entered.

<JSTerminal />

Pretty nifty, right? `Prompt` code is like `alert` code, with a couple differences:
1. In a prompt, you need a way to capture the user's response. So, you must begin the prompt with a variable declaration.
2. In a prompt, you can specify a second message, which acts as a "default" value. If the user doesn't enter a response, the default message will be stored in the variable. For instance, we might make a prompt like: `var whatAmI = prompt("What am I?", "I am a human!");`, in which `I am a human!` will prepopulate the response field and act as the default return value if the user doesn't enter anything themselves. 

### parseInt()

It's important to note that the user's response to a `prompt` is _always_ a string. If you want to store and handle the user's response as a number (so you can perform arithmetic on it), you will need to convert it to a number using the `parseInt()` function. The `parseInt()` function takes a string and returns the number it represents. For example, `parseInt("5")` will return `5` (the number).

Let's try this out now, this time asking the user their age:

```JavaScript
    var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);
    alert("You are " + userAge + " years old.");
    typeof userAge;
```

<JSTerminal />

For this example we simply update `userAge` with the new conversion value. As you can see by checking with `typeof`, the user's response is now registered as a number.

__Note:__ This is not a foolproof data type conversion tactic and is easily broken. For instance, if you type the response "one" into the prompt instead of 1, the `parseInt` function will return a `NaN` (Not a Number) value. The `NaN` value is a special value that is returned when you try to perform arithmetic on a value that is not recognized as a number. For our purposes at the moment, however, this technique will suffice.

## If/Else Statements

So far so good--we now have a way to capture user input. However, we don't yet have a way to react or respond to that input. For this we can use a different kind of structure called an __if/else statement__. These statements allow us to make decisions based on the value of a variable.

The basic structure of an `if/else` statement is:

```JavaScript
    if (condition) {
        // code to run if condition is true
    } else {
        // code to run if condition is false
    }
```

If statements work like "_If condition is met, then execute the task_". In other words, the code in the `if` "block" will run if the `condition` (whatever it may be) is true and skip the `else` block, and the code in the `else` block will run if the `condition` is false and skip the initial `if` block. Note the beginning and ending curly braces `{}` surrounding each branch of the code: `if` and `else` always utilize curly braces, rather than semicolons. These braces always indicate a particular block of code and you will encounter them in many contexts.

The other new thing of note here is the text following the two forward slashes `//`: these are called __comments__. Comments are used to explain the code and are not executed by the computer. They are purely for human readers. As we continue to build more complex programs, we will often use comments to explain the code. Writing comments for yourself is an important way to make sure that you recall the purpose of the code you are writing if you return to it later. It also helps others reading your code to understand your intentions as well.

Let's look at a more concrete example of an if/else statement, modifying our "get the user's age" program from above and seeing if they are legally eligible to vote (as far as age goes) in the U.S. Try running the code in the console below.

```JavaScript
    var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);
    if (userAge >= 18) {
        alert("You are legally old enough to vote in the U.S.");
    } else {
        alert("You are not legally old enough to vote in the U.S.");
    }
```

<JSTerminal />

After gathering the user input and performing the conversion, we then use an `if/else` statement to determine if the user is old enough to vote (that is, we check to see if they are 18 years or older). 

## Else If Statements

Using `else if`, you can utilize as many statements as you want in your code to check as many conditions as you need. Try running the following example in the console:

```JavaScript    
    var userAge = prompt("How old are you?");
    userAge = parseInt(userAge);

    if (userAge >= 18) {
        alert("You are legally old enough to vote and drive in the U.S.");
    } else if (userAge >= 16) {
        alert("You are not old enough to vote, but you are old enough to drive in the U.S.");
    } else {
        alert("You are not legally old enough to vote or drive in the U.S.");
    }
```

<JSTerminal />

The first `if` statement checks to see if the user is old enough to purchase vote. If they are, the `alert` message is displayed. If they are not, the second statement `else if` checks to see if they are at least able to drive. If they are, the `alert` message is displayed. If they are not, the final `else` statement displays the last `alert` message. The final `else` statement in a series is usually considered a default case or catchall to execute if none of the other `if/else` statements are true.

Along with testing as many conditions as you want, you can also run as many lines of code as you want in each block. You can even chain together a series of `if/else` statements. This is called __nesting__. For example:

```JavaScript
if (condition1){
    // code to run if condition1 is true
    if (condition2){
        // code to run if condition2 is true
        if (condition3){
            // code to run if condition3 is true
        } else {
            // code to run if condition3 is false
        }
    } else {
        // code to run if condition2 is false
    }
} else {
    // code to run if condition1 is false
}
```

As you might be able to tell from just this example, too many nested `if/else` statements can be hard to read and hard to maintain, so try to keep them to a minimum whenever possible.

To help you understand how each block of this conditional cascade is structured, take a look at the diagram below:

![if/else diagram](/images/if-else-diagram.png)

The arrows indicate the beginning (opening) and ending (closing) braces of a particular `if/else` statement. By matching the colors of each statement, you can see how the curly braces are continually nesting and designating their own blocks of code. While many modern code editors have their own built-in syntax highlighting (or coloring) as well as automatic indentation and bracing to make our code more visually understandable, it is still important to keep a close eye on your code and make sure you are following the correct structure and working in the correct block. 

## Switch Statements

Switch statements are another control flow structure used to handle multiple conditions. They are perhaps not as common, but they are useful to cover here briefly, as they can have a cleaner syntax than creating overly complex chains of `if/else` statements.

The basic structure of a switch statement is:

```JavaScript
    switch (variable) {
        case value1:
            // code to run if `variable` is `value1`
            break;
        case value2:
            // code to run if `variable` is `value2`
            break;
        case value3:
            // code to run if `variable` is `value3`
            break;
        default:
            // code to run if `variable` is not `value1`, `value2`, or `value3`
            break;
    }
```

Like the `if/else` statement, the `switch` statement is broken into a series of `case` statements. Each `case` statement is a condition that the `switch` statement will check. The `switch` statement will then execute the code in the block that is associated with the first `case` statement that is evaluated as true. If none of the `case` statements are true, the `default` block will be executed.

The `break` statement is used to break out of the `switch` statement. The `break` statement is not required, but it is recommended to use it. If you omit the `break` statement, the `switch` statement will continue to execute the code in the next `case` statements even if they do not match the case.

Let's take a look at a more concrete example of a `switch` statement. Let's say we were creating a computer game, and wanted to let the player pick a difficulty setting. Take a look at the following code and run it in the console:

```JavaScript
    var difficulty = prompt("What difficulty would you like to play? 1- Easy, 2- Medium, 3- Hard");
    switch (difficulty) {
        case "1":
            alert("You have selected the Easy difficulty.");
            break;
        case "2":
            alert("You have selected the Medium difficulty.");
            break;
        case "3":
            alert("You have selected the Hard difficulty.");
            break;
        default:
            alert("Invalid entry.");
            break;
    }
```
<JSTerminal />

Here we have three different difficulty levels (although you can have as many levels or `cases` as you want in a `switch` statement). The first `case` statement checks to see if the user entered `1`, the second `case` statement checks to see if the user entered `2`, and the final `case` statement checks to see if the user entered `3`. If the user entered `1`, `2`, or `3`, the `alert` message is displayed. If the user entered anything else, the `default` block is executed and an error message is shown. 

While this simple example could also easily be written using `if/else` statements, in your programming journey there may be times when writing a `switch` statement is more appropriate than writing many unwieldy `if/else` statements. Did you notice how many less curly braces you had to keep track of when writing a `switch` structure? Readability is just as important as functionality in programming.

## Choose Your Own Adventure

Now that you have a better understanding of some basic control flow structures in JavaScript, it's time to put them to work creating a simple Choose Your Own Adventure game using `prompt` for input and `alert()` for output. Since our game is meant to be a piece of interactive fiction, we'll want to use a variable to track player choices, and perhaps also let the player input their name to personalize the game and get things started.

```JavaScript
    var playerName, playerChoice;

    var playerName = prompt("What is your name?");
    alert("Welcome, " + playerName + "!");
```

Next, we can begin adding our story. I am going to show you an example, but feel free to get creative and write a story of your own. For my example, I am going to adapt the first two lines of Fredric Brown’s short story “Knock,” written in 1948. These two lines are a complete story in themselves and are widely considered one of the shortest and yet most evocative horror/sci fi stories to date. In Brown’s story, the first two lines are as follows: 

> “The last man on earth sat alone in a room.  There was a knock on the door.”

I’m going to have some fun with this story and let the player decide what to do next. I will also modify the language a bit—because we are creating a Choose Your Own Adventure story, we want to use second person phrasing (you). So, my story will look rather like this:

```JavaScript
    alert(playerName + ", you are the last person on earth, sitting alone in a room. There is a knock on the door... What will you do?");
    playerChoice = prompt("Enter 1 to cautiously approach the door. Enter 2 to hide under the table.");
    if (playerChoice == "1"){
        alert("Your hands are trembling as you approach the door. You pause a moment before it.");
    } else if (playerChoice == "2"){
        alert("As you hide under the table you hear the doorknob rattling.");
    }
    else {
        alert("Invalid entry.");
    }
```

Here we have given the player two options by entering either `1` or `2` into the prompt. Now that we have their first options, we can add further options by nesting additional `if` statements:

```JavaScript
    if (playerChoice == "1"){
        alert("Your hands are trembling as you approach the door. You pause a moment before it.");
        playerChoice = prompt("Enter 1 to bravely open the door. Enter 2 to look through the door's peephole.");
        if (playerChoice == "1"){
            alert("You swing the door open with courageous gusto.")
        }
        else if (playerChoice == "2"){
            alert("You cautiously look through the peephole. You make out a vague shape looming before the door.")
        }
        else {
            alert("Invalid entry.");
        }
    } else if (playerChoice == "2"){
        alert("As you hide under the table you hear the doorknob rattling.");
        playerChoice = prompt("Enter 1 to stay hidden under the table. Enter 2 to get up and find a weapon to defend yourself with.");
        if (playerChoice == "1"){
            alert("Whatever is at the door has now begun banging on it loudly.");
        }
        else if (playerChoice == "2"){
            alert("You quickly but quietly get up and look around. You see a broom in the corner of the room and wield it mightily.");
        }
        else {
            alert("Invalid entry.");
        }
    }
    else {
        alert("Invalid entry.");
    }
```

Okay, now we have some additional options for the player to choose from, along with more error messages if they choose incorrectly. Putting it all together then, here is the story so far:

```JavaScript
    var playerName, playerChoice;

    var playerName = prompt("What is your name?");
    alert("Welcome, " + playerName + "!");

    alert(playerName + ", you are the last person on earth, sitting alone in a room. There is a knock on the door... What will you do?");
    playerChoice = prompt("Enter 1 to cautiously approach the door. Enter 2 to hide under the table.");
    if (playerChoice == "1"){
        alert("Your hands are trembling as you approach the door. You pause a moment before it.");
        playerChoice = prompt("Enter 1 to bravely open the door. Enter 2 to look through the door's peephole.");
        if (playerChoice == "1"){
            alert("You swing the door open with courageous gusto.")
        }
        else if (playerChoice == "2"){
            alert("You cautiously look through the peephole. You make out a vague shape looming before the door.")
        }
        else {
            alert("Invalid entry.");
        }
    } else if (playerChoice == "2"){
        alert("As you hide under the table you hear the doorknob rattling.");
        playerChoice = prompt("Enter 1 to stay hidden under the table. Enter 2 to get up and find a weapon to defend yourself with.");
        if (playerChoice == "1"){
            alert("Whatever is at the door has now begun banging on it loudly.");
        }
        else if (playerChoice == "2"){
            alert("You quickly but quietly get up and look around. You see a broom in the corner of the room and wield it mightily.");
        }
        else {
            alert("Invalid entry.");
        }
    }
    else {
        alert("Invalid entry.");
    }
```

Try writing a short story of your own in the code editor below. (You can also copy/paste the code from mine if you want to see it in action.)

<CodeEditor language='JavaScript' height = '450px'>
</CodeEditor>

While this approach to creating a Choose Your Own Adventure program works, it is very clunky and quite hard to read. As we said before, simply using a bunch of nested `if/else` statements makes a program incredibly difficult to build and maintain. Also, if the player incorrectly inputs a number, this program simply exits rather than prompting them to try again. Thankfully, JavaScript has many tools to help us address these issues. As we continue to learn more about the language, we will learn to use more control flow structures and data types to make our programs more readable and maintainable. Specifically, in the next lesson we will begin learning about loops and how to use them to repeat blocks of code, iterate over a series of values, and make our programs more efficient overall.

## Review Questions

Let's review the concepts we have learned in this lesson.

1. The `prompt()` function always returns a `string`.

<Quiz>
- True*
- False
</Quiz>

2. The code snippet below will throw errors or otherwise not work as intended. Why? Take a moment to look over it carefully, then select all that apply in the quiz below.

```JavaScript
prompt("What is your name?");
if (name = "Sal Ami")
    alert("Hello name!");
else
    alert("It's too bad your name isn't" + name + ".");
```

<Quiz>
- `prompt()` needs to be assigned to a variable.*
- a double-equals (rather than a single equals) operator is needed in the `if` statement.*
- the first `alert` will not correctly display `name` as intended.*
- the `if/else` statement needs curly braces for each part.*
</Quiz>

3. Switch statements should have (select all that apply):

<Quiz>
- `break`*
- `continue`
- curly braces
- a default case*
</Quiz>

## Challenges

1. Write a program that has the user input a number. If the number is even, `alert` "The number is even." If the number is odd, `alert` "The number is odd."

<CodeEditor language='JavaScript'>
</CodeEditor>

2. Utilizing `switch` statements, write a short Choose Your Own Adventure story that allows the player 3 choices to choose from at a time.

<CodeEditor language='JavaScript' height='400px'>
</CodeEditor>

## Key Terms

Do you recall the meaning of the following terms from this lesson?
- control flow
- return
- comments
- nesting

# Loops and Arrays

In this lesson we will begin exploring how to use __loops__ to repeat blocks of code and iterate over a series of values. We will also learn to work with a very versatile new data type called `arrays`. To put these skills to work, at the end of the lesson we will create a simple library app that allows users to search for a book and see if it is located in the library's collection. 

## Arrays

Let's begin by learning about the `array` data type. So far, you have encountered variables that only contain a single value. An array, in contrast, is a _series_ or a _collection_ of values stored in a single variable. The following is an example of four different arrays:

```JavaScript
var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = ['a', 'b', 'c', 'd', 'e'];
var myArray3 = [true, false, true, false];
var myArray4 = [1, 2, 'dog', true, [1, 2, 3]];
```

Creating an array is just like other variable declarations you have seen, but the items it contains are always denoted by square brackets `[]`. An array can house any of the data types we have encountered so far. The first array, for example, contains a series of numbers, the second array contains a series of letters, and the third array contains a series of booleans. Arrays are very versatile and can also contain a mix of different data types, like in the fourth example. As you can see, this array even contains another array `[1, 2, 3]`!

Arrays are useful when you want to have a series of values that are easily accessible. Creating an individual variable for each of the values in the example above, for instance, would make your code very confusing and hard to work with.

Let's look at how we can access the values in an array.

## Accessing Values in an Array

To work with particular values in an array, we access its __index__. Values in an array are numbered starting from 0. The first value in an array is at index 0, the second value at index 1, and so on. Take a look at the example below:

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray[0]); // returns 1
```

We access the index of an array by using the square brackets `[]` and the corresponding index number. The code snippet above will `alert` the value at index 0 of the array `myArray`. Remember, 0 is the _first_ value in an array, 1 is the _second_ value, and so on.

Try using `alert` to display the value for each of the items from the example in the code editor below:

<CodeEditor language='JavaScript'>
    </CodeEditor>

As you can see, when you access the value at index 4 (`myArray[4]`), you get the value `1, 2, 3`. Again, this is because the value at index 4 is an array itself.

## Changing Values in an Array

To change the value at a particular index in an array, we use the same syntax. We use the square brackets `[]` and the index number to access the value, and then assign that index a new value.

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray[0] = 'cat';
alert(myArray[0]); // returns 'cat'
```

In this example, the value at index 0 (originally `1`) will be changed to `'cat'`.

## Adding Values to an Array

To add a new value to the end of an array, we use the `push()` method. This method takes a single value and adds it to the end of the array.

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.push('cat');
alert(myArray[5]); // returns 'cat'
```

This code adds the value `'cat'` to the end of the array `myArray`.

## Removing Values from an Array

To remove a value from an array, we can use the `pop()` method. This method removes the last value in the array.

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.pop();
alert(myArray[4]);
```

Try running this code in the code editor below.

<CodeEditor language='JavaScript'>
    </CodeEditor>

Oh no, we are now getting a message of `undefined`! But this is exactly what we intended to happen, because the `pop()` method removed the last value in the array. So, when we try to access it, JavaScript finds nothing there.

## Splicing an Array

If we want to remove a range of values from an array or start at a particular index, we can use the `splice()` method. This method takes two parameters: the first parameter is the index number of the first value we want to start from and remove, and the second parameter is the number of values to remove in total.

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.splice(0, 2);
alert(myArray[0]); // returns 'dog'
```

In this example, the first two values in the array `myArray` are removed (we start at index 0 and remove two values total). After the operation, the value at index 0 is now `'dog'`.

## Determining the Length of an Array

It may not always be clear to you how many values are actually stored in a particular array at any given time, especially if it becomes very large or you are adding and removing a lot of elements. To determine the number of values in an array, we use the `length` property. The `length` property returns the number of values in an array. For example:

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray.length); // returns 5
```

We utilize `length` by prefacing it with a `.` (dot). This is called _dot notation_, and indicates we are working with a __method__. We'll cover what exactly methods are in later lessons, but for now keep in mind you utilize `length` with a dot and the array you want to work with.

As you can see, `length` counts through the values in the array, so it will return 5. It is important to note here that `length` starts with 1, not 0, so although the last value in the array is at index 4, `length` will still return 5. Confusing, right? It is simply a quirk of the language to get used to, so keep it in mind when working with arrays.

As an example, if you want to access the last value in the array, you can use the `[length - 1]` syntax. This will always return the last value in the array:

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray[myArray.length - 1]); // returns [1, 2, 3]
```

This is a useful way to access the last value in an array even when you don't know how many elements the array holds.

## The sort() Method

Let's take a look at one last method that we can use on arrays. The `sort()` method sorts an array in alphabetical order, and is particularly useful if you have an array of letters or strings:

```JavaScript
var myArray = ['c', 'b', 'a', 'e', 'd'];
myArray.sort();
alert(myArray); // returns ['a', 'b', 'c', 'd', 'e']
```

You can, however, also use the `sort()` method to sort an array in numerical order. For example:

```JavaScript
var myArray = [2, 4, 3, 1, 5];
myArray.sort();
alert(myArray); // returns [1, 2, 3, 4, 5]
```

There are [many other methods](https://www.w3schools.com/js/js_array_methods.asp) you can perform on arrays, and we have only scratched the surface here. But keep in mind that arrays are a powerful tool for storing and manipulating data. Let's now take a look at how we can loop through arrays to make our code more efficient.

## Looping Through an Array

We have so far seen how we can access values in an array, and manipulate them in ways that are useful. But what if we want to do something with every value in an array? For instance, if we wanted to access every value in an array, it would be very tedious to write out the same code over and over, referencing each and every item:

```JavaScript
myArray[0];
myArray[1];
myArray[2];
myArray[3];
...
```

Thankfully, we can do this in a more efficient way. Let's explore a new kind of technique called __looping__. Looping is a way to iterate through a structure and perform an action on each element.

## The For Loop

When you want to loop through an array, the most common way is with a `for` loop. This loop will __iterate__ or step through the array and execute a block of code for each value in the array.

The general structure of a `for` loop is as follows:

```JavaScript
for (var i = 0; i < array.length; i++) {
    // do something
}
```

TODO: Reverse logic, explain more clearly, add another example

This may look a little complicated, so let's explore it a bit. The `for` loop is comprised of three parts: the first part is the initialization of the loop, which is the variable `i` in this case (`i` is often used by convention, but the variable name can be anything you want). The second part is the condition that the loop will continue to execute until, and the third part is the incrementor. Each is separated by a semi-colon `;`.

To break it down a little more:
- `var i = 0`: This is the starting point of the loop. It will serve as the index number of the first element in the array.
- `i < array.length`: This is the condition of the loop. It is a boolean expression that determines whether the loop should continue. In other words, it says: "while `i` is less than the `length` of the array, do the following:".
- `i++`: This is the incrementor. `++` is a new operator that means that the value of `i` will increase or ___increment__ by 1 each time the loop executes. We use it to increment the index number of the loop so that it will continually move to the next element in the array. 

 Let's see how this works in action using our `myArray` array from earlier:

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
for (var i = 0; i < myArray.length; i++) {
    alert(myArray[i]);
}
```

Try running this code in the code editor below.

<CodeEditor language='JavaScript'>
    </CodeEditor>

As you can see, the loop iterated through the array and alerted each value in the array. You'll notice that the loop executed the alert 5 times instead of displaying all the values at once. This is because the loop is executing the alert once for each value in the array. In other words, the code inside the `for` loop block executes once for each value in the array based on the current value of `i`. So, if there are 5 values in the array, the loop will execute 5 times.

## The While Loop

The `while` loop is similar to the `for` loop, but it will infinitely execute the code inside a loop until a certain specified condition is met. This is useful if you want a certain code block to run until a particular outcome is resolved. Try running the example in the code editor below: 

```JavaScript
var i = 0;
while (i < 5) {
    alert(i);
    i++;
}
```

<CodeEditor language='JavaScript'>
    </CodeEditor>

As you can see, the loop executed the alert 5 times, incrementing the value of `i` each time. In other words, this loop is saying: "while `i` is less than 5, do the following:".

__Note:__ It is very important to make sure your `while` loops ultimately end by satisfying the condition you specify. If you don't, the loop will continue forever, and the user will be required to force-quit your program or close the window to stop it.

## Putting It All Together - The Library App

Let's use the skills we've learned in this lesson to create a simple app that will allow us to sort, display, and search for book titles from our library.

To begin, let's imagine a number of fiction titles that are available in our library and add them to an array. We'll sort this array to put it in alphabetical order.

```JavaScript
var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort()
var requestedTitle = "";
var libRequests = []
```

Because we want to get book requests from the user, an empty string `requestedTitle` will store the title of the book that the user requested in the prompt, and an empty array `libRequests` will store all the many requests the user may enter.

Next, let's give the user a short welcome message. We will also let them know they can make a request by typing `request` at the prompt, display all book titles by typing `display`, or quit the program by typing `quit`:

```JavaScript
alert("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");
```

Our welcome message gives the user a few options for what they can do. To keep the text display neat, we use `\n` characters (specifically 2 in this case) to create two new lines after each statement.

At this point, we can envision a few things about how our program should operate:
- We want to allow the user to search for books until they decide to quit. So, a `while` loop will be needed.
- We want to check if the user types `request` or `display` at the prompt. If they do, we want to perform the appropriate action. So, we will need several `if/else` statements. 
- We want to iterate through the array of book titles and display each one. So, we can use a `for` loop to accomplish this.

Okay, conceptually we have the basic toolkit. However, we are missing one crucial piece. We want the program to check if a book title the user enters is actually in the library. That is, we want to see if the string the user enters matches an item in the array `bookTitles`. How can we do this? Let's introduce one more new method: `indexOf`.

### indexOf

`indexOf` is a method that returns the index of the first occurrence of a value in an array. If the value is not found, it will return `-1`. Here's an example:

```JavaScript
var myArray = ['dog', 'cat', 'bird', 'fish'];
myArray.indexOf('dog'); // returns 0
myArray.indexOf('cat'); // returns 1
myArray.indexOf('bird'); // returns 2
myArray.indexOf('fish'); // returns 3
myArray.indexOf('cow'); // returns -1
```

Using this method, we can check if a book title the user enters is in the library (if the string the user enters matches an item in the array `bookTitles`). If it doesn't (if the method returns `-1`), we can alert the user that the book they requested is not in the library.

With this method we should now have everything we need. Let's put the whole program together:

```JavaScript
var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort();
var libRequests = [];
var requestedTitle = "";

alert("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

var response = "";
while (response != 'quit') {
    response = prompt("Search for a book title or make a request by typing 'request': ");
    // check if the user wants to make a request
    if (response == 'request') {
        requestedTitle = prompt("What book would you like to request? ");
        libRequests.push(requestedTitle); // add the requested title to the library requests array
        alert("You have requested the following titles:" + libRequests + "."); // alert the user their requests
    }
    // check if the user wants to display all the titles
    else if (response == 'display') {
        for (var i = 0; i < bookTitles.length; i++) {
            alert(bookTitles[i]); // display all available book titles
            }
    }
    // otherwise, check if the book the user entered is in the library
    else {
        var bookIndex = bookTitles.indexOf(response);
        if (response != 'quit'){
            // if indexOf returns -1, the book the user entered is not in the library
            if (bookIndex == -1) {
                alert("Sorry, we don't have that book. You can always request it.");
            }
            else {
                alert("Yes, " + response + " is available to check out.");
            }
        }
    }
}
```

Try running and exploring the program:

<CodeEditor language='JavaScript'>
    </CodeEditor>

Let's break down the logic of the program a bit. First, we have a `var response = "";` line. This is an empty string variable declaration meant to store the user's response to the prompt. We will use this variable to determine whether or not the user wants to make a request, display, or quit, or else search for the book in our library. Next, we have a `while` loop that will continue to execute until the user types `quit`. Within the `while` loop, we first check if the user's response is `request` or `display`. If it is, we can perform the appropriate action using `if/else if` statements. To display all book titles, we use a `for` loop to alert each book. If the response is not a defined user action, we can check if the string is in the library. We use the `indexOf` method to check if the `response` string is in the library. If it is, we can alert the user that the book is available to check out. If it isn't (if the method returns `-1`), we can alert the user that the book is not in the library.

Congratulations! You have now successfully created a basic library search program. There are, of course, a number of limitations to this program. For instance: 
- The search parameters are not very robust. The user must type out the full title of the book, with the exact spelling and punctuation of the title. As you might imagine, this is not a very good user experience.
- The `for` loop sends an alert for each book in the library. This is not ideal, especially if we had a large amount of books. We would want to display the books in a more organized manner.

These are basic considerations we would want to take into account if we were actually designing a library search program. However, if you can understand how this program works, you are well on your way to creating complex and robust JavaScript programs. To get some practice in, try out the challenges below.

## Review Questions

Let's review the concepts we have learned in this lesson.

1. What will be the result of the `alert` in the code below?

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.pop();
alert(myArray[4]);
```

<Quiz>
- 1, 2, 3
- true
- undefined*
</Quiz>

2. What will be the result of the `alert` in this code snippet?

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray.length);
```

<Quiz>
- 4
- 5*
- 6
</Quiz>

3. What will be the result of the `alert` here?

```JavaScript
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
myArray.splice(0, 2);
alert(myArray[0]);
```

<Quiz>
- 1
- 2
- dog*
- true
- [1, 2, 3]
</Quiz>

## Challenges

1. Write a `for` loop that prints all even numbers from 0 to 100 to the console.

2. The library program is very case sensitive, requiring the user to enter exact punctuation and capitalization of a book title. This is not a very robust search. Try improving the program using the [toLowerCase method](https://www.w3schools.com/jsref/jsref_tolowercase.asp), which converts all the letters of a string to lowercase, to make the search parameters case insensitive. _Hint: To match the two terms, you will want to perform the `toLowerCase` method both on the user's response as well as on each book title in the library. Try storing these results in a new variable!_

## Key Terms

Do you recall the following terms from this lesson?
- `array`
- `index`
- `length`
- `push`
- `pop`
- `splice`
- `sort`
- `indexOf`

# Functions

In the last lesson, we learned how to loop through a series of statements to repeat blocks of code. As you saw, this can be very useful if we want to automate a series of tasks that would otherwise take forever to write out manually. __Functions__ are another technique that can be used to repeat and reuse blocks of code and help us automate tasks. In this lesson, we will learn how to create our own functions and how to use them. To this end, at the end of the lesson we will create a simple grading program that will allow you to add, calculate, and display student grades.

## What are Functions?

Functions are blocks of code that are designed to perform a specific task and can be reused. When developing applications, you will likely need to perform the same action in many different places. For example, you may need to perform a specific calculation on a number of different values and in different places in your code. Or, you might want to show an error message whenever an error occurs. Instead of rewriting the same code over and over again to perform these actions, you can wrap the code in a function and then call the function whenever you need to perform the action.

The basic syntax for creating a function is as follows:

```JavaScript
function functionName(parameter1, parameter2, ...) {
    // code to be executed
    return value;
}
```

To create a function, you must first define the function name. Naming conventions for functions are [lower CamelCase](https://wiki.c2.com/?LowerCamelCase), in which the first word is lowercase and the following words begin with a capital letter. Next you define the function's __parameters__ or __arguments__ within closed parentheses `()`. The parameters are the values that will be __passed__ into the function when it is called. Passing in parameters allows us to reuse the same function for different tasks, because we can pass in different values to the function each time we want to reuse it. The parameters are separated by commas. You can define as many parameters as you want.

Like loops, you can see that functions use curly braces to define their contents. The contents of the function are the code that will be executed whenever the function is called.

For a procedure to be designated a function, it will also __return__ a value. In other words, a function takes some input, transforms that input somehow, and returns an output. 

To make this all clearer, let's look at a basic example of a function. We will create a function called `add` that takes two numbers as parameters and returns the sum of the two numbers.

```JavaScript
function add(num1, num2) {
    return num1 + num2;
}
```
First we define the function `add()` with two parameters to pass in, `num1` and `num2`. To add the two numbers we can simply return `num1 + num2`. Note that we could also have defined a variable `sum` and then returned `sum`, like so:

```JavaScript
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
```

This is functionally the same result. The only difference is that we have created a new variable within the function to store the sum.

## Calling a Function

If you were to run the code above, you would see that nothing happens. This is because we have not __called__ the function yet. To call a function, we simply use the function name followed by parentheses. The parentheses contain the values that will be passed into the function. Let's try calling the `add()` function with two number values:

```JavaScript
function add(num1, num2) {
    return num1 + num2;
}

add(1, 2);
```

Try running this code in the editor below.

<CodeEditor language='JavaScript'>
    </CodeEditor>

As you can see, the result of the `add()` function above returns 3 to the console. This is because `add()` takes two numbers as parameters and returns the sum of the two numbers. In this case, `num1` is 1 and `num2` is 2. If you change the values of `num1` and `num2` to different numbers, the result will also change. Again, this allows us to reuse the `add()` function to perform the same calculation on different values.

We could also capture the result of the function in a variable and then work with that variable. For example:

```JavaScript
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = add(1, 2);
alert(result);
```

Here we are calling the `add` function and storing the result of the function (the return value) in the variable `result`. We can then use the variable to perform whatever action we want.

__Note:__ Make sure you are passing in the correct number of parameters when calling a function (at least for functions you have created yourself. Built-in functions inherent to JavaScript can behave a little differently, but don't worry about that right now). If you call the function with too few parameters or too many parameters, your function will likely either behave in unexpected ways or throw an error.

It is worth pointing out that you can also call a function with no parameters and also without an explicit `return` statement. For example, we can create a function called `alertHello` that will simply alert "Hello!" to the user.

```JavaScript
function alertHello() {
    alert('Hello!');
}

alertHello();
```

Running this code will alert "Hello!" to the user.

Note that if your code does not have a return statement or if the content does not return a value, JavaScript functions will automatically return `undefined`.

Here's an example:

```JavaScript
function doNothing() {
    // do nothing
}

doNothing();
```

If you type this code into the developer console in your browser, you will see that the function returns `undefined` because you have not provided it with any return value.

Okay, now that we have some basic understanding of how functions operate, let's look at how they create new "scopes" in your code.

## Scope

When you create a function, it designates a new __scope__. Scope is the context in which a particular variable is accessible. In other words, it means where a variable can be available for use (read, manipulated, displayed, etc.) in your code. Depending on how and where you declare your variables, you can have different scopes.

### Rethinking Variable Declarations: `var` vs. `let` and `const`

So far in this course, we have used the `var` keyword to declare variables. While this was the old standard way of declaring variables in JavaScript, in most modern usages it has been replaced by the `let` and `const` keywords. `const` in particular has become the new standard for declaring variables in JavaScript. While you can see that the syntax is the same...

```JavaScript
var name = 'John';
let age = 30;
const isAdmin = true;
```

...the behavior of the keywords is different. From now on, __we will shift to using the `let` and `const` keywords in this course, and in particular, to using `const`.__ What, then, are the differences between these variable declarations?

To understand the differences between these declarations, we need to understand their scope. Let's understand the scope of each of these types and see why `let` and especially `const` are the new standard.

### `var`

`var` declarations can be "globally" and "function/locally" scoped. Global scope means that the variable is available for use anywhere throughout your code. Function scope means that the variable is available for use only within the function it is defined. When declared outside of a function, `var` is global and can be accessed anywhere in your code. When declared inside of a function, `var` is function-scoped and can only be accessed within the function. Take a look at the example below:

```JavaScript
var greet = "hi there";

function newFunction() {
    var hello = "hello";
}
```

In this example, `greet` is globally scoped because it exists outside of the function, while `hello` is function scoped. These variables have different levels of access. To see what I mean, try running the code below in the editor:

```JavaScript
var greet = "hey hi"

function newFunction() {
    var hello = "hello";
}

console.log(greet); // this would work
console.log(hello); // but this will not
```

<CodeEditor language='JavaScript'>
    </CodeEditor>

As you can see, the console trips up at the `console.log(hello);` and throws a `ReferenceError`, which states that '`hello is not defined`. This is because `hello` is only available inside of the function in which it was declared. If you try to access `hello` outside of the function, JavaScript can't find the variable declaration you are referring to.
    
You have also seen how `var` declarations are mutable, insofar as they can be re-declared and reassigned. You can change the value of a `var` at any time:

```JavaScript
// re-declaration
var greet = "hi there";
var greet = "hello there";

// reassignment
var greet = "hi there";
greet = "hello there";
```

While this can be useful in some circumstances, it is not recommended. Once your programs become more complex, you may find yourself accidentally re-declaring or reassigning variables without realizing it. This can cause unexpected behavior and can be a source of bugs. This is a large part of why we will use the `let` and `const` keywords in the future instead of `var`, so let's discuss each of those keywords next.

## `let`

In contrast to `var`, `let` declarations are block-scoped. This means that the variable is only available within the block of code in which it is declared. As you have seen, a block is a section of code surrounded by curly braces. So, a variable declared inside of a block with `let` is only available within that block. Try running the code below in the editor:

```JavaScript
let someValue = 1;

if (someValue > 0) {
    let greet = "hi there";
    console.log(greet); // this will successfully log "hi there"
}

console.log(someValue); // this will successfully log 1
console.log(greet); // but this throws a ReferenceError
```

<CodeEditor language='JavaScript'>
    </CodeEditor>

We can see that using `greet` outside of its block (the curly braces where it was defined) returns an error. Again, this is because `greet` is only available inside of the block in which it was declared. __Note:__ If you cannot see the two successful console logs, check the developer console in your browser, rather than in the embedded code editor.

Just like with `var`, you can reassign the values of `let` variables at any time. However, unlike `var`, you cannot re-declare a `let` variable. So while this will work:

```JavaScript
// reassignment
let greet = "hi there";
greet = "hello there";
```

This will not:

```JavaScript
// re-declaration, will error
let greet = "hi there";
let greet = "hello there";
```

If you try running the re-declaration code you will get a `SyntaxError` that says `"Identifier 'greet' has already been declared"`. Using `let` therefore solves the problem of accidentally re-declaring variables. 

__Note:__ While you cannot re-declare a `let` variable within the block is which it was declared, you _can_ re-declare a `let` variable _outside_ of the block in which it was declared:

```JavaScript
let greet = "hi there";
if (true) {
    let greet = "hello there";
    console.log(greet); // this will successfully log "hello there"
}
console.log(greet); // will successfully log "hi there"
```

Do you understand why this works? Because they are block-scoped, both `greet` variables are treated as _entirely different_ variables!

As you can see, `let` is an improvement over `var` in the sense that it can help you avoid accidentally modifying the value of a variable that you did not intend to modify. However, `const` has become the standard for many cases, so let's look at why.

## `const`

In the rest of this course, we will often use `const` to declare variables. Like `let`, `const` is block-scoped. This means that the variable is only available within the block of code in which it is declared. However, unlike `let`, `const` variables are __immutable__. This means that once they are declared, they cannot be updated or re-declared. As you might have guessed, `const` is shorthand for "constant." In other words, `const` is a way to declare variables that you will never want to modify.

The value of a `const` variable always remains the same within its scope. So, if we declare a `const` variable, we can't do any of the following:

```JavaScript
// reassignment
const greet = "hi there";
greet = "wait, say hello there instead"; // throws a TypeError

// re-declaration
const greet = "hi there";
const greet = "I really wish I could say hello there"; // throws a TypeError
```

Running this code would give you a `TypeError` saying `"Cannot assign to constant variable"`. This is because we are trying to change the value of a constant variable.

Okay, now that we have a basic understanding of how scope in JavaScript works, let's move on to utilizing functions to create a simple grading program.

## The Student Grades Program

Using functions, let's create a simple program that will allow us to evaluate student grades.

Let's imagine that students have just submitted several homework assignments and we need to evaluate their grades. We want to:
1. Easily display their grades.
2. A new student has joined and submitted work, so we want to add a student to our list of students.
3. Evaluate their numbered grades to a letter (A, B, C, D, or F).

Functions are perfect for this because we can define each of these three tasks as a separate function. We can then call each of these functions at the appropriate time. Remember, functions should be used to perform a single task.

## Objects

For this program, we first need a way to store the information about each student. We want to store the name of each student as well as their corresponding grades. While we could solely use arrays to accomplish this, it makes much more sense to utilize a new data type called __objects__. 

Objects are similar to arrays, but they are more flexible. Objects are collections of _key-value_ pairs, and each key-value pair is called a _property_. In real life, all objects have properties. For example, a car has properties such as `make`, `model`, `year`, `color`, and so on. Analogously, we might imagine that a student has properties such as `name`, `grade`, `GPA`, and so on.

To create an object, we use the curly brace `{}` syntax. For example, we could create a student object with the following code:

```JavaScript
let student = {
    name: "Bob",
    grade: "A",
    GPA: 4.0
};
```

Here we have a student object with three properties: `name`, `grade`, and `GPA`. Each key is followed by a colon `:` and the corresponding value. We separate each key-value pair (each property) with commas.

To access the value of a property, we use the `.` syntax with the key. For example, to log the properties of our `student` object, we could write:

```JavaScript
console.log(student.name); // logs "Bob"
console.log(student.grade); // logs "A"
console.log(student.GPA); // logs 4.0
```

As you can see, objects very usefully allow us to associate a number of different properties with a single item.

For our purposes, we have many students rather than just one. How might we accomplish this? Well, we can create an array of objects! Let's try creating an array of student objects.

```JavaScript
let students = [
    {
        name: "Bob",
        grades: [88, 90, 80, 77, 89]
    },
    {
        name: "Alice",
        grades: [100, 95, 92, 89, 97]
    },
    {
        name: "Juan",
        grades: [91, 90, 94, 86, 90]
    }
];
```

Here we have an array of three student objects. Each student object has a `name` property and a `grades` property. The `grades` property is itself an array of numbers (5 different grades).

### Printing the Grades

Next, let's write a function to print all student names and their grades. Because we want to iterate through the array of student objects, we will use a `for` loop.

```JavaScript
// print all student names and their grades
function printGrades(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + ": " + students[i].grades);
    }
}

printGrades(students);
```

As you can see, we are accessing the `name` and `grades` properties of each student object (using the `.` dot operator) and logging them as we loop through.

### Adding a Student

A new student joined our class and submitted his work. So, let's add him to our array of students with a new `addStudent` function.

```JavaScript
function addStudent(name, grades) {
    let student = {
        name: name,
        grades: grades
    };
    students.push(student);
}

addStudent("Biff", [71, 80, 56, 65, 60]);
```

In the function, we are creating a new student object with `name` and `grades` properties to match the other students. We then add this object to the end of the `students` array using the `push` method. Finally, we call the function with the name and grades of the new student (poor Biff didn't do too well, sadly). If you were to run the `printGrades` function now, you would see that the new student is included in the list of students.

### Converting Grades to Letters

Lastly, let's create a function to convert all student grades to letter grades and print them: 

```JavaScript
function convertGrades(students) {
    for (let i = 0; i < students.length; i++) {
        let grades = students[i].grades;
        let letterGrade = "";
        for (let j = 0; j < grades.length; j++) {
            if (grades[j] >= 90) {
                letterGrade += "A ";
            } else if (grades[j] >= 80) {
                letterGrade += "B ";
            } else if (grades[j] >= 70) {
                letterGrade += "C ";
            } else if (grades[j] >= 60) {
                letterGrade += "D ";
            } else {
                letterGrade += "F ";
            }
        }
        console.log(students[i].name + ": " + letterGrade);
    }
}

convertGrades(students);
```

This function is slightly more complicated, because we need to iterate _both_ through the `students` array and each student's `grades` array, and evaluate the latter numbers to a letter grade. We can accomplish this by using two `for` loops: a `for` loop to iterate through the `students` array (using `i` and `students.length`), and a nested `for` loop to iterate through each student's `grades` (using `j` and `grades.length`). In other words, as we work through each student obejct, we first store the grades values of each student in a variable `grades`. Because `grades` is itself an array of values, we can use the `.length` property to determine the number of grades for each student (5). We then use the `if` statement to determine the letter grade for each number, and add it to the `letterGrade` variable with the `+=` operator.

Let's put the whole program together:

```JavaScript
// array of student objects
let students = [
    {
        name: "Bob",
        grades: [88, 90, 80, 77, 89]
    },
    {
        name: "Alice",
        grades: [100, 95, 92, 89, 97]
    },
    {
        name: "Juan",
        grades: [91, 90, 94, 86, 90]
    }
];

// print all student names and their grades
function printGrades(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + ": " + students[i].grades);
    }
}

//add a new student
function addStudent(name, grades) {
    let student = {
        name: name,
        grades: grades
    };
    students.push(student);
}

// convert grades to letters
function convertGrades(students) {
    for (let i = 0; i < students.length; i++) {
        let grades = students[i].grades;
        let letterGrade = "";
        for (let j = 0; j < grades.length; j++) {
            if (grades[j] >= 90) {
                letterGrade += "A ";
            } else if (grades[j] >= 80) {
                letterGrade += "B ";
            } else if (grades[j] >= 70) {
                letterGrade += "C ";
            } else if (grades[j] >= 60) {
                letterGrade += "D ";
            } else {
                letterGrade += "F ";
            }
        }
        console.log(students[i].name + ": " + letterGrade);
    }
}

// call functions
addStudent("Biff", [71, 80, 56, 65, 60]);
printGrades(students);
convertGrades(students);
```
Try running the program below in the editor and seeing the result in the browser's developer console.

<CodeEditor language='JavaScript' >
     </CodeEditor>

*Congratulations*, you have now created a simple grading program utilizing functions!

Functions are a great way to keep your code organized and readable. They are mainly used to create reusable pieces of code that can be employed in multiple places in your program. Remember that functions should ideally always be used to perform a _single_ task, and that their names should be descriptive of the task they are performing.

## Review Questions

Let's review the concepts we have learned in this lesson.

1. What is the naming convention for functions in JavaScript?

<Quiz>
- lowercase_with_underscores
- lower camelCase*
- snake_case
- PascalCase
</Quiz>

2. What will be the result of the following code?

```JavaScript
let someValue = 1;

if (someValue > 0) {
    let greet = "hi there";
    console.log(greet);
}

console.log(greet);
```

<Quiz>
- hi there
- undefined
- ReferenceError*
- TypeError
</Quiz>

3. Should you use the `var` keyword to declare a variable?

<Quiz>
- Yes
- No*
- Don't tell me what to do!
</Quiz>

## Challenges

1. Write a function that always returns the last item in whatever array is passed to it. (Hint: Refer to the [Loops and Arrays](http://localhost:3000/workshop/Javascript/?page=5) lesson if you need a refresher on an easy way to do this.)

2. Biff decided to drop your class after his unfortunate grades. Add a function to the Student Grades program that will remove Biff from the list of students using the `pop` method.

3. In the wild, you will often see what are called __arrow functions__. In modern JavaScript, arrow functions are a shorter way to write functions, and utilize the `=>` syntax. Check out [this resource](https://www.w3schools.com/js/js_arrow_function.asp) to learn about the syntax for arrow functions. Then, try to reformat the following traditional function using arrow function syntax instead:

```JavaScript
function add(a, b) {
    return a + b;
}
```

## Key Terms

Do you recall the meaning of the following terms?

- parameter/argument
- pass (values)
- call (function)
- return value
- constant
- scope
- objects

# Making Mistakes

It is an inevitability to make mistakes while programming. Especially when you are first beginning, it is easy to create errors and to write code that acts erratically. In fact, we have already made a few mistakes (on purpose) in previous lessons to illustrate the problems that can arise when learning to write a new programming language. However, you should be aware that even the most seasoned professional programmers make mistakes as well. Coding can be a frustrating, laborious task at times, and dealing with errors and bugs is a constant process. However, I think you'll also find that coming up with creative ways to address issues that arise in your code can also be a great source of satisfaction.

Thankfully, programmers have developed many tools and strategies to help us deal with errors. In this lesson, we will cover a variety of tools, techniques, and strategies to help you write cleaner code, avoid common programming errors and pitfalls, and generally feel more confident in your ability to address problems.

First, let's jump into some common error types and their causes.

## Common Types of Errors

### Syntax Errors

You may have noticed that JavaScript is a finnicky language. One errant `{` can cause your entire program to break. For all their usefulness, computers are not (yet) very good at discerning meaning or understanding implicit intentions. You must speak to them in a highly specific way for them to understand what you are trying to achieve. 

When writing JavaScript, the most common type of error to make is a __syntax error__. These errors arise when you fail to add or misspell an element of the language that is needed for the code to be understood. For instance, below is an example of a basic syntax error. Can you identify the error? Try running it in the code editor to see the result.

```JavaScript
const oops = 12;
if (oops == 12 {
    alert(oops)
}
```

<CodeEditor language="JavaScript">
    </CodeEditor>

As you can see, we get the message of `SyntaxError: Unexpected token '{'`. In other words, it is telling us that the first curly brace seems out of place. Why? Well, looking closely you'll notice that we did not close the parentheses `)` in the `if` statement, as JavaScript expected us to. Instead, it found a curly brace and didn't know what to do with it. 

When dealing with syntax errors, it is often best to use the error message JavaScript gives you to try and pinpoint where the error might be located. In this example, for instance, the curly brace _is_ where it should be, but is still described as "unexpected." From this you can guess that you are likely missing something immediately before it.

Many code editors nowadays (including VSCode, which we'll begin to work with in the next lesson) have built-in tools that will detect and alert you to syntactical mistakes you are making while writing your code. Syntax errors will inevitably happen, though, so when you see them arise make sure to take a careful look over what you've written for typos or missing elements.

### Type Errors

__Type errors__ are when you try to perform an operation on a value of the wrong type. For instance, below is an example of a type error. Can you identify what is causing the error? Try running it in the code editor to see the result.

```JavaScript
let num = 1;
oops = num.toUpperCase();
console.log(oops);
```

<CodeEditor language="JavaScript">
    </CodeEditor>

In this example, we are trying to use the `toUpperCase` method on a number. However, `toUpperCase` is only available for strings. Hence the `TypeError` message. 

This error gives us a direct clue for how to fix our code. We would first need to convert the number to a string. For instance, we could use the `toString` method:

```JavaScript 
let num = 1;
fixed = num.toString().toUpperCase();
console.log(fixed);
```

Here we apply both the `toString` and `toUpperCase` methods to the number, which then allows us to use it as an uppercase string.

If, for whatever reason, you are ever in doubt about the particular type of a value, remember that you can use the `typeof` operator to check its type. This is a useful tool for debugging.

### Reference Errors

When your programs begin to get more complex, it is occasionally difficult to discern what particular scope you are working within. This can cause programs to throw a __Reference Error__. Take a look at the example below. Can you identify what is causing the error? Try running it in the code editor to see the result.

```JavaScript
let someValue = 1;

if (someValue > 0) {
    let oops = "blah blah";
    console.log(oops);
}

console.log(someValue);
console.log(oops); 
```

<CodeEditor language="JavaScript">
    </CodeEditor>


As you can see, we receive the message of `ReferenceError: oops is not defined`. This is telling us that we are trying to use the `oops` variable out of the scope in which it was declared. Always be sure to check the scope of your variables before using them.

## Logical Errors

__Logical errors__ occur where your syntax is actually correct but the code is not producing what you intended. In other words, the program runs successfully, but gives "incorrect" results. These are often harder to fix than other types of errors, as there usually isn't an explicit error message to direct you to the source of the error.

Take a look at this example. It is a perfectly valid and legal code snippet, but won't work as intended. Can you identify where it is going wrong? Try running it in the code editor to see the result.

```JavaScript
function getPassword(){
  let correct = "password";
  let guess = "";
  while (guess == correct) {
    guess = prompt("What is the password?");
  }
  alert("You may enter.");
}

getPassword();
```

<CodeEditor language="JavaScript">
    </CodeEditor>

As you can see, this is not a very good password system. In fact, it lets everyone have access immediately! To correct this, we would need to change the `==` operator to `!=`, to make sure the `while` loop runs until the correct password is entered.

This is a fairly straightforward example, but for larger pieces of software logical errors can be much more complex and difficult to identify. Let's discuss some general strategies to help you deal with logical errors.

## Strategies to Avoid Mistakes

Below are some general strategies and best practices you can follow to help you think through the structure and design of your programs.

### Writing Pseudo-code

One common mistake for beginners in approaching code and coding problems is trying to solve a problem entirely in JavaScript. While this may seem like an obvious and commonsense approach, it is actually not always the best way to tackle a problem. Often, when creating complex programs, it is often useful to flesh out the structure and logic of your program before even writing any code.

This practice is called __pseudo-coding__. Pseudo-code is an amalgamation of code-like expressions and regular English (or whatever natural language you are most comfortable with). There's no correct way to write pseudo-code--you make it up as you go along. As long as it looks a little bit like code and follows the same general pattern and procedure, you're doing well.

The reason we write pseudo-code is that it allows us to flesh out the logic of the program in a clear and accessible way. We use it to skip over unnecessary details in a way that we can easily convert into code later.

Here's a possible example of pseudo-code for our simple password program from before:

```
create function get password
    store correct password in variable
    prompt user for password
    while password is incorrect
        prompt for password
    alert user they may enter
    end function
```

As you can see, pseudo-code is a lot more readable than writing actual code. It provides you with an accessible blueprint of a program's logic and structure that you can then overlay or follow with actual code.

As mentioned, there is no one way to write pseudo-code. You can be as detailed or as abstract as you'd like. As long as you are clarifying the structure of your program to yourself (and others you may be collaborating with), it is sufficient. It is often best, however, to write pseudo-code that more or less matches the syntax and vocabulary of JavaScript.

Whenever you are beginning a new program, it is highly recommended to write pseudo-code first. Not only will it make the overall structure of your program more intelligible, but it will also help you to avoid making logical errors down the road.

### General Tips

Here are some more general tips for dealing with logical errors:

1. Understand what your code is doing step by step.

With a logic error, code behavior is unpredictable. A loop may never happen, it may never end, or it might sometimes work right and sometimes not. The key to finding logic errors is to predict why the code is doing what it's doing and why it's not doing what you want. Follow through the code step by step and try to understand what is happening. 

2. Form a hypothesis or two before looking at any code. 

Think about what is wrong before you look over the code. Try to describe in plain English what is going wrong. Go through this process before you look at code because the moment you see code, you'll start worrying about details rather than thinking about the bigger picture. Logic errors are almost always about logic, and no amount of staring at code will show you logic errors, nor will a debugger spot them for you.

3. Resolve syntax errors.

Go to the console and see if there are any syntax errors. If so, resolve them. Logic errors will not appear until you've resolved all syntax errors. If your code shows no syntax errors but still doesn't work correctly, you've got a logic error.

4. Identify key variables or conditions.

Most logic errors are centered around a condition that's not working right, and conditions are usually based on variables. Begin by taking a careful look at the conditions that control the behavior you're concerned about.

5. Think about your logic.

Logic errors aren't about getting the commands right (those are syntax errors). Logic errors are about telling the computer to do the wrong thing. Remember, the computer only does precisely what you tell it to do, so think hard about the logic you've applied and how you might be able to revise it.

## Review Questions

1. True or False - A syntax error occurs when code is not written correctly.

<Quiz>
- True*
- False
</Quiz>

2. True or False - A reference error occurs when a variable is used outside its scope or before it is declared.

<Quiz>
- True*
- False
</Quiz>

3. True or False - A logical error occurs when code works but is not producing the results you expected.

<Quiz>
- True*
- False
</Quiz>

## Challenges

1. Identify the logical error in the following code.

```JavaScript
// find the even numbers in an array
let someValues = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < someValues.length; i++) {
    if (someValues[i] / 2 == 0) {
        console.log(someValues[i]);
    }
}
```

2. Let's say you are writing a program that allows users to manage a collection of recipes. You want the user to be able to add, remove, edit, and search through their recipes. You also want the user to be able to "favorite" individual recipes and let them search and look through their list of favorites. Write some pseudo-code for a program that allows for each of these features.

## Key Terms

- syntax error
- type error
- reference error
- logical error
- pseudo-code

# VSCode and GitHub 

Up to this point we have been working entirely in the browser and our work has faded into the past at every screen refresh. Ephemerality is not a feature much appreciated in programming. So, to get started on something more permanent, let's set up a practice folder to hold our code. Call it `javascript`, or whatever you want, as long as you promise to remember it. Throughout the rest of this course, we will be working in this folder. 

Click this button to download a couple of files we'll be needing. Unzip the folder and add the files to your working folder.

<Download files='index.html, script.js'><br />

Next, we'll want to get our coding environment set up. This will be the main focus of this particular lesson. We'll first install the VSCode code editor, and then learn how to set up and use a GitHub repository.

Much of your academic career has likely been structured around sending in single documents. For instance, a .pdf or Word document of your latest essay masterpiece. In general, however, going forward in this class you'll want to think of your work in terms of a __project__, which is a collection of files and code that you want to work on. In the coding environment we'll set up and the project we'll create, we'll be working with many files that will all contribute to the same overall project. A website, for instance, is a project, made up of many different files. What we will end up building by the end of this course will all be housed in the same folder and will be managed though a single GitHub repository. This will hopefully make more sense once we get into it.

For now, let's go ahead and install VSCode.

## VSCode

VSCode is a free and open-source code editor that is available for Windows, Mac, and Linux. It is a great tool for developers to use when they are working on code. It supports syntax highlighting, code completion, has built-in GitHub integration, and has an large library of extensions that can be used to extend its functionality.

### Installing VSCode

Navigate to the [homepage of VSCode](https://code.visualstudio.com/) and download the appropriate version for your operating system (stable version).

![VSCode homepage](/images/vscode_homepage.png)

Once it is installed, open up the application. On the left sidebar, you'll see a few different options. Let's look at three of them:

![VSCode sidebar](/images/vs_code_sidebar.png)

- The Explorer Window is the main window that you'll be working with. It is the main way to navigate through your project and to interact with files.
- The Search Window is a window that you can use to search for files or words throughout your project.
- The Source Control Window will allow you to manage your project's files and code through GitHub integration.

These are the main windows you'll be working with, along with the main code editor area, in which you'll be writing code.

### Opening a Project

For now, go ahead and open up the Explorer Window and click Open Folder. Navigate to your working folder for the course, select the folder, and click Select Folder.

In the Explorer, you should now be able to view both the `index.html` file and the `script.js` file, and can open them to view the code for each file.

![New Project](/images/vscode_openproject.png)

Next, let's go ahead and initialize a Git repository for our project.

## Creating a GitHub Account

The first step we'll need to take is to set up a GitHub account. Navigate to the [GitHub homepage](https://github.com/) and click "Sign Up for GitHub". You'll be prompted to create a new account.

![GitHub Sign Up](/images/github_homepage.png)

 __Note:__ Although you don't have to, it is best to use your student email account (.edu) to register with GitHub, as this will allow you access to some features you otherwise would have to pay for.

 Work through the steps to create a new account and return here when you are finished.  

## Getting Acquainted with Git and GitHub

Now that you have a GitHub account, let's go ahead and initialize a repository (folder) for our project. 

First, we should understand a little about how Git and Github work. __Git__ is a _version control system_ that allows you to track changes to your files. If you have used "track changes" in the past with either Microsoft Word or Google Docs, you're likely familiar with the terminology. In effect, you are tracking all of the "versions" or life-histories of your files stored in the repository.

__GitHub__ is an online platform for hosting Git repositories. It functions for some, predominantly programmers, as a social network for sharing and collaborating on code-based projects. Users can share their own projects, as well as search for others, which they can then often work on and contribute to. Digital Humanists, librarians, and other academics are also finding ways Git and GitHub are useful in writing projects and teaching.

A [study of how Digital Humanists use GitHub](https://digitalscholarship.files.wordpress.com/2016/07/spirosmithdh2016githubpresentationfinal.pdf), conducted by Lisa Spiro and Sean Morey Smith, found that a wide range of users, including professors, research staff, graduate students, IT staff, and librarians commonly used the site in their DH work. They used GitHub for a diverse range of activities, such as:

- Developing software
- Sharing data sets
- Creating websites
- Writing articles and books
- Collating online resources
- Keeping research notes
- Hosting syllabi and course materials

Although it has many benefits, using Git and GitHub effectively does take a bit of practice. It is notorious for being a bit of a pain in the neck (leading to such websites as [Oh Shit, Git!](https://ohshitgit.com/)), but it is worth the effort.

## Initializing a Git Repository on GitHub

Git, as a version control system, can be enabled in a folder, and then used to save the state of the contents in that folder at different points in the future. It will also keep a record of all changes made in the past. It knows exactly when a file is added to a project and even when it is deleted. It can even resurrect files that have been deleted, if needed.

Let's go ahead and initialize a Git repository for our project. In VSCode, click on the Source Control Window and click on the `Initialize Repository` button.

![Initialize Repository](/images/vscode_initgit.png)

You should now be able to see the following:

![Initial Commit](/images/vscode_gitcommit.png)

In Git, every change you make to a file and submit to version control is called a __commit__. A commit is effectively a snapshot of a file or files at a certain point in time. Every commit also has a __commit message__, which is a short description of what the commit is all about, either for yourself or for others you are collaborating with. You should write a brief, descriptive message that encapsulates the changes you have made at that point in time.

Let's go ahead and make our first commit. In VSCode, type "First commit" in the message window and click `Commit`.

You should receive a message that `There are no staged changes to commit`. 

![No Staged Changes](/images/vscode_nostaged.png)

This is because we haven't made any changes to any files yet and because we haven't __staged__ any files yet. Before making a commit, you need to add the files to the "staging environment". Staged files are those that are ready to be committed. This will make more sense later as we continue to work with Git.

For now, go ahead and click `Yes` to the prompt.

Afterwards, you should see a button updated to `Publish Branch`.

![Publish Branch](/images/vscode_publishbranch.png)

Go ahead and click Publish Branch. You should be prompted to sign into GitHub. Go ahead and click `Allow`, and sign in to GitHub with your account.

If you receive a message to `Authorize VSCode`, click Authorize.

![Authorize VSCode](/images/github_authorize.png)

If you are given additional messages to allow VSCode to access your account, click through to allow.

Lastly, you will want to give your repository a name. In VSCode at the top, you should see a text field window for typing the name of your repository. Give it whatever name you want, and click `Publish to public repository`. You can also create private repositories, but for this class we will make our repositories public.

Afterwards, you should see a message that says `Successfully published to GitHub` in the lower right corner of VSCode. (If you also receive a message to `periodically run git fetch`, you can just say no for now.)

![Successfully Published](/images/github_published.png)

If you click through to `Open in GitHub`, you should be able to see the repository you just created, along with a message of your first commit.

![New Repository](/images/github_new_repository.png)

Congratulations! You have successfully created a new GitHub repository for this course.

Let's go ahead and explore our files a bit, make a new change, and make a new commit to our repository.

## Exploring our Files

Back in VSCode, open up the Explorer Window and click on the `index.html` file. 

![index.html](/images/index_scrn.png)

This is an HTML file. It contains the code for the page that we will be working with. We will learn more about HTML in the next lesson.

Now open the `script.js` file. As you can tell by the file extension (`.js`), this is a JavaScript file. It contains the code for the JavaScript that we will be working with.

As a project, each of these files is contributing to the webpage. We will learn more about how later, but for now let's look at the webpage in your browser.

In your file system, (not in VSCode), navigate to your folder containing these two files and double-click the `index.html` file to open it in your browser.

You should see the following:

![Hey it worked!](/images/heyitworked.png)

If you reference both files in VSCode, you can see that text from each is being reflected on the webpage. In the HTML file, we are displaying `This is my project!`. In the JavaScript file, we are providing an alert that says `Hey it worked!`.

### Making a Change

Without worrying about the HTML for now, let's change the `Hey it worked!` message to `My project is going to be awesome!`. Go ahead and make the change in your code editor.

If you save the file now, you should see a new change being registered in the source control window.

![Second Commit](/images/second_commit.png)

The number 1 in the source control icon indicates that there is one file change. If you click on it, you can see that it is tracking all the changes made to the file. The little `M` next to the file name indicates that the file is modified. 

### Staging our Change

You can also see a `+` (plus) sign next to the file name, which allows you to __stage__ a change for commit. Go ahead and click it. You should now see a section that says `Staged Changes`.

![Staged Changes](/images/staged_changes.png)

### Committing our Change

Now that we have staged our change, let's go ahead and commit our change. Be sure to type a message for the commit, like `Second Commit`.

### Pushing our Changes to GitHub

You should now see a button that says `Sync Changes`. In the lingo of Git, this is called __pushing__ your changes. It is a way to send your changes to the remote repository on GitHub. Simply committing your changes will _not_ make the changes on your remote repository until you push them. Let's go ahead and click `Sync Changes` and click `Ok`to the prompt.

If you navigate to your repository in GitHub, you should see a new commit with the message `Second Commit`.

![New Commit](/images/github_secondcommit.png)

Congratulations! You have successfully pushed your changes to GitHub.

Using Git and GitHub might take a little getting used to, but it is a valuable resource for maintaining, sharing, and collaborating on projects. 

To wrap up, keep in mind that the general process for working with Git is as follows:
1. Make Changes
2. Stage modified files
3. Commit files with message
4. Push to remote repository on GitHub

## Review Questions

1. A version control system like Git allows you to (select all that apply):

<Quiz>
- track changes to your files*
- share your files and collaborate with others*
- restore files you may have deleted on your own machine*
- undo changes and revert to earlier versions*
</Quiz>

2. True or False - You need to stage your files before committing them.

<Quiz>
- True*
- False
</Quiz>

3. True or False - If you commit your changes, they will be immediately reflected in your GitHub repository.

<Quiz>
- True
- False*
</Quiz>

## Challenge

We saw that both the HTML file and the JavaScript file are contributing to the creation of our project webpage. For this challenge, try changing the text that is displayed from the HTML page to whatever you'd like. Once you have made a change and see it reflected in the webpage, stage the change, commit it, and push it to GitHub with an appropriate message.

## Key Terms

Do you recall the meaning of the following terms?

- Git
- GitHub
- stage
- commit
- push

# HTML and CSS

In the last lesson we set up our project and created a repository on GitHub. Now that we have the environment set up and some files to work with, let's begin learning about writing HTML and CSS to modify a webpage. 

We will be refreshing the page a lot, so the first thing I recommend doing is opening your `script.js` file in VSCode and commenting out `//` the alert that says `My project is going to be awesome!` so it doesn't become as much of an annoyance.

```JavaScript
// alert('My project is going to be awesome!');
```

To start us off and provide some context for this lesson, let's understand a bit about how HTML, CSS, and JavaScript work together.

## HTML, CSS, and JavaScript

__HTML__ stands for HyperText Markup Language. It is the standard language used to define the _structure and content_ of a particular webpage. It allows you to add text, images, and other elements to a webpage, and to direct the overall layout of the webpage. For example, you can use HTML to add a header to your webpage, structure text in a series of paragraphs, add a table, a list of bullet points, and much, much more. 

HTML works in tandem with __CSS__, which defines the _style_ of a webpage. CSS stands for Cascading Style Sheets. While HTML directs the overall structure and content of a page, CSS is used to define the particular stylistic or aesthetic appearance of the page. For example, you can use CSS to define the color of text, the font, the size, the background color, the color of elements like buttons, and much more. While you could create a webpage entirely using HTML, it would ultimately be a boring, uninteresting webpage with a white background and black Times New Roman text.

Both HTML and CSS can also work in tandem with JavaScript files. While HTML and CSS direct the structure and style of a page, JavaScript allows you to add _functionality_ to a webpage. For example, you could use JavaScript to add a button that says "Click Me!" and when the button is clicked, it will display an alert that says "Hey a button was clicked!". In other words, whatever the user can interact with on a webpage is controlled by JavaScript.

It's worth noting that the three languages are intertwined, and that you can write CSS and JavaScript inside an HTML file. This will make more sense as we continue learning.

In general, just keep in mind that:
- HTML provides the _structure_ of a webpage.
- CSS provides the _style_ of a webpage.
- JavaScript provides the _functionality_ of a webpage.

With this in mind, let's dive into the basics of HTML.

## HTML

So far, we have one HTML file to work with in our project: `index.html`. You can tell it is an HTML file by the `.html` extension. The name of the file (index) is an industry standard, because web browsers tend to recognize the index.html page as the opening page to your website directory. See [here](https://www.thoughtco.com/index-html-page-3466505) for more explanation.

Let's take a look at the contents of the file. Open your project in VSCode and open the `index.html` file. You should see the following code display:

```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <h1>This is my project!</h1>
    <script src="script.js"></script>
  </body>
</html>
```

This is a standard layout for a basic HTML page. The first thing you'll probably notice is that HTML elements are defined by the `<` and `>` characters. Some tags need both opening and closing tags, like `<h1></h1>`, while others only need one tag, like `<meta>`. Tags that are self-closing, or don't require closing tags, are called _void elements_. To close a tag when needed, add a `/` before the name of the element in the last tag.

Let's break down some of the specific elements we are seeing here. The first element is a `<!doctype>` tag. This tag is used to define the type of document that is being created: in this case, an HTML doc. We also see an `<html>` tag. This tag begins the HTML document proper.

We also have a `<head>` tag. This element is where we put all of the background information, or _metadata_, about the webpage. None of this information is actually visible in a webpage except for the `<title>` tag, which will be displayed as the title of the page in your browser's title bar.

Next, we have the `<body>` tag. This tag begins the body of the webpage, where we put all of the actual content we want to display. In this case, we have a `<h1>` tag. This tag defines a header, or a large series of text, and it has a text content of `"This is my project!"`. For the moment, let's skip the `<script>` tag--we'll discuss that later in the lesson. We end the HTML document by closing the `<body>` and `<html>` tags.

In general, then, the basic template for any HTML document is as follows:

```html
<!doctype HTML>
<html lang="en">
    <head>
        <title>This is the page title.</title>
    </head>
<body>
    <h1>Here's an example large heading.</h1>
    <p>This is an example paragraph of text.</p>
</body>
</html>
```

In other words...
- All HTML documents must start with a document type declaration: `<!doctype html>`.
- The HTML document itself begins with `<html>` and ends with `</html>`.
- The `<head>` of the HTML document contains the metadata about the document, such as the `<title>`.
- The visible part of the HTML document is between `<body>` and `</body>`, which can hold any number of elements you want to display.

### Useful Tags

There are many tags you will find yourself using in HTML. Here are some of the most common:

- `<p></p>`: This tag defines a paragraph of text.
- `<h1></h1>`: This tag defines a header, or a large series of text.
- `<h2</h2>`: This tag defines a smaller header, or a smaller series of text. It descends all the way down to `<h6>`.
- `<img src ="..." alt="Text for accessibility purposes" />`: This tag sets an image to display. Note that it is a void element, meaning that it doesn't have a closing tag.
- `<a href="...">...</a>`: This tag creates a hyperlink.
- `<div></div>`:  This tag designates a container block or section for other elements.
- `<section></section>`: This tag creates a section of content.

There are many, many other tags you will encounter in the wild. You can find a complete list of tags here: [HTML Tags](https://www.w3schools.com/tags/default.asp).

In your browser, you can observe the HTML for any page you encounter using the same browser's developer tools you used to open the console. It may not make much sense depending on the page you are looking at, but it can often be a good way to get a sense of what the HTML looks like. Open the `index.html` page in your browser and right-click on the page and select `View Source`. You should be familiar with the code you are seeing.

### HTML Attributes

In the `<html>` tag in our `index.html` file, you'll also notice we have added `lang="en"`. This is called an _attribute_. Attributes are pieces of information that are added to a tag element, and follow the syntax `attribute="value"`. They allow us to modify the behavior of the element in a variety of ways or to add information. Here we wrote `lang="en"` to define the language of the document as English (a common practice as info for the browser). 

You'll also notice, in the `<script>` tag, that we added a `src` attribute. We'll discuss this in more detail later in this lesson. Throughout the course, you'll be introduced to a variety of useful attributes that you can use to modify elements in your HTML pages. For now, however, just keep in mind the syntax so you can recognize attributes when you see them.

Now that we have some basic understanding of how an HTML document is set up, let's move on to CSS to add some style to our webpage.

## CSS

As mentioned earlier, HTML works in conjunction with CSS to define the style of a webpage. 

Examples of what CSS can help you modify include:
- What background color you want to use for the page or a paragraph.
- What font or font size you want for your headings or your normal text.
- How large you want the images, and whether you want them aligned center, left, or right.
- Where elements appear on the page.
- Whether elements are visible to a user or not.

And much more! 

### Adding A New Stylesheet

CSS files are called _stylesheets_. Let's create a new file called `style.css` in our project so we can modify the style of our HTML page. The useful thing about stylesheets is that we simply need to create _one_, which will then control the layout of many different HTML documents.

To add a new file in VSCode, simply click on the "New File" button  next to your project title in the Explorer window. Type `styles.css` into the name field and hit <kbd>Enter</kbd>. Make sure to add the `.css` extension to the name.

Next, we'll link to the `style.css` file in our HTML file so it can be applied to our webpage. In our HTML file, we'll connect the files through a void <link> tag that lives inside the _parent_, or containing, <head> tag. Its `href` attribute is a relative link to our CSS document. The link tag is as follows:

```html
<link rel="stylesheet" href="styles.css">
```

The `rel` attribute is used to define the relationship between the HTML document and the CSS document. In this case, the relationship is `stylesheet` because we are linking a CSS stylesheet. The `href` attribute is used to define the location of the CSS document. In this case, the location is relative to the location of the HTML document (it lives in the same folder), so we'll just provide the name of the CSS file.

So, open the `index.html` file in VSCode and add the `<link>` to the `<head>` section like so:

```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <h1>This is my project!</h1>
    <script src="script.js"></script>
  </body>
</html>
```

### Styling Elements

Next, let's start adding some styling to our page. In the `styles.css` file, let's add a background color. We'll do this by adding a `background-color` property to the `body` element. 

```css
body {
    background-color: rgb(118, 92, 120);
  }
``` 

To modify an HTML element, you first indicate which element you want to modify, followed by curly braces containing the properties you want to modify. In this case, we want to modify the `background-color` of the `body` element. Lines within the curly braces are called _declarations_, and they change the formatting of the elements in the HTML document. Each line in the declaration sets the value for a property and ends with a semicolon `;`.

To define the color, we use the `rgb()` function. This function takes three numbers as arguments that represent color values, and returns a color in the form `rgb(Red, Green, Blue)`. In this case, I'm using the RGB values for a purplish gray color, but you can use whatever color you'd like. VSCode usually comes equipped with a built-in color picker, so you can just click on the color you want and it will appear in the text field. If you can't see the color picker, you can also determine particular RGB values using [this online resource](https://htmlcolorcodes.com/color-picker/) to get the RGB value you want along with analogous colors. 

__Note:__ High contrast is very important for people with vision problems. So, when designing websites always ensure that the contrast between the text color and the background color (or background image) is good!

If you save the CSS file and open the HTML file in your browser, you should now see the background color change.

Next, let's modify the header element a bit. Let's make it white, a different font, and a little bigger. We'll also set it to be bold and center it.

```css
h1 {
    color: rgb(255, 255, 255);
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-align: center;
  }
```

As you can see, each of these aspects have their own properties you can modify. If you add this code to your file and refresh your browser, you should see the header centered and modified accordingly.

Next, let's add a paragraph with some text to our page. We'll start by adding a `<p>` tag to our HTML file, within the `<body>`. I'm going to add a very bad (sorry!) joke to my site, but you can write whatever you'd like.

```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <h1>This is my project!</h1>
    <p>Q: Why did the programmer quit her job?
      A: Because she didn't get arrays.</p>
    <script src="script.js"></script>
  </body>
</html>
```

Next, let's add some styling to the paragraph. We'll follow the same process as we did for the header, but we'll make the text a bit smaller.

```css
p {
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    white-space: pre-line;
  }
```

The other addition is the `white-space` property. This property allows you to control how whitespace is handled. In this case, I wanted to preserve the line break in the text so the question and answer are on different lines, so I set the value to `pre-line`.

If you save and reload, you should see something like the following:

![First CSS styling](/images/1_css-styling.png)

### CSS Selectors

CSS is made up of selectors with specific properties. Selectors are usually tags, ids, or classes. Let's take a look at both of the latter selectors. `id` will allow us to select a single element by its id and modify it. `class` will allow us to efficiently modify a number of elements with the same class at once.

#### Class

In our project page so far, we applied many of the same styles to the `<h1>` element as well as to the `<p>` element. For instance, we centered them both, made them both white, changed the font, etc. This works, but is ultimately repetitive and inefficient because we had to rewrite the same code. Using the `<div>` tag and classes, we can make this much easier.

First, let's create a class in our CSS file. We'll create a class called `formatText` and use it to style all the text on the page.

```css
.formatText {
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: 'Roboto', sans-serif;
    white-space: pre-line;
  }
```

To create a class, we use the `.` (dot) character followed by the name of the class. We can then use the class in our HTML file. Let's use the `<div>` tag, which acts like a container for other elements, and style it with our class. Everything within the `<div>` tag will then be styled according to the `.formatText` properties.


```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <div class="formatText">
      <h1>This is my project!</h1>
      <p>Q: Why did the programmer quit her job?
        A: Because she didn't get arrays.</p>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

As you can see, we use the `class` selector to style the `<div>` element with the name of the class we created. We include both text elements within the bounds of the `<div>` tag so they are both styled the same.

Back in our CSS file, we can now delete the repetitive bits. Our `<h1>` element now only needs to be distinguished by font size and boldness...

```css
h1 {
    font-size: 50px;
    font-weight: bold;
  }
```

...while our `<p>` element only needs to be distinguished by the text size.

```css
p {
    font-size: 30px;
  }
```

All together, your CSS file should now look something like this:

```css
body {
    background-color: rgb(118, 92, 120);
  }

h1 {
    font-size: 50px;
    font-weight: bold;
  }

p {
    font-size: 30px;
  }

.formatText {
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: 'Roboto', sans-serif;
    white-space: pre-line;
  }
```

Save and reload the page, and you should see the same result as before. What, then, was the point? Well, by using classes we have reduced the amount of code we need to write and made it much more readable and organized. Classes are very useful when you know you want to style many elements at once with a number of common or generic properties. You can apply classes to almost any element, and every element can even have multiple classes! Just separate the names with a space, like so:

```html
<div class="firstClass secondClass thirdClass"></div>
```

This is a particularly powerful feature of classes.

##### ID

In contrast to classes, IDs are unique. They are used to identify a _single_ element in the HTML file rather than many. This is useful when you want to style a single element, but you don't want to style every element with the same properties.

Let's say we wanted to set our joke apart from the header text a bit. Let's add a border around the joke text and provide it with a different background and font color. Let's also add a second joke to the page.

There are several ways we could do this, but the best might be to use a _flexbox_. Flexbox is a method to layout elements in a way that is more efficient than using absolute positioning, or manually figuring out height, width, and dimensions. It is a way to allow for a dynamic positioning of elements on a page. This layout also makes elements responsive, which means that the elements change their behavior according to the kind of device displaying them. No matter if you are viewing the page on a mobile phone or a computer monitor, the elements will be provided with appropriate position and symmetry. In general, flexbox is one of the best methods for vertically (and horizontally) centering text since it’s responsive and doesn’t require margin calculations.

Let's start by creating a new section in our HTML file, and adding a new `id` of `joke` to designate it as the joke section. I'll also add a new bad joke, this time at the expense of academics:

```html
<!doctype HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>My JavaScripting Master's Student Project</title>
  </head>
  <body>
    <div class="formatText">
      <h1>This is my project!</h1>
        <section id="joke">     
          <p>Q: Why did the programmer quit her job?
          A: Because she didn't get arrays.</p>
          <p>Q: What's the difference between an academic and a genie?
          A: One grants wishes, the other wishes for grants.</p>
        </section>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

You can see that we have now designated a new `<section>` with an `id` of `joke`. Next, let's move to our CSS file to define the properties for the section.

The syntax for ids is mostly the same as classes, but instead of using the `.` (dot) character, we use the `#` (hash) character:

```css
#joke {
    border: 5px solid rgb(16, 29, 55);
    background-color: rgb(118, 125, 158);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    color: rgb(255, 230, 204);
  }
```

We have several new things here, so let's break them down. First, we create a border around the joke text. We use the `border` property to set the border width (`5px` = 5 pixels) and style. `solid` indicates a solid fill border, and we set the color to a dark blue. We also use the `display` property to set the display type of our `joke` id to `flex`. This is defining our flexbox layout. We use the `flex-direction` property to set the direction of the layout to `column`. This means that the elements will be laid out in a column, rather than a row. This way our second joke will appear below the first on the page. In other words, each `<p>` element within the joke `<section>` will appear evenly spaced below the first.

 We then use the `justify-content` and `align-items` properties to set the alignment of the elements to `center`. This means that the elements (the jokes) will be aligned in the center of the flex container. We use the `width` property to set the width of the container to 50% of the width of the screen, and we use the `margin` property to set the margin to `0 auto`. This means that the container will be centered on the screen (the margins will be even on each side). Finally, we use the `color` property to set the text color to a light peach color.

 If you save and reload the page, you should now see something like the following:

![joke id](/images/2_css-styling.png)

Nice! You'll notice that even though the id is located within the `.formatText` class (i.e., the parent class) and that its styling is still being applied, you can nest ids and classes within each other to override the styling of the parent or container they are in. This allows you to create a complex hierarchy of styles that can be applied to many elements at once.

By creating a joke id we now have a specific section to hold and style all our terrible jokes. At this point I might encourage you to check out the [flexbox guide here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to learn a bit more about flexboxes, as they are incredibly useful for modern CSS.

Additionally, while there are far, far too many CSS properties to cover in this course, I also urge you to at least peek through the [entire CSS reference library](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and bookmark it. Try looking up the `flex` property, or any of the other properties we have used so far.

### External, Internal, and Inline CSS

As a final note about CSS, in this course we are using an _external_ CSS file, meaning it is its own separate file that we have to link to in our HTML. This is the recommended way to utilize CSS. However, it is possible to use CSS directly in your HTML file as well, through both _internal_ and _inline_ methods. If you are curious, you can visit [this page to understand the differences](https://www.w3schools.com/css/css_howto.asp) between these methods. In general, however, just keep in mind that using external CSS files is the preferred method of using CSS.

## JavaScript

So far, we have just been using HTML and CSS to style our page. The only bit of JavaScript we have is linked through the `<script>` tag, located in the `<body>` of the HTML file:

```html
    <script src="script.js"></script>
```

The `src` (source) attribute is used to link to the JavaScript file `script.js`. This is the file that contains the code that will be executed when the page loads. At the moment, the only thing it is doing is alerting the user that your project is going to be awesome.

In the next lesson, we will learn how to use JavaScript to create a more complex webpage with some actual interactivity. For now, let's just review some of the concepts we've learned so far concerning HTML and CSS.

## Review Questions

1. How do we associate a CSS stylesheet with a HTML file? (select one)

<Quiz>
- By including a link to the CSS file in the HTML page's `<head>` element.*
- By including the CSS file in the HTML page's `<body>` element.
- By sheer coincidence.
</Quiz>

2. True or False - ids are created using the `.` (dot) character and classes are created using the `#` (hash) character.

<Quiz>
- True
- False*
</Quiz>

3. True or False - Flexboxes are useful because they allow for a dynamic layout of elements on a page.

<Quiz>
- True*
- False
</Quiz>

## Challenges

1. Add another joke of your own to the jokes section of your page.

2. Add a link in the jokes section to an online list of jokes using the `<a href=""></a>` tag. To learn about this tag, [see this page](https://www.w3schools.com/Html/html_links.asp).

3. Create a new section in your HTML file to display your favorite poem. In CSS, give it an appropriate id, and define the section as a centered flexbox with a different border, background color, and text color.

4. Push all your changes to the project to GitHub.

## Key Terms

Do you remember the meaning of the following terms?

- self-closing or void tags
- metadata
- attributes
- class
- id
- flexbox

# Interactive Web Design

# Getting Data

# Leaflet

# Reading Documentation

# Starting Your Project

# Create the Page

# Building Interactivity / Integrating JS

# Going Live



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


You've got to have a webpage with content in it in order to use JavaScript to manipulate it! We're going to use css Grid and Flexbox to get where we're going, so nothing like Bootstrap or etc.



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



The absolute most important thing to learn is how to find answers to your questions. This means learning how to ask the right questions. It comes through practice. Seeing an error



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



Documentation exists to explain what a tool is and how to use it. Too often, whether because documentation is an afterthought, or because the people responsible for making it are better programmers than communicators, technical documentation fails to make itself clear. Paradoxically, it is often necessary to already be familiar with using a tool in order to interpret the instructions about how to use it.



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

