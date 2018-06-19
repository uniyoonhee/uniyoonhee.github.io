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

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) {
	  delta /= 2;
	}
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
};
  
window.onload = function() {
	var elements = document.getElementsByClassName("txt-rotate");
	for (var i = 0; i < elements.length; i++) {
	  var toRotate = elements[i].getAttribute("data-rotate");
	  var period = elements[i].getAttribute("data-period");
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	// var css = document.createElement("style");
	// css.type = "text/css";
	// css.innerHTML = ".txt-rotate > .wrap { animation: blink 1.5s infinite; border-right: 0.01em solid #fff }";
	// document.body.appendChild(css);
};

class TextScramble {
	constructor(el) {
    	this.el = el
    	this.chars = '!<>-_\\/[]{}—=+*^?#________'
    	this.update = this.update.bind(this)
	}
  	setText(newText) {
    	const oldText = this.el.innerText
    	const length = Math.max(oldText.length, newText.length)
    	const promise = new Promise((resolve) => this.resolve = resolve)
    	this.queue = []
    	for (let i = 0; i < length; i++) {
      		const from = oldText[i] || ''
      		const to = newText[i] || ''
      		const start = Math.floor(Math.random() * 40)
      		const end = start + Math.floor(Math.random() * 40)
      		this.queue.push({ from, to, start, end })
    	}
    	cancelAnimationFrame(this.frameRequest)
    	this.frame = 0
    	this.update()
    	return promise
  	}
  	update() {
    	let output = ''
    	let complete = 0
    	for (let i = 0, n = this.queue.length; i < n; i++) {
      		let { from, to, start, end, char } = this.queue[i]
      		if (this.frame >= end) {
        		complete++
        		output += to
      		}else if (this.frame >= start) {
        		if (!char || Math.random() < 0.28) {
          			char = this.randomChar()
          			this.queue[i].char = char
        		}
        		output += `<span class="dud">${char}</span>`
      		} else{
        		output += from
      		}
    	}
    	this.el.innerHTML = output
    	if (complete === this.queue.length) {
      		this.resolve()
    	} else{
      		this.frameRequest = requestAnimationFrame(this.update)
      		this.frame++
    	}
  	}
  	randomChar() {
    	return this.chars[Math.floor(Math.random() * this.chars.length)]
  	}
}


const phrases = [
  'That’s just the trouble with me,',
  'I give myself very good advice,',
  'but',
  'I very seldom follow it.'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  	fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1800)
	})
  	counter = (counter + 1) % phrases.length
}

next();