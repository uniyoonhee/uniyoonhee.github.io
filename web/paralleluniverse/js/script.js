$(document).ready(function() {
// 로딩
    setTimeout(function() {
        $('.loading').fadeOut({duration:800, easing:'easeOutBack'});
    }, 2000);
// 로딩


// 햄버거 메뉴
$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});
// 햄버거 메뉴


// 영상
$('#peni').on('mouseenter', function(e){
    $('#video_pn').css({'opacity' : 1});
}).on('mouseleave', function(e) {
    $('#video_pn').css({'opacity' : 0});
});
$('#gwen').on('mouseenter', function(e){
    $('#video_gw').css({'opacity' : 1});
}).on('mouseleave', function(e) {
    $('#video_gw').css({'opacity' : 0});
});
$('#miles').on('mouseenter', function(e){
    $('#video_ml').css({'opacity' : 1});
}).on('mouseleave', function(e) {
    $('#video_ml').css({'opacity' : 0});
});
$('#noir').on('mouseenter', function(e){
    $('#video_nr').css({'opacity' : 1});
}).on('mouseleave', function(e) {
    $('#video_nr').css({'opacity' : 0});
});
$('#ham').on('mouseenter', function(e){
    $('#video_hm').css({'opacity' : 1});
}).on('mouseleave', function(e) {
    $('#video_hm').css({'opacity' : 0});
});
// 영상

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
    $('.parallax img, .parallax div, .parallax h2, .parallax p').each(function(i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
	    var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
	    var newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
        $(el).css('top', newY + 'px');
    });
});
// 마우스 패럴랙스

// 페이드인
$(window).scroll( function(){
    $('#pro_65, #pro_14512, #story_90214').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},{duration:1500});
        }
    }); 
    $('.story_65 p').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1', 'margin-left':'680px'},{duration:500});
        }
    }); 
    $('.story_14512 p, .story_8311 p').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-left':'620px'},{duration:500});
        }
    }); 
    $('.story_1610 p').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-left':'1100px'},{duration:500});
        }
    }); 
});
// 페이드인

 // 자동 슬라이드
timer();
var current=8;
var $interval;

function timer(){
    var $interval=setInterval(function(){
        slide()
    },1000);  
}

function slide(){
    $('.bannerbox').animate({left:'-=520px'},2600,function(){
        $(this).css({'left':0});
        $('.bannerbox').append($('.slidebanner ul, .slidebanner_1610 ul, .slidebanner_14512 ul, .slidebanner_90214 ul, .slidebanner_8311 ul').children('.bannerbox li').eq(0));
    });    
    current++;
    if(current==8)current=0;
}
// 자동 슬라이드

// 오디오
var SavetheDay = new Audio('./mp3/Ski Mask & Jacquees - Save the Day.mp3');
var WayUp = new Audio('./mp3/Jaden Smith - way up.mp3');
var WhatsUpDanger = new Audio('./mp3/Blackway & Black Caviar - Whats up danger.mp3');
var ScaredtheDark = new Audio('./mp3/Lil Wayne, Ty Dolla $ign & XXXTENTACION - Scared the dark.mp3');
var Elevate = new Audio('./mp3/DJ khalil - Elevate.mp3');

var $bgm_1610 = $('.bgm_1610 img').eq(1);
var $bgm_65 = $('.bgm_65 img').eq(1);
var $bgm_14512 = $('.bgm_14512 img').eq(1);
var $bgm_8311 = $('.bgm_8311 img').eq(1);
var $bgm_90214 = $('.bgm_90214 img').eq(1);

$('#play14512').on('click', function(e){
    if (vis.className.indexOf('audio-paused') > 0) {
        SavetheDay.play();
        $bgm_14512.addClass('rotate360');
    }else {
        SavetheDay.pause();
        $bgm_14512.removeClass('rotate360');
    }
});
$('#play65').on('click', function(e){
    if (vis.className.indexOf('audio-paused') > 0) {
        WayUp.play();
        $bgm_65.addClass('rotate360');
    }else {
        WayUp.pause();
        $bgm_65.removeClass('rotate360');
    }
});
$('#play1610').on('click', function(e){
    if (vis.className.indexOf('audio-paused') > 0) {
        WhatsUpDanger.play();
        $bgm_1610.addClass('rotate360');
    }else {
        WhatsUpDanger.pause();
        $bgm_1610.removeClass('rotate360');
    }
});
$('#play90214').on('click', function(e){
    if (vis.className.indexOf('audio-paused') > 0) {
        ScaredtheDark.play();
        $bgm_90214.addClass('rotate360');
    }else {
        ScaredtheDark.pause();
        $bgm_90214.removeClass('rotate360');
    }
});
$('#play8311').on('click', function(e){
    if (vis.className.indexOf('audio-paused') > 0) {
        Elevate.play();
        $bgm_8311.addClass('rotate360');
    }else {
        Elevate.pause();
        $bgm_8311.removeClass('rotate360');
    }
});
const vis = document.getElementsByClassName('sound-vis')[0];
document.body.addEventListener('click', () => {
    if (vis.className.indexOf('audio-paused') > 0) {
        vis.classList.add('audio-playing');
        vis.classList.remove('audio-paused');
    } else {
        vis.classList.add('audio-paused');
        vis.classList.remove('audio-playing');
    }
});
// 오디오
});