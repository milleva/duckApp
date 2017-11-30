var fadeElBottom = $('#fade-scroll-bottom');

$(document).on('scroll', function() {
    var bottomScollPos = $(document).scrollTop() + $(window).height();
    console.log("scroll detected");    
    fadeElBottom.each(function() {
        var elemOffsetTop = $(this).offset().top;
        if(bottomScollPos > elemOffsetTop)
            $(this).css('opacity', (bottomScollPos-elemOffsetTop-150)/550);
    });
	
	
	
});
