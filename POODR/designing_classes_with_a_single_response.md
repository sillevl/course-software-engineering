# Designing Classes with a Single Response


## Deciding What Belongs in a Class


### Grouping Methods into Classes


### Organizing Code to Allow for Easy Changes


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

### Why Single Responsibility Matters


### Determining If a Class Has a Single Responsibility


### Determining When to Make Design Decisions


## Writing Code That Embraces Change


### Depend on Behavior, Not Data


### Enforce Single Responsibility Everywhere


## Finally, the Real Wheel


## Summary



























