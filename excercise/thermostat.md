# Exercise: Thermostat

Create a Ruby application that accepts a wanted temperature value and calculates a result on a given temperature value. The result can be the state of the *heating* or *airconditioning*, a LED that indicates a color and the result in some text format (json or plain text).

### v0.0.1
A Ruby application that can set the wanted temperature value and a range to calculate the output states. 

### v0.0.2
The application supports different temperature units such as:
* Celsius
* Fahrenheit
* Kelvin

These units can be set for input and output values separately.

### v0.0.3
Instead of hard-coding temperatures, the values must be supplied using command-line arguments.
For example the following command could be used to execute the thermostat application:

```
ruby app.rb 25 1 23
```

In the above example, the following values are used:
* 25:  Wanted temperature
* 1: Range
* 23: Current temperature

An example of the output could be: 

```
Current temperature: 23°C, Wanted value is 25°C
Cooling: false, Heating: true
RGB Color: #0000FF
```

### v0.0.4
Instead of a give value, the current temperature must be supplied using an HTTP URL.

For example: https://labict.be/software-engineering/temperature/api/temperature/fake
