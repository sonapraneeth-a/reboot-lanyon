---
layout: page
title: Blog - Tags
icon: pencil-alt
---

<div style="display: inline;">
    {% for tag in site.tags %}
    {% assign count = 0 %}
    {% for post in tag[1] %}
    {% assign count = count | plus: 1 %}
    {% endfor %}
    <a href="#{{ tag[0] | slugify: 'pretty' }}" class="tag">
        <span class="tag-content">{{ tag[0] }}</span>
        <span class="tag-count">{{ count }}</span>
    </a>
    {% endfor %}
</div>

{% for tag in site.tags %}
<h2 id="{{ tag[0] | slugify: 'pretty' }}">
    <a href="#{{ tag[0] | slugify: 'pretty' }}" class="post-tag">{{ tag[0] }}</a>
</h2>
<ul class="tag-list">
    {% for post in tag[1] %}
    <li>
        <span class="tag-date">{{ post.date | date_to_string }}</span>
        <a class="tag-title" href="{{ site.baseurl }}{{ post.url }}">
            {{ post.title }}
        </a>
    </li>
    {% endfor %}
</ul>
{% endfor %}
