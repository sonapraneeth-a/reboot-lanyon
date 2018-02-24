---
layout: page
title: Blog - Tags
---

<div style="display: inline;">
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify: 'pretty' }}" class="chip tag">{{ tag[0] }}</a>
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
