---
layout: page
title: Projects - Tags
icon: file-code
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


<div style="display: inline-flex; flex-wrap: wrap;">
{% assign size_tags = tags.size | minus: 1 %}
{% for index in (0..size_tags) %}
<a href="#{{ tags[index] | slugify: 'pretty' }}" class="tag">
<div class="chip">
<span class="chip-content">
<i class="fa fa-tag" aria-hidden="true"></i>&nbsp;{{ tags[index] }}</span>
<span class="chip-count">{{ tags_count[index] }}</span>
</div>
</a>
{% endfor %}
</div>

<ul style="list-style-type: none; padding-left: 0px;">
{% for tag in tags %}
<li>
    <h2 id="{{ tag | slugify: 'pretty' }}">{{ tag }}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
        {% for project in site.projects %}
        {% if project.publish == true %}
        {% if project.tags contains tag %}
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
