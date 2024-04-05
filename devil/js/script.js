// sect03 인물소개 char_list

$(function () {
  $('.sect03 .char_list .char').mouseenter(function(){
    $('.sect03 .char_list .char').removeClass('on');
    $(this).addClass('on');
  });
  $('.sect03 .char_list').mouseleave(function(){
    $('.sect03 .char_list').firstChildren().addClass('on');
  })

// //popup
// window.open('./popup.html','event','width=500px,height=540px, left=100px,top=10px');

// function winOpen(){
// window.open('./popup.html','width=500px,height=540px, left=100px, top=100px');
// }

// $(function(){
//      //act
//     $('nav>.inner>li').mouseenter(function(){
//         $(this).children('ul').stop().slideDown();
//     });
//     $('nav>.inner>li').mouseleave(function(){
//         $(this).children('ul').stop().slideUp();
//     });

//     //slide
//     setInterval(function(){
//         $('.slide ul').animate({
//             left:'-480px'
//         },600,function(){
//             $('.slide ul').append($('.slide ul li').eq(0));
//             $('.slide ul').css('left',0);
//         } );

//         },3000);
});
