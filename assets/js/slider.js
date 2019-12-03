$(document).ready(function(){
 	var imgItems = $('.slider li').length;
	var imgPosition = 1;
	// console.log(imgItems);

	for(i = 1; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');		
	} 

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color': '#66BC5A'});

	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	function pagination() {
		var $paginationPosition = $(this).index() + 1;
		// console.log($paginationPosition);

		$('.slider li').hide();
		$('.slider li:nth-child('+ $paginationPosition +')').fadeIn();

		$('.pagination li').css({'color': '#bcbcbc'});
		$(this).css({'color': '#66BC5A'});

		imgPosition = paginationPosition;
	}

	function nextSlider() {
		if(imgPosition >= imgItems) {
			imgPosition = 1;
		} else {
			imgPosition++;
		}
		// console.log(imgPosition);

		$('.pagination li').css({'color': '#bcbcbc'});
		$('.pagination li:nth-child('+ imgPosition +')').css({'color': '#66BC5A'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPosition +')').fadeIn();
	}

	function prevSlider() {
		if(imgPosition <= 1) {
			imgPosition = imgItems;
		} else {
			imgPosition--;
		}
		// console.log(imgPosition);

		$('.pagination li').css({'color': '#bcbcbc'});
		$('.pagination li:nth-child('+ imgPosition +')').css({'color': '#bcbcbc'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPosition +')').fadeIn(); 
	}
});


$(document).ready(function(){
	var cimgItems = $('.m_slider li').length;
	var cimgPosition = 1;
	// console.log(cimgItems);

	for(i = 1; i <= cimgItems; i++) {	
		$('.mpagination').append('<li><span class="fa fa-circle"></span></li>');
	} 

	$('.m_slider li').hide();
	$('.m_slider li:first').show();
	$('.mpagination li:first').css({'color': '#66BC5A'});


	$('.mpagination li').click(cpagination);
	$('.mright span').click(cnextSlider);
	$('.mleft span').click(cprevSlider);

	setInterval(function() {
	 		cnextSlider();
	 }, 4000);

	function cpagination() {
		var $cpaginationPosition = $(this).index() + 1;
		// console.log($cpaginationPosition);

		$('.m_slider li').hide();
		$('.m_slider li:nth-child('+ $cpaginationPosition +')').fadeIn();

		$('.mpagination li').css({'color': '#bcbcbc'});
		$(this).css({'color': '#66BC5A'});

		cimgPosition = cpaginationPosition;
	}

	function cnextSlider() {
		if(cimgPosition >= cimgItems) {
			cimgPosition = 1;
		} else {
			cimgPosition++;
		}
		// console.log(cimgPosition);

		$('.mpagination li').css({'color': '#bcbcbc'});
		$('.mpagination li:nth-child('+ cimgPosition +')').css({'color': '#66BC5A'});

		$('.m_slider li').hide();
		$('.m_slider li:nth-child('+ cimgPosition +')').fadeIn(); 
	}

	function cprevSlider() {
		if(cimgPosition <= 1) {
			cimgPosition = cimgItems;
		} else {
			cimgPosition--;
		}
		// console.log(cimgPosition);

		$('.mpagination li').css({'color': '#bcbcbc'});
		$('.mpagination li:nth-child('+ cimgPosition +')').css({'color': '#66BC5A'});

		$('.m_slider li').hide();
		$('.m_slider li:nth-child('+ cimgPosition +')').fadeIn();
	}
});