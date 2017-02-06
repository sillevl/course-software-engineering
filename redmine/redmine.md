# Redmine

# Introduction

![Logo Redmine](/redmine/img/2000px-Redmine_logo.svg.png)

> “Redmine is a flexible project management web application. Written using Ruby on Rails framework, it is cross-platform and cross-database.” \(www.redmine.org\)

Features

* Multiple projects support
* Flexible role based access control
* Flexible issue tracking system
* Gantt chart and calendar
* News, documents & files management
* Per project wiki
* Per project forums
* Time tracking
* Custom fields for issues, time-entries, projects and users
* SCM integration \(SVN, CVS, Git, Mercurial, Bazaar and Darcs\)



## Overview

## Activity

## Issues

## Roadmap

## Gantt

## Calendar

## Agile

## News

## Documents

## Doucments

## Wiki


> #### Note::Redmine Guide
>
> More information can be found on the website of Redmine: [Redmine Guide](http://www.redmine.org/guide)

### Markdown

Provides automatic markup for your text like Heading, lists, links, images, code

Markdown  can be used throughout all of Redmine \(wiki, issues, news\)

Take care of your layout !

[http://project.labict.be/help/en/wiki\\_syntax\\_detailed\\_markdown.html](http://project.labict.be/help/en/wiki\_syntax\_detailed\_markdown.html)

### Links

#### Redmine links

Redmine allows hyperlinking between resources \(issues, changesets, wiki pages...\) from anywhere wiki formatting is used.

* Link to an issue:
  **\#124**
  \(displays
  [~~\#124~~](https://project.labict.be/help/en/wiki_syntax_detailed_markdown.html#)
  , link is striked-through if the issue is closed\)
* Link to an issue note:
  **\#124-6**
  , or
  **\#124\#note-6**

Wiki links:

* **\[\[Guide\]\]**
  displays a link to the page named 'Guide':
  [Guide](https://project.labict.be/help/en/wiki_syntax_detailed_markdown.html#)
* **\[\[Guide\#further-reading\]\]**
  takes you to the anchor "further-reading". Headings get automatically assigned anchors so that you can refer to them:
  [Guide](https://project.labict.be/help/en/wiki_syntax_detailed_markdown.html#)
* **\[\[Guide\|User manual\]\]**
  displays a link to the same page but with a different text:
  [User manual](https://project.labict.be/help/en/wiki_syntax_detailed_markdown.html#)

You can also link to pages of an other project wiki:

* **\[\[sandbox:some page\]\]**
  displays a link to the page named 'Some page' of the Sandbox wiki
* **\[\[sandbox:\]\]**
  displays a link to the Sandbox wiki main page

Wiki links are displayed in red if the page doesn't exist yet, eg:[Nonexistent page](https://project.labict.be/help/en/wiki_syntax_detailed_markdown.html#).

Links to other resources:

* Documents:

  * **document\#17**
    \(link to document with id 17\)
  * **document:Greetings**
    \(link to the document with title "Greetings"\)
  * **document:"Some document"**
    \(double quotes can be used when document title contains spaces\)
  * **sandbox:document:"Some document"**
    \(link to a document with title "Some document" in other project "sandbox"\)

* Versions:

  * **version\#3**
    \(link to version with id 3\)
  * **version:1.0.0**
    \(link to version named "1.0.0"\)
  * **version:"1.0 beta 2"**
  * **sandbox:version:1.0.0**
    \(link to version "1.0.0" in the project "sandbox"\)

* Attachments:

  * **attachment:file.zip**
    \(link to the attachment of the current object named file.zip\)
  * For now, attachments of the current object can be referenced only \(if you're on an issue, it's possible to reference attachments of this issue only\)

* Changesets:

  * **r758**
    \(link to a changeset\)
  * **commit:c6f4d0fd**
    \(link to a changeset with a non-numeric hash\)
  * **svn1\|r758**
    \(link to a changeset of a specific repository, for projects with multiple repositories\)
  * **commit:hg\|c6f4d0fd**
    \(link to a changeset with a non-numeric hash of a specific repository\)
  * **sandbox:r758**
    \(link to a changeset of another project\)
  * **sandbox:commit:c6f4d0fd**
    \(link to a changeset with a non-numeric hash of another project\)

* Repository files:

  * **source:some/file**
    \(link to the file located at /some/file in the project's repository\)
  * **source:some/file@52**
    \(link to the file's revision 52\)
  * **source:some/file\#L120**
    \(link to line 120 of the file\)
  * **source:some/file@52\#L120**
    \(link to line 120 of the file's revision 52\)
  * **source:"some file@52\#L120"**
    \(use double quotes when the URL contains spaces
  * **export:some/file**
    \(force the download of the file\)
  * **source:svn1\|some/file**
    \(link to a file of a specific repository, for projects with multiple repositories\)
  * **sandbox:source:some/file**
    \(link to the file located at /some/file in the repository of the project "sandbox"\)
  * **sandbox:export:some/file**
    \(force the download of the file\)

* Forums:

  * **forum\#1**
    \(link to forum with id 1
  * **forum:Support**
    \(link to forum named Support\)
  * **forum:"Technical Support"**
    \(use double quotes if forum name contains spaces\)

* Forum messages:

  * **message\#1218**
    \(link to message with id 1218\)

* Projects:

  * **project\#3**
    \(link to project with id 3\)
  * **project:some-project**
    \(link to project with name or slug of "some-project"\)
  * **project:"Some Project"**
    \(use double quotes for project name containing spaces\)

* News:

  * **news\#2**
    \(link to news item with id 2\)
  * **news:Greetings**
    \(link to news item named "Greetings"\)
  * **news:"First Release"**
    \(use double quotes if news item name contains spaces\)

Escaping:

* You can prevent Redmine links from being parsed by preceding them with an exclamation mark: !

#### Externe links

HTTP URLs and email addresses are automatically turned into clickable links:

```
http://www.redmine.org, someone@foo.bar
```

displays: [http://www.redmine.org](http://www.redmine.org/),[someone@foo.bar](mailto:someone@foo.bar)

If you want to display a specific text instead of the URL, you can use the standard markdown syntax:

```
[Redmine web site](http://www.redmine.org)
```

displays: [Redmine web site](http://www.redmine.org/)

#### Text formatting

For things such as headlines, bold, tables, lists, Redmine supports Markdown syntax. See [http://daringfireball.net/projects/markdown/syntax](http://daringfireball.net/projects/markdown/syntax) for information on using any of these features. A few samples are included below, but the engine is capable of much more of that.

### Font style

```
* **bold**
* *Italic*
* ***bold italic***
* ~~strike-through~~
```

Display:

* **bold**
* _italic_
* _**bold italic**_
* ~~strike-through~~

### Inline images

* **!\[\]\(image\_url\)**  displays an image located at image\_url \(markdown syntax\)
* If you have an image attached to your wiki page, it can be displayed inline using its filename:  **!\[\]\(attached\_image\)**

### Headings

```
# Heading
## Subheading
### Subsubheading
```

Redmine assigns an anchor to each of those headings thus you can link to them with "\#Heading", "\#Subheading" and so forth.

### Blockquotes

Start the paragraph with**&gt;**

```
>
 Rails is a full-stack framework for developing database-backed web applications according to the Model-View-Control pattern.
To go live, all you need to add is a database and a web server.
```

Display:

> Rails is a full-stack framework for developing database-backed web applications according to the Model-View-Control pattern.  
> To go live, all you need to add is a database and a web server.

### Table of content

```
{{toc}} =
>
 left aligned toc
{{
>
toc}} =
>
 right aligned toc
```

### Horizontal Rule

```
---
```

#### Macros

Redmine has the following builtin macros:

`hello_world`

Sample macro.

`macro_list`

Displays a list of all available macros, including description if available.

`child_pages`

Displays a list of child pages. With no argument, it displays the child pages of the current wiki page. Examples:

```
{{child_pages}} -- can be used from a wiki page only
{{child_pages(depth=2)}} -- display 2 levels nesting only
```

`include`

Include a wiki page. Example:

```
{{include(Foo)}}
```

or to include a page of a specific project wiki:

```
{{include(projectname:Foo)}}
```

`collapse`

Inserts of collapsed block of text. Example:

```
{{collapse(View details...)
This is a block of text that is collapsed by default.
It can be expanded by clicking a link.
}}
```

`thumbnail`

Displays a clickable thumbnail of an attached image. Examples:

```
{{thumbnail(image.png)}}
{{thumbnail(image.png, size=300, title=Thumbnail)}}
```

#### Code highlighting

Default code highlightment relies on [CodeRay](http://coderay.rubychan.de/), a fast syntax highlighting library written completely in Ruby. It currently supports c, clojure, cpp \(c++, cplusplus\), css, delphi \(pascal\), diff \(patch\), erb \(eruby, rhtml\), go, groovy, haml, html \(xhtml\), java, javascript \(ecmascript, ecma\_script, java\_script, js\), json, lua, php, python, ruby \(irb\), sass, sql, taskpaper, text \(plain, plaintext\), xml and yaml \(yml\) languages, where the names inside parentheses are aliases.

You can highlight code at any place that supports wiki formatting using this syntax \(note that the language name or alias is case-insensitive\):

```
~~~ ruby
  Place your code here.
~~~
```

Example:

```ruby
# The Greeter class
class Greeter

  def initialize (name
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
  
end
```

