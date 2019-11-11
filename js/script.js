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


$(document).ready(function() {
    
    
    // var $eting = $('.left');
    // $eting.on('mouseenter', function(e){
    //     $('.left').find('#eting_img').css('opacity', 1);
    // }).on('mouseleave', function(e){
    //     $('.left').find('#eting_img').css('opacity', 0);
    // });

    var $workList = $('#work_list');
    var $workListItem = $workList.find('li');
    var $workListItemEl = $workListItem.find('a');
    $workListItemEl.on('mouseenter', function(e){
        var $el = $(e.currentTarget), $img = $el.next('img');
        $img.css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        var $el = $(e.currentTarget), $img = $el.next('img');
        $img.css({'opacity' : 0});
    });
    //var $a = $()

    $('#a_ttago').on('mouseenter', function(e){
        $('#ttago_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#ttago_ar').css({'opacity' : 0});
    });
    $('#a_cantata').on('mouseenter', function(e){
        $('#cantata_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#cantata_ar').css({'opacity' : 0});
    });
    $('#a_unis').on('mouseenter', function(e){
        $('#unispop_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#unispop_ar').css({'opacity' : 0});
    });
    $('#a_bixby').on('mouseenter', function(e){
        $('#bixby_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#bixby_ar').css({'opacity' : 0});
    });
    $('#a_eting').on('mouseenter', function(e){
        $('#eting_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#eting_ar').css({'opacity' : 0});
    });
    $('#a_walle').on('mouseenter', function(e){
        $('#walle_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#walle_ar').css({'opacity' : 0});
    });
    $('#a_super').on('mouseenter', function(e){
        $('#super_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#super_ar').css({'opacity' : 0});
    });
    $('#a_tarts').on('mouseenter', function(e){
        $('#tarts_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#tarts_ar').css({'opacity' : 0});
    });
    $('#a_frients').on('mouseenter', function(e){
        $('#frients_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#frients_ar').css({'opacity' : 0});
    });

    $('.arrow').draggable({revert: true});
    $('#ar1').on('mousedown', function(e){
        $('#ar1_hv').css({'display' : 'inline'});
        $('#ar1').css({'display' : 'none'});
    });
});