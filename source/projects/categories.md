---
layout: page
title: Projects - Categories
---

<!-- https://codinfox.github.io/dev/2015/03/06/use-categories-and-categories-in-your-jekyll-based-github-pages/ -->

{% assign rawcategories = "" %}
{% for project in site.projects %}
{% if project.publish == true %}
{% assign tcategories = project.categories | join:',' | append:',' %}
{% assign rawcategories = rawcategories | append:tcategories %}
{% endif %}
{% endfor %}
{% assign rawcategories = rawcategories | split:',' | sort %}

{% assign categories = "" %}
{% assign categories_count = "" %}
{% assign count = 0 %}
{% if rawcategories.size > 0 %}
{% assign category_content = rawcategories[0] %}
{% assign size = rawcategories.size | minus: 1 %}
{% assign categories = rawcategories[0] %}
{% for index in (1..size) %}
{% if rawcategories[index] == category_content %}
{% assign count = count | plus: 1 %}
{% else %}
{% if categories_count == "" %}
{% assign categories_count = count | plus: 1 | downcase %}
{% else %}
{% assign categories_count = categories_count | join:',' | append:',' | append: count | downcase | split:',' %}
{% endif %}
{% assign count = 1 %}
{% assign category_content = rawcategories[index] %}
{% assign categories = categories | join:',' | append:',' | append:rawcategories[index] | split:',' %}
{% endif %}
{% endfor %}
{% if count != 0 %}
{% assign categories_count = categories_count | join:',' | append:',' | append: count | downcase | split:',' %}
{% endif %}
{% endif %}


<div style="display: inline;">
{% assign size_categories = categories.size | minus: 1 %}
{% for index in (0..size_categories) %}
<a href="#{{ category | slugify: 'pretty' }}" class="category">
<span class="category-content">{{ categories[index] }}</span>
<span class="category-count">{{ categories_count[index] }}</span>
</a>
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
