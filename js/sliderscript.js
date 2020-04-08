$(function() {
    $("#decatech").animate({
        "margin-left": "0px",
    }, 1000);
    
var flyinobserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        $('.fly-in').fadeTo(1000, 1)
    }else{
        $('.fly-in').fadeTo(100, 0.2)
    }       
        
}, { threshold: [0.9] });
flyinobserver.observe(document.querySelector(".fly-in"));


var slideleftobserver = new IntersectionObserver(function(entries) {    
    if (entries[0].isIntersecting === true) {
        $(".slide-left").animate({
            "left": "0",
        }, 1000);
    } else {
        $(".slide-left").animate({
            "left": "500"
        }, 0);
    }               
}, { threshold: [0] });
slideleftobserver.observe(document.querySelector(".slide-left"));


var slideupobserver = new IntersectionObserver(function(entries) {    
    if (entries[0].isIntersecting === true) {
        $(".slide-up").stop().fadeTo(1000, 1).animate({
            "margin-top": "0px",            
        }, 200);
    } else {
        $(".slide-up").fadeTo(0, 0.1).animate({
            "margin-top": "200px"
        }, 0);
    }               
}, { threshold: [0.1] });
slideupobserver.observe(document.querySelector(".slide-up"));



})