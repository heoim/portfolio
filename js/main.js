$(function () {
  //top sub_menu
  $("header .inner .main_menu li").mouseenter(function () {
    $(this).find(".sub_menu").stop().slideDown(600);
  });
  $("header .inner .main_menu li").mouseleave(function () {
    $(this).find(".sub_menu").stop().slideUp(600);
  });

  // 반응형 top menu
  $("header .inner .resp").mouseenter(function () {
    // $('header .inner .resp .resp_menu').slideToggle();
    $(this).find(".resp_menu").stop().slideDown(600);
  });
  $("header .inner .resp").mouseleave(function () {
    $(this).find(".resp_menu").stop().slideUp(600);
  });

  // 반응형 top submenu 아코디언
  $("header .inner .resp .resp_menu .resp_sub").mouseenter(function () {
    $(this).find(".resp_submenu").stop().slideDown(600);
  });
  $("header .inner .resp .resp_menu .resp_sub").mouseleave(function () {
    $(this).find(".resp_submenu").stop().slideUp(600);
  });

// section02 web prod_list
  // $('#sect02 .prod_menu01').click(function(){
  //   $('#sect02 .prod_list .prodt01').stop().s
  // })


  // sect02 web label
  $('.sect02 .inner label').click(function(){
    $('.sect02 .inner label').removeClass('click');
    $(this).addClass('click');
  });

  


  //레이어팝업
  $(".web_plan01").click(function () {
    $(".web01").fadeIn();
  });
  $(".web_plan02").click(function () {
    $(".web02").fadeIn();
  });
  $(".web_plan03").click(function () {
    $(".web03").fadeIn();
  });
  $(".web_plan04").click(function () {
    $(".web04").fadeIn();
  });
  $(".web_plan05").click(function () {
    $(".web05").fadeIn();
  });

  $(".graph_btn01").click(function () {
    $(".graphic01").fadeIn();
  });
  $(".graph_btn02").click(function () {
    $(".graphic02").fadeIn();
  });
  $(".graph_btn03").click(function () {
    $(".graphic03").fadeIn();
  });
  $(".graph_btn04").click(function () {
    $(".graphic04").fadeIn();
  });
  $(".graph_btn05").click(function () {
    $(".graphic05").fadeIn();
  });
  $(".graph_btn06").click(function () {
    $(".graphic06").fadeIn();
  });
  $(".graph_btn01_a").click(function () {
    $(".graphicA").fadeIn();
  });
  $(".graph_btn02_b").click(function () {
    $(".graphicB").fadeIn();
  });
  $(".graph_btn03_c").click(function () {
    $(".graphicC").fadeIn();
  });
  $(".graph_btn04_d").click(function () {
    $(".graphicD").fadeIn();
  });
  $(".graph_btn05_e").click(function () {
    $(".graphicE").fadeIn();
  });
  $(".graph_btn06_f").click(function () {
    $(".graphicF").fadeIn();
  });

  // 팝업버튼 클릭시 배경화면 스크롤 잠금
  $(".popup_btn").click(function () {
    $("body").addClass("scrollLock");
  });

  // close 버튼 클릭시 창 닫힘, 스크롤 잠금 해제
  $(".pop_close").click(function () {
    $(".web01").fadeOut();
    $(".web02").fadeOut();
    $(".web03").fadeOut();
    $(".web04").fadeOut();
    $(".web05").fadeOut();
    $(".graphic01").fadeOut();
    $(".graphic02").fadeOut();
    $(".graphic03").fadeOut();
    $(".graphic04").fadeOut();
    $(".graphic05").fadeOut();
    $(".graphic06").fadeOut();
    $(".graphicA").fadeOut();
    $(".graphicB").fadeOut();
    $(".graphicC").fadeOut();
    $(".graphicE").fadeOut();
    $(".graphicD").fadeOut();
    $(".graphicE").fadeOut();
    $(".graphicF").fadeOut();
    $("body").removeClass("scrollLock");
  });

  //외부영역 클릭시 팝업 닫기, 스크롤 잠금 해제
  $(document).mouseup(function (e) {
    if ($(".popup").has(e.target).length === 0) {
      $(".web01").fadeOut();
      $(".web02").fadeOut();
      $(".web03").fadeOut();
      $(".web04").fadeOut();
      $(".web05").fadeOut();
      $(".graphic01").fadeOut();
      $(".graphic02").fadeOut();
      $(".graphic03").fadeOut();
      $(".graphic04").fadeOut();
      $(".graphic05").fadeOut();
      $(".graphic06").fadeOut();
      $(".graphicA").fadeOut();
      $(".graphicB").fadeOut();
      $(".graphicC").fadeOut();
      $(".graphicD").fadeOut();
      $(".graphicE").fadeOut();
      $(".graphicF").fadeOut();
      $("body").removeClass("scrollLock");
    }
  });

  //esc 누를 때 팝업 닫히기
  $(document).keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == 27) {
      //esc 키번호 27
      $(".web01").fadeOut();
      $(".web02").fadeOut();
      $(".web03").fadeOut();
      $(".web04").fadeOut();
      $(".web05").fadeOut();
      $(".graphic01").fadeOut();
      $(".graphic02").fadeOut();
      $(".graphic03").fadeOut();
      $(".graphic04").fadeOut();
      $(".graphic05").fadeOut();
      $(".graphic06").fadeOut();
      $(".graphicA").fadeOut();
      $(".graphicB").fadeOut();
      $(".graphicC").fadeOut();
      $(".graphicD").fadeOut();
      $(".graphicE").fadeOut();
      $(".graphicF").fadeOut();
    }
  });

  //팝업시 배경 스크롤 막기
  // $('body').toggleClass('scrollLock');

  // 팝업시 배경 스크롤 막기
  // const body = document.getElementsByTagName('body')[0];
  // body.classList.add('scrollLock');

  // 스크롤바 내리면 header 배경색 나타나기
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;

  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  // 클릭시 상단으로 올라가는 ToTop 버튼
  // const scrollRef = useRef(null);
  // useEffect(() => {
  //   scrollRef.current.scrollIntoView({behavior:"smooth", block : "center"});
  // }, [focusIndex]);
// const special = document.querySelector(".special");
// btn.addEventListener('click', event=>{
//   special.scrollIntoView({behavior: "smooth", block:"center"})
// })


  // ========= scrollmagic
  // const spyEls = document.querySelectorAll(".scroll-spy");
  // spyEls.forEach((spyEl) => {
  //   new ScrollMagic.Scene({
  //     triggerElement: spyEl,
  //     triggerHook: 0.8,
  //   })
  //     .setClassToggle(spyEl, "show")
  //     .addTo(new ScrollMagic.Controller());
  // });
});
