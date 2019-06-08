---
layout: page
title: Blog - Tags
icon: pencil-alt
---

<div style="display: inline-flex; flex-wrap: wrap;">
    {% for tag in site.tags %}
    {% assign count = 0 %}
    {% for post in tag[1] %}
    {% assign count = count | plus: 1 %}
    {% endfor %}
    <a href="#{{ tag[0] | slugify: 'pretty' }}" class="tag">
        <div class="chip">
            <span class="chip-content">
            <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;{{ tag[0] }}</span>
            <span class="chip-count">{{ count }}</span>
        </div>
    </a>
    {% endfor %}
</div>

<ul style="list-style-type: none; padding-left: 0px;">
{% for tag in site.tags %}
<li>
    <h2 id="{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
        {% for post in tag[1] %}
        {% if post.publish == true %}
        <li style="margin-bottom: 0.5rem;">
            <div class="card">
                <div class="card-content">
                    <a href="{{ site.url }}{{ site.baseurl }}/{{ post.url }}" style="text-decoration: none;">
                        <span>{{ post.title }}</span>
                    </a>
                    <span style="float: right;">{{ post.date | date_to_string }}</span>
                </div>
            </div>
        </li>
        {% endif %}
        {% endfor %}
    </ul>
</li>
{% endfor %}
</ul>
