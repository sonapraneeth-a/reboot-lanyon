---
---
// var load = function () {return JSON.parse(posts)};

// var post = load();

var idx = lunr(function ()
{
    this.field('title')
    this.field('brief')
    this.field('categories')
    this.field('tags')
    this.field('date')
    this.field('content')
    this.ref('id')
    this.pipeline.remove(lunr.trimmer)
    for (var item in projects)
    {
        this.add({
            title: projects[item].title,
            brief: projects[item].brief,
            categories: projects[item].categories,
            tags: projects[item].tags,
            date: projects[item].date,
            content: projects[item].content,
            id: item
        })
    }
});

let project_query_input = document.getElementById('project-search');
let project_result_output = document.getElementById('project-results');
let project_result_text = ``;
/*if(project_query == ``)
{
    project_result_text = `<p>No results found for the "` + project_query + `"</p>`;
}*/
if (project_query_input !== null && project_result_output !== null) {
project_result_output.innerHTML = project_result_text;
project_query_input.addEventListener('keyup', function()
    {
        let project_query = project_query_input.value.toLowerCase();
        let answer = idx.search(project_query);
        project_result_output.innerHTML = ``;
        let project_result_text= ``;
        if(answer.length == 0)
        {
            project_result_text = `<p>No results found for the "` + project_query + `"</p>`;
        }
        else if(project_query == ``)
        {
            project_result_text = ``;
        }
        else
        {
            project_result_text = `<p>` + answer.length + ` Result(s) found</p>`;
        }
        for (index = 0; index < answer.length; index++)
        {
            let ref = answer[index].ref;
            let title = projects[answer[index].ref].title;
            let baseurl = `{{ site.baseurl }}{{ site.url }}/`;
            let url = projects[answer[index].ref].url;
            let date = projects[answer[index].ref].date;
            let date_string = new Date(date).toDateString();
            let brief = projects[answer[index].ref].brief;
            /*console.log(`Ref: ` + ref);
            console.log(`Title: ` + title);
            console.log(`URL: ` + url);
            console.log(`Date: ` + date);
            console.log(`Excerpt: ` + excerpt);*/
            project_result_text += `<div class="blog-item">`
            /*console.log(`URL: `  + url);
            console.log(`Base URL: `  + baseurl);*/
            project_result_text += `<h2 class="blog-title"><a href="` + baseurl + url + `">`;
            project_result_text += title+`</a></h2>`;
            /*project_result_text += `<p class="blog-date">`+date+`</p>`;*/
            project_result_text += `<article class="blog-excerpt">`+brief+`</article>`;
            project_result_text += `</div>`;
            project_result_text += `</div>`;
        }
        project_result_output.innerHTML = project_result_text;
    }
);}
