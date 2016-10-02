-- The progress of abstractions -- 

# Object-Oriented Design

The world is procedural. Time flows and events pass by one by one. Activities can be modeled using procedural software. The order is known so everything can be writen in code.

-- example --

The world is object-oriented. There are objects around us that we can interact with. Each object has its own behavior. Some interactions between objects might be predictable, others are not.

-- example -- 

In a world of objects, new arrangements of behavior emerge naturally. Object-oriented design requires you to shift your thinking of the world as a collection of predefined procedures to modeling the world as a series of messages that pass between objects.

## In Praise of Design

Software gets build for a reason. The target application is the entire point. If programming was painful to produce cost-effective software, programmers would all find other jobs.

When writing software, you do not have to choose between pleasure and productivity. Programming techniques that make code a joy to write, overlap with those that most efficiently produces software. 

Object-oriented design solves both the moral and technical dilemmas of programming. Using an object-oriented approach produces cost effective software using code dat is a pleasure to write.

### The Problem Design Solves

When writing a new application and you have a complete set of requirements. Let's imagine that this application, once writen, never needs change.

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

Objects resist being reused int different contexts. They are difficult to test and may introduce duplication.

In small applications, poor design is survivable. The problem is that is that if they are successful, they grow up as poorly designed big applications.

### A Practical Definition of Design

Every application is a collection of code. The code's arrangement is th _design_. One problem can be solved in many different ways. Design is thus an art, the art of arranging code.

## The Tools of Design

### Design Principles

### Design Patterns

## The Act of Design

### How Design Fails

### When to Design

### Judging Design

## A Brief Introduction to Object-Oriented Programming

### Procedural Languages

### Object Oriented Languages

## Summary

