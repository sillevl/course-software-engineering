# Creating Ruby gems

> Source: [rubygems.org](http://guides.rubygems.org/make-your-own-gem/)


## Introduction

Creating and publishing your own gem is simple thanks to the tools baked right into RubyGems. Let’s make a simple “hello world” gem, and feel free to play along at home! The code for the gem we’re going to make here is up on [GitHub](https://github.com/qrush/hola).


## Your first gem

I started with just one Ruby file for my `hola` gem, and the gemspec. You’ll need a new name for yours (maybe `hola_yourusername`) to publish it. Check the Patterns guide for basic recommendations to follow when naming a gem.

```bash
% tree
.
├── hola.gemspec
└── lib
    └── hola.rb
```
