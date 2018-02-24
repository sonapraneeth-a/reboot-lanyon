---
layout: page
title: Projects - Archives
---

{% assign projectsByYear = site.projects | group_by_exp:"project", "project.date | date: '%Y'"  %}
{% for year in projectsByYear reversed %}
<h3 class="archive-year">{{year.name}}</h3>
{% assign projectsByMonth = year.items | group_by_exp:"project", "project.date | date: '%b'"  %}
{% for month in projectsByMonth %}
<div>
<h4 class="archive-month">{{month.name}}</h4>
<ul class="archive-list">
    {% for project in month.items %}
    {% if project.publish == true %}
    <li>
        <span class="archive-date">{{ project.date | date_to_string }}</span>
        <a href="{{site.baseurl}}{{ project.url }}" class="archive-title">
            {{ project.title }}
        </a>
    </li>
    {% endif %}
    {% endfor %}
</ul>
</div>
{% endfor %}
{% endfor %}
