$(function() {
    $("#decatech").animate({
        "margin-left": "0px",
    }, 1000);

    $("#navToggler").click(function() {
        $(".navigation-group").slideToggle(1000);
    })
    
    var galleryItems = $(".gallery").find("img");
    galleryItems.css("width", "33%").css("opacity", "0.7");

    galleryItems.mouseenter(function(){
        $(this).stop().fadeTo(500, 1);
    });

    galleryItems.mouseleave(function(){
        $(this).stop().fadeTo(500, 0.7);
    });

    galleryItems.click(function() {
        var source = $(this).attr("src");
        var image = $("<img>").attr("src", source).css("width", "100%");
        $(".lightbox").empty().append(image).fadeIn(2000);
    }).stop();

    $(".lightbox").click(function(){
        $(this).stop().fadeOut();
    });

var fadeinobserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        $('.fade-in').fadeTo(1000, 1);
    }else{
        $('.fade-in').fadeTo(100, 0.2)
    }       
        
}, { threshold: [0.9] });
fadeinobserver.observe(document.querySelector(".fade-in"));

})