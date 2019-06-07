---
layout: post
title: Launching my new jekyll theme on website
categories: ['Website']
tags: ['HTML5', 'CSS3']
excerpt_separator: <!--more-->
published: 12 February, 2018 15:23 IST
assets: /assets/blog/2018-02-12-reboot-lanyon
related: true
comments: false
sharing: true
publish: true
toc: true
toc_label: On this page
toc_icon: table  # corresponding Font Awesome icon name (without fa prefix)
---

Recently, I've been working on a jekyll theme which has the look and feel of the [lanyon theme](https://lanyon.getpoole.com) and is suitable for any screen type. Also, I wanted the theme to be easily maintainable for adding new features. This has resulted in this new jekyll theme. The core idealogy of this website's theme has been derived from the lanyon theme.<!--more-->

The theme is open-sourced under MIT License.

# Instructions to use

- Fork the repository from the following [link](https://github.com/sonapraneeth-a/reboot-lanyon)
<img class="image-full-width" src="{{ site.baseurl }}{{ site.url }}/assets/blog/2018-02-12-reboot-lanyon/fork_reboot-lanyon-marked.PNG" alt="Home page of the source of the project"/>
- Update the ```_config.yml``` file present in the source folder

# Features

Some of the main features available on this theme:
- Formatting text in markdown[^1]
- Code highlighting using [prism.js](http://prismjs.com/). Currently okaidia theme is being used
    - Input code from file
    - Input code from github gist
    - Inline code highlighting of code would require HTML
- $\LaTeX$ integration using MathJaX[^latex]
- Adding figures with captions
- Utility classes like <span class="info">info</span>, <span class="danger">danger</span>, 
  <span class="success">success</span> and <span class="warning">warning</span>
   - Several components are designed for the above utilities like admonition, blockquotes
- Menus
    - Sidebar
    - Navigation bar
- [FontAwesome 5.3.1 icons](https://fontawesome.com/) for navigation menu and sidebar menu items
- Blog posts
    - Sticky table of contents for the blog posts
    - Estimated time to read the post as well last modified date for the post
    - Sharing modules (facebook, gplus, twitter, linkedin etc.,) for all posts
    - Search box for searching through posts based on key words
    - Option for scrolling to the top for long posts
- Google Analytics for tracking


## Markdown markup

With the use of markdown, it is easy to generate the web-page content without worrying about HTML 

- **Bold** ``` **Bold** ```
- *Italics*
- [Sample link](https://www.google.co.in)

## Code highlighting

This is a test code written in C++ highlighted using monokai theme using rouge highlighter.

- Inline CSS <code class="language-text">Test</code>. But this requires the 
<code class="language-html">&lt;code class="language-&lt;lang&gt;"&gt;..&lt;/code&gt;</code> block
where <code class="language-html">&lt;lang&gt;</code> is the language of the code
- Prism highlighting of code with {% raw %}{% prism %} ... {% endprism %}{% endraw %}
{% prism cpp numbering highlight="1,3-4,6" %}
#include &lt;cstdio&gt;

int main()
{
    printf("Hello World\n");
    return 0;
}
{% endprism %}

- Prism highlighting with backticks

```html
<!DOCTYPE html>
<html>
</html>
```

```bash
$ sudo apt-get install vim-gnome
```

- Prism highlighting with files

{% prism cpp numbering highlight="3" file="/assets/blog/2018-02-12-reboot-lanyon/test.cpp" %}
// ...
{% endprism %}

- Prism highlighting with Gist API
<pre class="line-numbers language-cpp"
     data-line="3,5,7-8"
     data-jsonp="https://api.github.com/gists/a4a981d0e479446054ee38cad99f5383">
</pre>

- Gist code highlighting
<p><script src="https://gist.github.com/sonapraneeth-a/a4a981d0e479446054ee38cad99f5383.js"></script></p>

{% comment %}
{% gist a4a981d0e479446054ee38cad99f5383 %}
{% endcomment %}

## $\LaTeX$

Inline $\LaTeX$ markup of Pythagoras theorem $ a^2 + b^2 = c^2 $

Equation rendering

$$ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz $$

$$
\begin{aligned}
m &= \frac{\Delta y}{\Delta x}\\
 &= \frac{y_m - y_a}{x_m - x_a}\\
 &= \frac{f(a+h) - f(a)}{a+h- a} \\
 &= \frac{f(a+h) - f(a)}{h}\\
\end{aligned}
$$

## Utility Classes

Currently four utility classes are supported in theme: <span class="info">info</span>, 
<span class="danger">danger</span>, <span class="success">success</span> and <span class="warning">warning</span>

### Styled blockquotes

> **Information block**  
> First line
{: .info}

> **Danger block**  
> First line
{: .danger}

> **Success block**  
> First line
{: .success}

> **Warning block**  
> First line
{: .warning}

### Styled text

- Information text
{: .info}
- Danger text
{: .danger}
- Success text
{: .success}
- Warning text
{: .warning}

### Styled admonitions

<div class="admonition info">
    <div class="admonition-title">
    Information
    </div>
    <div class="admonition-content">
    A lot of information in this admonition
    </div>
</div>

<div class="admonition danger">
    <div class="admonition-title">
    Danger
    </div>
    <div class="admonition-content">
    A lot of information in this admonition
    </div>
</div>

<div class="admonition success">
    <div class="admonition-title">
    Success
    </div>
    <div class="admonition-content">
    A lot of information in this admonition
    </div>
</div>

<div class="admonition warning">
    <div class="admonition-title">
    Warning
    </div>
    <div class="admonition-content">
    A lot of information in this admonition
    </div>
</div>


## Menu

There are two types of menu's available in this theme.

### Sidebar

For convinience on mobile devices, there is a sidebar which can be toggled on/off by 
clicking on the hamburger icon (<i class="fa fa-bars"></i>).

### Navbar

For large screen devices, one can use the navigation bar present at the top of the screen 
for accessing various links. The navigation bar also highlights the current active page in the menu.


##### Footnotes

[^1]: Markdown is a subset of HTML Markup
[^latex]: [MathJax Docs](http://docs.mathjax.org/en/latest/mathjax.html)

{% comment %}
##### Footnotes

* footnotes will be placed here. This line is necessary
{:footnotes}
{% endcomment %}

{% comment %}
## Carousel

<div class="carousel-box">
    <div class="carousel-buttons">
        <button class="carousel-prev">
            <span class="carousel-offscreen">Previous</span>
        </button>
        <button class="carousel-next">
            <span class="carousel-offscreen">Next</span>
        </button>
    </div>
    <ol class="carousel-content">
        <li class="carousel-current"><!--<img src="http://lorempixel.com/200/200" alt="1">-->1</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="2">-->2</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="3">-->3</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="4">-->4</li>
    </ol>
</div>

<div class="carousel-box">
    <div class="carousel-buttons">
        <button class="carousel-prev">
            <span class="carousel-offscreen">Previous</span>
        </button>
        <button class="carousel-next">
            <span class="carousel-offscreen">Next</span>
        </button>
    </div>
    <ol class="carousel-content">
        <li class="carousel-current"><!--<img src="http://lorempixel.com/200/200" alt="1">-->5</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="2">-->6</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="3">-->7</li>
        <li><!--<img src="http://lorempixel.com/200/200" alt="4">-->8</li>
    </ol>
</div>

{% highlight cpp linenos hl_lines=3 %}
#include <cstdio>

int main()
{
    printf("Hello World\n");
    return 0;
}
{% endhighlight %}

{% highlight html linenos %}
<!DOCTYPE html>
<html>
</html>
{% endhighlight %}


{% endcomment %}

