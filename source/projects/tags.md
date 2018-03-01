---
layout: page
title: Projects - Tags
---

<!-- https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ -->

{% assign rawtags = "" %}
{% for project in site.projects %}
{% if project.publish == true %}
{% assign ttags = project.tags | join:'|' | append:'|' %}
{% assign rawtags = rawtags | append:ttags %}
{% endif %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign tags = "" %}
{% for tag in rawtags %}
{% if tag != "" %}
{% if tags == "" %}
{% assign tags = tag | split:'|' %}
{% endif %}
{% unless tags contains tag %}
{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
{% endunless %}
{% endif %}
{% endfor %}

<div style="display: inline;">
{% for tag in tags %}
<a href="#{{ tag | slugify: 'pretty' }}" class="tag">
<span class="tag-content">{{ tag }}</span>
</a>
{% endfor %}
</div>

{% for tag in tags %}
<h2 id="{{ tag | slugify: 'pretty' }}">
    <a href="#{{ tag | slugify: 'pretty' }}" class="post-tag">{{ tag }}</a>
</h2>
<ul class="tag-list">
    {% for project in site.projects %}
    {% if project.publish == true %}
    {% if project.tags contains tag %}
    <li>
        <span class="tag-date">{{ project.date | date_to_string }}</span>
        <a class="tag-title" href="{{ site.baseurl }}{{ project.url }}">
            {{ project.title }}
        </a>
    </li>
    {% endif %}
    {% endif %}
    {% endfor %}
</ul>
{% endfor %}
