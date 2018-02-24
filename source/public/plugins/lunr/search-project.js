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

let search_input = document.getElementById('project-search');
let result_output = document.getElementById('project-results');
let query = search_input.value.toLowerCase();
let result_text = "";
/*if(query == "")
{
    result_text = "<p>No results found for the \"" + query + "\"</p>";
}*/
result_output.innerHTML = result_text;
search_input.addEventListener('keyup', function()
    {
        let query = search_input.value.toLowerCase();
        let answer = idx.search(query);
        result_output.innerHTML = "";
        let result_text= "";
        if(answer.length == 0)
        {
            result_text = "<p>No results found for the \"" + query + "\"</p>";
        }
        else if(query == "")
        {
            result_text = "";
        }
        else
        {
            result_text = "<p>" + answer.length + " Result(s) found</p>";
        }
        for (index = 0; index < answer.length; index++)
        {
            let ref = answer[index].ref;
            let title = projects[answer[index].ref].title;
            let url = projects[answer[index].ref].url;
            let date = projects[answer[index].ref].date;
            let date_string = new Date(date).toDateString();
            let brief = projects[answer[index].ref].brief;
            /*console.log("Ref: " + ref);
            console.log("Title: " + title);
            console.log("URL: " + url);
            console.log("Date: " + date);
            console.log("Excerpt: " + excerpt);*/
            result_text += "<div class=\"blog-item\">"
            result_text += "<h2 class=\"blog-title\"><a href=\"" + url + "\">";
            result_text += title+"</a></h2>";
            /*result_text += "<p class=\"blog-date\">"+date+"</p>";*/
            result_text += "<article class=\"blog-excerpt\">"+brief+"</article>";
            result_text += "</div>";
            result_text += "</div>";
        }
        result_output.innerHTML = result_text;
    }
);
