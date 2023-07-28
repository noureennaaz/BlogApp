const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})


function renderBlogPosts(posts) {

    const ArticleContainer = document.querySelector('.Article-Container');
    console.log(1);
    // console.log(ArticleContainer);
    posts.forEach(function(post) {
        
      const person=document.createElement("div").classList.add("writerinfo")
      console.log(1);
      var AllText=document.createElement("div").classList.add("textContent").appendChild(person)
      var container=document.createElement("div").classList.add("upperPart").appendChild(AllText);
      var Elementcontainer2=document.createElement("div").classList.add("article-body").appendChild(container);
      var Elementcontainer1 = document.createElement('div').classList.add('article').appendChild(Elementcontainer2);
      
      console.log(AllText);
      
    //   Elementcontainer2.classList.add("article-body");


    
      
    //   var titleElement = document.createElement('h2');
    //   titleElement.textContent = post.title;
  
    //   var contentElement = document.createElement('p');
    //   contentElement.textContent = post.content;
  
    //   var dateElement = document.createElement('span');
    //   dateElement.textContent = post.date;
  
    //   postElement.appendChild(titleElement);
    //   postElement.appendChild(contentElement);
    //   postElement.appendChild(dateElement);
  
    //   blogContainer.appendChild(postElement);
    });
  }


const getPost=async()=>{
    try{
        const response=await fetch(`${process.env.BASE_URL}/posts`);
        const Allposts = await response.json();
        // console.log(Allposts?.posts[0]);

        const title=[];
        const postText=[];
        var i=0 ;

        renderBlogPosts(Allposts);
    

    }
    catch{
        console.log("fetch failed");
    }
}
getPost();