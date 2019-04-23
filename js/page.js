define("project/zt/2019/0424kyldy/js/page",
  ["./lazy-load/delay",
    "./lazy-load/lazy-load",
    "./common/dialog/css/ui-dialog.css",
    "./common/try-listen.css",
    "./common/tab-switch",
    "./js/con-slide",
    "./js/evaluation",
    "./js/carousel-move",
    "./common/try-listen/2.x/try-listen",
    "project/zt/2016/0114kyldy/js/common/dialog/dialog",
    "project/zt/2016/0114kyldy/js/common/dialog/js/dialog-plus",
    "project/zt/2016/0114kyldy/js/common/dialog/js/dialog",
    "project/zt/2016/0114kyldy/js/common/dialog/js/popup",
    "project/zt/2016/0114kyldy/js/common/dialog/js/dialog-config",
    "./common/try-listen/2.x/try-listen.css",
    "common/kooplayer/4.x/kooplayer",
    "common/kooplayer/4.x/js/kooplayer-adapter",
    "common/kooplayer/4.x/js/client-test",
    "common/kooplayer/4.x/js/flash-player",
    "common/kooplayer/4.x/js/web-h5-player"],
  function (require) {
    var a = require("./lazy-load/delay");
    require("./common/dialog/css/ui-dialog.css"), require("./common/try-listen.css"), require("./common/tab-switch");
    var b = require("./js/con-slide"),
      c = require("./js/evaluation"),
      d = require("./js/carousel-move"),
      e = $(window),
      f = [[42], [17, 17, 17, 256], [95], [34, 220, 220, 90], [-28], [-28, 183], [67, 67], [320]],
      g = [[362], [228], [356]],
      h = require("./common/try-listen/2.x/try-listen"),
      i = {
        init: function () {
          this.$rollWrap = $("#jp-teacher"),
            this.$slideWrap = $(".jp-congratulate-slide"),
            this.$winAuto = $(".jp-win-auto"),
            this.$teachList = $(".jp-teacher-list"),
            this.$nameList = $(".jp-name-list"),
            this.$appWrap = $(".jp-app-wrap"),
            this.$pcWrap = $(".jp-pc-wrap"),
            this.$stepWrap = $(".jp-step"),
            this.$kyTable = $(".jp-kaoyan table"),
            this.$evWrap = $(".jp-evalution"),
            this.$shootWrap = $(".jp-shoot-rate"),
            this.$coverRate = $(".jp-cover-rate"),
            this.delayInit(), this.winAuto(),
            this.bind()
        },
        bind: function () {
          var a = $(window),
            b = $("body");
          a.on("doyoo.loaded",
            function () {
              b.append('<div id="jp-view-tt" class="p-view-icon"></div>')
            }),
            b.on("click", "#jp-view-tt",
              function () {
                $("body,html").stop().animate({scrollTop: $("#jp-page-tt-wrap").offset().top}, 500)
              }),
            this.$shootWrap.on("click", ".jp-rate-detail", function (a) {
              var b = $(a.currentTarget),
                c = b.parents(".jp-subject-prev"),
                d = c.siblings(".jp-subject-hov");
              c.stop().animate({width: 0, height: 0, opacity: 0}, 700).hide(),
                d.stop().animate({
                  width: 1e3,
                  opacity: 1,
                  height: 275
                }, 700).show()
            }).on("mouseleave", ".jp-subject-item",
              function (a) {
                var b = $(a.currentTarget),
                  c = b.find(".jp-subject-prev"),
                  d = b.find(".jp-subject-hov");
                d.stop().animate({width: 0, opacity: 0, height: 0}, 500).hide(),
                  c.stop().animate({
                    width: 1e3,
                    height: 275,
                    opacity: 1
                  }, 500).show()
              })
        },
        delayInit: function () {
          var b = this;
          a.init({
            queryArea: ".jp-delay-load", nameAttr: "data-delay-load", funs: {
              teacher: function () {
                b.teachRoll()
              }, longtermLearnPlan: function () {
                b.initLongtermLearnPlan()
              }, daniuPredict: function () {
                b.initDaniuPredict()
              }, method: function () {
                b.initMethod()
              }
            }
          })
        },
        vsFn: function () {
          var a = this;
          a.$kyTable.on("mouseover", "tbody tr", function (b) {
            var c = $(b.currentTarget),
              d = c.outerHeight() - 2,
              e = c.position().top;
            navigator.userAgent.indexOf("MSIE") > 0 && (e += 20),
              a.$kyTable.find("tbody tr").removeClass("hover"),
              c.addClass("hover"), $(".jp-slip").show().css("top", e + d)
          }),
            a.$kyTable.on("mouseout", "tbody tr", function (a) {
              var b = $(a.currentTarget);
              b.removeClass("hover"), $(".jp-slip").hide()
            })
        },
        stepFn: function () {
          var a = this;
          a.$stepWrap.on("click", ".left ul li",
            a.stepLearn.bind(a)),
            a.$stepWrap.on("mouseover", ".left ul li",
              function (b) {
                var c = $(b.currentTarget);
                a.$stepWrap.find(".left ul li").removeClass("hover"),
                  a.$stepWrap.find(".left ul li.on").addClass("hover"),
                  c.addClass("hover")
              }), a.$stepWrap.on("mouseout", ".left ul li", function (a) {
            var b = $(a.currentTarget);
            b.removeClass("hover")
          }), function () {
            var a = $(".lp-title-list"),
              b = a.children(),
              c = $(".lp-content-box"),
              d = c.children();
            b.on("click", function (a) {
              var c = $(a.currentTarget);
              return c.hasClass("lp-list-selected") ? !1 : (b.removeClass("lp-list-selected"),
                c.addClass("lp-list-selected"), void d.hide().eq(c.index()).show())
            })
          }()
        },
        winAuto: function () {
          function a() {
            b.$winAuto.css(e.width() <= 1e3 ? {width: "1000px", overflow: "hidden"} : {
              width: "100%",
              overflow: "hidden"
            })
          }

          var b = this;
          a(), e.resize(function () {
            a()
          })
        },
        listenPop: function (a) {
          var b = $(a.currentTarget), c = b.data();
          console.log(c), h.showMp4ListenPop({imgSrc: c.imgUrl, mp4Url: c.listenUrl})
        }, evInit: function () {
          c(this.$evWrap)
        },
        stepLearn: function (a) {
          var b = $(a.currentTarget), c = $(".jp-step ul li"), d = $(".jp-step .right"), e = b.index();
          c.removeClass("on"), b.addClass("on"), d.hide(), d.eq(e).show()
        },
        teachRoll: function () {
          var a = $("#jp-teacher-names"),
            b = new Swiper(".swiper-container", {
              onlyExternal: !0,
              speed: 500,
              centeredSlides: !0,
              slidesPerView: 3,
              loop: !0
            });

          a.on("touchstart mousedown", "li",
            function (c) {
              c.preventDefault(),
                a.find(".active").removeClass("active"),
                $(this).addClass("active"), b.swipeTo($(this).index())
            }),
            a.find("li").click(function (a) {
              a.preventDefault()
            }),
            a.find("li").eq(0).trigger("touchstart"), this.$rollWrap.on("click", ".jp-listen", this.listenPop.bind(this))
        },
        conRoll: function () {
          b(this.$slideWrap)
        },
        initCoverRate: function () {
          $.tabSwitch({
            tabs: this.$coverRate.find(".jp-tabs"),
            content: this.$coverRate.find(".jp-content"),
            currClassName: "lp-title--selected",
            delegate: !0
          }), this.$coverRate.find(".jp-tabs").find("li").eq(0).trigger("click"), this.$coverRate.on("mouseenter", ".jp-card-wrap", function (a) {
            $(a.currentTarget).find(".jp-card").addClass("back-visible")
          }).on("mouseleave", ".jp-card-wrap", function (a) {
            $(a.currentTarget).find(".jp-card").removeClass("back-visible")
          })
        },
        initLongtermLearnPlan: function () {
          this.$longtermLearnPlan = $("#jp-longterm-learn-plan"), $.tabSwitch({
            tabs: this.$longtermLearnPlan.find(".jp-tabs"),
            content: this.$longtermLearnPlan.find(".jp-content"),
            currClassName: "longterm-learn-plan__tab--active",
            currContentCls: "longterm-learn-plan__content",
            delegate: !0
          });
          var a = "six-circle__item--active";
          this.$longtermLearnPlan.find(".jp-tabs").find("li").eq(0).trigger("click");
          var b = -1;
          this.$longtermLearnPlan.on("mouseenter", ".jp-circle", function (c) {
            var d = $(c.currentTarget), e = d.index();
            if (b !== e) {
              var f = d.parents(".jp-content").find(".jp-circle-content");
              f.hide(), d.siblings().removeClass(a), d.addClass(a), f.eq(e).fadeIn("slow"), b = e
            }
          }), _.each(this.$longtermLearnPlan.find(".jp-content"), function (a) {
            $(a).find(".jp-circle").eq(0).trigger("mouseenter")
          })
        },
        initMethod: function () {
          this.$method = $("#jp-method");
          $.tabSwitch({
            tabs: this.$method.find(".jp-tabs"),
            content: this.$method.find(".jp-content"),
            currClassName: "method__tab--active",
            currContentCls: "method__content",
            delegate: !0,
            afterSwitch: function () {
            }
          }), this.$method.find(".jp-tabs").find("li").eq(0).trigger("click")
        },
        initDaniuPredict: function () {
          this.$daniuPredict = $("#jp-daniu-predict");
          $.tabSwitch({
            tabs: this.$daniuPredict.find(".jp-tabs"),
            content: this.$daniuPredict.find(".jp-content"),
            currClassName: "daniu-predict__tab--active",
            currContentCls: "daniu-predict__content",
            delegate: !0,
            afterSwitch: function () {
            }
          }), this.$daniuPredict.find(".jp-tabs").find("li").eq(0).trigger("click")
        },
        initSwiper: function (a) {
          var b = new Swiper(a.find(".swiper-container")[0], {
            autoplay: 2e3,
            loop: !0,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev"
          });
          a.find(".swiper-button-prev").click(function () {
            b.swipePrev()
          }), a.find(".swiper-button-next").click(function () {
            b.swipeNext()
          })
        }
      };
    return $.extend(i, {
      appInit: function () {
        var a = this, b = {width: "0", height: "0", right: "0"};
        d(a.$appWrap, b, 3, g, -82)
      }, onlineInit: function () {
        var a = this, b = {width: "0", height: "0", right: "0"};
        d(a.$pcWrap, b, 9, f, -105, !0)
      }
    }), function (a) {
      i.init(a)
    }
  }),
  define("project/zt/2019/0424kyldy/js/lazy-load/delay",
    ["project/zt/2019/0424kyldy/js/lazy-load/lazy-load"],
    function (require) {
      var a = $(window),
        b = $(document),
        c = require("project/zt/2019/0424kyldy/js/lazy-load/lazy-load"),
        d = {
          init: function (a) {
            this.timer,
              this.$area = $(a.queryArea),
              this.attr = a.nameAttr,
              this.hold = a.hold || 100,
              this.ofunction = a.funs || {},
              this.oarea = {},
              this.nareaCount = 0;
            var b = this;
            this.$area.each(function (a, c) {
              var d = $(c),
                e = d.attr(b.attr);
              b.oarea[e] =
                d, b.nareaCount += 1
            }), this.bind()
          },
          bind: function () {
            a.on("resize.delayload",
              this._fnCheck.bind(this)),
              a.on("scroll.delayload",
                this._fnCheck.bind(this)),
              b.on("scroll.delayload",
                this._fnCheck.bind(this)), this._fnCheck()
          },
          unbind: function () {
            a.off("resize.delayload"), a.off("scroll.delayload"), b.off("scroll.delayload")
          },
          _fnCheck: function () {
            clearTimeout(this.timer), this.timer = setTimeout(this.check.bind(this), 100)
          },
          check: function () {
            var b, d, e, f, g = this, h = a.scrollTop(), i = a.height(), j = this.hold, k = [];
            _.forEach(this.oarea, function (a, l) {
              b = a.height(), d = a.offset().top, e = h + i + j >= d, f = d + b >= h - j, e && f && (k.push(l), c(a), g.ofunction[l] && g.ofunction[l](a))
            }), this.removeDom(k)
          }, removeDom: function (a) {
            var b = this;
            a.forEach(function (a) {
              delete b.oarea[a], b.nareaCount -= 1
            }), this.nareaCount <= 0 && this.unbind()
          }
        };
      return d
    }),
  define("project/zt/2019/0424kyldy/js/lazy-load/lazy-load", [],
    function () {
      {
        var a = "data-src", b = "data-bg";
        seajs.data.base
      }
      return function (c) {
        c.find("img[" + a + "], iframe[" + a + "]").each(function (b, c) {
          var d = $(c), e = d.attr(a);
          d.removeAttr(a), d.prop("src", e)
        }), function () {
          var a = c.attr(b);
          if (a) {
            var d = a;
            c.removeAttr(b), c.css("background-image", "url(" + d + ")")
          }
        }()
      }
    }),
  define("project/zt/2019/0424kyldy/js/common/dialog/css/ui-dialog.css", [],
    function () {
      seajs.importStyle(".ui-dialog-content,.ui-dialog-loading,.ui-dialog-statusbar .label,.ui-dialog-statusbar input{vertical-align:middle}.ui-dialog{*zoom:1;_float:left;position:relative;background-color:#FFF;border:1px solid #999;outline:0;background-clip:padding-box;font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .15s ease-in-out,opacity .15s ease-in-out;transition:transform .15s ease-in-out,opacity .15s ease-in-out}.ui-popup-show .ui-dialog{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.ui-popup-focus .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1)}.ui-popup-modal .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1),0 0 256px rgba(255,255,255,.3)}.ui-dialog-grid{width:auto;margin:0;border:0;border-collapse:collapse;border-spacing:0;background:0 0}.ui-dialog-body,.ui-dialog-footer,.ui-dialog-header{padding:0;border:0;text-align:left;background:0 0}.ui-dialog-header{white-space:nowrap;border-bottom:1px solid #E5E5E5}.ui-dialog-close{position:relative;_position:absolute;float:right;top:8px;right:13px;_height:26px;padding:0 4px;font-size:25px;font-weight:400;line-height:1;color:#000;text-shadow:0 1px 0 #FFF;opacity:.2;filter:alpha(opacity=20);cursor:pointer;background:0 0;_background:#FFF;border:0;-webkit-appearance:none}.ui-popup-bottom-right .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-b,.ui-popup-top-right .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-b{right:15px}.ui-dialog-close:focus,.ui-dialog-close:hover{color:#000;text-decoration:none;cursor:pointer;outline:0;opacity:.5;filter:alpha(opacity=50)}.ui-dialog-title{margin:0;line-height:24px;min-height:24px;padding:10px 15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400;font-size:18px;cursor:default;color:#7e878c}.ui-dialog-footer button,.ui-dialog-statusbar{font-size:14px;line-height:1.428571429;white-space:nowrap}.ui-dialog-body{padding:20px;text-align:center}.ui-dialog-content{display:inline-block;position:relative;*zoom:1;*display:inline;text-align:left}.ui-dialog-footer{padding:0 20px 20px}.ui-dialog-statusbar{float:left;margin-right:20px;padding:6px 0;color:#888}.ui-dialog-statusbar label:hover{color:#333}.ui-dialog-button{float:right;white-space:nowrap}.ui-dialog-footer button+button{margin-bottom:0;margin-left:5px}.ui-dialog-footer button{width:auto;overflow:visible;display:inline-block;padding:6px 12px;_margin-left:5px;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;color:#333;background-color:#fff}.ui-dialog-footer button:focus{outline:#333 dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;text-decoration:none}.ui-dialog-footer button:active{outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);background-image:none}.ui-dialog-footer button[disabled]{pointer-events:none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.ui-dialog-footer button:active,.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;background-color:#ebebeb;border-color:#adadad}.ui-dialog-footer button[disabled],.ui-dialog-footer button[disabled]:active,.ui-dialog-footer button[disabled]:focus,.ui-dialog-footer button[disabled]:hover{background-color:#fff;border-color:#ccc}.ui-dialog-footer button.ui-dialog-autofocus{color:#fff;background-color:#428bca;border-color:#357ebd}.ui-dialog-footer button.ui-dialog-autofocus:active,.ui-dialog-footer button.ui-dialog-autofocus:focus,.ui-dialog-footer button.ui-dialog-autofocus:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.ui-dialog-footer button.ui-dialog-autofocus:active{background-image:none}.ui-popup-top .ui-dialog,.ui-popup-top-left .ui-dialog,.ui-popup-top-right .ui-dialog{top:-8px}.ui-popup-bottom .ui-dialog,.ui-popup-bottom-left .ui-dialog,.ui-popup-bottom-right .ui-dialog{top:8px}.ui-popup-left .ui-dialog,.ui-popup-left-bottom .ui-dialog,.ui-popup-left-top .ui-dialog{left:-8px}.ui-popup-right .ui-dialog,.ui-popup-right-bottom .ui-dialog,.ui-popup-right-top .ui-dialog{left:8px}.ui-dialog-arrow-a,.ui-dialog-arrow-b{position:absolute;display:none;width:0;height:0;overflow:hidden;_color:#FF3FFF;_filter:chroma(color=#FF3FFF);border:8px dashed transparent}.ui-popup-follow .ui-dialog-arrow-a,.ui-popup-follow .ui-dialog-arrow-b{display:block}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-a{bottom:-16px;border-top:8px solid #7C7C7C}.ui-popup-top .ui-dialog-arrow-b,.ui-popup-top-left .ui-dialog-arrow-b,.ui-popup-top-right .ui-dialog-arrow-b{bottom:-15px;border-top:8px solid #fff}.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-b,.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-b{bottom:15px}.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-b{left:15px}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top .ui-dialog-arrow-b{left:50%;margin-left:-8px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-a{top:-16px;border-bottom:8px solid #7C7C7C}.ui-popup-bottom .ui-dialog-arrow-b,.ui-popup-bottom-left .ui-dialog-arrow-b,.ui-popup-bottom-right .ui-dialog-arrow-b{top:-15px;border-bottom:8px solid #fff}.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-b{left:15px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom .ui-dialog-arrow-b{margin-left:-8px;left:50%}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-a{right:-16px;border-left:8px solid #7C7C7C}.ui-popup-left .ui-dialog-arrow-b,.ui-popup-left-bottom .ui-dialog-arrow-b,.ui-popup-left-top .ui-dialog-arrow-b{right:-15px;border-left:8px solid #fff}.ui-popup-left-top .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-b{top:15px}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left .ui-dialog-arrow-b{margin-top:-8px;top:50%}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-a{left:-16px;border-right:8px solid #7C7C7C}.ui-popup-right .ui-dialog-arrow-b,.ui-popup-right-bottom .ui-dialog-arrow-b,.ui-popup-right-top .ui-dialog-arrow-b{left:-15px;border-right:8px solid #fff}.ui-popup-right-top .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-b{top:15px}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right .ui-dialog-arrow-b{margin-top:-8px;top:50%}@-webkit-keyframes ui-dialog-loading{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes ui-dialog-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ui-dialog-loading{position:relative;display:block;*zoom:1;*display:inline;overflow:hidden;width:32px;height:32px;top:50%;margin:-16px auto 0;font-size:0;text-indent:-999em;color:#666;width:100%\\9;text-indent:0\\9;line-height:32px\\9;text-align:center\\9;font-size:12px\\9}.ui-dialog-loading::after{position:absolute;content:'';width:3px;height:3px;margin:14.5px 0 0 14.5px;border-radius:100%;box-shadow:0 -10px 0 1px #ccc,10px 0 #ccc,0 10px #ccc,-10px 0 #ccc,-7px -7px 0 .5px #ccc,7px -7px 0 1.5px #ccc,7px 7px #ccc,-7px 7px #ccc;-webkit-transform:rotate(360deg);-webkit-animation:ui-dialog-loading 1.5s infinite linear;transform:rotate(360deg);animation:ui-dialog-loading 1.5s infinite linear;display:none\\9}")
    }),
  define("project/zt/2019/0424kyldy/js/common/try-listen.css", [],
    function () {
      seajs.importStyle('.i-dialog-wrap .i-dialog-content .i-table td p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td1 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td3 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td4 p .fl{-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.i-btn,.i-dialog-wrap .i-dialog-t .intro-teach,.i-dialog-wrap .i-dialog-t h1,.i-header-inner-l .i-logo,.i-icon,.page4 .wrap-img img,.page5 .wrap-page .num{display:inline-block;*display:inline;*zoom:1}.i-dialog-wrap{font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif;position:relative;padding-bottom:10px}.i-dialog-wrap .i-dialog-t h1{font-size:30px;color:#686868;line-height:1;vertical-align:middle}.i-dialog-wrap .i-dialog-t span{font-size:22px;color:#ff8b35;margin-left:30px;line-height:30px;vertical-align:middle}.i-dialog-wrap .i-dialog-t .intro-teach{vertical-align:middle;font-size:16px;line-height:30px;color:#686868;padding-left:20px;margin-left:20px;border-left:#ddd}.i-dialog-wrap .i-dialog-content dl{margin-top:28px}.i-dialog-wrap .i-dialog-content dd{width:33%;height:36px;line-height:36px;border:1px solid #ddd;border-right:0;text-align:center;background-color:#f5f5f5;cursor:pointer;font-size:14px;float:left;display:inline}.i-dialog-wrap .i-dialog-content dd.last-child,.i-dialog-wrap .i-dialog-content dd:last-child{border-right:solid #ddd 1px}.i-dialog-wrap .i-dialog-content dd.hover,.i-dialog-wrap .i-dialog-content dd:hover{border-bottom:0;background-color:#fff}.i-dialog-wrap .i-dialog-content dd h1{font-size:18px;color:#686868}.i-dialog-wrap .i-dialog-content dd h1 small{font-size:14px;color:#686868}.i-dialog-wrap .i-dialog-content .i-contents{margin-top:10px;background-color:#000}.i-dialog-wrap .i-dialog-content .i-contents div,.i-dialog-wrap .i-dialog-content .i-contents object{margin:0 auto}.i-dialog-wrap .i-dialog-content .i-table{margin-top:20px}.i-dialog-wrap .i-dialog-content .i-table th{font-size:16px;color:#686868;font-weight:700}.i-dialog-wrap .i-dialog-content .i-table td{padding:10px}.i-dialog-wrap .i-dialog-content .i-table td p{color:#686868;font-size:14px;line-height:14px;margin-bottom:10px}.i-dialog-wrap .i-dialog-content .i-table td p .fl{width:19em}.i-dialog-wrap .i-dialog-content .i-table td.td3 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td4 p .fl{width:9em}.i-dialog-wrap .i-dialog-content .i-table td.td1 p .fl{width:11em}.i-dialog-wrap .i-close{position:absolute;right:-45px;top:-22px;width:25px;height:25px;background:url(http://static.koocdn.com/project/teach/1.x/demo/special-topic/20150630/i/icons.png) -193px -58px no-repeat}.i-dialog-wrap .cb{*zoom:1}.i-dialog-wrap .cb:after,.i-dialog-wrap .cb:before{content:" ";display:table;font-size:0;height:0;clear:both;visibility:hidden}.i-dialog-wrap .cb:after{clear:both}.i-dialog-wrap .i-tabs table{width:100%;margin-top:20px}.i-dialog-wrap .i-tabs td{height:35px;border:1px solid #ddd;text-align:center;background:#f5f5f5;cursor:pointer}.i-dialog-wrap .i-tabs .hover{background:#fff;border-bottom-color:#fff;cursor:default}.i-dialog-wrap .i-icon-phone{width:30px;height:30px;background-position:0 -418px}.i-dialog-wrap .fl{float:left;display:inline}.i-dialog-wrap .fr{float:right;display:inline}.i-dialog-wrap .i-btn{margin-bottom:0;overflow:hidden;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;background-color:#88827b;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:18px;line-height:35px;height:35px;width:134px;-webkit-box-shadow:1px 1px 1px #4d4749;-ms-box-shadow:1px 1px 1px #4d4749;-moz-box-shadow:1px 1px 1px #4d4749;box-shadow:1px 1px 1px #4d4749}.i-dialog-wrap .i-btn.focus,.i-dialog-wrap .i-btn.hover,.i-dialog-wrap .i-btn:focus,.i-dialog-wrap .i-btn:hover{color:#fff;text-decoration:none;outline:0;background-color:#9e978e}.i-dialog-wrap .i-btn.active,.i-dialog-wrap .i-btn:active{outline:0;background-image:none}.i-dialog-wrap .i-btn.disabled,.i-dialog-wrap .i-btn[disabled]{cursor:not-allowed;pointer-events:none;opacity:.0065;-webkit-box-shadow:none;-ms-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.i-dialog-wrap .i-btn-g{background-color:#ff8b35;-webkit-box-shadow:1px 1px 1px #e0792c;-ms-box-shadow:1px 1px 1px #e0792c;-moz-box-shadow:1px 1px 1px #e0792c;box-shadow:1px 1px 1px #e0792c}.i-dialog-wrap .i-btn-g.focus,.i-dialog-wrap .i-btn-g.hover,.i-dialog-wrap .i-btn-g:focus,.i-dialog-wrap .i-btn-g:hover{background-color:#ff9e54}.i-dialog-wrap .i-btn-b{background-color:#50bec6;-webkit-box-shadow:1px 1px 1px #44aab1;-ms-box-shadow:1px 1px 1px #44aab1;-moz-box-shadow:1px 1px 1px #44aab1;box-shadow:1px 1px 1px #44aab1}.i-dialog-wrap .i-btn-b.focus,.i-dialog-wrap .i-btn-b.hover,.i-dialog-wrap .i-btn-b:focus,.i-dialog-wrap .i-btn-b:hover{background-color:#07b2b9}.i-dialog-wrap .audio{width:640px;height:405px}.i-dialog-wrap .mejs-overlay-button{margin-top:-56px!important;margin-left:-50px!important}.hidden{display:none}.i-dialog-wrap .mejs-overlay-loading{margin-left:-40px!important;margin-top:-40px!important}')
    }), "undefined" != typeof define && define("project/zt/2019/0424kyldy/js/common/tab-switch", [], function () {
}),
  function (a) {
    var b = function () {
    }, c = {
      tabs: ".jp-tabs",
      tabsEls: "li",
      content: ".jp-tab-content",
      currClassName: "curr",
      currContentCls: "",
      toggle: !1,
      beforeSwitch: b,
      afterSwitch: b,
      delegate: !1,
      delegateEl: ""
    };
    a.tabSwitch = function (b) {
      var d = a.extend(!0, {}, c, b), e = a(d.tabs), f = e.find(d.tabsEls), g = a(d.content), h = function () {
        var b = a(this), c = f.index(b), h = e.find("." + d.currClassName).index();
        return c === h ? void(d.toggle && (b.removeClass(d.currClassName), g.hide(), d.afterSwitch(h, c, g.eq(c)))) : void(d.beforeSwitch(h, c, g.eq(c)) !== !1 && (f.removeClass(d.currClassName), b.addClass(d.currClassName), g.removeClass(d.currContentCls).hide().eq(c).fadeIn("slow").addClass(d.currContentCls), d.afterSwitch(h, c, g.eq(c))))
      };
      return d.delegate ? e.on("click.switch", d.delegateEl || "li", h) : f.on("click.switch", h), {
        selectIndex: function (a) {
          f.eq(a).trigger("click.switch")
        }
      }
    }
  }(jQuery),
  define("project/zt/2019/0424kyldy/js/js/con-slide", [], function () {
    var a = {
      init: function (a) {
        function b() {
          var a = e.position().left;
          i > 0 ? a > -j / 2 ? e.animate({left: a - h}) : (e.css("left", 0), e.animate({left: -h})) : 0 > a ? e.animate({left: a + h}) : (e.css("left", -j / 2), e.animate({left: -j / 2 + h}))
        }

        function c() {
          d = setInterval(function () {
            b()
          }, 2e3)
        }

        var d = null, e = a.find(".jp-slide-wrap .jp-list").eq(0), f = a.find(".jp-prev"), g = a.find(".jp-next"),
          h = e.find("li").eq(0).outerWidth(), i = 1;
        e.append(e.html());
        var j = e.find("li").length * h;
        e.css("width", j), c(), a.on("mouseover", function () {
          clearInterval(d)
        }), a.on("mouseout", function () {
          clearInterval(d), c()
        }), f.on("click", function () {
          i = 1, b()
        }), g.on("click", function () {
          i = -1, b()
        })
      }
    };
    return a.init
  }),
  define("project/zt/2019/0424kyldy/js/js/evaluation", [], function () {
    var a = {
      init: function (a) {
        function b(a, b, c) {
          m = setInterval(function () {
            if (o = !0, c > a) {
              var d = b.eq(a), e = d.data().left;
              d.animate({left: e}, 500), a++
            } else clearInterval(m), setTimeout(function () {
              o = !1
            }, 2e3)
          }, 60)
        }

        function c(a, b, c, d) {
          n = setInterval(function () {
            if (c > a) {
              var e = b.eq(a);
              e.animate({left: "-2100px"}, function () {
                e.css("left", "1500px")
              }), a++
            } else clearInterval(n), d && d()
          }, 30)
        }

        function d() {
          var a = f.eq(j).find(".ev-img"), d = a.length, e = f.eq(k).find(".ev-img"), h = e.length, i = 0;
          g.removeClass("on"), g.eq(j).addClass("on"), k == j ? b(i, a, d) : c(i, e, h, function () {
            i = 0, b(i, a, d)
          })
        }

        function e() {
          l = setInterval(function () {
            o || (o = !0, d(), k = j, j++, j == i && (j = 0))
          }, 300)
        }

        var f = a.find(".floor"), g = a.find(".btns li"), h = a.find(".ev-img"), i = f.length, j = 0, k = 0, l = null,
          m = null, n = null, o = !1;
        e(), g.on({
          mouseover: function (a) {
            var b = $(a.currentTarget);
            return b.hasClass("on") ? !1 : (g.removeClass("hover"), void b.addClass("hover"))
          }, mouseout: function (a) {
            var b = $(a.currentTarget);
            b.removeClass("hover")
          }
        }), g.on("click", function (a) {
          clearInterval(l), clearInterval(m), clearInterval(n), h.stop(!0, !0).css("left", "1500px"), j = $(a.currentTarget).index(), k = j, d()
        }), h.on({
          mouseover: function (a) {
            $(a.currentTarget).addClass("high-lev")
          }, mouseout: function (a) {
            $(a.currentTarget).removeClass("high-lev")
          }
        }), a.on({
          mouseover: function () {
            clearInterval(l)
          }, mouseout: function () {
            clearInterval(l), e()
          }
        })
      }
    };
    return a.init
  }),
  define("project/zt/2019/0424kyldy/js/js/carousel-move", [],
    function () {
      var a = {
        init: function (b, c, d, e, f, g) {
          function h(a, b) {
            n = !1, q.eq(a).show().animate(u, 1e3, function () {
              b()
            })
          }

          function i() {
            g && o == d - 1 ? setTimeout(function () {
              n = !0
            }, 3e3) : p.animate({opacity: .7}, 300, function () {
              j(0)
            })
          }

          function j(a) {
            var b = r.eq(o).find("img"), c = s.eq(o).find(".tip"), d = c.length;
            d - 1 > a ? (b.eq(a).animate({opacity: 1}, 1e3), m.collision(c.eq(a), f, e[o][a], 8, .3, function () {
              setTimeout(function () {
                c.eq(a).animate({opacity: 0}), b.eq(a).animate({opacity: 0});
                var e = a + 1;
                j(e, d)
              }, 800)
            })) : (b.eq(a).animate({opacity: 1}, 1e3), m.collision(c.eq(a), f, e[o][a], 8, .3, function () {
              setTimeout(function () {
                n = !0
              }, 1e3)
            }))
          }

          function k() {
            q.hide().animate(t, 1e3, function () {
              q.css(c)
            }), r.find("img").animate(t), p.animate(t, 1e3), s.find(".tip").css({opacity: 0, top: f + "px"})
          }

          function l() {
            v = setInterval(function () {
              n && (k(), o++, o == d && (o = 0), n = !1, h(o, i))
            }, 300)
          }

          var m = a, n = !0, o = -1, p = b.find(".opa"), q = b.find(".img"), r = b.find(".white"), s = b.find(".tips"),
            t = {opacity: 0}, u = {top: "0", left: "0", width: "100%", height: "100%", opacity: "1"}, v = null;
          l(), b.on("mouseover", function () {
            clearInterval(v)
          }), b.on("mouseout", function () {
            l()
          })
        },
        collision: function (a, b, c, d, e, f) {
          function g(a) {
            a.outerHeight();
            i = setInterval(function () {
              h += 3;
              var d = a.position().top + h;
              return d >= c && (h *= -e, d = c), b >= d && (h *= -1, d = b), Math.abs(h) < 1 && (h = 0), 0 == h && d == c ? (a.css("top", c), clearInterval(i), f && setTimeout(function () {
                f()
              }, 1e3), !1) : void a.css("top", d)
            }, 30)
          }

          var h = d, i = null;
          a.css("opacity", "1"), g(a)
        }
      };
      return a.init
    }),
  define("project/zt/2019/0424kyldy/js/common/try-listen/2.x/try-listen",
    ["project/zt/2016/0114kyldy/js/common/dialog/dialog",
      "project/zt/2016/0114kyldy/js/common/dialog/js/dialog-plus",
      "project/zt/2016/0114kyldy/js/common/dialog/js/dialog",
      "project/zt/2016/0114kyldy/js/common/dialog/js/popup",
      "project/zt/2016/0114kyldy/js/common/dialog/js/dialog-config",
      "common/kooplayer/4.x/kooplayer",
      "common/kooplayer/4.x/js/kooplayer-adapter",
      "common/kooplayer/4.x/js/client-test",
      "common/kooplayer/4.x/js/flash-player",
      "common/kooplayer/4.x/js/web-h5-player"],
    function (require) {
      require("project/zt/2016/0114kyldy/js/common/dialog/css/ui-dialog.css"),
        window.dialog = require("project/zt/2016/0114kyldy/js/common/dialog/dialog"),
        require("project/zt/2019/0424kyldy/js/common/try-listen/2.x/try-listen.css");
      var a = require("common/kooplayer/4.x/kooplayer"),
        b = (window, ["//static.koolearn.com/kooRtmpPlayer/koo.player.js",
          "//static.koolearn.com/kooHlsPlayer/koo.hlsplayer.js",
          "//static.koolearn.com/kooRtmpPlayer/lastest.player.config.js",
          "//static.koolearn.com/kooHlsPlayer/lastest.hlsplayer.config1.1.js"]),
        c = '<div class="i-dialog-listen i-dialog-wrap hidden">' +
          '<a href="javascript:;" class="i-close"></a>' +
          '<div class="i-dialog-t cb"><span class="fl">' +
          '<h1></h1></span><span class="fr jp-tip-btn">' +
          '<a class="i-btn i-btn-b jp-more-listen" href="" target="_blank">更多试听</a> ' +
          '<a class="i-btn i-btn-g jp-buy-listen" href="" target="_blank">立即购课</a> ' +
          '</span></div><div class="i-dialog-content"><div class="i-tabs cb"><table><tr></tr></table></div><div class="i-contents"></div></div></div>',
        d = {},
        e = {vedioOpts: d, popData: {listenData: [], title: "", videoTitleShow: !0, moreListenUrl: "", buyUrl: ""}},
        f = function () {
          this.__init()
        };
      f.prototype.extend = $.extend;
      var g = f.prototype;
      return g.extend({
        __init: function () {
          0 == $("body").find(".i-dialog-listen").length && $("body").append(c), this.$listen = $(".i-dialog-listen"), this.itabs = this.$listen.find(".i-tabs"), this.itabsTr = this.itabs.find("tr"), this.$content = this.$listen.find(".i-contents"), this.dialogHeadTitle = this.$listen.find(".i-dialog-t h1"), this.dialogMoreListenBtn = this.$listen.find(".jp-more-listen"), this.dialogBuyBtn = this.$listen.find(".jp-buy-listen"), this.head = document.getElementsByTagName("head")[0], this.loadIndex = 0, this.__loadScript(b)
        }, __loadScript: function (a) {
          var b = this;
          if (a.length > this.loadIndex) {
            var c = document.createElement("script");
            c.type = "text/javascript", c.src = a[this.loadIndex], this.head.appendChild(c), c.readyState ? c.onreadystatechange = function () {
              ("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, b.loadIndex = b.loadIndex + 1, b.__loadScript(a))
            } : c.onload = function () {
              b.loadIndex = b.loadIndex + 1, b.__loadScript(a)
            }
          }
        },
        __closeDialog: function (a) {
          $(a.node).on("click", ".i-close", function (b) {
            b.preventDefault(), $(this).off(), a.close().remove()
          })
        },
        showListenPop: function (b, c) {
          var d = this;
          this.args = $.extend(!0, {}, e, b || {}), this.popData = this.args.popData;
          var f = this.popData.listenData, g = f && f.length;
          if (this.itabsTr.empty(), this.$content.empty(), "" == this.popData.title.length ? this.$listen.find(".i-dialog-t").hide() : (this.$listen.find(".i-dialog-t").show(), this.dialogHeadTitle.html(this.popData.title), this.dialogMoreListenBtn.attr("href", this.popData.moreListenUrl), this.dialogBuyBtn.attr("href", this.popData.buyUrl)), g) for (; g--;) this.itabsTr.prepend(0 == g ? "<td class='hover'>" + f[g].title + "</td>" : "<td>" + f[g].title + "</td>");
          if (c.hasClass("p-free-listen")) var h = {
            content: this.$listen,
            width: 1e3,
            fixed: !0,
            height: 480,
            skin: "free-listen-skin"
          }; else var h = {content: this.$listen, width: 1e3, fixed: !0, height: 550};
          this.popData.videoTitleShow ? ($(".i-close").css("top", "-22px"), this.itabs.show()) : (this.itabs.hide(), $(".i-close").css("top", "-52px"));
          var i = this.itabsTr.children("td");
          i.off().on("click", function () {
            i.removeClass("hover");
            var b = i.index($(this).addClass("hover"));
            $.ajax({
              type: "get", dataType: "jsonp", url: f[b].listen_url, data: {version: 4}, success: function (b) {
                if ("0" !== String(b.status)) return void alert("无法播放视频！");
                var c = $.extend(!0, {}, d.args.vedioOpts, b.data);
                d.player && (d.player = null), d.$content.find("#listen-player").remove().end().append($("<div>", {
                  id: "listen-player",
                  height: 400
                })), setTimeout(function () {
                  d.player = a.init("listen-player", c)
                }, 100)
              }
            })
          }).filter(".hover").trigger("click"), this.__closeDialog(dialog(h).showModal())
        },
        showMp4ListenPop: function (a) {
          var b = $("<div>", {
            name: "video_creat",
            "class": "audio",
            type: "video",
            img_src: "//images.koolearn.com/shark/project/zt/2016/0114kyldy/i/bg-video.jpg?73ea71",
            dir_mp4: a.mp4Url
          });
          if (this.$listen.find(".i-dialog-t h1").html(a.nameTitle).end().find(".i-tabs").hide().end().find(".i-contents").empty().append(b).css({height: 400}), this.$listen.find(".i-dialog-t").hide(), $(".i-close").css("top", "-32px"), this.__closeDialog(dialog({
              content: this.$listen,
              fixed: !0,
              width: 650
            }).showModal()), b.data("init") !== !0) {
            b.data("init", "true");
            var c = parseInt(b.width());
            b.css("height", .62 * c + "px"), audio_public_creat.charactor.plug(b, {autoplay: "autoplay"})
          }
        }
      }), new f
    }),
  define("project/zt/2016/0114kyldy/js/common/dialog/css/ui-dialog.css", [],
    function () {
      seajs.importStyle(".ui-dialog-content,.ui-dialog-loading,.ui-dialog-statusbar .label,.ui-dialog-statusbar input{vertical-align:middle}.ui-dialog{*zoom:1;_float:left;position:relative;background-color:#FFF;border:1px solid #999;outline:0;background-clip:padding-box;font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.428571429;color:#333;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .15s ease-in-out,opacity .15s ease-in-out;transition:transform .15s ease-in-out,opacity .15s ease-in-out}.ui-popup-show .ui-dialog{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.ui-popup-focus .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1)}.ui-popup-modal .ui-dialog{box-shadow:0 0 8px rgba(0,0,0,.1),0 0 256px rgba(255,255,255,.3)}.ui-dialog-grid{width:auto;margin:0;border:0;border-collapse:collapse;border-spacing:0;background:0 0}.ui-dialog-body,.ui-dialog-footer,.ui-dialog-header{padding:0;border:0;text-align:left;background:0 0}.ui-dialog-header{white-space:nowrap;border-bottom:1px solid #E5E5E5}.ui-dialog-close{position:relative;_position:absolute;float:right;top:8px;right:13px;_height:26px;padding:0 4px;font-size:25px;font-weight:400;line-height:1;color:#000;text-shadow:0 1px 0 #FFF;opacity:.2;filter:alpha(opacity=20);cursor:pointer;background:0 0;_background:#FFF;border:0;-webkit-appearance:none}.ui-popup-bottom-right .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-b,.ui-popup-top-right .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-b{right:15px}.ui-dialog-close:focus,.ui-dialog-close:hover{color:#000;text-decoration:none;cursor:pointer;outline:0;opacity:.5;filter:alpha(opacity=50)}.ui-dialog-title{margin:0;line-height:24px;min-height:24px;padding:10px 15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400;font-size:18px;cursor:default;color:#7e878c}.ui-dialog-footer button,.ui-dialog-statusbar{font-size:14px;line-height:1.428571429;white-space:nowrap}.ui-dialog-body{padding:20px;text-align:center}.ui-dialog-content{display:inline-block;position:relative;*zoom:1;*display:inline;text-align:left}.ui-dialog-footer{padding:0 20px 20px}.ui-dialog-statusbar{float:left;margin-right:20px;padding:6px 0;color:#888}.ui-dialog-statusbar label:hover{color:#333}.ui-dialog-button{float:right;white-space:nowrap}.ui-dialog-footer button+button{margin-bottom:0;margin-left:5px}.ui-dialog-footer button{width:auto;overflow:visible;display:inline-block;padding:6px 12px;_margin-left:5px;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;color:#333;background-color:#fff}.ui-dialog-footer button:focus{outline:#333 dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;text-decoration:none}.ui-dialog-footer button:active{outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);background-image:none}.ui-dialog-footer button[disabled]{pointer-events:none;cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.ui-dialog-footer button:active,.ui-dialog-footer button:focus,.ui-dialog-footer button:hover{color:#333;background-color:#ebebeb;border-color:#adadad}.ui-dialog-footer button[disabled],.ui-dialog-footer button[disabled]:active,.ui-dialog-footer button[disabled]:focus,.ui-dialog-footer button[disabled]:hover{background-color:#fff;border-color:#ccc}.ui-dialog-footer button.ui-dialog-autofocus{color:#fff;background-color:#428bca;border-color:#357ebd}.ui-dialog-footer button.ui-dialog-autofocus:active,.ui-dialog-footer button.ui-dialog-autofocus:focus,.ui-dialog-footer button.ui-dialog-autofocus:hover{color:#fff;background-color:#3276b1;border-color:#285e8e}.ui-dialog-footer button.ui-dialog-autofocus:active{background-image:none}.ui-popup-top .ui-dialog,.ui-popup-top-left .ui-dialog,.ui-popup-top-right .ui-dialog{top:-8px}.ui-popup-bottom .ui-dialog,.ui-popup-bottom-left .ui-dialog,.ui-popup-bottom-right .ui-dialog{top:8px}.ui-popup-left .ui-dialog,.ui-popup-left-bottom .ui-dialog,.ui-popup-left-top .ui-dialog{left:-8px}.ui-popup-right .ui-dialog,.ui-popup-right-bottom .ui-dialog,.ui-popup-right-top .ui-dialog{left:8px}.ui-dialog-arrow-a,.ui-dialog-arrow-b{position:absolute;display:none;width:0;height:0;overflow:hidden;_color:#FF3FFF;_filter:chroma(color=#FF3FFF);border:8px dashed transparent}.ui-popup-follow .ui-dialog-arrow-a,.ui-popup-follow .ui-dialog-arrow-b{display:block}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-right .ui-dialog-arrow-a{bottom:-16px;border-top:8px solid #7C7C7C}.ui-popup-top .ui-dialog-arrow-b,.ui-popup-top-left .ui-dialog-arrow-b,.ui-popup-top-right .ui-dialog-arrow-b{bottom:-15px;border-top:8px solid #fff}.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-b,.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-b{bottom:15px}.ui-popup-top-left .ui-dialog-arrow-a,.ui-popup-top-left .ui-dialog-arrow-b{left:15px}.ui-popup-top .ui-dialog-arrow-a,.ui-popup-top .ui-dialog-arrow-b{left:50%;margin-left:-8px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-right .ui-dialog-arrow-a{top:-16px;border-bottom:8px solid #7C7C7C}.ui-popup-bottom .ui-dialog-arrow-b,.ui-popup-bottom-left .ui-dialog-arrow-b,.ui-popup-bottom-right .ui-dialog-arrow-b{top:-15px;border-bottom:8px solid #fff}.ui-popup-bottom-left .ui-dialog-arrow-a,.ui-popup-bottom-left .ui-dialog-arrow-b{left:15px}.ui-popup-bottom .ui-dialog-arrow-a,.ui-popup-bottom .ui-dialog-arrow-b{margin-left:-8px;left:50%}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left-bottom .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-a{right:-16px;border-left:8px solid #7C7C7C}.ui-popup-left .ui-dialog-arrow-b,.ui-popup-left-bottom .ui-dialog-arrow-b,.ui-popup-left-top .ui-dialog-arrow-b{right:-15px;border-left:8px solid #fff}.ui-popup-left-top .ui-dialog-arrow-a,.ui-popup-left-top .ui-dialog-arrow-b{top:15px}.ui-popup-left .ui-dialog-arrow-a,.ui-popup-left .ui-dialog-arrow-b{margin-top:-8px;top:50%}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right-bottom .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-a{left:-16px;border-right:8px solid #7C7C7C}.ui-popup-right .ui-dialog-arrow-b,.ui-popup-right-bottom .ui-dialog-arrow-b,.ui-popup-right-top .ui-dialog-arrow-b{left:-15px;border-right:8px solid #fff}.ui-popup-right-top .ui-dialog-arrow-a,.ui-popup-right-top .ui-dialog-arrow-b{top:15px}.ui-popup-right .ui-dialog-arrow-a,.ui-popup-right .ui-dialog-arrow-b{margin-top:-8px;top:50%}@-webkit-keyframes ui-dialog-loading{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes ui-dialog-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ui-dialog-loading{position:relative;display:block;*zoom:1;*display:inline;overflow:hidden;width:32px;height:32px;top:50%;margin:-16px auto 0;font-size:0;text-indent:-999em;color:#666;width:100%\\9;text-indent:0\\9;line-height:32px\\9;text-align:center\\9;font-size:12px\\9}.ui-dialog-loading::after{position:absolute;content:'';width:3px;height:3px;margin:14.5px 0 0 14.5px;border-radius:100%;box-shadow:0 -10px 0 1px #ccc,10px 0 #ccc,0 10px #ccc,-10px 0 #ccc,-7px -7px 0 .5px #ccc,7px -7px 0 1.5px #ccc,7px 7px #ccc,-7px 7px #ccc;-webkit-transform:rotate(360deg);-webkit-animation:ui-dialog-loading 1.5s infinite linear;transform:rotate(360deg);animation:ui-dialog-loading 1.5s infinite linear;display:none\\9}")
    }), define("project/zt/2016/0114kyldy/js/common/dialog/dialog", ["./js/dialog-plus", "./js/dialog", "./js/popup", "./js/dialog-config"],
  function (require) {
    var a = require("./js/dialog-plus");
    return require("./css/ui-dialog.css"), $.dialog = a, a
  }),
  define("project/zt/2016/0114kyldy/js/common/dialog/js/dialog-plus", ["./dialog", "./popup", "./dialog-config"], function (require) {
    var a = require("./dialog");
    return a.oncreate = function (a) {
      var b, c = a.options, d = c.original, e = c.url, f = c.oniframeload;
      if (e && (this.padding = c.padding = 0, b = $("<iframe />"), b.attr({
          src: e,
          name: a.id,
          width: "100%",
          height: "100%",
          allowtransparency: "yes",
          frameborder: "no",
          scrolling: "no"
        }).on("load", function () {
          var d;
          try {
            d = b[0].contentWindow.frameElement
          } catch (e) {
          }
          d && (c.width || a.width(b.contents().width()), c.height || a.height(b.contents().height())), f && f.call(a)
        }), a.addEventListener("beforeremove", function () {
          b.attr("src", "about:blank").remove()
        }, !1), a.content(b[0]), a.iframeNode = b[0]), !(d instanceof Object)) for (var g = function () {
        a.close().remove()
      }, h = 0; h < frames.length; h++) try {
        if (d instanceof frames[h].Object) {
          $(frames[h]).one("unload", g);
          break
        }
      } catch (i) {
      }
    }, a.get = function (b) {
      if (b && b.frameElement) {
        var c, d = b.frameElement, e = a.list;
        for (var f in e) if (c = e[f], c.node.getElementsByTagName("iframe")[0] === d) return c
      } else if (b) return a.list[b]
    }, a
  }),
  define("project/zt/2016/0114kyldy/js/common/dialog/js/dialog", ["./popup", "./dialog-config"], function (require) {
    var a = require("./popup"), b = require("./dialog-config"), c = b.cssUri;
    if (c) {
      var d = require[require.toUrl ? "toUrl" : "resolve"];
      d && (c = d(c), c = '<link rel="stylesheet" href="' + c + '" />', $("base")[0] ? $("base").before(c) : $("head").append(c))
    }
    var e = 0, f = new Date - 0, g = !("minWidth" in $("html")[0].style),
      h = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
      i = !g && !h, j = function (a, b, c) {
        var d = a = a || {};
        ("string" == typeof a || 1 === a.nodeType) && (a = {
          content: a,
          fixed: !h
        }), a = $.extend(!0, {}, j.defaults, a), a.original = d;
        var g = a.id = a.id || f + e, k = j.get(g);
        return k ? k.focus() : (i || (a.fixed = !1), a.quickClose && (a.modal = !0, a.backdropOpacity = 0), $.isArray(a.button) || (a.button = []), void 0 !== c && (a.cancel = c), a.cancel && a.button.push({
          id: "cancel",
          value: a.cancelValue,
          callback: a.cancel,
          display: a.cancelDisplay
        }), void 0 !== b && (a.ok = b), a.ok && a.button.push({
          id: "ok",
          value: a.okValue,
          callback: a.ok,
          autofocus: !0
        }), j.list[g] = new j.create(a))
      }, k = function () {
      };
    k.prototype = a.prototype;
    var l = j.prototype = new k;
    return j.create = function (b) {
      var c = this;
      $.extend(this, new a);
      var d = (b.original, $(this.node).html(b.innerHTML)), f = $(this.backdrop);
      return this.options = b, this._popup = d, $.each(b, function (a, b) {
        "function" == typeof c[a] ? c[a](b) : c[a] = b
      }), b.zIndex && (a.zIndex = b.zIndex), d.attr({
        "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"),
        "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id")
      }), this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function (a) {
        c._trigger("cancel"), a.preventDefault()
      }), this._$("dialog").addClass(this.skin), this._$("body").css("padding", this.padding), b.quickClose && f.on("onmousedown" in document ? "mousedown" : "click", function () {
        return c._trigger("cancel"), !1
      }), this.addEventListener("show", function () {
        f.css({opacity: 0, background: b.backdropBackground}).animate({opacity: b.backdropOpacity}, 150)
      }), this._esc = function (b) {
        var d = b.target, e = d.nodeName, f = /^input|textarea$/i, g = a.current === c, h = b.keyCode;
        !g || f.test(e) && "button" !== d.type || 27 === h && c._trigger("cancel")
      }, $(document).on("keydown", this._esc), this.addEventListener("remove", function () {
        $(document).off("keydown", this._esc), delete j.list[this.id]
      }), e++, j.oncreate(this), this
    },
      j.create.prototype = l, $.extend(l, {
      content: function (a) {
        var b = this._$("content");
        return "object" == typeof a ? (a = $(a), b.empty("").append(a.show()), this.addEventListener("beforeremove", function () {
          $("body").append(a.hide())
        })) : b.html(a), this.reset()
      }, title: function (a) {
        return this._$("title").text(a), this._$("header")[a ? "show" : "hide"](), this
      }, width: function (a) {
        return this._$("content").css("width", a), this.reset()
      }, height: function (a) {
        return this._$("content").css("height", a), this.reset()
      }, button: function (a) {
        a = a || [];
        var b = this, c = "", d = 0;
        return this.callbacks = {}, "string" == typeof a ? (c = a, d++) : $.each(a, function (a, e) {
          var f = e.id = e.id || e.value, g = "";
          b.callbacks[f] = e.callback, e.display === !1 ? g = ' style="display:none"' : d++, c += '<button type="button" i-id="' + f + '"' + g + (e.disabled ? " disabled" : "") + (e.autofocus ? ' class="ui-dialog-autofocus"' : "") + ">" + e.value + "</button>", b._$("button").on("click", "[i-id=" + f + "]", function (a) {
            var c = $(this);
            c.attr("disabled") || b._trigger(f), a.preventDefault()
          })
        }), this._$("button").html(c), this._$("footer")[d ? "show" : "hide"](), this
      }, statusbar: function (a) {
        return this._$("statusbar").html(a)[a ? "show" : "hide"](), this
      }, _$: function (a) {
        return this._popup.find("[i=" + a + "]")
      }, _trigger: function (a) {
        var b = this.callbacks[a];
        return "function" != typeof b || b.call(this) !== !1 ? this.close().remove() : this
      }
    }), j.oncreate = $.noop, j.getCurrent = function () {
      return a.current
    }, j.get = function (a) {
      return void 0 === a ? j.list : j.list[a]
    }, j.list = {}, j.defaults = b, j
  }), define("project/zt/2016/0114kyldy/js/common/dialog/js/popup", [], function () {
  function a() {
    this.destroyed = !1, this.__popup = $("<div />").css({
      display: "none",
      position: "absolute",
      outline: 0
    }).attr("tabindex", "-1").html(this.innerHTML).appendTo("body"), this.__backdrop = this.__mask = $("<div />").css({
      opacity: .7,
      background: "#000"
    }), this.node = this.__popup[0], this.backdrop = this.__backdrop[0], b++
  }

  var b = 0, c = !("minWidth" in $("html")[0].style), d = !c;
  return $.extend(a.prototype, {
    node: null,
    backdrop: null,
    fixed: !1,
    destroyed: !0,
    open: !1,
    returnValue: "",
    autofocus: !0,
    align: "bottom left",
    innerHTML: "",
    className: "ui-popup",
    show: function (b) {
      if (this.destroyed) return this;
      var e = this.__popup, f = this.__backdrop;
      if (this.__activeElement = this.__getActive(), this.open = !0, this.follow = b || this.follow, !this.__ready) {
        if (e.addClass(this.className).attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute"), c || $(window).on("resize", $.proxy(this.reset, this)), this.modal) {
          var g = {
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            userSelect: "none",
            zIndex: this.zIndex || a.zIndex
          };
          e.addClass(this.className + "-modal"), d || $.extend(g, {
            position: "absolute",
            width: $(window).width() + "px",
            height: $(document).height() + "px"
          }), f.css(g).attr({tabindex: "0"}).on("focus", $.proxy(this.focus, this)), this.__mask = f.clone(!0).attr("style", "").insertAfter(e), f.addClass(this.className + "-backdrop").insertBefore(e), this.__ready = !0
        }
        e.html() || e.html(this.innerHTML)
      }
      return e.addClass(this.className + "-show").show(), f.show(), this.reset().focus(), this.__dispatchEvent("show"), this
    },
    showModal: function () {
      return this.modal = !0, this.show.apply(this, arguments)
    },
    close: function (a) {
      return !this.destroyed && this.open && (void 0 !== a && (this.returnValue = a), this.__popup.hide().removeClass(this.className + "-show"), this.__backdrop.hide(), this.open = !1, this.blur(), this.__dispatchEvent("close")), this
    },
    remove: function () {
      if (this.destroyed) return this;
      this.__dispatchEvent("beforeremove"), a.current === this && (a.current = null), this.__popup.remove(), this.__backdrop.remove(), this.__mask.remove(), c || $(window).off("resize", this.reset), this.__dispatchEvent("remove");
      for (var b in this) delete this[b];
      return this
    },
    reset: function () {
      var a = this.follow;
      return a ? this.__follow(a) : this.__center(), this.__dispatchEvent("reset"), this
    },
    focus: function () {
      var b = this.node, c = this.__popup, d = a.current, e = this.zIndex = a.zIndex++;
      if (d && d !== this && d.blur(!1), !$.contains(b, this.__getActive())) {
        var f = c.find("[autofocus]")[0];
        !this._autofocus && f ? this._autofocus = !0 : f = b, this.__focus(f)
      }
      return c.css("zIndex", e), a.current = this, c.addClass(this.className + "-focus"), this.__dispatchEvent("focus"), this
    },
    blur: function () {
      var a = this.__activeElement, b = arguments[0];
      return b !== !1 && this.__focus(a), this._autofocus = !1, this.__popup.removeClass(this.className + "-focus"), this.__dispatchEvent("blur"), this
    },
    addEventListener: function (a, b) {
      return this.__getEventListener(a).push(b), this
    },
    removeEventListener: function (a, b) {
      for (var c = this.__getEventListener(a), d = 0; d < c.length; d++) b === c[d] && c.splice(d--, 1);
      return this
    },
    __getEventListener: function (a) {
      var b = this.__listener;
      return b || (b = this.__listener = {}), b[a] || (b[a] = []), b[a]
    },
    __dispatchEvent: function (a) {
      var b = this.__getEventListener(a);
      this["on" + a] && this["on" + a]();
      for (var c = 0; c < b.length; c++) b[c].call(this)
    },
    __focus: function (a) {
      try {
        this.autofocus && !/^iframe$/i.test(a.nodeName) && a.focus()
      } catch (b) {
      }
    },
    __getActive: function () {
      try {
        var a = document.activeElement, b = a.contentDocument, c = b && b.activeElement || a;
        return c
      } catch (d) {
      }
    },
    __center: function () {
      var a = this.__popup, b = $(window), c = $(document), d = this.fixed, e = d ? 0 : c.scrollLeft(),
        f = d ? 0 : c.scrollTop(), g = b.width(), h = b.height(), i = a.width(), j = a.height(), k = (g - i) / 2 + e,
        l = 382 * (h - j) / 1e3 + f, m = a[0].style;
      m.left = Math.max(parseInt(k), e) + "px", m.top = Math.max(parseInt(l), f) + "px"
    },
    __follow: function (a) {
      var b = a.parentNode && $(a), c = this.__popup;
      if (this.__followSkin && c.removeClass(this.__followSkin), b) {
        var d = b.offset();
        if (d.left * d.top < 0) return this.__center()
      }
      var e = this, f = this.fixed, g = $(window), h = $(document), i = g.width(), j = g.height(), k = h.scrollLeft(),
        l = h.scrollTop(), m = c.width(), n = c.height(), o = b ? b.outerWidth() : 0, p = b ? b.outerHeight() : 0,
        q = this.__offset(a), r = q.left, s = q.top, t = f ? r - k : r, u = f ? s - l : s, v = f ? 0 : k, w = f ? 0 : l,
        x = v + i - m, y = w + j - n, z = {}, A = this.align.split(" "), B = this.className + "-",
        C = {top: "bottom", bottom: "top", left: "right", right: "left"},
        D = {top: "top", bottom: "top", left: "left", right: "left"},
        E = [{top: u - n, bottom: u + p, left: t - m, right: t + o}, {
          top: u,
          bottom: u - n + p,
          left: t,
          right: t - m + o
        }], F = {left: t + o / 2 - m / 2, top: u + p / 2 - n / 2}, G = {left: [v, x], top: [w, y]};
      $.each(A, function (a, b) {
        E[a][b] > G[D[b]][1] && (b = A[a] = C[b]), E[a][b] < G[D[b]][0] && (A[a] = C[b])
      }), A[1] || (D[A[1]] = "left" === D[A[0]] ? "top" : "left", E[1][A[1]] = F[D[A[1]]]), B += A.join("-") + " " + this.className + "-follow", e.__followSkin = B, b && c.addClass(B), z[D[A[0]]] = parseInt(E[0][A[0]]), z[D[A[1]]] = parseInt(E[1][A[1]]), c.css(z)
    },
    __offset: function (a) {
      var b = a.parentNode, c = b ? $(a).offset() : {left: a.pageX, top: a.pageY};
      a = b ? a : a.target;
      var d = a.ownerDocument, e = d.defaultView || d.parentWindow;
      if (e == window) return c;
      var f = e.frameElement, g = $(d), h = g.scrollLeft(), i = g.scrollTop(), j = $(f).offset(), k = j.left, l = j.top;
      return {left: c.left + k - h, top: c.top + l - i}
    }
  }), a.zIndex = 1024, a.current = null, a
}),
  define("project/zt/2016/0114kyldy/js/common/dialog/js/dialog-config", [], {
    backdropBackground: "#000",
    backdropOpacity: .7,
    content: '<span class="ui-dialog-loading">Loading..</span>',
    title: "",
    statusbar: "",
    button: null,
    ok: null,
    cancel: null,
    okValue: "确定",
    cancelValue: "取消",
    cancelDisplay: !0,
    width: "",
    height: "",
    padding: "",
    skin: "",
    quickClose: !1,
    cssUri: "",
    innerHTML: '<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'
  }),
  define("project/zt/2019/0424kyldy/js/common/try-listen/2.x/try-listen.css", [], function () {
    seajs.importStyle('.i-dialog-wrap .i-dialog-content .i-table td p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td1 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td3 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td4 p .fl{-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.i-btn,.i-dialog-wrap .i-dialog-t .intro-teach,.i-dialog-wrap .i-dialog-t h1,.i-header-inner-l .i-logo,.i-icon,.page4 .wrap-img img,.page5 .wrap-page .num{display:inline-block;*display:inline;*zoom:1}.i-dialog-wrap{font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif;position:relative;padding-bottom:10px}.i-dialog-wrap .i-dialog-t h1{font-size:30px;color:#686868;line-height:1;vertical-align:middle}.i-dialog-wrap .i-dialog-t span{font-size:22px;color:#ff8b35;margin-left:30px;line-height:30px;vertical-align:middle}.i-dialog-wrap .i-dialog-t .intro-teach{vertical-align:middle;font-size:16px;line-height:30px;color:#686868;padding-left:20px;margin-left:20px;border-left:#ddd}.i-dialog-wrap .i-dialog-content dl{margin-top:28px}.i-dialog-wrap .i-dialog-content dd{width:33%;height:36px;line-height:36px;border:1px solid #ddd;border-right:0;text-align:center;background-color:#f5f5f5;cursor:pointer;font-size:14px;float:left;display:inline}.i-dialog-wrap .i-dialog-content dd.last-child,.i-dialog-wrap .i-dialog-content dd:last-child{border-right:solid #ddd 1px}.i-dialog-wrap .i-dialog-content dd.hover,.i-dialog-wrap .i-dialog-content dd:hover{border-bottom:0;background-color:#fff}.i-dialog-wrap .i-dialog-content dd h1{font-size:18px;color:#686868}.i-dialog-wrap .i-dialog-content dd h1 small{font-size:14px;color:#686868}.i-dialog-wrap .i-dialog-content .i-contents{margin-top:10px;background-color:#000}.i-dialog-wrap .i-dialog-content .i-contents div,.i-dialog-wrap .i-dialog-content .i-contents object{margin:0 auto}.i-dialog-wrap .i-dialog-content .i-table{margin-top:20px}.i-dialog-wrap .i-dialog-content .i-table th{font-size:16px;color:#686868;font-weight:700}.i-dialog-wrap .i-dialog-content .i-table td{padding:10px}.i-dialog-wrap .i-dialog-content .i-table td p{color:#686868;font-size:14px;line-height:14px;margin-bottom:10px}.i-dialog-wrap .i-dialog-content .i-table td p .fl{width:19em}.i-dialog-wrap .i-dialog-content .i-table td.td3 p .fl,.i-dialog-wrap .i-dialog-content .i-table td.td4 p .fl{width:9em}.i-dialog-wrap .i-dialog-content .i-table td.td1 p .fl{width:11em}.i-dialog-wrap .i-close{position:absolute;right:-45px;top:-22px;width:25px;height:25px;background:url(//static.koocdn.com/project/teach/1.x/demo/special-topic/20150630/i/icons.png) -193px -58px no-repeat}.i-dialog-wrap .cb{*zoom:1}.i-dialog-wrap .cb:after,.i-dialog-wrap .cb:before{content:" ";display:table;font-size:0;height:0;clear:both;visibility:hidden}.i-dialog-wrap .cb:after{clear:both}.i-dialog-wrap .i-tabs table{width:100%;margin-top:20px}.i-dialog-wrap .i-tabs td{height:35px;border:1px solid #ddd;text-align:center;background:#f5f5f5;cursor:pointer}.i-dialog-wrap .i-tabs .hover{background:#fff;border-bottom-color:#fff;cursor:default}.i-dialog-wrap .i-icon-phone{width:30px;height:30px;background-position:0 -418px}.i-dialog-wrap .fl{float:left;display:inline}.i-dialog-wrap .fr{float:right;display:inline}.i-dialog-wrap .i-btn{margin-bottom:0;overflow:hidden;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;background-color:#88827b;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:18px;line-height:35px;height:35px;width:134px;-webkit-box-shadow:1px 1px 1px #4d4749;-ms-box-shadow:1px 1px 1px #4d4749;-moz-box-shadow:1px 1px 1px #4d4749;box-shadow:1px 1px 1px #4d4749}.i-dialog-wrap .i-btn.focus,.i-dialog-wrap .i-btn.hover,.i-dialog-wrap .i-btn:focus,.i-dialog-wrap .i-btn:hover{color:#fff;text-decoration:none;outline:0;background-color:#9e978e}.i-dialog-wrap .i-btn.active,.i-dialog-wrap .i-btn:active{outline:0;background-image:none}.i-dialog-wrap .i-btn.disabled,.i-dialog-wrap .i-btn[disabled]{cursor:not-allowed;pointer-events:none;opacity:.0065;-webkit-box-shadow:none;-ms-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.i-dialog-wrap .i-btn-g{background-color:#ff8b35;-webkit-box-shadow:1px 1px 1px #e0792c;-ms-box-shadow:1px 1px 1px #e0792c;-moz-box-shadow:1px 1px 1px #e0792c;box-shadow:1px 1px 1px #e0792c}.i-dialog-wrap .i-btn-g.focus,.i-dialog-wrap .i-btn-g.hover,.i-dialog-wrap .i-btn-g:focus,.i-dialog-wrap .i-btn-g:hover{background-color:#ff9e54}.i-dialog-wrap .i-btn-b{background-color:#50bec6;-webkit-box-shadow:1px 1px 1px #44aab1;-ms-box-shadow:1px 1px 1px #44aab1;-moz-box-shadow:1px 1px 1px #44aab1;box-shadow:1px 1px 1px #44aab1}.i-dialog-wrap .i-btn-b.focus,.i-dialog-wrap .i-btn-b.hover,.i-dialog-wrap .i-btn-b:focus,.i-dialog-wrap .i-btn-b:hover{background-color:#07b2b9}.i-dialog-wrap .audio{width:640px;height:405px}.i-dialog-wrap .mejs-overlay-button{margin-top:-56px!important;margin-left:-50px!important}.hidden{display:none}.i-dialog-wrap .mejs-overlay-loading{margin-left:-40px!important;margin-top:-40px!important}')
  }),
  define("common/kooplayer/4.x/kooplayer", ["./js/kooplayer-adapter", "./js/client-test", "./js/flash-player", "./js/web-h5-player"], function (require) {
    return require("./css/button.css"), $.kooplayer = require("./js/kooplayer-adapter")
  }),
  define("common/kooplayer/4.x/css/button.css", [], function () {
    seajs.importStyle(".g-kooplayer-change-flash-button,.g-kooplayer-change-h5-button{position:absolute;left:-98px;top:0;bottom:0;margin:auto 0;z-index:200;width:115px;height:105px;cursor:pointer;transition:left .6s}.g-kooplayer-change-flash-button{background:url(//images.koolearn.com/fe_upload/2018/7/2018-7-18-1531906960462.png)}.g-kooplayer-change-h5-button{background:url(//images.koolearn.com/fe_upload/2018/7/2018-7-18-1531911573172.png)}.g-kooplayer-change-flash-button.hover,.g-kooplayer-change-flash-button:hover,.g-kooplayer-change-h5-button.hover,.g-kooplayer-change-h5-button:hover{left:0}")
  }),
  define("common/kooplayer/4.x/js/kooplayer-adapter", ["./client-test", "./flash-player", "./web-h5-player"], function (require, exports, module) {
    function a() {
      var a = window.MediaSource || window.WebKitMediaSource, b = window.SourceBuffer || window.WebKitSourceBuffer,
        c = a && "function" == typeof a.isTypeSupported && a.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
        d = !b || b.prototype && "function" == typeof b.prototype.appendBuffer && "function" == typeof b.prototype.remove;
      return c && d
    }

    function b(a, b) {
      var i, l = $.extend(!0, {}, j, b),
        m = window.sessionStorage && "flash" != sessionStorage.getItem("kooplayerWebUseType");
      if (d.isPc) {
        if ($("#" + a).css("overflow", "hidden"), l.useH5) if (s && m) var n = f.init(a, l); else var n = e.init(a, l, s); else var n = e.init(a, l, !1);
        return i = new c("pcPlayer" + l.layId, g, n)
      }
      if (!videojs || !videojs.videoXdf) return console.warn("videojs is undefined,player not init"), i;
      var p = "videoid" + +new Date + o(), q = k.replace("{id}", p);
      $("#" + a).append($(q));
      var t = videojs.videoXdf("#" + p, r(b));
      return i = new c(p, h, t)
    }

    function c(a, b, c) {
      this.playerId = a,
        this.playType = b,
        this.playerObj = c
    }

    var d = require("./client-test"),
      e = require("./flash-player"),
      f = require("./web-h5-player"),
      g = 0, h = 1, i = [],
      j = {systemId: 1002001},
      k = '<video id="{id}" class="video-js vjs-default-skin vjs-big-play-centered my-skin">' +
        '<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that </p></video>',
      l = 1,
      m = Array.prototype.slice,
      n = function (a) {
        return m.call(a || [])
      },
      o = function () {
        return l++
      },
      p = {
        pause: "pause",
        play: "play",
        dotData: "",
        addHostData: "",
        addSpeedData: "",
        playHead: "",
        volume: "volume",
        mute: "muted",
        clearMedia: "",
        info: "",
        nomalScreen: function () {
          return this.isFullScreen() ? this.exitFullscreen() : this
        },
        getTotalTime: "duration",
        getCurrTime: "currentTime",
        timeFunReg: "",
        delTimeFunReg: "",
        delAllTimeFunReg: "",
        endFunReg: "",
        delEndFunReg: "",
        delAllEndFunReg: ""
      },
      q = function () {
      },
      r = function (a) {
        return a = a || {}, $.extend({width: "100%", height: "100%"}, a)
      },
      s = function () {
        var b = document.createElement("video");
        return b.canPlayType && b.playbackRate && a() ? !0 : !1
      }();
    $.each({
        fl_pause: "pause",
        fl_play: "play",
        fl_dotData: "dotData",
        fl_addHostData: "addHostData",
        fl_addSpeedData: "addSpeedData",
        fl_play_head: "playHead",
        fl_volume: "volume",
        fl_mute: "mute",
        fl_clearMedia: "clearMedia",
        fl_info: "info",
        fl_nomalScreen: "nomalScreen",
        fl_getTotalTime: "getTotalTime",
        fl_getCurrTime: "getCurrTime",
        fl_timeFunReg: "timeFunReg",
        fl_delTimeFunReg: "delTimeFunReg",
        fl_delAllTimeFunReg: "delAllTimeFunReg",
        fl_endFunReg: "endFunReg",
        fl_delEndFunReg: "delEndFunReg",
        fl_delAllEndFunReg: "delAllEndFunReg"
      },
      function (a, b) {
        if (d.isPc) return void(c.prototype[b] = function () {
          var b = this.playerObj[a];
          return $.isFunction(b) || "function" == typeof b ? b.apply(this.playerObj, n(arguments)) : void 0
        });
        var e = p[b];
        return e ? void(c.prototype[b] = function () {
          if ($.isFunction(e)) return e.apply(this.playerObj, n(arguments));
          var a = this.playerObj[e];
          return $.isFunction(a) || "function" == typeof a ? a.apply(this.playerObj, n(arguments)) : void 0
        }) : void(c.prototype[b] = q)
      }), module.exports = {init: b, players: i}
  }), define("common/kooplayer/4.x/js/client-test", [], function (require, exports, module) {
  var a = navigator.userAgent.toLowerCase(), b = {ie: /MSIE ([^;]+)/.test(a)},
    c = !/Android|iPhone|SymbianOS|Windows\s+Phone|iPad|iPod/i.test(a);
  module.exports = {browser: b, isPc: c}
}),
  define("common/kooplayer/4.x/js/flash-player", [], function () {
    function a(a) {
      if (window.sessionStorage) {
        var b = '<div class="g-kooplayer-change-h5-button"></div>', c = $(b);
        a.append(c), localStorage.getItem("kooplayerWebUsed") || setTimeout(function () {
          c.addClass("hover"), setTimeout(function () {
            c.removeClass("hover")
          }, 1e3)
        }, 1e3), localStorage.setItem("kooplayerWebUsed", "1"), c.on("click", function () {
          window.sessionStorage && sessionStorage.setItem("kooplayerWebUseType", "h5"), location.reload()
        })
      }
    }

    var b = {
        isEncrypt: "true",
        width: "100%",
        height: "100%",
        errorBlankUrl: "//help.koolearn.com/zxzx/",
        hostTestBlankUrl: "//help.koolearn.com/zxzx/",
        markImageUrl: "//study.koolearn.com/common/image/create",
        localData: "true",
        hostData: "false",
        subtitleShow: "false",
        speedChangeShow: "false"
      },
      c = {
        width: "100%",
        height: "100%",
        errorBlankUrl: "//help.koolearn.com/zxzx/",
        hostTestBlankUrl: "//help.koolearn.com/zxzx/",
        markImageUrl: "//study.koolearn.com/common/image/create"
      },
      d = function () {
        var a = 123;
        return function () {
          return a += 1, a + ""
        }
      }(),
      e = function () {
        var a = "playerData rtmpData dotData".split(" ");
        return function (c) {
          var e = function () {
            return c.playerData && c.playerData.titles ? 0 == c.playerData.titles.length ? !0 : !1 : !0
          }();
          e && (c.plugin = "false");
          var f = $.extend({}, b, c), g = a.reduce(function (a, b) {
            return a[b] = f[b], delete f[b], a
          }, {layId: d(), options: f});
          return g
        }
      }(),
      f = function () {
        var a = "adInfo prerollInfo postrollInfo dotInfo mediaUrl token markImageUrl cdn cdnDefault sgmtCode ownStatistics".split(" ");
        return function (b) {
          var e = $.extend({}, c, b), f = a.reduce(function (a, b) {
            return a[b] = e[b], delete e[b], a
          }, {});
          return function () {
            var a, b, c;
            f.ownStatistics && (a = $.cookie ? $.cookie("KUID") : null, a && (f.ownStatistics.KUID = a), b = navigator.userAgent.toLowerCase(), c = b.match(/(?:koolearn;\s)((?:[^\s]+\s)(?:.{1,2}\/\d+\/\d+))/i), c && (f.ownStatistics.appVersion = c[1]))
          }(), {layId: d(), options: e, playerData: f}
        }
      }(),
      g = function (a, b) {
        var c = koo.player.create(a, b.layId, void 0, b.playerData, b.rtmpData, b.options, b.dotData);
        return c.swfObj
      },
      h = function (a, b) {
        $(window).on("jg-hls-player-ready", function (a, c) {
          console.log("layId", c), c == b.layId && d.setData(b.playerData)
        });
        var c = koo.hlsplayer.create(a, b.layId, b.options), d = c.swfObj;
        return d
      },
      i = function () {
        $.extend(window, {
          thisMovie: function (a) {
            return -1 != navigator.appName.indexOf("Microsoft") ? window[a] : document[a]
          }, flashSetCollectionsData: function (a) {
            window.videoSetCollectionsData && window.videoSetCollectionsData(a)
          }
        })
      },
      j = function (a, b) {
        $.extend(window, {
          firstVideoPlay: function () {
            var c = b.options && "true" === b.options.autoPlay && b.options.playFrom;
            c && a.fl_play(b.options.playFrom)
          }
        })
      };
    return i(), {
      init: function (b, c, d) {
        if ("undefined" != typeof koo) {
          var i = "hls" == c.flashType ? f : e, k = "hls" == c.flashType ? h : g;
          c = i(c);
          var l = k(b, c);
          return j(l, c), d && a($("#" + b)), l
        }
      }
    }
  }),
  define("common/kooplayer/4.x/js/web-h5-player", [], function () {
    function a(a) {
      var b = '<div class="g-kooplayer-change-flash-button"></div>', c = $(b);
      a.append(c), localStorage.getItem("kooplayerWebUsed") || setTimeout(function () {
        c.addClass("hover"), setTimeout(function () {
          c.removeClass("hover")
        }, 1e3)
      }, 1e3), localStorage.setItem("kooplayerWebUsed", "1"), c.on("click", function () {
        sessionStorage.setItem("kooplayerWebUseType", "flash"), location.reload()
      })
    }

    return {
      init: function (b, c) {
        !function () {
          var a;
          try {
            a = seajs.data.base
          } catch (b) {
            a = "https://static.koocdn.com/"
          }
          c.hadoopPlugin = a + "common/kooplayer-collect/2.x/kooplayer-collect.js"
        }(), console.log(c);
        var d = $.extend({container: "#" + b, sgmtCode: [], cdn: []}, c, {mediaUrl: c.mediaUrlH5}),
          e = new kooplayer(d);
        return a($("#" + b)), e
      }
    }
  });