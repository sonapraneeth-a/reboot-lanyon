---
layout: page
title: Projects - Categories
icon: file-code
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


<div style="display: inline-flex; flex-wrap: wrap;">
{% assign size_categories = categories.size | minus: 1 %}
{% for index in (0..size_categories) %}
<a href="#{{ categories[index] | slugify: 'pretty' }}" class="category">
<div class="chip">
<span class="chip-content">
<i class="fa fa-folder-open" aria-hidden="true"></i>&nbsp;{{ categories[index] }}</span>
<span class="chip-count">{{ categories_count[index] }}</span>
</div>
</a>
{% endfor %}
</div>

<ul style="list-style-type: none; padding-left: 0px;">
{% for category in categories %}
<li>
    <h2 id="{{ category | slugify: 'pretty' }}">{{ category }}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
        {% for project in site.projects %}
        {% if project.publish == true %}
        {% if project.categories contains category %}
        <li style="margin-bottom: 0.5rem;">
            <div class="card">
                <div class="card-content">
                    <a href="{{ site.url }}{{ site.baseurl }}/{{ project.url }}" style="text-decoration: none;">
                        <span>{{ project.title }}</span>
                    </a>
                    <span style="float: right;">{{ project.date | date_to_string }}</span>
                </div>
            </div>
        </li>
        {% endif %}
        {% endif %}
        {% endfor %}
    </ul>
</li>
{% endfor %}
</ul>
