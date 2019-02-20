---
layout: null
---

// var load = function () {return JSON.parse(posts)};

// var post = load();
var idx = lunr(function ()
{
    this.field('title')
    this.field('excerpt')
    this.field('categories')
    this.field('tags')
    this.field('date')
    this.field('content')
    this.ref('id')
    this.pipeline.remove(lunr.trimmer)
    for (var item in posts)
    {
        this.add({
            title: posts[item].title,
            excerpt: posts[item].excerpt,
            categories: posts[item].categories,
            tags: posts[item].tags,
            date: posts[item].date,
            content: posts[item].content,
            id: item
        })
    }
});

let search_input = document.getElementById('blog-search');
let result_output = document.getElementById('blog-results');
/*let main_content = document.getElementById('main-content');*/
let query = search_input.value.toLowerCase();
let result_text = ``;
/*if(query == ``)
{
    result_text = `<p>No results found for the "` + query + `"</p>`;
}*/
result_output.innerHTML = result_text;
search_input.addEventListener('keyup', function()
    {
        let query = search_input.value.toLowerCase();
        let answer = idx.search(query);
        result_output.innerHTML = ``;
        let result_text= ``;
        if(answer.length == 0)
        {
            result_text = `<p>No results found for the "` + query + `"</p>`;
        }
        else if(query == ``)
        {
            result_text = ``;
        }
        else
        {
            result_text = `<p>` + answer.length + ` Result(s) found</p>`;
        }
        for (index = 0; index < answer.length; index++)
        {
            let ref = answer[index].ref;
            let title = posts[answer[index].ref].title;
            let baseurl = `{{site.baseurl}}`;
            let url = posts[answer[index].ref].url;
            let date = posts[answer[index].ref].date;
            let date_string = new Date(date).toDateString();
            let excerpt = posts[answer[index].ref].excerpt;
            /*console.log(`Ref: ` + ref);
            console.log(`Title: ` + title);
            console.log(`URL: ` + url);
            console.log(`Date: ` + date);
            console.log(`Excerpt: ` + excerpt);*/
            result_text += `<div class="blog-item">`
            result_text += `<h2 class="blog-title"><a href="` + baseurl + url + `">`;
            /*console.log(`Baseurl: ` + baseurl);
            console.log(`URL: ` + url);*/
            result_text += title+`</a></h2>`;
            /*result_text += `<p class="blog-date">`+date+`</p>`;*/
            result_text += `<article class="blog-excerpt">`+excerpt+`</article>`;
            result_text += `</div>`;
            result_text += `</div>`;
        }
        result_output.innerHTML = result_text;
        /*if(answer.length > 0)
        {
            main_content.style.display = `none`;
        }
        else
        {
            main_content.style.display = `block`;
        }*/
    }
);
