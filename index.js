
//slick carrossel
$(function(){
    $('.banner1').slick({
        arrows:false,
        autoplay: true
    })

    $('.banner1__responsive').slick({
        arrows:false,
        autoplay: true
    })

    $('.banner3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        speed:400,
        autoplaySpeed:2000
    })

    $('.banner3__responsive').slick({
        slidesToShow: 1,
        autoplay:true,
        arrows:false,
    })
    
})
    
