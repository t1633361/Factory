
//大背景的切换以及自动轮播
	var lIndex = 0;
	var Time = null;

	$(".but ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var nIndex = $(this).index();
		$(".slider-pic-item").eq(nIndex).fadeIn(1000).siblings(".slider-pic-item").fadeOut(1000);
		lIndex = nIndex;
		clearInterval(Time);
		auto();
	});

	function auto(){
		Time = setInterval(function(){
			(lIndex<3)?(lIndex++):(lIndex=0);
			$(".but ul li").eq(lIndex).addClass("active").siblings().removeClass("active");
			$(".slider-pic-item").eq(lIndex).fadeIn(2000).siblings(".slider-pic-item").fadeOut(2000);
		},5000);
	};

    
	auto();