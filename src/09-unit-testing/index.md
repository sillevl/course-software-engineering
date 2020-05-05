<!-- markdownlint-disable MD0033 -->

# TDD - Test Driven Development

Test Driven Development is a principle of software development that ensure your
code work exactly as you want it, it is a principle that should be follow by every
development although there are lot of people who are yet to follow the principle,
But if you did not follow test driven development then you will follow **debug
later development**

## Why you should follow Test Driven Development Principle

**It makes debugging easier**: Just imagine their is a bug or issue in your codebase
with test driven development approach, your test cases will definitely fail and
you will know exactly where to look, what to look for and what to modify. it
makes development more easier.

**It works the way you wanted it**: Test Driven Development helps and ensure your
code works exactly the way you want it.

## Types of Test Driven

### Unit Test

Unit test is a type of software development testing where individual/unit
component of a software are tested. The process is done during the development
of an application, to ensure and verify the correctness of a units/component of
code.

### Integration Test

Integration test is the process of testing collection/group of unit/component.
Integration test is done upon completion of unit tests

### Acceptance/E2E(end to end) Test

End-to-end testing is a methodology used to test whether the flow of an
application is performing as designed from start to finish. The purpose of
carrying out end-to-end tests is to identify system dependencies and to ensure
that the right information is passed between various system components and
systems.

## Test Driven Development Cycle

There are 3 cycle behind test Driven Development, `Red`, `Green` and `Refactor`
just like there are 3 cycle behind traffic light control red, yellow and green.

![TDD Cycle](./img/tdd-cycle.jpeg)

* **Red**: write a test and it fail
* **Green**: write a test for a functionality and make sure it pass the test
* **Refactor**: Optimizing the previous passed test and make sure all test cases
  pass.

### Red

The point of TDD is to write your _test first_. The idea is to focus on what
behavior you want to add to your application. Writing a test focuses on the first
problem you need to implement and makes this problem small. This is easier to solve.
And will result in a faster development.

Writing a new test should always result in a failing test. If your new test for some
reason succeeds, your test is bad. This means that your newly created test is actually
testing behavior that is already present in your applications. If this is the case
remove the test or change it until the test fails. This phase is called the red phase.

### Green

Now that you have a failing test, you are ready to implement the code that will
let the test pass. Your one and only goals is to make the test pass as fast as possible.
Don't worry about bad code, bad style or a bad solution, it all doesn't matter.
Just make the test pass!

The green phase will give you focus on the current problem. As the only thing you need
to do in order to proceed is get the test passing.

### Refactor

Remember that in the green phase you don't need to worry about your code quality or
style. Well, now is the time to worry about that. Now that the test is passing, you
have the prove that your implementation solves the problem that you defined in the
test. Now you can do whatever you want with your code. You could start over all again
or just make some small adjustments. The passing tests will give you feedback.

If all your tests keep passing after your refactoring, you have confirmation that
your application still does what it did before, no mather how small or large the
changes where in this refactor phase.

### Repeat

Repeat until application is done :-)

Now it is time to repeat this all over again. Write a new test for the next
piece of functionality that you might need, and continue to go from _red_ to _green_
to _refactor_...

<iframe width="560" height="315" src="https://www.youtube.com/embed/r9HdJ8P6GQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4kNfeI37xu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zkG_ClTJ9UM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/6pYUzEduLyU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sources

* [https://codeburst.io/test-driven-development-with-jest-37e82ddb3989](https://codeburst.io/test-driven-development-with-jest-37e82ddb3989)
* [https://academind.com/learn/javascript/javascript-testing-introduction/](https://academind.com/learn/javascript/javascript-testing-introduction/)
