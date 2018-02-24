---
layout: page
title: Projects
---

{% assign sorted_projects = site.projects | sort: "date" %}

<div class="projects">
    {% for project in sorted_projects reversed %}
    {% if project.publish == true %}
    <div class="project-item card">
        <div class="project-header">
            <h1 class="project-title">
                <a href="{{site.baseurl}}{{project.url}}">{{project.title}}</a>
            </h1>
            {% if project.status == "Ongoing" %}
            <div class="ribbon status-ongoing">
            {% elsif project.status == "Completed" %}
            <div class="ribbon status-complete">
            {% else %} {% endif %}
                <span>
                    {{project.status}}
                </span>
            </div>
        </div>
        <div>
            <!--<span>{{project.guide}}</span>-->
            <span>{{project.date | date: "%B %Y"}}</span>
            <span>{{project.institution}}</span>
            <!--<span>{{project.course}}</span>-->
        </div>
        <div>
            {% for tag in project.tags %}
            <a class="chip tag" href="{{site.baseurl}}/projects/tags/#{{tag | slugify: 'pretty'}}">{{tag}}</a>
            {% endfor %}
        </div>
        <div>
        {{project.brief}}
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
