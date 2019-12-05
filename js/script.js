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


    TweenMax.to('#pro1', 2, {
        x: 30,repeat: -1,yoyo: true,ease: Sine.easeInOut,force3D: true
    });
    TweenMax.to('#pro2', 1.5, {
        y: -12,repeat: -1,yoyo: true,ease: Sine.easeInOut,force3D: true
    });
}


$(document).ready(function() {
    setTimeout(function() {
        $('.loading').fadeOut({duration:800, easing:'easeOutBack'});
    }, 1500);
    
    $('.about').on('click', function(e){
        
        $('#about1').toggle();
        $('#about2').toggle();
        $('.hello, .contact').toggle();
        
    });

    $(document).mousemove(function(e){
        $('#image').offset({
            left: e.pageX,
            top: e.pageY + 20
        });
    });

    var mouse = {'x': 0, 'y': 0};

    homex = 0;
    homey = 0;
	forcex = 0;
	forcey = 0;
    magnet = 800;

    
    $(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    });
    

    $('.main2').each(function(index, el){
        $(el).data( "homex", parseInt($(el).position().left));
        $(el).data( "homey", parseInt($(el).position().top));
    });

    $('.main2').css('position','absolute');
    setInterval(function () {
        $('.main2').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;

            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
            
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            
            forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
            forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
                        

            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
            el.text(parseInt( distance));
        });
    }, 15);
    
    $(document).on("mousemove", function (e){
        var mouseX = e.originalEvent.pageX
        var mouseY = e.originalEvent.pageY
  
        $(".main3_container img").each(function () {
            var imgX = $(this).position().left + 135;
            var imgY = $(this).position().top + 135;
    
            var diffX = mouseX - imgX;
            var diffY = mouseY - imgY;
    
            var radians = Math.atan2(diffY, diffX);
            var angle = radians * 180 / Math.PI;
    
            $(this).css("transform", "rotate(" + angle + "deg)")
        });
    });

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
    $('#a_universe').on('mouseenter', function(e){
        $('#universe_ar').css({'opacity' : 1});
    }).on('mouseleave', function(e) {
        $('#universe_ar').css({'opacity' : 0});
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
    $('#ar2').on('mousedown', function(e){
        $('#ar2_hv').css({'display' : 'inline'});
        $('#ar2').css({'display' : 'none'});
    });
    $('#ar3').on('mousedown', function(e){
        $('#ar3_hv').css({'display' : 'inline'});
        $('#ar3').css({'display' : 'none'});
    });
    $('#ar4').on('mousedown', function(e){
        $('#ar4_hv').css({'display' : 'inline'});
        $('#ar4').css({'display' : 'none'});
    });
    $('#ar5').on('mousedown', function(e){
        $('#ar5_hv').css({'display' : 'inline'});
        $('#ar5').css({'display' : 'none'});
    });
    $('#ar6').on('mousedown', function(e){
        $('#ar6_hv').css({'display' : 'inline'});
        $('#ar6').css({'display' : 'none'});
    });
    $('#ar7').on('mousedown', function(e){
        $('#ar7_hv').css({'display' : 'inline'});
        $('#ar7').css({'display' : 'none'});
    });
    $('#ar8').on('mousedown', function(e){
        $('#ar8_hv').css({'display' : 'inline'});
        $('#ar8').css({'display' : 'none'});
    });
    $('#ar9').on('mousedown', function(e){
        $('#ar9_hv').css({'display' : 'inline'});
        $('#ar9').css({'display' : 'none'});
    });
    $('#ar10').on('mousedown', function(e){
        $('#ar10_hv').css({'display' : 'inline'});
        $('#ar10').css({'display' : 'none'});
    });
    $('#ar11').on('mousedown', function(e){
        $('#ar11_hv').css({'display' : 'inline'});
        $('#ar11').css({'display' : 'none'});
    });
    $('#ar12').on('mousedown', function(e){
        $('#ar12_hv').css({'display' : 'inline'});
        $('#ar12').css({'display' : 'none'});
    });
    $('#ar13').on('mousedown', function(e){
        $('#ar13_hv').css({'display' : 'inline'});
        $('#ar13').css({'display' : 'none'});
    });
    $('#ar14').on('mousedown', function(e){
        $('#ar14_hv').css({'display' : 'inline'});
        $('#ar14').css({'display' : 'none'});
    });
    $('#ar15').on('mousedown', function(e){
        $('#ar15_hv').css({'display' : 'inline'});
        $('#ar15').css({'display' : 'none'});
    });
    $('#ar16').on('mousedown', function(e){
        $('#ar16_hv').css({'display' : 'inline'});
        $('#ar16').css({'display' : 'none'});
    });
    $('#ar17').on('mousedown', function(e){
        $('#ar17_hv').css({'display' : 'inline'});
        $('#ar17').css({'display' : 'none'});
    });
    $('#ar18').on('mousedown', function(e){
        $('#ar18_hv').css({'display' : 'inline'});
        $('#ar18').css({'display' : 'none'});
    });


    
});