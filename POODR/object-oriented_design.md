# Object-Oriented Design

The world is procedural. Time flows and events pass by one by one. Activities can be modeled using procedural software. The order is known so everything can be written in code.

-- example --

The world is object-oriented. There are objects around us that we can interact with. Each object has its own behavior. Some interactions between objects might be predictable, others are not.

-- example -- 

In a world of objects, new arrangements of behavior emerge naturally. Object-oriented design requires you to shift your thinking. Not viewing the world as a collection of predefined procedures, but by  modeling the world as a series of messages that pass between objects.

## In Praise of Design

Software gets build for a reason. The target application is the entire point. If programming was painful to produce cost-effective software, programmers would all find other jobs.

When writing software, you do not have to choose between pleasure and productivity. Programming techniques that make code a joy to write, overlap with those that most efficiently produces software. 

Object-oriented design solves both the moral and technical dilemmas of programming. Using an object-oriented approach produces cost effective software using code that is a pleasure to write.

### The Problem Design Solves

When writing a new application and you have a complete set of requirements. Let's imagine that this application, once written, never needs change.

In this case, design would not matter. If you start the application, it would run forever, no matter what. As long as nothing changes.

In the real world, something __will__ change. It always does:

* The customer did not know what they wanted
* The customer did not say what they meant
* The developer did not understand the needs
* The developer learned how to do something better
* ...

Applications that are perfect are not stable as well. The application was a success, and everybody wants more!

**Change is unavoidable, ubiquitous, omnipresent and inevitable.**

It is the need for changes that makes design mater. Applications that are easy to change are a pleasure to write and a joy to extend.

Applications that resist change make changes expensive. 

### Why Change Is Hard

Object-oriented applications are made up of *objects* that send *messages* to each other. Getting the right message to the correct target requires the sender to know things about the receiver. This knowledge creates dependencies and these dependencies stand in the way of change.

Object-oriented design is about _managing dependencies_. In the absence of design, unmanaged dependencies wreak havoc because objects know too much about one other. Changing one object forces change upon its collaborators. In turn forcing change upon its collaborators, and so on.

Objects resist being reused in different contexts. They are difficult to test and may introduce duplication.

In small applications, poor design is survivable. The problem is that is that if they are successful, they grow up as poorly designed big applications.

### A Practical Definition of Design

Every application is a collection of code. The code's arrangement is th _design_. One problem can be solved in different ways. Design is thus an art, the art of arranging code.

The difficulty of design is that every problem has two components:

* You must write code to solve the problem
* You must write code that is easy to change later on

Practical design does not anticipate what will happen, it accepts that something will happen and in the present you cannot know what will happen.

The purpose of design is to allow you to design _later_ and its primary goal is to reduce the cost of change.

## The Tools of Design

Design is not acting on a fixed set of rules, it's making choices that close off some options and opens access to others.

Just like a carpenter has hammers and nails, an object-oriented designer has tools. Those tools consist out of principles and patterns.

### Design Principles

SOLID represents five of the most well known principles of object-oriented design:

* **S**ingle Responsibility
* **O**pen-Closed
* **L**iskov Substitution
* **I**nterface Segregation
* **D**ependency Inversion

Other principles include DRY (Don't Repeat Yourself) and Law of Demeter (LoD).

Where do these principles come from? Do they have value or are these merely someone's opinion? Who says?

Early object-oriented programmers that noticed that some code arrangements made their lives easier and others made them harder. It comes from the experience of others that led to the development of opinions about how to write good code.

Academics got involved and needed to quantify "goodness" of code. If you can measure something, you can compare them. These measurements are often called "*code metrics*".

Studies in the 1990s by Chidamber and Kemerer and Basili and in 2001 by Laing and Coleman tried to find the good practices and they confirm that design matters.

The principles of good design represent measurable truths and following them will improve your code.

### Design Patterns

In addition to principles, object-oriented design involves **patterns**.

The so called Gang of Four (GoF), Erich Gamma, Richard Helm, Ralph Johnson and Jon Vlissides, wrote a seminal work on patterns in 1995. Their book _Design Patterns_ describes patterns as:

> Simple and elegant solutions to specific problems in object-oriented software design. Using design patterns makes your designs more flexible, modular, reusable and understandable

Design patterns are powerful. They name common problems and solve those problems. Naming these patterns improve communication and collaboration.

## The Act of Design

Now that we know about principles and patterns, all object-oriented design problems seem to be solved.

How hard can it be to design good software? Well, still pretty hard. If you think of software as a custom furniture, then principles and patterns are like woodworking tools. Knowing how the software should look when it's done, does not cause it to build itself.

### How Design Fails

Design will fail due to **lack of design**. _Undesinged_ applications carry the seeds of their own destruction. They are easy to write but gradually become impossible to change. You can recognize these problems when programmers greet change requests with:
> "Yes, I can add that feature, _but it will break everything_"

Design will fail due to **overdesign**. In excess of enthusiasm, principles are applied inappropriately and patterns are seen where none exist. You can recognize these problems when programmers greet change requests with:
> "No, I can't add that feature; _it wasn't designed to do that_"

Design will fail when **the act of design is separated from the act of programming**. Design is a process of progressive discovery that relies on a feedback loop. The feedback loop should be timely and incremental. Iterative techniques of Agile are perfectly suited. It allows design to adjust and evolve. Programmers who write applications designed by isolated _experts_ greet change requests with:
> "Yes, I can certainly add that feature, _but it's not what you really wanted and you will eventually be sorry_"

### When to Design

Agile believes that customers can't define the software they want before they see it. Showing progress is done sooner rather then later. Software should be build in small increments, iterating into an application the customer really needs. Agile believes that the most cost-effective way to write software is to produce what the customer really wants. This can only be done by collaborating with customer throughout the whole development.

If Agile is correct, two other things are also true:

* There is no point in doing Big Upfront Design - BUFD, because it cannot possibly be correct
* No one can predict when the application will be done, because you don't know in advance what it eventually do

For some Agile is unconfortable because "We don't know what we're doing" and "We don't know when we'll be done" can be difficult to sell. BUFD may provide a feeling of control but its a temporary illusion that will not survive the development of the application.

Agile processes _guarantee change_ and your ability to make these changes depends on your applications design. If you cannot write well-designed code you'll have to rewrite you application during every iteration.

### Judging Design

In the days of yore, programmers where sometimes judged by the number of lines of code (referred to as _source lines of code_ or SLOC) they produced. Managers needed a way to compare programmers and evaluate software, SLOC, what better than nothing.

SLOC was not introduced or developed by programmers. SLOC might says about individual effort and application complexity, it says nothing about quality. It penalizes efficient programmers while rewarding the verbose.

SLOC is a historical curiosity that has largely been replaced by newer metrics.

Metric software works by scanning source code and counting things that predict quality. Bad metrics are a sign of bad design. Good metrics don't guarantee the opposite. The problem is that it is possible to create beautiful designs that over-anticipate the future. If they anticipate wrong, the application will be hard to change.

Code metrics cannot identify design that do the wrong thing in the right way.

Code metrics must be taken with a grain of salt, but they can be useful because they are unbiased an can produce comparable numbers telling something about the software.

The goal is to write software with the lowest cost per feature. The decision of how much design depends on two things:

* skill
* timeframe

When the act of design prevents software from being delivered on time, you fail. However if design takes you a whole morning, it may pay of in the afternoon. The benefits will keep paying off for the lifetime of the application.

The break-even point for design depends on the programmer. Inexperienced programmers who do a lot of anticipatory design might never reach a point where their efforts pay off. Skilled designers will produce much more efficient results.


## A Brief Introduction to Object-Oriented Programming

Object-oriented applications are made up of objects that send messages to each other. Messages will turn out to be the more important of the two...

### Procedural Languages

### Object Oriented Languages


