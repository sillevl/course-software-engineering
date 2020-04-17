# NPM Package Manager

> this is an extract of the home-automation exercise

Now that there exists some basic functionality it is time to converter the project into an library. The library will enable the use re-use the code in new and other projects without the need of writing the code all over again, or copy pasting. To leverage the power of a library it is necessary to convert the project into an **package**. A package is just some code that can be managed by some external tools. The most popular **package manager** for JavaScript and TypeScript is called **[NPM](https://npmjs.org)**.

Creating an NPM package is really easy. The only thing needed is to add some extra information about the package. This is done using an `package.json` file. The file can be created manually or by using the `npm init` command.

The `package.json` file will contain information about the project. A name, author, description, dependencies (the libraries needed to use this library)...

The goal of this iteration (version) is to create a package and publish it on npmjs.org. Every package must have a globally unique name. To manage all the exercises of every student we must agree on a naming scheme. You MUST use a scoped package name. More information can be found in the NPM documentation [about scopes](https://docs.npmjs.com/about-scopes).

```text
@[YOUR-NPM-USERNAME]/home-automation
```

* Create an account on [npmjs.org](https://npmjs.org)
* Replace \[YOUR-NPM-USERNAME\] (including the `[` and `]`) with the username of your account
* Don't forget to add the `@` sign in front.
* Use this name as the `name` of your project in your `package.json`

To get started building an NPM package, you can take a look at the following tutorials and coures:

Official NPM Documentation:

* [About NPM](https://docs.npmjs.com/about-npm/)
* [Creating a new NPM user account](https://docs.npmjs.com/creating-a-new-npm-user-account)
* [Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)
* [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages) (ignore the `npmrc` parts!)

Tutorials:

* [How to make a beatiful tiny npm package and publish it](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)
* [Creating your first npm package](https://dev.to/therealdanvega/creating-your-first-npm-package-2ehf)

YouTube videos:

* [NPM Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0) (Only the usage of NPM, not the creation of custom packages)
* [How to create and publish NPM Packages?](https://www.youtube.com/watch?v=rTsz09zRuTU)
* [Writing & Publishing your First NPM Package!](https://www.youtube.com/watch?v=4zzbNac6f6Q)
* [Create and Publish NPM package in less than 10 minutes](https://www.youtube.com/watch?v=I5ILzRzB46A)
