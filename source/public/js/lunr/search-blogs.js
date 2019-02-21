---
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

let blog_query_input = document.getElementById('blog-search');
let blog_result_output = document.getElementById('blog-results');
/*let main_content = document.getElementById('main-content');*/
let blog_result_text = ``;
/*if(blog_query == ``)
{
    blog_result_text = `<p>No results found for the "` + blog_query + `"</p>`;
}*/
if (blog_query_input !== null && blog_result_output !== null) {
blog_result_output.innerHTML = blog_result_text;
blog_query_input.addEventListener('keyup', function()
    {
        let blog_query = blog_query_input.value.toLowerCase();
        let answer = idx.search(blog_query);
        blog_result_output.innerHTML = ``;
        let blog_result_text= ``;
        if(answer.length == 0)
        {
            blog_result_text = `<p>No results found for the "` + blog_query + `"</p>`;
        }
        else if(blog_query == ``)
        {
            blog_result_text = ``;
        }
        else
        {
            blog_result_text = `<p>` + answer.length + ` Result(s) found</p>`;
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
            blog_result_text += `<div class="blog-item">`
            blog_result_text += `<h2 class="blog-title"><a href="` + baseurl + url + `">`;
            /*console.log(`Baseurl: ` + baseurl);
            console.log(`URL: ` + url);*/
            blog_result_text += title+`</a></h2>`;
            /*blog_result_text += `<p class="blog-date">`+date+`</p>`;*/
            blog_result_text += `<article class="blog-excerpt">`+excerpt+`</article>`;
            blog_result_text += `</div>`;
            blog_result_text += `</div>`;
        }
        blog_result_output.innerHTML = blog_result_text;
        /*if(answer.length > 0)
        {
            main_content.style.display = `none`;
        }
        else
        {
            main_content.style.display = `block`;
        }*/
    }
);}
