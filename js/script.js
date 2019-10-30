$(document).ready(function() {
// 스크롤 메뉴
var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(e) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
        $("header").css({
            "top": "-80px"
        });
    }else {
        $("header").css({
            "top": "0"
        });
    }
    lastScrollTop = st;
  });
// 스크롤 메뉴

// 메뉴 이동
$('li a').click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
// 메뉴 이동

// 마우스 패럴랙스
var currentX = '';
var currentY = '';
var movementConstant = .020;
$(document).mousemove(function(e) {
    if(currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    if(currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY; 
    $('.parallax img').each(function(i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
	    var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
	    var newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
        $(el).css('top', newY + 'px');
    });
});
// 마우스 패럴랙스

// 자동 슬라이드
timer();
var current=16;
var $interval;

function timer(){
    var $interval=setInterval(function(){
        slide()
    },1000);  
}

function slide(){
    $(".bannerbox").animate({left:"-=393px"},3000,function(){
        $(this).css({"left":0});
        $(".bannerbox").append( $(".slidebanner ul").children(".bannerbox li").eq(0) );
    });    
    current++;
    if(current==16)current=0;
}
// 자동 슬라이드


// 페이드 인
$(window).scroll( function(){
    $('.pb_section').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'100px'},1000);
        }
    }); 
    $('.strategy3 img').each( function(i){
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
            
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'-110px'},1000);
        }  
    }); 
    $('.strategy2 div').each( function(i){
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
            
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'0px'},1000);
        }  
    }); 
    $('.fade1').each( function(i){
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'0px'},1000);
        }
    });
    $('.fade2').each( function(i){
            
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $('.fade2').animate({'opacity':'1','margin-top':'0px'},1200);
        }
    }); 
    $('.fade3').each( function(i){
            
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $('#de_inter').animate({'opacity':'1','margin-top':'1150px'},1000);
        }
                
    }); 
    $('.qrcord').each( function(i){
            
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'1400px'},1200);
        }
                
    }); 
    $('.com_inner').each( function(i){
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $('#com').animate({'opacity':'1','margin-top':'780px'},1000)
        }    
    }); 
    $('.mock_fade').each( function(i){
            
        bottom_of_element = $(this).offset().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
                
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'0px'},1200);
        }
                
    }); 
});
// 페이드 인

// 클릭
$( "a#click" ).click(function(e) {
    $(".feedback a").detach();
    $( "div#feedback2" ).fadeIn( 1600, function() {
      $( "div#feedback3" ).fadeIn( 1600,function() {
        $( "div#feedback4" ).fadeIn(1600)
      });
    });
    return false;
});
// 클릭


// 마우스 이벤트
var $img = $('#img_ch');
$img.on('mouseover', function(e){
    $('#img_ch').find('p').css('opacity', 1);
}).on('mouseout', function(e){
    $('#img_ch').find('p').css('opacity', 0);
});
var $img2 = $('#img_ch2');
$img2.on('mouseover', function(e){
    $('#img_ch2').find('p').css('opacity', 1);
}).on('mouseout', function(e){
    $('#img_ch2').find('p').css('opacity', 0);
});
var $img3 = $('#img_ch3');
$img3.on('mouseover', function(e){
    $('#img_ch3').find('p').css('opacity', 1);
}).on('mouseout', function(e){
    $('#img_ch3').find('p').css('opacity', 0);
});
var $img4 = $('#img_ch4');
$img4.on('mouseover', function(e){
     $('#img_ch4').find('p').css('opacity', 1);
}).on('mouseout', function(e){
    $('#img_ch4').find('p').css('opacity', 0);
});
// 마우스 이벤트

});