---
layout: page
title: Projects - Archives
icon: file-code
---

{% assign projectsByYear = site.projects | group_by_exp:"project", "project.date | date: '%Y'"  %}
{% for year in projectsByYear reversed %}
<h2 class="archive-year">{{year.name}}</h2>
{% assign projectsByMonth = year.items | group_by_exp:"project", "project.date | date: '%b'"  %}
{% for month in projectsByMonth %}
<div>
<h3 class="archive-month">{{month.name}}</h3>
<ul class="archive-list" style="list-style-type: none;">
    {% for project in month.items %}
    {% if project.publish == true %}
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
    {% endfor %}
</ul>
</div>
{% endfor %}
{% endfor %}
