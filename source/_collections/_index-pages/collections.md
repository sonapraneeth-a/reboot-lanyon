---
layout: page
title: Collections
icon: suitcase
---


{% capture written_label %}'None'{% endcapture %}
{% assign collections = site.collections | sort: 'label' %}

<div class="page">
  <div style="display: inline-flex; flex-wrap: wrap;">
    {% for collection in collections %}
    {% unless collection.output == false or collection.label == "posts" or
    collection.label == "index-pages" or collection.label == "projects" %}
        <a href="#{{ collection.label | slugify: 'pretty' }}" style="text-decoration: none;">
        <div class="chip">
            <span class="chip-content">
            <i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;{{collection.label | capitalize}}</span>
            <span class="chip-count">{{ collection.docs | size }}</span>
        </div>
        </a>
    {% endunless %}
    {% endfor %}
  </div>

  <ul style="list-style-type: none; padding-left: 0px;">
    {% for collection in collections %}
    {% unless collection.output == false or collection.label == "posts" or
    collection.label == "index-pages" or collection.label == "projects" %}
    {% capture label %}{{ collection.label }}{% endcapture %}
    <li>
      <h2 id="{{ label | slugify: "pretty" }}">{{label | capitalize}}</h2>
      <ul style="list-style-type: none; padding-left: 1rem;">
      {% assign documents = collection.docs | sort: 'order' %}
      {% for post in documents %}
        <li style="margin-bottom: 0.5rem;">
          <div class="card">
            <div class="card-content">
              <a href="{{site.baseurl}}{{post.url}}" style="text-decoration: none;">
                {{post.title}}
              </a>
              <span style="float: right;">{{post.date | date_to_string}}</span>
            </div>
          </div>
        </li>
      {% endfor %}
      </ul>
    </li>
    {% endunless %}
    {% endfor %}
    </ul>
</div>
