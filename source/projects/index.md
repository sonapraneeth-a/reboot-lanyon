---
layout: page
title: Projects
icon: file-code
pagination:
    enabled: false
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
                    <div class="col-8">
                        <h2 class="project-title">
                            <a href="{{site.baseurl}}{{project.url}}">{{project.title}}</a>
                        </h2>
                    </div>
                    <div class="col-4">
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
                <div class="project-card-footer-items">
                    {% if project.url and project.url != "" %}
                    <div>
                        <a href="{{site.baseurl}}{{project.url}}" title="Details">
                            <span class="icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                            <span class="description">Details</span>
                        </a>
                    </div>
                    {% endif %}
                    {% if project.github-url and project.github-url != "" %}
                    <div>
                        <a href="{{project.github-url}}" title="Source">
                            <span class="icon"><i class="fa fa-code" aria-hidden="true"></i></span>
                            <span class="description">Source</span>
                        </a>
                    </div>
                    {% endif %}
                    {% if project.report-url and project.report-url != "" %}
                    <div>
                        <a href="{{project.report-url}}" title="Report">
                            <span class="icon"><i class="fa fa-file-alt" style="text-align: right;" aria-hidden="true"></i></span>
                            <span class="description">Report</span>
                        </a>
                    </div>
                    {% endif %}
                    {% if project.slides-url and project.slides-url != "" %}
                    <div>
                        <a href="{{project.slides-url}}" title="Presentation">
                            <span class="icon"><i class="fa fa-file-powerpoint" style="text-align: right;" aria-hidden="true"></i></span>
                            <span class="description">Presentation</span>
                        </a>
                    </div>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
