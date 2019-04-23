$(function () {
  // ele：元素，index：下标，headClass：头部的类，contentEle：内容元素，contentClass：内容的类
  function tabHandle(ele, index, headClass, contentEle, contentClass) {
    $(ele).click(function () {
      // 头部
      $(this).addClass(headClass)
        .siblings().removeClass(headClass);

      // 内容
      $(contentEle[index]).css("display", "block").addClass(contentClass)
        .siblings().removeClass(contentClass).css("display", "none")

    })
  }

  // 2021考研长线备考学习方案 me
  $(".longterm-learn-plan__tab").each(function (index, e) {
    tabHandle(e, index, "longterm-learn-plan__tab--active", $(".jp-content"), "longterm-learn-plan__content");
  })

  // 长线预备 me
  $(".llp-step__item").each(function (index, e) {
    $(e).mouseover(function () {
      $(this).addClass("six-circle__item--active").siblings().removeClass("six-circle__item--active");
    })
  })

  // 新东方在线考研即刻带你拼高分 me
  $(".method__tab").each(function (index, e) {
    tabHandle(e, index, "method__tab--active", $(".method__contents .jp-content"), "method__content");
  })

  // 新东方大牛老师考前神预测
  $(".daniu-predict__tab").each(function (index, e) {
    tabHandle(e, index, "daniu-predict__tab--active", $(".daniu-predict__contents .jp-content"), "daniu-predict__content");
  })

  // 备考-特训-tab original
  var $longtermLearnPlan = $("#jp-longterm-learn-plan");
  var a = "six-circle__item--active";
  var b = -1;
  $longtermLearnPlan.on("mouseenter", ".jp-circle", function (c) {
    var d = $(c.currentTarget),
      e = d.index();
    if (b !== e) {
      var f = d.parents(".jp-content").find(".jp-circle-content");
        f.hide(),
        d.siblings().removeClass(a),
        d.addClass(a),
        f.eq(e).fadeIn("slow"),
        b = e
    }
  })

  // 资深师资 original
  var a = $("#jp-teacher-names"),
    b = new Swiper(".swiper-container", {
      onlyExternal: !0, // 不能滑动
      speed: 500,
      centeredSlides: !0, // 活动块居中
      slidesPerView: 3, // 设置slider容器能够同时显示的slides数量
      loop: !0 // loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换
    });
  a.on("touchstart mousedown", "li", function (c) {
    c.preventDefault(),
      a.find(".active").removeClass("active"),
      $(this).addClass("active"),
      b.swipeTo($(this).index())
  }),
    a.find("li").click(function (a) {
      a.preventDefault()
    })
  // 初始显示活动块的左边
  $(".swiper-slide-active").prev().addClass("swiper-slide-visible")
})