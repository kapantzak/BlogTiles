$(document).ready(function() {	
	$('#content-body').jstiles(opt);
	topSetPos();
	topVisible();
});

var tempBlog = {
	tempBlog: {
		tilesNum: 9,
		columns: {
			0: {
				colClass: 'tl-col col-xs-12 col-sm-6',
				start: '4',
				end: '5'
			}
		},
		tiles: {
			0: 'col-xs-12 col-sm-6',
			1: 'col-xs-12 col-sm-6',
			2: 'col-xs-12 col-sm-3',
			3: 'col-xs-12 col-sm-3',
			4: 'col-xs-12 col-sm-12',
			5: 'col-xs-12 col-sm-12',
			6: 'col-xs-12 col-sm-6',
			7: 'col-xs-12 col-sm-6',
			8: 'col-xs-12 col-sm-6'
		},
		animations: {
			0: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:250 },
			1: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:150 },
			2: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:50 },
			3: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:550 },
			4: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:100 },
			5: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:350 },
			6: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:250 },
			7: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:200 },
			8: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:450 }
		},
		config: {
			1: { ratio: 0.6 },
			4: { ratio: 0.58 },
			5: { ratio: 0.58 },
			7: { ratio: 0.58 },
			8: { ratio: 0.58 }
		}
	},
	tempBlogMore: {
		tilesNum: 10,
		tiles: {
			0: 'col-xs-12 col-sm-3',
			1: 'col-xs-12 col-sm-6',
			2: 'col-xs-12 col-sm-3',
			3: 'col-xs-12 col-sm-6',
			4: 'col-xs-12 col-sm-3',
			5: 'col-xs-12 col-sm-3',
			6: 'col-xs-12 col-sm-6',
			7: 'col-xs-12 col-sm-3',
			8: 'col-xs-12 col-sm-3',
			9: 'col-xs-12 col-sm-6'
		},
		animations: {
			0: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:250 },
			1: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:150 },
			2: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:50 },
			3: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:550 },
			4: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:100 },
			5: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:350 },
			6: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:250 },
			7: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:200 },
			8: { tlClass:'tl-slide-up', tlClassF:'tl-slide-up-f', tlDelay:450 }
		},
		config: {
			1: { ratio: 0.58 },
			3: { ratio: 1.18 },
			6: { ratio: 0.58 },
			9: { ratio: 0.59 }
		}
	}
};
var opt = {
	loader: 1000,
	templateObj: tempBlog,
	tileRatio: 1.2
};

//VIEW MORE --------------------------------------------------------------------------------------------//
var more = $('.view-more-section');
$(window).scroll(function() {
	loadOnScroll();
	topVisible();
});

var loadOnScroll = function() {
	var win = $(window);
	var cont = $('#content');
	var contH = cont.outerHeight();
	var winH = win.height();
	var offsetBottom = 0;
	var lim = winH - offsetBottom;
	var contentBottom = cont.offset().top - parseFloat(win.scrollTop()) + contH;
	if (contentBottom < lim) {
		topPos('absolute');
		cont
			.find('.view-more-section.hidden')
			.first()
			.removeClass('hidden')
			.jstiles(opt);
	} else {
		topPos('fixed');
	}	
}

//Load content function
var loadContent = function() {
	$.get('test.html', function(data) {
		if (data && data != '') {
			
		}
	})
}
	
//ABOUT - CONTACT --------------------------------------------------------------------------------------//
$('.nav-menu-a').on('click', function(e) {	
	var id = $(this).attr('id');
	if (id == 'about') {
		e.preventDefault();
		toggleAbout('open');
		toggleContact('close');		
	} else if (id == 'contact') {
		e.preventDefault();
		toggleContact();
		toggleAbout('close');	
	}	
});

$('#close-contact').on('click', function() {
	toggleContact('close');
});

$('#close-about').on('click', function() {
	toggleAbout('close');	
});

var toggleAbout = function(action) {
	var ml = $('.main-logo');
	var ul = $('.under-logo');
	var about = $('#about-section');
	var mih = $('#main-img-holder');
	if (action == 'open') {
		ml.addClass('scale-out');
		ul.addClass('scale-out');
		about.slideDown({
			duration:350,
			easing:'easeOutExpo'
		});
		mih.addClass('opened');
		$('html,body').animate({ scrollTop:0 }, 250, 'easeOutExpo');
	} else if (action == 'close') {
		ml.removeClass('scale-out');
		ul.removeClass('scale-out');
		about.slideUp({
			duration:350,
			easing:'easeOutExpo'
		}, function() {
			mih.removeClass('opened');	
		});		
	} 
}
var cont = $('#contact-section');
var toggleContact = function(action) {	
	if (action && action != '') {
		contactAction(action);
	} else {
		if (cont.hasClass('contactOpened')) {
			contactAction('close');
		} else {
			contactAction('open');
		}
	}
}
var contactAction = function(action) {
	if (action == 'open') {
		cont.addClass('contactOpened').slideDown({
			duration:350,
			easing:'easeOutExpo'
		});
	} else if (action == 'close') {
		cont.removeClass('contactOpened').slideUp({
			duration:350,
			easing:'easeOutExpo'
		});
	}
}

//MAIN MENU ----------------------------------------------------------------------//
$('#main-menu-small, .nav-menu-a').on('click', function() {
	$(this).closest('#menu-anchor-holder').toggleClass('expanded collapsed');	
});

//GO TOP -------------------------------------------------------------------------//
$(window).resize(function() {
	topSetPos();
});

var topSetPos = function() {
	var topBtn = $('.goTopBtn');
	if (topBtn.hasClass('bottom')) {
		topPos('absolute');
	} else {
		topPos('fixed');
	}
}

var topBtn = $('.goTopBtn');
topBtn.on('click', function() {
	$('html,body').animate({ scrollTop:0 }, 250, 'easeOutExpo');
});

var topPos = function(state) {
	if (state == 'absolute') {
		togglePos(state);
		topBtn.addClass('bottom');
	} else {
		togglePos(state);
		topBtn.removeClass('bottom');
	}
}

var togglePos = function(state) {
	var content = $('#content');
	var contentW = content.outerWidth();
	if (state == 'absolute') {
		//Absolute
		topBtn.removeAttr('style');
	} else {
		//Fixed
		var r = ($(window).width() - contentW) / 2;
		topBtn.css({'right': r + 'px'});
	}
}

var topVisible = function() {
	var offset = 350;
	var topBtn = $('.goTopBtn');
	var scr = $(window).scrollTop();
	if (scr > offset) {
		topBtn.show();
	} else {
		topBtn.hide();
	}
}

//Get background images ------------------------------------------ //
$(document).on('tl.tilecontent.appended', function(e, el) {
	el.find('.tl-tile').each(function() {
		var that = $(this);
		var bg = that.attr('data-bt-bg');
		if (bg && bg != '') {
			that.find('.tl-tile-content')
				.css({
					'background-image':'url("' + bg + '")',
					'background-size':'cover'
				});
		}
	});
});