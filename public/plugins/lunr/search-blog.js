var idx=lunr(function(){for(var e in this.field("title"),this.field("excerpt"),this.field("categories"),this.field("tags"),this.field("date"),this.field("content"),this.ref("id"),this.pipeline.remove(lunr.trimmer),posts)this.add({title:posts[e].title,excerpt:posts[e].excerpt,categories:posts[e].categories,tags:posts[e].tags,date:posts[e].date,content:posts[e].content,id:e})});let search_input=document.getElementById("blog-search"),result_output=document.getElementById("blog-results"),query=search_input.value.toLowerCase(),result_text="";result_output.innerHTML=result_text,search_input.addEventListener("keyup",function(){let e=search_input.value.toLowerCase(),t=idx.search(e);result_output.innerHTML="";let s="";for(s=0==t.length?'<p>No results found for the "'+e+'"</p>':""==e?"":"<p>"+t.length+" Result(s) found</p>",index=0;index<t.length;index++){t[index].ref;let e=posts[t[index].ref].title,i="/reboot-lanyon",r=posts[t[index].ref].url,n=posts[t[index].ref].date;new Date(n).toDateString();s+='<div class="blog-item">',s+='<h2 class="blog-title"><a href="'+i+r+'">',s+=e+"</a></h2>",s+='<article class="blog-excerpt">'+posts[t[index].ref].excerpt+"</article>",s+="</div>",s+="</div>"}result_output.innerHTML=s});