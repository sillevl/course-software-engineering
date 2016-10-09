# Designing Classes with a Single Responsibility

The foundation of an object-oriented system is the _message_, but the most visible organizational structure is the _class_. *single responsibility* concentrates on how to decide what belongs in a class. The other principles have more emphasis on the messages.

When creating new code, a lot of questions might arrise. 

* What are the classes to use?
* How many classes should I have?
* What behavior will they implement?
* How much do they know about other classes?
* How much of them selves should they expose?

These questions can be overwhelming. Fear not. The first thing to do is to _insist that it be simple_.
The goal is to model your application, using classes, such that it does what it is supposed to _right now_, and is easy to change _later_.

These are two different criteria. Everyone can arrange code to make it work right now. Creating an easy-to-change application, however is a different matter. The quality of easy changeability reveals the craft of programming. Achieving it takes knowledge, skill and a bit of artistic creativity. _Single responsibility_ is a simple technique that helps to improve the easiness of changeability. You just need to know how to use it.

## Deciding What Belongs in a Class

Having an application in mind, you know what it should do. You may even know how to implement the most interesting things bits of behavior. The problem is not of technical knowledge but of organization. You know how to write the code, but not where to put it.

### Grouping Methods into Classes

In class-based object-oriented programming languages, methods are defined in classes. The classes will affect how you think about your application forever. They define a virtual world that constrains the imagination of everyone that will be using those classes. You are constructing a box that may be difficult to think outside of.

It is important to correctly group methods in classes, but in the early stage of the project, you cannot possibly get it right. You will never know less than what you know right now.
If the application succeeds, many of the decisions you make today will need to be changed later. If the moment comes, the ability to successfully make those changes is determined by the design.

Design is more than the art of preserving changeability than it is the act of achieving perfection.

### Organizing Code to Allow for Easy Changes

The idea of _easy_ is to broad. We need concrete definitions of easiness and specific criteria by which to judge code.

If you define easy to change as: 

* Changes have no unexpected side effects
* Small changes in requirements require correspondingly small changes in code
* Existing code is easy to reuse
* The easiest way to make a change is to add code that in itself is easy to change

Then the code you write should have the following qualities. Code should be:

* **Transparent**: The consequences of change should be obvious in the code that is changing and in distant code that relies upon it.
* **Reasonable**: The cos of any change should be proportional to the benefits the change achieves.
* **Usable**: Existing code should be usable in new and unexpected contexts.
* **Exemplary**: The code itself should encourage those who change it to perpetuate these qualities.

## Creating Classes That have a Single Responsibility


### An Example Application: Bicycles and Gears

```ruby
chainring = 52                    # number of teeth
cog       = 11
ratio     = chainring / cog.to_f
puts ratio                        # -> 4.72727272727273

chainring = 30
cog       = 27
ratio     = chainring / cog.to_f
puts ratio                        # -> 1.11111111111111
```

````ruby
class Gear
  attr_reader :chainring, :cog
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    chainring / cog.to_f
  end
end

puts Gear.new(52, 11).ratio        # -> 4.72727272727273
puts Gear.new(30, 27).ratio        # -> 1.11111111111111
```

```ruby 
class Gear
  attr_reader :chainring, :cog, :rim, :tire
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def ratio
    chainring / cog.to_f
  end

  def gear_inches
      # tire goes around rim twice for diameter
    ratio * (rim + (tire * 2))
  end
end

puts Gear.new(52, 11, 26, 1.5).gear_inches
# -> 137.090909090909

puts Gear.new(52, 11, 24, 1.25).gear_inches
# -> 125.272727272727
```

```ruby
puts Gear.new(52, 11).ratio # didn't this used to work?
# ArgumentError: wrong number of arguments (2 for 4)
#	 from (irb):20:in `initialize'
#	 from (irb):20:in `new'
#	 from (irb):20
```

### Why Single Responsibility Matters


### Determining If a Class Has a Single Responsibility


### Determining When to Make Design Decisions


## Writing Code That Embraces Change


### Depend on Behavior, Not Data

```ruby
class Gear
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    @chainring / @cog.to_f      # <-- road to ruin
  end
end
```

```ruby
class Gear
  attr_reader :chainring, :cog  # <-------
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    chainring / cog.to_f        # <-------
  end
end
```

```ruby
  # default implementation via attr_reader
  def cog
    @cog
  end
```

```ruby
  # a simple reimplementation of cog
  def cog
    @cog * unanticipated_adjustment_factor
  end
```

```ruby
  # a more complex one
  def cog
    @cog * (foo? ? bar_adjustment : baz_adjustment)
  end
```

```ruby
class ObscuringReferences
  attr_reader :data
  def initialize(data)
    @data = data
  end

  def diameters
    # 0 is rim, 1 is tire
    data.collect {|cell|
      cell[0] + (cell[1] * 2)}
  end
  # ... many other methods that index into the array
end
```

```ruby
# rim and tire sizes (now in milimeters!) in a 2d array
@data = [[622, 20], [622, 23], [559, 30], [559, 40]]
```

```ruby
class RevealingReferences
  attr_reader :wheels
  def initialize(data)
    @wheels = wheelify(data)
  end

  def diameters
    wheels.collect {|wheel|
      wheel.rim + (wheel.tire * 2)}
  end
  # ... now everyone can send rim/tire to wheel

  Wheel = Struct.new(:rim, :tire)
  def wheelify(data)
    data.collect {|cell|
      Wheel.new(cell[0], cell[1])}
  end
end
```

### Enforce Single Responsibility Everywhere

```ruby
  def diameters
    wheels.collect {|wheel|
      wheel.rim + (wheel.tire * 2)}
  end
```

```ruby
  # first - iterate over the array
  def diameters
    wheels.collect {|wheel| diameter(wheel)}
  end

  # second - calculate diameter of ONE wheel
  def diameter(wheel)
    wheel.rim + (wheel.tire * 2)
  end
```

```ruby
  def gear_inches
      # tire goes around rim twice for diameter
    ratio * (rim + (tire * 2))
  end
```

```ruby
  def gear_inches
    ratio * diameter
  end

  def diameter
    rim + (tire * 2)
  end
```

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @wheel     = Wheel.new(rim, tire)
  end

  def ratio
    chainring / cog.to_f
  end

  def gear_inches
    ratio * wheel.diameter
  end

  Wheel = Struct.new(:rim, :tire) do
    def diameter
      rim + (tire * 2)
    end
  end
end
```

## Finally, the Real Wheel

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel
  def initialize(chainring, cog, wheel=nil)
    @chainring = chainring
    @cog       = cog
    @wheel     = wheel
  end

  def ratio
    chainring / cog.to_f
  end

  def gear_inches
    ratio * wheel.diameter
  end
end

class Wheel
  attr_reader :rim, :tire

  def initialize(rim, tire)
    @rim       = rim
    @tire      = tire
  end

  def diameter
    rim + (tire * 2)
  end

  def circumference
    diameter * Math::PI
  end
end

@wheel = Wheel.new(26, 1.5)
puts @wheel.circumference
# -> 91.106186954104

puts Gear.new(52, 11, @wheel).gear_inches
# -> 137.090909090909

puts Gear.new(52, 11).ratio
# -> 4.72727272727273
```

## Summary



























