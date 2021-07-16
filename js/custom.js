//banner slider
$(".banner").owlCarousel({
    items:1,
    loop:true,
    mouseDrag:false,
    nav:true,
    navText:['PREV','NEXT']
});
//banner slider
//sponsor slider
$(".partner-slider").owlCarousel({
    items:3,
    loop:true,
    dots:false
});
//sponsor slider
//testimonial slider
$(".testimonial-slider").owlCarousel({
    loop:true,
    margin: 30,
    autoplay:true,
    smartSpeed:450,
    dots:false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
});
//testimonial slider