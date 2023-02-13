$(document).ready(function(){
    //slider-
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        smartSpeed:1000,
        dots:false,
        navText:["PREV","NEXT"],
        responsive:{
            0:{
               nav:false, 
            },
            768:{
                nav:true,
            },
            1000:{
                
            }
        }
    })
    //PROJECT-SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed:1000,
        dots:false,
        margin:24,
        navText:["PREV","NEXT"],
        responsive:{
            0:{
                item:0,
                nav:false,
                margin:0,
               
            },
            768:{
                items:2,
                
            },
            1140:{
                items:2,
                center:true,

            }
        }
    })
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed:5000,
    
        
    })

});