/**
 * Full page
 */
(function () {
	'use strict';
	
	/**
 	* * Full scroll main function
	*/
	var fullScroll = function (params) {
	/**
	* Main div
	* @type {Object}
	*/
	var main = document.getElementById('main');
		
	/**
	* Sections div
	* @type {Array}
	*/
	var sections = main.getElementsByTagName('section');
		
	/**
	* Full page scroll configurations
	* @type {Object}
	*/
	var defaults = {
		container : main,
		sections : sections,
		animateTime : params.animateTime || 0.7,
		animateFunction : params.animateFunction || 'ease',
		maxPosition: sections.length - 1,
		currentPosition: 0,
		displayDots: typeof params.displayDots != 'undefined' ? 	params.displayDots : true,
		dotsPosition: params.dotsPosition || 'left'
	};

	this.defaults = defaults;
	/**
	* * Init build
	*/
	this.init();
	};

	/**
	 * Init plugin
	 */
	fullScroll.prototype.init = function () {
		this.buildSections()
			.buildDots()
			.buildPublicFunctions()
			.addEvents();

		var anchor = location.hash.replace('#', '').split('/')[0];
		location.hash = 0;
		this.changeCurrentPosition(anchor);
	};

	/**
	 * Build sections
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	/**
	 * Build dots navigation
	 * @return {Object} this (fullScroll)
	 */
	fullScroll.prototype.buildDots = function () {		
		this.ul = document.createElement('ul');
		this.ul.classList.add('dots');
		this.ul.classList.add(this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left');
		var _self = this;
		var sections = this.defaults.sections;		

		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');
		
			a.setAttribute('href', '#' + i);			
			li.appendChild(a);
			_self.ul.appendChild(li);
		}

		this.ul.childNodes[0].firstChild.classList.add('active');

		if (this.defaults.displayDots) {
			document.body.appendChild(this.ul);
		}

		return this;
	};

	/**
	 * Add Events
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.addEvents = function () {
		
		if (document.addEventListener) {
			document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.addEventListener('wheel', this.mouseWheelAndKey, false);
			document.addEventListener('keyup', this.mouseWheelAndKey, false);
			document.addEventListener('touchstart', this.touchStart, false);
			document.addEventListener('touchend', this.touchEnd, false);
			window.addEventListener("hashchange", this.hashChange, false);

			/**
			 * Enable scroll if decive don't have touch support
			 */
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				if(!('ontouchstart' in window)){
					document.body.style = "overflow: scroll;";
					document.documentElement.style = "overflow: scroll;";
				}
			}			

		} else {
			document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
			document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
		}
		
		return this;
	};	

	/**
	 * Build public functions
	 * @return {[type]} [description]
	 */
	fullScroll.prototype.buildPublicFunctions = function () {
		var mTouchStart = 0;
		var mTouchEnd = 0;
		var _self = this;

		this.mouseWheelAndKey = function (event) {
			if (event.deltaY > 0 || event.keyCode == 40) {	
				_self.defaults.currentPosition ++;
				_self.changeCurrentPosition(_self.defaults.currentPosition);				
			} else if (event.deltaY < 0 || event.keyCode == 38) {
				_self.defaults.currentPosition --;
				_self.changeCurrentPosition(_self.defaults.currentPosition);	
			}
			_self.removeEvents();
		};

		this.touchStart = function (event) {
			mTouchStart = parseInt(event.changedTouches[0].clientY);
			mTouchEnd = 0;
		};

		this.touchEnd = function (event) {
			mTouchEnd = parseInt(event.changedTouches[0].clientY);
			if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
				if (mTouchEnd > mTouchStart) {
					_self.defaults.currentPosition --;
				} else {
					_self.defaults.currentPosition ++;					
				}
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			}			
		};

		this.hashChange = function (event) {
			if (location) {
				var anchor = location.hash.replace('#', '').split('/')[0];
				if (anchor !== "") {
					if (anchor < 0) {
						_self.changeCurrentPosition(0);
					} else if (anchor > _self.defaults.maxPosition) {
						_self.changeCurrentPosition(_self.defaults.maxPosition);
					} else {
						_self.defaults.currentPosition = anchor;
						_self.animateScroll();
					}					
				}				
			}
		};

		this.removeEvents = function () {
			if (document.addEventListener) {
			document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.removeEventListener('wheel', this.mouseWheelAndKey, false);
			document.removeEventListener('keyup', this.mouseWheelAndKey, false);
			document.removeEventListener('touchstart', this.touchStart, false);
			document.removeEventListener('touchend', this.touchEnd, false);

			} else {
				document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
				document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
			}

			setTimeout(function(){
				_self.addEvents();
			}, 600);
		};

		this.animateScroll = function () {
			var animateTime = this.defaults.animateTime;
			var animateFunction = this.defaults.animateFunction;
			var position = this.defaults.currentPosition * 100;

			this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.transform = 'translateY(-' + position + '%)';
			this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

			for (var i = 0; i < this.ul.childNodes.length; i++) {
					this.ul.childNodes[i].firstChild.classList.remove('active');
					if (i == this.defaults.currentPosition) {
					this.ul.childNodes[i].firstChild.classList.add('active');		
				}
			}
		};

		this.changeCurrentPosition = function (position) {
			if (position !== "") {
				_self.defaults.currentPosition = position;
				location.hash = _self.defaults.currentPosition;
			}	
		};

		return this;
	};
	window.fullScroll = fullScroll;
})();

window.addEventListener('keydown', function (event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

var sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('#page-wrapper');

sidebarBtn.addEventListener('click', function (event) {
		sidebarBtn.classList.toggle('active');
		sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', function (event) {

		if (sidebarBox.classList.contains('active')) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

window.addEventListener('keydown', function (event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

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

const items = document.querySelectorAll('.flex-gallery__item');

items.forEach( item => item.addEventListener('click', showItem));
items.forEach( item => item.addEventListener('transitionend', activeItem));

function showItem ( e ) {
  	if(this.classList.contains('active')){
    	return false;
  	}
  	items.forEach(item => item.classList.remove('active'));
  	this.classList.toggle('active');
};

function activeItem ( e ) {
  	if ( e.propertyName.includes('flex') ) {
    	this.classList.toggle('visible');
  	}
}; 

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
};
