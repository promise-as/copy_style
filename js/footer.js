(function () {
  var a = {
    init: function () {
      var a = this;
      a.$list = $("#jp-list");
      var b = a.$list.find("li");
      c = b.eq(0).outerWidth(!0),
        d = 0,
        e = b.length;
      if (e % 4 > 0) {
        var f = b.slice(0, 3).clone();
        a.$list.append(f)
      }
      var g = a.$list.find("li").length * c;
      a.$list.css("width", g), $(".jp-footer-prev").click(function () {
        d += 4, d >= e && (d %= e), a.$list.css("left", -c * d)
      }), $(".jp-footer-next").click(function () {
        d -= 4, 0 > d && (d = e + d), a.$list.css("left", -c * d)
      })
    }
  };
  return (function () {
    $(function () {
      a.init()
    })
  })()
})()