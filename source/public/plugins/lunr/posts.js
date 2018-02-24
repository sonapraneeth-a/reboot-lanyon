---
layout: null
---
/* Posts variable Javascript */
// Test comment
var posts = [{% for post in site.posts %}
{
    "title" : "{{post.title}}",
    "url" : "{{post.url}}",
    "date" : "{{post.published}}",
    "categories" : {{post.categories | jsonify}},
    "tags" : {{post.tags | jsonify}},
    "excerpt" : "{{post.excerpt | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}",
    "content" : "{{post.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip}}"
}{% unless forloop.last %},{% endunless %}{% endfor %}
]
