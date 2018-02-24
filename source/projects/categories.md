---
layout: page
title: Projects - Categories
---

<!-- https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ -->

{% assign rawcategories = "" %}
{% for project in site.projects %}
{% if project.publish == true %}
{% assign tcategories = project.categories | join:'|' | append:'|' %}
{% assign rawcategories = rawcategories | append:tcategories %}
{% endif %}
{% endfor %}
{% assign rawcategories = rawcategories | split:'|' | sort %}

{% assign categories = "" %}
{% for category in rawcategories %}
{% if category != "" %}
{% if categories == "" %}
{% assign categories = category | split:'|' %}
{% endif %}
{% unless categories contains category %}
{% assign categories = categories | join:'|' | append:'|' | append:category | split:'|' %}
{% endunless %}
{% endif %}
{% endfor %}

<div style="display: inline;">
{% for category in categories %}
<a href="#{{ category | slugify: 'pretty' }}" class="chip category">{{ category }}</a>
{% endfor %}
</div>

{% for category in categories %}
<h2 id="{{ category | slugify: 'pretty' }}">
    <a href="#{{ category | slugify: 'pretty' }}" class="post-category">{{ category }}</a>
</h2>
<ul class="category-list">
    {% for project in site.projects %}
    {% if project.publish == true %}
    {% if project.categories contains category %}
    <li>
        <span class="category-date">{{ project.date | date_to_string }}</span>
        <a class="category-title" href="{{ site.baseurl }}{{ project.url }}">
            {{ project.title }}
        </a>
    </li>
    {% endif %}
    {% endif %}
    {% endfor %}
</ul>
{% endfor %}
