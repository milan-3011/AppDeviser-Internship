$( document ).ready(function(){
    $("#header").load("https://student.fbiz.in/march2024/milanpatel/assets/general/header.html", function() {
        // Code to execute after loading header.html
        let hamburgers = document.getElementsByClassName("hamburger");

        for (let i = 0; i < hamburgers.length; i++) {
            let hamburger = hamburgers[i];

            hamburger.addEventListener("click", function() {
                this.classList.toggle("openmenu");

                let navbar = document.querySelector(".navbar-links");
                navbar.classList.toggle("active");
            });
        }

        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 1) {
              header.classList.add("scrolled");
          } else {
              header.classList.remove("scrolled");
          }
        });

        $(".sub-ul")
          .mouseenter(function () {
          // big-ul/sub-ul effect
            $(this).closest(".dropdown").find(".main-dropdown").addClass("hovered");
          })
          .mouseleave(function () {
            $(this).closest(".dropdown").find(".main-dropdown").removeClass("hovered");
          });


        $(".navbar-links li").click(function(){

            let isOpen = $(this).find(".sub-ul").is(":visible");

            if ($(window).width() < 1110) {
              $(".sub-ul").slideUp();
            }
            $(".navbar-links li").find("a").removeClass("active");
            $(".navbar-links li").find(".sub-ul li a").removeClass("active");
            $(".navbar-links li").find(".plus-click").removeClass("rotate-180");

            if (!isOpen) {
                if ($(window).width() < 1110) {
                  $(this).find(".sub-ul").slideDown();
                }
                $(this).find(".sub-ul li a").toggleClass("active");
                $(this).find(".plus-click").toggleClass("rotate-180");
                $(this).find("a").toggleClass("active");
            }
        });

        $(".sub-ul li a").click(function(e){
          if ($(window).width() < 1110){
            e.stopPropagation();
            $(this).toggleClass("active");
          }
        })
    
    });
});

const scrollingparallax = () => {
    let parallex = document.querySelectorAll('.Parralex');
  
    for (let i = 0; i < parallex.length; i++) {
      let windowHeight = window.innerHeight;
      let parallexTop = parallex[i].getBoundingClientRect().top;
      let parallexPoint = 100;
  
      if (parallexTop < windowHeight - parallexPoint) {
        parallex[i].classList.add('active');
      } else {
        parallex[i].classList.remove('active');
      }
    }

    // show of scrolling

    let showOf = document.querySelector(".showOf");
    let windowHeight = window.innerHeight;
    let showTop = showOf.getBoundingClientRect().top;
    let scrollPercentage = (windowHeight - showTop) / windowHeight * 120;
    let translateY = Math.max(0, Math.min(100, 100 - (scrollPercentage * 2)));
    
    showOf.style.transform = `translate3d(0px, ${translateY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
  };
  
window.addEventListener('scroll', scrollingparallax);


$(function(){
  $("#footer").load("https://student.fbiz.in/march2024/milanpatel/assets/general/footer.html");
});

let cursorRound = document.querySelector(".cursor-round");
let cursorPoint = document.querySelector(".cursor-point");

document.addEventListener("mousemove", function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorPoint.animate({
    left : `${posX}px`,
    top : `${posY}px`
  }, {duration:1500, fill:"forwards"})

  cursorRound.animate({
    left : `${posX}px`,
    top : `${posY}px`
  }, {duration:500, fill:"forwards"})
});


function loaderAnimation() {
  let loader = document.querySelector("#loader");
  let header = document.querySelector("#header");
  setTimeout(function () {
      loader.style.top = "-100%"
      header.classList.add("sticky-top");
  }, 4200)
}
loaderAnimation();
