function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
// testWebP(function (support) {
//     if (support == true) {
//     document.querySelector('body').classList.add('webp');
//     }else{
//     document.querySelector('body').classList.add('no-webp');
//     }
// });
isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
let body = document.querySelector('body');
if(isMobile.any()){
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for(let i = 0;i<arrow.length;i++){
        let thisLink= arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i]
        thisLink.classList.add('parent');
        arrow[i].addEventListener('click',function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        })
    }
}
else {
    body.classList.add('mouse')
}

$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        draggable: false,
        centerMode: false,
    });
});
$(document).ready(function(){
    $('.post-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
});
// $(window).scroll(function(){
//     $(window).scroll(function() {
//         let top = $(document).scrollTop();
//         if (top < 187) {
//             // $('.main__header').fadeOut()
//             $("#fixmenu").css({top: '0', position: 'relative'});
//         }
//         else {
//             // $('.main__header').fadeIn()
//             $("#fixmenu").css({top: '0', position: 'fixed'});}
//         })
//     if ( $(this).scrollTop() > 0 ) {
//         $('.main__header').attr('id','fixmenu');
        
//     }
// })
// $(function(){
//     $(window).scroll(function() {
//     let top = $(document).scrollTop();
//     if (top < 187) {
//         $("#fixmenu").css({top: '0', position: 'relative'});
//     }
//     else $("#fixmenu").css({top: '0', position: 'fixed'});
//     });
//     });
