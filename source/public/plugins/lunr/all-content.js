---
layout: null
---

var contents = [{% if site.search_blog == true %}{% for post in site.posts %}
{
    "title" : "{{post.title}}",
    "url" : "{{post.url}}",
    "date" : "{{post.published}}",
    "categories" : {{post.categories | jsonify}},
    "tags" : {{post.tags | jsonify}},
    "excerpt" : "{{post.excerpt | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}",
    "content" : "{{post.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}"
}{% unless forloop.last %},{% endunless %}{% endfor %}{% endif %}{% if site.search_project == true %}{% if site.search == true %},{% endif %}{% for project in site.projects %}
{
    "title" : "{{project.title}}",
    "url" : "{{project.url}}",
    "date" : "{{project.date}}",
    "categories" : {{project.categories | jsonify}},
    "tags" : {{project.tags | jsonify}},
    "excerpt" : "{{project.brief | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}",
    "content" : "{{post.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}"
}{% unless forloop.last %},{% endunless %}{% endfor %}{% endif %}
]