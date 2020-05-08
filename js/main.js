$(window).scroll(function(){
    if($(document).scrollTop()>650){
        $("nav").addClass('fixed-top');
        $("nav").addClass('shark');
    }else{
        $("nav").removeClass('fixed-top');
        $("nav").removeClass('shark');
    }
    
    
})
// $(window).scroll(function(){
//     if($(document).scrollTop()>650){
//         $("nav").addClass('fixed-top');
//     }else{
//         $("nav").removeClass('fixed-top');
//     }
    
    
// })

$(document).ready(function(){
    $(".dropdown").hover(function(){
        if($(this).children(".dropdown-menu").hasClass('pages')){
            $(this).children(".dropdown-menu").removeClass('pages');
            $(this).children(".dropdown-menu").slideUp(10);
        } else {
        
            $(this).parent().find('.dropdown-menu').removeClass('pages');
            $(this).parent().find('.dropdown-menu').slideUp(50);
            $(this).children(".dropdown-menu").toggleClass('pages');
            $(this).children(".dropdown-menu").slideToggle(0);
        }
        
    })
});
$(document).ready(function() {
    $(".num1").click(function(){
        $(".num1").css("box-shadow","0px 0 25px rgba(0, 0, 0, 0.08)");
        $(".num1").css("padding","2px 15px")
        $(".num1 h2").css("color","#7cc576")
        // 
        $(".num2").css("box-shadow","none");
        $(".num2").css("padding","0")
        $(".num2 h2").css("color","#555555")
        $(".num3").css("box-shadow","none");
        $(".num3").css("padding","0")
        $(".num3 h2").css("color","#555555")
        $(".num4").css("box-shadow","none");
        $(".num4").css("padding","0")
        $(".num4 h2").css("color","#555555")
    })
    $(".num2").click(function(){
        $(".num1").css("box-shadow","none");
        $(".num1").css("padding","0")
        $(".num1 h2").css("color","#555555")
        $(".num3").css("box-shadow","none");
        $(".num3").css("padding","0")
        $(".num3 h2").css("color","#555555")
        $(".num4").css("box-shadow","none");
        $(".num4").css("padding","0")
        $(".num4 h2").css("color","#555555")
        // 
        $(".num2").css("box-shadow","0px 0 25px rgba(0, 0, 0, 0.08)");
        $(".num2").css("padding","2px 15px")
        $(".num2 h2").css("color","#7cc576")
    })
    $(".num3").click(function(){
        $(".num1").css("box-shadow","none");
        $(".num1").css("padding","0")
        $(".num1 h2").css("color","#555555")
        $(".num2").css("box-shadow","none");
        $(".num2").css("padding","0")
        $(".num2 h2").css("color","#555555")
        $(".num4").css("box-shadow","none");
        $(".num4").css("padding","0")
        $(".num4 h2").css("color","#555555")
        // 
        $(".num3").css("box-shadow","0px 0 25px rgba(0, 0, 0, 0.08)");
        $(".num3").css("padding","2px 15px")
        $(".num3 h2").css("color","#7cc576")
    })
    $(".num4").click(function(){
        $(".num1").css("box-shadow","none");
        $(".num1").css("padding","0")
        $(".num1 h2").css("color","#555555")
        $(".num2").css("box-shadow","none");
        $(".num2").css("padding","0")
        $(".num2 h2").css("color","#555555")
        $(".num3").css("box-shadow","none");
        $(".num3").css("padding","0")
        $(".num3 h2").css("color","#555555")
        // 
        $(".num4").css("box-shadow","0px 0 25px rgba(0, 0, 0, 0.08)");
        $(".num4").css("padding","2px 15px")
        $(".num4 h2").css("color","#7cc576")
    })
})
$(document).ready(function(){
    $(".portfolio-items").isotope({
        itemSelector:".item",
        layoutMode:"fitRows",
    });
    $(".portfolio-menu ul li").click(function(){
        $(".portfolio-menu ul li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".portfolio-items").isotope({
            filter: selector
        });
        return false;
    })
})
$(".dropdown-why-us").click(function(){


    if($(this).children(".drop2").hasClass('show active2')){
        $(this).children(".drop2").removeClass('show active2');
        $(this).children(".drop2").slideUp(350);
        $(this).css("color","#000");
    } else {
    
        $(this).parent().parent().find('li .drop2').removeClass('show active2');
        $(this).parent().parent().find('li .drop2').slideUp(350);
        $(this).children(".drop2").toggleClass('show active2');
        $(this).children(".drop2").slideToggle(350);
        $(this).css("color","#7cc576")
    }
    
    
});
$(document).ready(function(){

    $(".dropdown-why-us").click(function(){
        $(".asked .ask-list .icon-close").slideToggle(1000)
    })
    // $(".dropdown-why-us").click(function(){
    //     $(".asked .ask-list .icon-show").slideToggle(1000)
    // })
})
// $(document).ready(function(){
//     $('.div-relev').hover(function() {
//         $(this).addClass('transition');

//     }, function() {
//         $(this).removeClass('transition');
//     });
// });