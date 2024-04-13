"use strict";
$(function () {
  // 창 열릴때 가로 그래프 모양 변화
  function animated_contents() {
    $(".skill_bar > div").each(function (i) {
      $(this).css({ width: $(this).data("width") + "%" });
    });
  }
  if (jQuery().appear) {
    $(".skill_bar")
      .appear()
      .on("appear", function () {
        animated_contents();
      });
  } else {
    animated_contents();
  }
});

$(function () {
<<<<<<< HEAD
  //sub_menu
=======
  //top sub_menu
>>>>>>> 9ae7694501eefa052892ee4048c855f75cd1216c
  $("header .inner .main_menu li").mouseenter(function () {
    $(this).find(".sub_menu").stop().slideDown(600);
  });
  $("header .inner .main_menu li").mouseleave(function () {
    $(this).find(".sub_menu").stop().slideUp(600);
  });

<<<<<<< HEAD
  // 반응형 menu
=======
  // 반응형 top menu
>>>>>>> 9ae7694501eefa052892ee4048c855f75cd1216c
  $("header .inner .resp").mouseenter(function () {
    // $('header .inner .resp .resp_menu').slideToggle();
    $(this).find(".resp_menu").stop().slideDown(600);
  });
  $("header .inner .resp").mouseleave(function () {
    $(this).find(".resp_menu").stop().slideUp(600);
  });

<<<<<<< HEAD
  // 반응형 submenu 아코디언
=======
  // 반응형 top submenu 아코디언
>>>>>>> 9ae7694501eefa052892ee4048c855f75cd1216c
  $("header .inner .resp .resp_menu .resp_sub").mouseenter(function () {
    $(this).find(".resp_submenu").stop().slideDown(600);
  });
  $("header .inner .resp .resp_menu .resp_sub").mouseleave(function () {
    $(this).find(".resp_submenu").stop().slideUp(600);
  });

  // 스크롤바 내리면 header 배경색 하얗게, 글씨 검게 변하기
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;

  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

});
