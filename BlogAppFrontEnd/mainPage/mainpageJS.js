var timeOut = 100;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 5000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 5000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    //parameter for center active slide 
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
})


// new

const Likeicon=document.querySelector('[like-icon]');
        const Likedicon=document.querySelector('[liked]');
        var liked=0;
        function like(state)
        {
            if(state!==liked)
            {
                if(state==1)
                {
                Likeicon.classList.add('hide');
                Likedicon.classList.remove('hide');

                }
                else{
                    Likedicon.classList.add('hide');
                    Likeicon.classList.remove('hide')
                }
                liked=state;
            }
            

        }

        const bookmark=document.querySelector('[bookmark]');
        const bookmarked=document.querySelector('[bookmarked]');
        
        var bookmarkedState=0;
        function mark(state)
        {
            if(state!==bookmarkedState)
            {
                if(state==1)
                {
                bookmark.classList.add('hide');
                bookmarked.classList.remove('hide');

                }
                else{
                    bookmarked.classList.add('hide');
                    bookmark.classList.remove('hide')
                }
                bookmarkedState=state;
            }
            

        }



  

// rendering the info
const ArticleContainer=document.querySelector(".Article-Container");
console.log(ArticleContainer)

function renderBlogPosts(posts) {
    
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
        console.log("a")
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