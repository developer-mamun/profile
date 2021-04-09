$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".top-navbar").addClass("sticky");
        }
        else{
            $(".top-navbar").removeClass("sticky");
        }
        // Back to top condition
        if(this.scrollY > 20){
            $(".back-top").addClass("show");
        }
        else{
            $(".back-top").removeClass("show");
        }
    });
    // Back to top function
    $(".back-top").click(function(){
        $('html').animate({scrollTop: 0});
    });
    // typing function
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Web Designer", "WordPress Expert", "Web Developer", "YouTuber"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-a", {
        strings: ["Freelancer", "Web Designer", "WordPress Expert", "Web Developer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
    });
    // Mobile Menu function
    $('.menu-bar').click(function(){
        $('.top-navbar .content ul').toggleClass("mobile");
        $('.menu-bar i').toggleClass("active");
    });
    // Carousle function
    $('.carousel').carousel({
        interval: 3000,
        wrap: true,
        pause: "hover",
      });
});