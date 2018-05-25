(function($){  
    $.fn.scroller = function(options) {

    	// Default options
        var settings = $.extend({
            color : 'red',
            height : '3px',
            position : 'top',
            percentage : false,
            percentage_color : '#fff',
            radius : '0px',
            shadow : false,
            start : 'left'
        }, options );

        var windowWidth = $(window).width();

	    this.each(function(e){

		  	var documentHeight = document.body.clientHeight;
		  	var windowHeight = window.innerHeight;
		  	var scroller = '<div id="scroller"></div>';
		  	this.innerHTML += scroller;
		  	if(settings.percentage === true)
		  		$('#scroller').prepend('<span class="percent"></span>')

		  	$(window).scroll(function(){
		  		var scroll = $(window).scrollTop();
		  		var percent = (parseFloat(scroll / (documentHeight-windowHeight)) * 100).toFixed(1);
		  		show_scroller(percent);
		  	});

		  	addStyle($('#scroller'));

	    });

	    function show_scroller(percent){
	    	$('#scroller').css('width', percent+'%');

	    	if(settings.color)
				new_color(settings.color)

			if(settings.height)
				new_height(settings.height)

			if(settings.position)
				new_position(settings.position)

			if(settings.percentage === true)
				show_percentage(percent)

			if(settings.radius)
				new_radius(settings.radius)

			if(settings.shadow === true)
				new_shadow()

			if(settings.start === 'right')
				new_start()
	    }

	    function addStyle(scroller){
	    	scroller.css({
				'position': 'fixed',
				'left': 0,
				'z-index': 9999999999999999,
				'text-align': 'center',
				'overflow': 'hidden'
	    	});
	    }

	    function new_color(bg){
	    	$('#scroller').css('background-color', bg);
	    }

	    function new_height(height){
	    	$('#scroller').css('height', height);
	    }
	    function new_position(position){
	    	$('#scroller').css(position, 0);
	    }
	    function show_percentage(percent){
	    	$('#scroller .percent').text(Math.round(percent)+'%');
	    	if(settings.percentage_color)
				$('#scroller .percent').css('color', settings.percentage_color)
	    }

	    function new_radius(radius){
	    	$('#scroller').css({
	    		'border-radius' : radius,
	    		'-webkit-border-radius' : radius,
	    		'-moz-border-radius' : radius,
	    		'-o-border-radius' : radius
	    	});
	    }

	    function new_shadow(){
	    	$('#scroller').css({
	    		'box-shadow' : 'rgb(128, 98, 98) 0px 2px 2px 0px',
	    		'-webkit-box-shadow' : 'rgb(128, 98, 98) 0px 2px 2px 0px',
	    		'-moz-box-shadow' : 'rgb(128, 98, 98) 0px 2px 2px 0px',
	    		'-o-box-shadow' : 'rgb(128, 98, 98) 0px 2px 2px 0px'
	    	});
	    }

	    function new_start(){
	    	$('#scroller').css({
	    		'right' : 0,
	    		'left' : 'auto'
	    	});
	    }
    };

})(jQuery);