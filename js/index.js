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
      $(this).addClass("six-circle__item--active").siblings().removeClass("six-circle__item--active")
    })
    // $(e).mouseenter(function () {
    //   $(this).addClass(".six-circle__item--active").siblings().removeClass(".six-circle__item--active")
    // })
  })

})