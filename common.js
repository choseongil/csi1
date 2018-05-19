jQuery(document).ready(function(){
  // #left의 메뉴,내글 탭
  $('.tab_menu').click(function(){
    $('.tab_menu').removeClass('active');
    $('.tab_content').hide();
    $(this).addClass('active');
    $(this).next('.tab_content').show();
  });

  // 모바일 메뉴 클릭시
  var maskHeight = $(document).height();
  $('.btn_open_left').click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('#wrap').on('scroll touchmove mousewheel',function(event){
			event.preventDefault();
			event.stopPropagation();
			return false;
		})
		$('.dimmed').css({'display':'block','width':'100%','height':maskHeight});
		$('#left').css({'display': 'block'});
		$('#left').stop(true, true).animate({left: 0});
	});
  $('.dimmed').click(function(){
    $('html, body').css({'overflow': 'visible', 'height': 'auto'});
    $('#wrap').off('scroll touchmove mousewheel')
    $('#left').stop(true, true).animate({left: '-200px'});
    $('.dimmed').css({'display': 'none'});
  });
  // 모바일 로그인 클릭시
  $('.btn_open_right').click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('#wrap').on('scroll touchmove mousewheel',function(event){
			event.preventDefault();
			event.stopPropagation();
			return false;
		})
		$('.dimmed').css({'display':'block','width':'100%','height':maskHeight});
		$('#right').css({'display': 'block'});
		$('#right').stop(true, true).animate({right: 0});
	});
  $('.dimmed').click(function(){
    $('html, body').css({'overflow': 'visible', 'height': 'auto'});
    $('#wrap').off('scroll touchmove mousewheel')
    $('#right').stop(true, true).animate({right: '-260px'});
    $('.dimmed').css({'display': 'none'});
  });
});
