# Agile

## Waterfall model

The waterfall model is a **sequential (non-iterative)** design process, used in software development processes, in which progress is seen as flowing steadily downwards (like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, production/implementation and maintenance.

The waterfall development model originates in the manufacturing and construction industries: highly structured physical environments in which after-the-fact changes are prohibitively costly, if not impossible. Because no formal software development methodologies existed at the time, this **hardware-oriented** model was simply adapted for software development.

![Waterfall model](./img/800px-Waterfall_model.svg.png)

In the original waterfall model, the following phases are followed in order:

* System and software requirements: captured in a product requirements document
* Analysis: resulting in models, schema, and business rules
* Design: resulting in the software architecture
* Coding: the development, proving, and integration of software
* Testing: the systematic discovery and debugging of defects
* Operations: the installation, migration, support, and maintenance of complete systems

Thus the waterfall model maintains that one should move to a phase only when its preceding phase is reviewed and verified.

## Agile

In February 2001, 17 software developers met at the Snowbird resort in Utah to discuss lightweight development methods. They published the Manifesto for Agile Software Development, in which they shared that through their combined experience of developing software and helping others to do it they had come to value:

* Individuals and interactions over processes and tools
* Working software over comprehensive documentation
* Customer collaboration over contract negotiation
* Responding to change over following a plan

While the secondary concerns were important the primary concerns were more critical to success.

By these terms, they meant:

**Individuals and interactions**
Self-organization and motivation are important, as are interactions like co-location and pair programming.

**Working software**
Working software is more useful and welcome than just presenting documents to clients in meetings.

**Customer collaboration**
Requirements cannot be fully collected at the beginning of the software development cycle, therefore continuous customer or stakeholder involvement is very important.

**Responding to change**
Agile methods are focused on quick responses to change and continuous development.

Some of the authors formed the Agile Alliance, a non-profit organization that promotes software development according to the manifesto's values and principles. Introducing the manifesto on behalf of the Agile Alliance, Jim Highsmith said,

> The Agile movement is not anti-methodology, in fact many of us want to restore credibility to the word methodology. We want to restore a balance. We embrace modeling, but not in order to file some diagram in a dusty corporate repository. We embrace documentation, but not hundreds of pages of never-maintained and rarely-used tomes. We plan, but recognize the limits of planning in a turbulent environment. Those who would brand proponents of XP or SCRUM or any of the other Agile Methodologies as "hackers" are ignorant of both the methodologies and the original definition of the term hacker.
> 
> — Jim Highsmith, History: The Agile Manifesto

Note: In this course, Agile is focused and applied to software, but in fact Agile can be applied in any domain, even non-technical.

## 12 Principles of Agile Software

The Agile Manifesto is based on twelve principles:

1. Our highest priority is to satisfy the customer through early and continues delivery of valuable software
1. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
1. Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
1. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
1. Businesspeople and develeopers must work together daily throughout the project.
1. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
1. Working software is the primary measure of progress.
1. Agile processes promote sustainable development. The sponsors, developers and users should be able to maintain constant pace indefinitely.
1. Continues attention to technical excellence and good design  enhances agility.
1. Simplicity - the art of maximizing the amount of work not done  - is essential.
1. The best architectures, requirements and designs emerge from self-organizing teams.
1. At regular intervals the team reflects on how to become more effective, then tunes and adjust its behavior accordingly.

## Agile methods and frameworks

### Scrum

The rules of Scrum are simple and easy to communicate, which make it a great starting point for many teams adopting Agile. Here's the basic pattern for a Scrum project:

* There are three main roles on a Scrum project: **Project Owner, Scrum Master** and **team member**.
* The Product Owner works with the rest of the team to maintain and prioritize a **product backlog** of features and requirements need to be built.
* The software is built using timeboxed iterations calles **sprints**. At the start of each sprint, the team does **sprint planning** to determine which features from the backlog they will build. This is called the **sprint backlog**, and the team works throughout the sprint to build all of the features in it.
*  Every day the team holds a short face-to-face meeting called the **Daily Scrum** to update each other on the progress they've made and to discuss the roadblocks ahead. Each person answers three questions:
    * What have I done since the last Daily Scrum?
    * What will I do until the next Daily Scrum?
    * What roadblocks(problems or challanges) are in my way? 
* One person, the Scrum Master, keeps the project rolling by working with the team to get past roadblocks that they have identified and asked for help with. At the end of the sprint, working software is demonstrated to the product owner and stakeholders in the **sprint review**, and the team holds a **retrospective** to figure out lessons they have learned, so they can improve the way they run their sprints and build software in the future.

### XP - eXtreme Programming

There are 13 **primary practices of Extreme Programming** that can help guide teams through the ins and outs of software development, and help them build code that lends itself to change. Unlike the practices of Scrum, many of the XP practices are specific to programming, and are aimed at addressing the most common problems that cause teams to build lousy code.

The focus on programming has led to the misbelieve that XP is only for advanced, highly skilled programmers. This is not true.

The most important practices of the primary XP practices are divided into four categories: _programming_, _integration_, _planning_ and _team_.

* Programming Practices
    * Test first programming, or also known as **TDD - Test Driven Development** using *unit tests* to test the code and requirements in an automated way. TDD helps programmers focus on the work that needs te be done, and gives the programmer confidence that the implementation does what it needs to be doing, and will report bugs that are introduced later on. The programmer can refactor his code without any fear of losing existing implementation.
    * **Pair programming** is two developers sitting behind a single workstation, writing code. One programmer types, while the other watches. They discus constantly what's going on. Teams working in pairs introduce far fewer bugs.
* Integration Practices
    * **10-minute build** The team creates an automated build for the entire codebase that runs in under 10 minutes. This build includes automatically running all of the unit tests and generating a report of which tests passed and which failed.
    * Individual developers use **continues integration** to constantly integrate changes from their teammates so everyone's sandbox is up-to-date.
    * XP aims to work with **small releases** that are the result of the iterative and integrated approach.
    
* Planning Practices
    * Using iterative development to manage the projects. Like scrum, the planning is split up into a short iterations called **weekly cycles** and long-term iterations called **quarterly cycles**.
    * Features and work that needs to be done is documentented in **user stories** in the same way as Scrum teams do.
* Team Practices
    * When teams sit together, they periodically absorb project information through **osmotic communication**.
    * XP teams work in an **informative workspaces** (taskboards and burndown charts) that uses **information radiators** like wall charts to automatically communicate information to people who happen to work with it.

### Lean
Lean is different. Unlike Scrum and XP, Lean doesn't include a set of practices. **Lean is a mindset**, and just like with the mindset for Scrum and XP, Lean comes with values and principles (In Lean terminology they are called "thinking tools").

* **Elimininate waste**: Find the work that you're doing that doesn't directly help to create valuable software and remove it from the project.
* **Amplify learning**: Use feedback from your project to improve how you build software.
* **Decide as late as possible**: Make very important decision for your project when you have to most information about it - at the last responsible moment.
* **Deliver as fast as possible**: Understand the cost of delay, and minimize it using pull systems and queues.
* **Empower the team**: Establish a focused and effective environment and build awhole team of energized people.
* **Build integrity in**: Build software that intuitively makes sense to the users, and which forms a coherent whole.
* **See the whole**: Understand the work that happens on your project - and take the right kind of measurement to make sure you're actually seeing everything clearly, warts and all.

Each values come with _thinking tools_ to help you apply the values to real-world situations for your team. 

### Kanban

Kanban is a method for process improvement used by agile teams. Kanban is a manufacturing term, adapted for software development. It is described as "The Kanban Method introduces a complex adaptive system that is intended to catalyze a Lean outcome within an organization".

Kanban has a different focus from agile methodologies like Scrum and XP. Scrum primarily focuses on project management: the scope of the work that will be done, when that work will be delivered, and whether the outcome of that work meets the needs of the users. The focus of XP is software development. The XP values and practices are built around creating an environment conducive to development, and developing programmer habits that help them design and build code that's simple and easy to change.

Kanban is about ___helping a team improve the way they build software___. Kanban has practices that give you a way to stabilize and improve your system for building software:

---

First follow the foundational principles:
* Start with what you do now
* Agree to pursue incremental, evolutionary change
* Initially, respect current roles, responsibilities and job titles

Then adopt the core practices:
* Visualize
* Limit WIP (Work In Progress)
* Manage Flow
* Make Process Policies Explicit
* Implement Feedback Loops
* Improve Collaboratively, Evolve Experimentally

It is not expected that implementations adopt all six practices initially. Partial implementations are referred to as "shallow" with the expectation that they gradually increase in depth as more practices are adopted and implemented with greater capability.

---


### Others

The methods listed above, may be the most popular used, but many other Agile methods and frameworks exist. These methods won't be discussed in this course.



Sources: 
* Learning Agile. Understanding Scrum, XP, Lean and Kanban
* https://en.wikipedia.org/wiki/Agile_software_development#Agile_methods
* https://en.wikipedia.org/wiki/Waterfall_model
