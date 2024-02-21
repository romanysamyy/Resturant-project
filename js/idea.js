$(document).ready(function(){

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});



   //Initiat WOW JS
       new WOW().init();
   
   });


   let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight -  document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(height)


window.addEventListener("scroll" , () => {
let scrollTop = document.documentElement.scrollTop;
el.style.width = `${(scrollTop / height ) * 100}%`
});
   

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementsByClassName('content')[0];
    var contentOffset = content.getBoundingClientRect().top;
    
    if (contentOffset <= 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });