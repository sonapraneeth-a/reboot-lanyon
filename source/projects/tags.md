---
layout: page
title: Projects - Tags
---

<!-- https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ -->

{% assign rawtags = "" %}
{% for project in site.projects %}
{% if project.publish == true %}
{% assign ttags = project.tags | join:',' | append:',' %}
{% assign rawtags = rawtags | append:ttags %}
{% endif %}
{% endfor %}
{% assign rawtags = rawtags | split:',' | sort %}

{% assign tags = "" %}
{% assign tags_count = "" %}
{% assign count = 0 %}
{% if rawtags.size > 0 %}
{% assign tag_content = rawtags[0] %}
{% assign size = rawtags.size | minus: 1 %}
{% assign tags = rawtags[0] %}
{% for index in (1..size) %}
{% if rawtags[index] == tag_content %}
{% assign count = count | plus: 1 %}
{% else %}
{% if tags_count == "" %}
{% assign tags_count = count | plus: 1 | downcase %}
{% else %}
{% assign tags_count = tags_count | join:',' | append:',' | append: count | downcase | split:',' %}
{% endif %}
{% assign count = 1 %}
{% assign tag_content = rawtags[index] %}
{% assign tags = tags | join:',' | append:',' | append:rawtags[index] | split:',' %}
{% endif %}
{% endfor %}
{% if count != 0 %}
{% assign tags_count = tags_count | join:',' | append:',' | append: count | downcase | split:',' %}
{% endif %}
{% endif %}


<div style="display: inline;">
{% assign size_tags = tags.size | minus: 1 %}
{% for index in (0..size_tags) %}
<a href="#{{ tags[index] | slugify: 'pretty' }}" class="tag">
<span class="tag-content">{{ tags[index] }}</span>
<span class="tag-count">{{ tags_count[index] }}</span>
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
