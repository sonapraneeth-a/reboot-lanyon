---
layout: null
---

var projects = [{% for project in site.projects %}{% if project.publish == true %}
{
    "title" : "{{project.title}}",
    "url" : "{{project.url}}",
    "date" : "{{project.published}}",
    "categories" : {{project.categories | jsonify}},
    "tags" : {{project.tags | jsonify}},
    "brief" : "{{project.brief | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}",
    "content" : "{{project.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip | replace: '"', '\"'}}"
}{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %}
]
