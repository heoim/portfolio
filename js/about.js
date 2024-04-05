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
