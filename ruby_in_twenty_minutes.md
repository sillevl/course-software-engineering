# Ruby in Twenty Minutes

Source: https://www.ruby-lang.org/en/documentation/quickstart/

## Introduction
This is a small Ruby tutorial that should take no more than 20 minutes to complete. It makes the assumption that you already have Ruby installed. (If you do not have Ruby on your computer install it before you get started.)

## Interactive Ruby
Ruby comes with a program that will show the results of any Ruby statements you feed it. Playing with Ruby code in interactive sessions like this is a terrific way to learn the language.

Open up IRB (which stands for Interactive Ruby).

* If you’re using **Mac OS X** open up Terminal and type irb, then hit enter.
* If you’re using **Linux**, open up a shell and type irb and hit enter.
* If you’re using **Windows**, open Interactive Ruby from the Ruby section of your Start Menu.

```Ruby
irb(main):001:0>
```

Ok, so it’s open. Now what?

Type this: `"Hello World"`

```Ruby
irb(main):001:0> "Hello World"
=> "Hello World"
```

## Ruby Obeyed You!
What just happened? Did we just write the world’s shortest “Hello World” program? Not exactly. The second line is just IRB’s way of telling us the result of the last expression it evaluated. If we want to print out “Hello World” we need a bit more:

```Ruby
irb(main):002:0> puts "Hello World"
Hello World
=> nil
```

`puts` is the basic command to print something out in Ruby. But then what’s the `=> nil` bit? That’s the result of the expression. `puts` always returns nil, which is Ruby’s absolutely-positively-nothing value.

## Your Free Calculator is Here
Already, we have enough to use IRB as a basic calculator:

```Ruby
irb(main):003:0> 3+2
=> 5
```

Three plus two. Easy enough. What about three times two? You could type it in, it’s short enough, but you may also be able to go up and change what you just entered. Try hitting the **up-arrow** on your keyboard and see if it brings up the line with `3+2` on it. If it does, you can use the left arrow key to move just after the `+` sign and then use backspace to change it to a `*` sign.

```Ruby
irb(main):004:0> 3*2
=> 6
```
Next, let’s try three squared:

```Ruby
irb(main):005:0> 3**2
=> 9
```

In Ruby `**` is the way you say “to the power of”. But what if you want to go the other way and find the square root of something?

```Ruby
irb(main):006:0> Math.sqrt(9)
=> 3.0
```

Ok, wait, what was that last one? If you guessed, “it was figuring out the square root of nine,” you’re right. But let’s take a closer look at things. First of all, what’s `Math`?

## Modules Group Code by Topic
`Math` is a built-in module for mathematics. Modules serve two roles in Ruby. This shows one role: grouping similar methods together under a familiar name. `Math` also contains methods like `sin()` and `tan()`.

Next is a dot. What does the dot do? The dot is how you identify the receiver of a message. What’s the message? In this case it’s `sqrt(9)`, which means call the method `sqrt`, shorthand for “square root” with the parameter of `9`.

The result of this method call is the value `3.0`. You might notice it’s not just `3`. That’s because most of the time the square root of a number won’t be an integer, so the method always returns a floating-point number.

What if we want to remember the result of some of this math? Assign the result to a variable.

```Ruby
irb(main):007:0> a = 3 ** 2
=> 9
irb(main):008:0> b = 4 ** 2
=> 16
irb(main):009:0> Math.sqrt(a+b)
=> 5.0
```

As great as this is for a calculator, we’re getting away from the traditional `Hello World` message that beginning tutorials are supposed to focus on… so let’s go back to that.

## Traditional "Hello World"

What if we want to say “Hello” a lot without getting our fingers all tired? We need to define a method!

```Ruby
irb(main):010:0> def hi
irb(main):011:1> puts "Hello World!"
irb(main):012:1> end
=> :hi
```

The code def hi starts the definition of the method. It tells Ruby that we’re defining a method, that its name is hi. The next line is the body of the method, the same line we saw earlier: puts "Hello World". Finally, the last line end tells Ruby we’re done defining the method. Ruby’s response => :hi tells us that it knows we’re done defining the method. This response could be => nil for Ruby 2.0 and earlier versions. But, it’s not important here, so let’s go on.


## The Brief, Repetitive Lives of a Method
Now let’s try running that method a few times:

```Ruby
irb(main):013:0> hi
Hello World!
=> nil
irb(main):014:0> hi()
Hello World!
=> nil
```

Well, that was easy. Calling a method in Ruby is as easy as just mentioning its name to Ruby. If the method doesn’t take parameters that’s all you need. You can add empty parentheses if you’d like, but they’re not needed.

What if we want to say hello to one person, and not the whole world? Just redefine hi to take a name as a parameter.

```Ruby
irb(main):015:0> def hi(name)
irb(main):016:1> puts "Hello #{name}!"
irb(main):017:1> end
=> :hi
irb(main):018:0> hi("Matz")
Hello Matz!
=> nil
```

So it works… but let’s take a second to see what’s going on here.


## Holding Spots in a String
What’s the #{name} bit? That’s Ruby’s way of inserting something into a string. The bit between the braces is turned into a string (if it isn’t one already) and then substituted into the outer string at that point. You can also use this to make sure that someone’s name is properly capitalized:

```Ruby
irb(main):019:0> def hi(name = "World")
irb(main):020:1> puts "Hello #{name.capitalize}!"
irb(main):021:1> end
=> :hi
irb(main):022:0> hi "chris"
Hello Chris!
=> nil
irb(main):023:0> hi
Hello World!
=> nil
```

A couple of other tricks to spot here. One is that we’re calling the method without parentheses again. If it’s obvious what you’re doing, the parentheses are optional. The other trick is the default parameter World. What this is saying is “If the name isn’t supplied, use the default name of "World"”.


## Evolving Into a Greeter
What if we want a real greeter around, one that remembers your name and welcomes you and treats you always with respect. You might want to use an object for that. Let’s create a “Greeter” class.

```Ruby
irb(main):024:0> class Greeter
irb(main):025:1>   def initialize(name = "World")
irb(main):026:2>     @name = name
irb(main):027:2>   end
irb(main):028:1>   def say_hi
irb(main):029:2>     puts "Hi #{@name}!"
irb(main):030:2>   end
irb(main):031:1>   def say_bye
irb(main):032:2>     puts "Bye #{@name}, come back soon."
irb(main):033:2>   end
irb(main):034:1> end
=> :say_bye
```

The new keyword here is class. This defines a new class called Greeter and a bunch of methods for that class. Also notice @name. This is an instance variable, and is available to all the methods of the class. As you can see it’s used by say_hi and say_bye.

So how do we get this Greeter class set in motion? Create an object.

