# Creating Ruby Gems

> Source: [rubygems.org](http://guides.rubygems.org/make-your-own-gem/)

## Introduction

Creating and publishing your own gem is simple thanks to the tools baked right into RubyGems. Let’s make a simple “hello world” gem, and feel free to play along at home! The code for the gem we’re going to make here is up on [GitHub](https://github.com/qrush/hola).

## Your first gem

I started with just one Ruby file for my `hola` gem, and the gemspec. You’ll need a new name for yours \(maybe `hola_yourusername`\) to publish it. Check the Patterns guide for [basic recommendations](http://guides.rubygems.org/patterns/#consistent-naming) to follow when naming a gem.

```bash
% tree
.
├── hola.gemspec
└── lib
    └── hola.rb
```

Code for your package is placed within the `lib` directory. The convention is to have one Ruby file with the same name as your gem, since that gets loaded when `require 'hola'` is run. That one file is in charge of setting up your gem’s code and API.

The code inside of `lib/hola.rb` is pretty bare bones. It just makes sure that you can see some output from the gem:

```ruby
% cat lib/hola.rb
class Hola
  def self.hi
    puts "Hello world!"
  end
end
```

The gemspec defines what’s in the gem, who made it, and the version of the gem. It’s also your interface to [RubyGems.org](http://rubygems.org/). All of the information you see on a gem page \(like [jekyll](http://rubygems.org/gems/jekyll)’s\) comes from the gemspec.

```ruby
% cat hola.gemspec
Gem::Specification.new do |s|
  s.name        = 'hola'
  s.version     = '0.0.0'
  s.date        = '2010-04-28'
  s.summary     = "Hola!"
  s.description = "A simple hello world gem"
  s.authors     = ["Nick Quaranto"]
  s.email       = 'nick@quaran.to'
  s.files       = ["lib/hola.rb"]
  s.homepage    =
    'http://rubygems.org/gems/hola'
  s.license       = 'MIT'
end
```

> The description member can be much longer than you see in this example. If it matches `/^== [A-Z]/` then the description will be run through [RDoc’s markup formatter](https://github.com/rdoc/rdoc) for display on the RubyGems web site. Be aware though that other consumers of the data might not understand this markup.

Look familiar? The gemspec is also Ruby, so you can wrap scripts to generate the file names and bump the version number. There are lots of fields the gemspec can contain. To see them all check out the full [reference](http://guides.rubygems.org/specification-reference).

After you have created a gemspec, you can build a gem from it. Then you can install the generated gem locally to test it out.

```bash
% gem build hola.gemspec
Successfully built RubyGem
Name: hola
Version: 0.0.0
File: hola-0.0.0.gem

% gem install ./hola-0.0.0.gem
Successfully installed hola-0.0.0
1 gem installed
```

Of course, the smoke test isn’t over yet: the final step is to `require` the gem and use it:

```bash
% irb
>> require 'hola'
=> true
>> Hola.hi
Hello world!
```

> If you’re using an earlier Ruby than 1.9.2, you need to start the session with `irb -rubygems` or require the rubygems library after you launch irb.

Now you can share hola with the rest of the Ruby community. Publishing your gem out to RubyGems.org only takes one command, provided that you have an account on the site.

Once this has been setup, you can push out the gem:

```bash
% gem push hola-0.0.0.gem
Pushing gem to RubyGems.org...
Successfully registered gem: hola (0.0.0)
```

In just a short time \(usually less than a minute\), your gem will be available for installation by anyone. You can see it [on the RubyGems.org site](https://rubygems.org/gems/hola) or grab it from any computer with RubyGems installed:

```bash
% gem list -r hola

*** REMOTE GEMS ***

hola (0.0.0)

% gem install hola
Successfully installed hola-0.0.0
1 gem installed
```

It’s really that easy to share code with Ruby and RubyGems.

## Adding an executable

In addition to providing libraries of Ruby code, gems can also expose one or many executable files to your shell’s `PATH`. Probably the best known example of this is `rake`.

Adding an executable to a gem is a simple process. You just need to place the file in your gem’s `bin` directory, and then add it to the list of executables in the gemspec. Let’s add one for the Hola gem. First create the file and make it executable \(on Linux\):

```bash
% mkdir bin
% touch bin/hola
% chmod a+x bin/hola
```

The executable file itself just needs a [shebang](http://www.catb.org/jargon/html/S/shebang.html) in order to figure out what program to run it with. Here’s what Hola’s executable looks like:

```bash
% cat bin/hola
#!/usr/bin/env ruby

require 'hola'
puts Hola.hi(ARGV[0])
```

All it’s doing is loading up the gem, and passing the first command line argument as the language to say hello with. Here’s an example of running it:

```bash
% ruby -Ilib ./bin/hola
hello world

% ruby -Ilib ./bin/hola spanish
hola mundo
```

Finally, to get Hola’s executable included when you push the gem, you’ll need to add it in the gemspec.

```bash
% head -4 hola.gemspec
Gem::Specification.new do |s|
  s.name        = 'hola'
  s.version     = '0.0.1'
  s.executables << 'hola'
```

Push up that new gem, and you’ll have your own command line utility published! You can add more executables as well in the `bin` directory if you need to, there’s an `executables` array field on the gemspec.

> Note that you should change the gem’s version when pushing up a new release. For more information on gem versioning, see the [Patterns Guide](http://guides.rubygems.org/patterns/#semantic-versioning)

