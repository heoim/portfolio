  $(function(){
    //마우스 오버 전체메뉴 나오게
    $('.header .nav>ul').mouseenter(function(){
      $('.header .nav>ul').find('ul').stop().slideDown(500)
    });
    $('.header .nav>ul').mouseleave(function(){
      $(this).find('ul').stop().slideUp(500);
    });
    $('.header .nav>ul>li>ul').mouseenter(function(){
      $('.header .nav>ul>li>ul').find('ul').stop().slideDown(500)
    });
    $('.header .nav>ul>li>ul').mouseleave(function(){
      $(this).find('ul').stop().slideUp(500);
    });
  
  
  
    $('.header .nav>ul').mouseenter(function(){
      $('.header .nav .submenu_bg').find('.submenu_bg').stop().slideDown(500)
    });
    $('.header .nav>ul').mouseleave(function(){
      $('.header .nav .submenu_bg').find('.submenu_bg').stop().slideUp(500);
    });
  });

