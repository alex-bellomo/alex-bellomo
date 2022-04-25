$(document).ready(function() {
   	// enable collapse
   	$('.collapse').collapse();
});

// carousel
$(document).ready(function(){
  	var docWidth = $('body').width(),
    	$images = $('#wrap .hb'),
    	slidesWidth = $images.width() * 9;
  
	console.log($images.width());
  
  $(window).on('resize', function(){
    docWidth = $('body').width();
    slidesWidth = $images.width() * 9;
  })
  
  $(document).mousemove(function(e) {

	if (!document.getElementById("wrap").matches(':hover')) return;

    var mouseX = e.pageX,
        offset = mouseX / docWidth * (slidesWidth - docWidth);
    
    $images.css({
      '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
              'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
})