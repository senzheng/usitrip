$(document).ready(function (){
    checkSize();
    $(window).resize(checkSize);
    $('.moblie-showList > button:nth-child(2)').hide();

	$('.moblie-showList > button:first-child').click(function () {
		$('.content > div:first-child').addClass('col-sm-2 col-xs-2').show();
		$('.content > div:last-child').removeClass('col-sm-12 col-xs-12').addClass('col-sm-10 col-xs-10');
		$('.moblie-showList > button:nth-child(2)').show();
		$(this).hide();
	});

	$('.moblie-showList > button:nth-child(2)').click(function () {
		$('.content > div:first-child').removeClass('col-sm-2 col-xs-2').hide();
		$('.content > div:last-child').addClass('col-sm-12 col-xs-12').removeClass('col-sm-10 col-xs-10');
		$('.moblie-showList > button:first-child').show();
		$(this).hide();
	});

    


});

function checkSize(){
    if ($(".moblie-menu").css("display") != "none" ){
        // your code here
        $('.content > div:first-child').removeClass('col-sm-2 col-xs-2').hide();
		$('.content > div:last-child').addClass('col-sm-12 col-xs-12 col-md-12').removeClass('col-sm-10 col-xs-10 col-md-10');
    }


    if($(".moblie-menu").css("display") == "none" ){
        $('.content > div:first-child').addClass('col-sm-2 col-xs-2').show();
		$('.content > div:last-child').removeClass('col-sm-12 col-xs-12 col-md-12').addClass('col-sm-10 col-xs-10 col-md-10');
    }
}

