---
layout: page
title: Blog - Archives
icon: pencil-alt
---

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}
{% for year in postsByYear %}
<h3 class="archive-year">{{year.name}}</h3>
{% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%b'"  %}
{% for month in postsByMonth %}
<div>
<h4 class="archive-month">{{month.name}}</h4>
<ul class="archive-list">
    {% for post in month.items %}
    <li>
        <span class="archive-date">{{ post.date | date_to_string }}</span>
        <a href="{{site.baseurl}}{{ post.url }}" class="archive-title">
            {{ post.title }}
        </a>
    </li>
    {% endfor %}
</ul>
</div>
{% endfor %}
{% endfor %}
<!--{% assign postsByYearMonth = site.posts | group_by_exp:"post", "post.date | date: '%Y %b'"  %}
{% for yearMonth in postsByYearMonth %}
{{yearMonth}}
<h3>{{ yearMonth.name }}</h3>
<ul>
    {% for post in yearMonth.items %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}-->
<!--{% for post in site.posts %}
{% assign currentDate = post.date | date: "%B %Y" %}
{% assign currentYear = post.date | date: "%Y" %}
{% assign currentMonth = post.date | date: "%B" %}
{% if currentDate != myDate %}
{% unless forloop.first %}</ul>{% endunless %}
<h1>{{ currentDate }}</h1>
<ul style="list-style-type: none;">
{% assign myDate = currentDate %}
{% endif %}
<li>
    <span>{{ post.date | date_to_string }}</span> -
    <a href="{{ post.url }}">
        {{ post.title }}
    </a>
</li>
{% if forloop.last %}</ul>{% endif %}
{% endfor %}-->
