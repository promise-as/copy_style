$(function () {
  // 备考-特训-tab
  $(".longterm-learn-plan__tab").each(function (index, e) {
    $(e).click(function () {
      $(this).addClass("longterm-learn-plan__tab--active")
          .siblings().removeClass("longterm-learn-plan__tab--active");

      $($(".jp-content")[index]).css("display", "block").addClass("longterm-learn-plan__content")
          .siblings().removeClass("longterm-learn-plan__content").css("display", "none")

    })
  })

  // 长线预备
  $(".llp-step__item").each(function (index, e) {
    $(e).mouseover(function () {
      // console.log(111111111111)
      $(this).addClass("six-circle__item--active").siblings().removeClass("six-circle__item--active");
      $($(".llp-step-content__item")[index]).show(800).siblings().hide(800);
    })
  })

  // 轮次带学
  $(".method__tab").each(function (index, e) {
    $(e).click(function () {
      $(this).addClass("method__tab--active").siblings().removeClass("method__tab--active");
      $($(".method__contents .jp-content")[index]).css("display", "block").addClass("method__content")
          .siblings().removeClass("method__content").css("display", "none");
    })
  })

  // 资深师资
  $("#jp-teacher-names li").each(function (index, e) {
    $(e).click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    })
  })

  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 3,
  //   // effect : 'coverflow',
  //   // spaceBetween: 30,
  //   centeredSlides: true,
  //
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     type: 'custom'
  //   }
  // });

  // 新东方大牛老师考前神预测
  $(".daniu-predict__tab").each(function (index, e) {
    $(e).click(function () {
      $(this).addClass("daniu-predict__tab--active").siblings().removeClass("daniu-predict__tab--active");
      $($(".daniu-predict__contents .jp-content")[index]).css("display", "block").addClass("daniu-predict__content")
          .siblings().removeClass("daniu-predict__content").css("display", "none");
    })
  })

  var footerWidth = $(".jp-footer-wrap").width();

  var footerMargin = window.Number(35);

  var time = 1;
  $(".jp-footer-next").click(function () {
    console.log($("#jp-list").css("left", -(footerWidth + footerMargin) * time));
    time++
  })
})