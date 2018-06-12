---
layout: page
title: Blog - Categories
icon: pencil-alt
---

<div style="display: inline;">
    {% for category in site.categories %}
    {% assign count = 0 %}
    {% for post in category[1] %}
    {% assign count = count | plus: 1 %}
    {% endfor %}
    <a href="#{{ category[0] | slugify: 'pretty' }}" class="category">
        <span class="category-content">{{ category[0] }}</span>
        <span class="category-count">{{ count }}</span>
    </a>
    {% endfor %}
</div>

{% for category in site.categories %}
<h2 id="{{ category[0] | slugify: 'pretty' }}">
    <a href="#{{ category[0] | slugify: 'pretty' }}" class="post-category">{{ category[0] }}</a>
</h2>
<ul class="category-list">
    {% for post in category[1] %}
    <li>
        <span class="category-date">{{ post.date | date_to_string }}</span>
        <a class="category-title" href="{{ site.baseurl }}{{ post.url }}">
            {{ post.title }}
        </a>
    </li>
    {% endfor %}
</ul>
{% endfor %}
