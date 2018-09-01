---
layout: page
title: Blog - Categories
icon: pencil-alt
---

<div style="display: inline-flex; flex-wrap: wrap;">
    {% for category in site.categories %}
    {% assign count = 0 %}
    {% for post in category[1] %}
    {% assign count = count | plus: 1 %}
    {% endfor %}
    <a href="#{{ category[0] | slugify: 'pretty' }}" style="text-decoration: none;">
        <div class="chip">
            <span class="chip-content">
            <i class="fa fa-folder-open" aria-hidden="true"></i>&nbsp;{{ category[0] }}</span>
            <span class="chip-count">{{ count }}</span>
        </div>
    </a>
    {% endfor %}
</div>

<ul style="list-style-type: none; padding-left: 0px;">
{% for category in site.categories %}
<li>
    <h2 id="{{ category[0] | slugify: 'pretty' }}">{{ category[0] }}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
        {% for post in category[1] %}
        {% if post.publish == true %}
        <li style="margin-bottom: 0.5rem;">
            <div class="card">
                <div class="card-content">
                    <a href="{{ site.baseurl }}{{ post.url }}" style="text-decoration: none;">
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
