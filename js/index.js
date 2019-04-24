$(function () {
  // ele：元素，headClass：头部的类，contentEle：内容元素，contentClass：内容的类
  function tabHandle(ele, headClass, contentEle, contentClass) {
    ele.each(function (index, e) {
      $(e).click(function () {
        // 头部
        $(this).addClass(headClass)
            .siblings().removeClass(headClass);
        // 内容
        $(contentEle[index]).addClass(contentClass)
            .siblings().removeClass(contentClass)
      });
    });
  }

  // 2021考研长线备考学习方案 me
  tabHandle($(".longterm-learn-plan__tab"), "longterm-learn-plan__tab--active",
      $(".jp-content"), "longterm-learn-plan__content");

  // 长线预备 me
  $(".llp-step__item").each(function (index, e) {
    $(e).mouseover(function () {
      $(this).addClass("six-circle__item--active").siblings().removeClass("six-circle__item--active");
    })
  });

  // 新东方在线考研即刻带你拼高分 me
  tabHandle($(".method__tab"), "method__tab--active",
      $(".method__contents .jp-content"), "method__content");

  // 新东方大牛老师考前神预测
  tabHandle($(".daniu-predict__tab"), "daniu-predict__tab--active",
      $(".daniu-predict__contents .jp-content"), "daniu-predict__content");

  // 备考-特训-tab original
  var $longtermLearnPlan = $("#jp-longterm-learn-plan");
  var active = "six-circle__item--active";
  var b = -1;
  $longtermLearnPlan.on("mouseenter", ".jp-circle", function (c) {
    var d = $(c.currentTarget),
        e = d.index();
    if (b !== e) {
      var f = d.parents(".jp-content").find(".jp-circle-content");
      f.hide(),
          d.siblings().removeClass(active),
          d.addClass(active),
          f.eq(e).fadeIn("slow"),
          b = e
    }
  })

  // 资深师资 original
  var teacher = $("#jp-teacher-names"),
      mySwiper = new Swiper(".swiper-container", {
        onlyExternal: !0, // 不能滑动
        speed: 500,
        centeredSlides: !0, // 活动块居中
        slidesPerView: 3, // 设置slider容器能够同时显示的slides数量
        loop: !0 // loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换
      });
  teacher.on("touchstart mousedown", "li", function (c) {
    c.preventDefault(),
        teacher.find(".active").removeClass("active"),
        $(this).addClass("active"),
        mySwiper.swipeTo($(this).index()) // 滑动到到指定滑块。
  }),
      teacher.find("li").click(function (teacher) {
        teacher.preventDefault()
      })
  // 初始显示活动块的左边
  $(".swiper-slide-active").prev().addClass("swiper-slide-visible");


  // 品牌荣誉 original
  var $list = $("#jp-list");
  var $li = $list.find("li");
  var c = $li.eq(0).outerWidth(!0),
      index = 0,
      len = $li.length;
  if (len % 4 > 0) {
    var f = $li.slice(0, 3).clone();
    $list.append(f)
  }
  var g = $list.find("li").length * c;
  $list.css("width", g), $(".jp-footer-prev").click(function () {
    index += 4, index >= len && (index %= len), $list.css("left", -c * index)
  }), $(".jp-footer-next").click(function () {
    index -= 4, 0 > index && (index = len + index), $list.css("left", -c * index)
  })
})