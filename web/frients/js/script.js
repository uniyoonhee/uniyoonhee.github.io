var _isNavScroll = false;
 $(window).scroll(function(){
  // Change this to target a different percentage
  var targetPercentage = 15;
  //Change this to the ID of the content you are trying to show.
  var targetID = "#fixed_menu";
  //Window Math
  var scrollTo = $(window).scrollTop(),
      docHeight = $(document).height(),
      windowHeight = $(window).height();
      scrollPercent = (scrollTo / (docHeight-windowHeight)) * 180;
  //네비바 보이기
  $('.state0').each( function(i){
    bottom_of_element = $(this).offset().top + $(this).outerHeight();
    bottom_of_window = $(window).scrollTop() + $(window).height();
        
    if( bottom_of_window > bottom_of_element ){
        $('.state0 img').animate({'opacity':'1','margin-top':'0px'},1300);
    }
  }); 
  $('.state').each( function(i){
    bottom_of_element = $(this).offset().top + $(this).outerHeight();
    bottom_of_window = $(window).scrollTop() + $(window).height();
        
    if( bottom_of_window > bottom_of_element ){
        $('.state img').animate({'margin-left':'0px'},1300);
    }
  }); 
  $('.state2').each( function(i){
    bottom_of_element = $(this).offset().top + $(this).outerHeight();
    bottom_of_window = $(window).scrollTop() + $(window).height();
        
    if( bottom_of_window > bottom_of_element ){
        $('.state2 img').animate({'margin-left':'0px'},1300);
    }
  }); 
  $('.state3').each( function(i){
    bottom_of_element = $(this).offset().top + $(this).outerHeight();
    bottom_of_window = $(window).scrollTop() + $(window).height();
        
    if( bottom_of_window > bottom_of_element ){
        $('.state3 img').animate({'opacity':'1','margin-top':'0px'},1300);
    }
  }); 
if(scrollPercent >= targetPercentage) {
    if(!_isNavScroll){
      _isNavScroll = true;
      $(targetID).css({ top: '0' });
    }
  }else {
    if(_isNavScroll){
      _isNavScroll = false;
      $(targetID).css({ top: -$(targetID).height()+'px'});
    } 
  }
}).trigger('scroll');


$('li a').click(function(){
  $('html, body').animate({
  scrollTop: $( $.attr(this, 'href')).offset().top
  }, 500);
  return false;
});


window.onload = function () {
    $(".box").each(function () {
      // 개별적으로 Wheel 이벤트 적용
      	$(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        // 마우스휠을 위에서 아래로
        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset().top;
          }
        // 마우스휠을 아래에서 위로
        } else {
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }
        // 화면 이동 0.6초(600)
        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 600, complete: function () {
          }
        });
      });
    });
}

