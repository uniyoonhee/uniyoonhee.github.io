// 2. This code loads the IFrame Player API code asynchronously.var tag = document.createElement('script');

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    height: '400',
    width: '545',
    videoId: 'Q93VrYOXSe8',
    playerVars:{
        autoplay:1,
        controls:0,
        rel:0,
        fs:0,
        modestbranding:0,
        showinfo:0
    }
//   events: {
//     'onReady': onPlayerReady,
//     'onStateChange': onPlayerStateChange
//   }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

$(document).ready(function(){
	$("#fakeLoader").fakeLoader({
	  timeToHide:1700, // 로딩중에 걸리는 시간, 1000은 1초
	  bgColor:"#4e3372", // 배경색
	  spinner:"spinner2" // 로딩중으로 원하는 로딩이미지타입
	});
  });