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


  