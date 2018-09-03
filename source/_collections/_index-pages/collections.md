---
layout: page
title: Collections
icon: suitcase
---

<div class="page">
    <div style="display: inline-flex; flex-wrap: wrap;">
    {% assign collections = site.collections | sort: 'label' %}
    {% for collection in collections %}
        {% if collection.label != "index-pages" and collection.label != "posts" and collection.label != "projects" %}
        <a href="#{{ collection.label | slugify: 'pretty' }}" style="text-decoration: none;">
        <div class="chip">
            <span class="chip-content">
            <i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;{{collection.label | capitalize}}</span>
            {% assign count = 0 %}
            {% for document in site.documents %}
            {% if document.collection == collection.label %}
            {% assign count = count | plus: 1 %}
            {% endif %} 
            {% endfor %}       
            <span class="chip-count">{{ count }}</span>
        </div>
        </a>
        {% endif %}
    {% endfor %}
    </div>
    
    <ul style="list-style-type: none; padding-left: 0px;">
    {% assign collections = site.collections | sort: 'label' %}
    {% for collection in collections %}
    {% if collection.label != "index-pages" and collection.label != "posts" and collection.label != "projects" %}
    <li>
    <h2 id="{{ collection.label | slugify: 'pretty' }}">{{collection.label | capitalize}}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
        {% assign documents = site.documents | sort: 'order' %}
        {% for document in documents %}
        {% if document.collection == collection.label %}
        <li style="margin-bottom: 0.5rem;">
            <div class="card">
                <div class="card-content">
                    <a href="{{site.baseurl}}{{document.url}}" style="text-decoration: none;">
                        {{document.title}}
                    </a>
                    <span style="float: right;">{{document.date | date_to_string}}</span>
                </div>
            </div>
        </li>
        {% endif %}
        {% endfor %}
    </ul>
    </li>
    {% endif %}
    {% endfor %}
    </ul>
</div>


{% comment %}
    {{site.collections}}
    {{site.posts}}
    {{site.pages}}
    {% for page in site.documents %}
    {{page.title}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    {{page.url}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    {{page.collection}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {{page.date}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
    {% endfor %}
{% endcomment %}
    