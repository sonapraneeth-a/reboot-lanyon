---
layout: page
title: Projects
icon: file-code
---

{% assign sorted_projects = site.projects | sort: "date" %}

<div class="grid">
    {% for project in sorted_projects reversed %}
    {% if project.publish == true %}
    <div class="grid-item">
        <div class="card">
            <!--<img class="card-image" src="{{site.baseurl}}/assets/blog/default_banner_image.jpg" alt="Blog image" title="">-->
            <div class="card-content">
                <div class="row">
                    <div class="col-dp-9">
                        <h2 class="project-title">
                            <a href="{{site.baseurl}}{{project.url}}">{{project.title}}</a>
                        </h2>
                    </div>
                    <div class="col-dp-3">
                        <h2 style="text-align: right;">
                        {% if project.status == "Ongoing" %}
                        <div class="chip ongoing">
                        {% elsif project.status == "Completed" %}
                        <div class="chip complete">
                        {% else %} {% endif %}
                            <span class="chip-content">
                                {{project.status}}
                            </span>
                        </div>
                        </h2>
                    </div>
                </div>
                <div>
                    <!--<span>{{project.guide}}</span>-->
                    <span class="chip">
                        <span class="chip-content">
                            <i class="fa fa-calendar-alt"></i>&nbsp;{{project.date | date: "%B %Y"}}
                        </span>
                    </span>
                    {% if project.institution %}
                    <span class="chip">
                        <span class="chip-content">
                            <i class="fa fa-university"></i>{{project.institution}}
                        </span>
                    </span>
                    {% endif %}
                    <!--<span>{{project.course}}</span>-->
                </div>
                <div>
                    {% for tag in project.tags %}
                    <a class="tag" href="{{site.baseurl}}/projects/tags/#{{tag | slugify: 'pretty'}}">
                        <span class="chip">
                            <span class="chip-content"><i class="fa fa-tag"></i>&nbsp;{{tag}}</span>
                        </span>
                    </a>
                    {% endfor %}
                    {% for category in project.categories %}
                    <a class="category" href="{{site.baseurl}}/projects/categories/#{{category | slugify: 'pretty'}}">
                        <span class="chip">
                            <span class="chip-content"><i class="fa fa-folder-open"></i>&nbsp;{{category}}</span>
                        </span>
                    </a>
                    {% endfor %}
                </div>
                <div class="card-details">
                    {{project.brief}}
                </div>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-dp-6 align-center">
                        <a href="{{site.baseurl}}{{project.url}}" style="text-decoration: none;">
                        <span><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;Details</span>
                        </a>
                    </div>
                    <div class="col-dp-6 align-center">
                        <a href="{{site.baseurl}}{{project.github-link}}" style="text-decoration: none;">
                        <span><i class="fa fa-code" aria-hidden="true"></i>&nbsp;Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
