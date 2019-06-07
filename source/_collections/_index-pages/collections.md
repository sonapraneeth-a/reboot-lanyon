---
layout: page
title: Collections
icon: suitcase
---


{% capture written_label %}'None'{% endcapture %}
{% assign collections = site.collections | sort: 'label' %}

<div style="display: inline-flex; flex-wrap: wrap;">
  {% for collection in collections %}
  {% unless collection.output == false or collection.label == "posts" or
  collection.label == "index-pages" or collection.label == "projects" %}
      <a href="#{{ collection.label | slugify: 'pretty' }}" class="collection">
      <div class="chip">
          <span class="chip-content">
          <i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;{{collection.label | capitalize}}</span>
          {% assign documents = collection.docs | sort: 'order' %}
          {% assign count = 0 %}
            {% for post in documents %}
              {% if post.publish == true %}
              {% assign count = count | plus: 1 %}
              {% endif %}
          {% endfor %}
          <span class="chip-count">{{ count }}</span>
          {% comment %}
          <span class="chip-count">{{ collection.docs | size }}</span>
          {% endcomment %}
      </div>
      </a>
  {% endunless %}
  {% endfor %}
</div>

<ul style="list-style-type: none; padding-left: 0px;">
  {% for collection in collections %}
  {% unless collection.output == false or collection.label == "posts" or
  collection.label == "index-pages" or collection.label == "projects" %}
  <li>
    <h2 id="{{ collection.label | slugify: "pretty" }}">{{ collection.label | capitalize}}</h2>
    <ul style="list-style-type: none; padding-left: 1rem;">
    {% assign documents = collection.docs | sort: 'order' %}
    {% for post in documents %}
      {% if post.publish == true %}
      <li style="margin-bottom: 0.5rem;">
        <div class="card">
          <div class="card-content">
            <a href="{{ site.baseurl }}{{ site.url }}/{{post.url}}" style="text-decoration: none;">
              {{post.title}}
            </a>
            <span style="float: right;">{{post.date | date_to_string}}</span>
          </div>
        </div>
      </li>
      {% endif %}
    {% endfor %}
    </ul>
  </li>
  {% endunless %}
  {% endfor %}
  </ul>
