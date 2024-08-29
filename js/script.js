

$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    var h = $(window).height();//ブラウザの高さを取得
    $(".splashbg").css({
      "border-width":h,//ボーダーの太さにブラウザの高さを代入
      "animation-name":"backBoxAnime"//animation-nameを定義
    }); 
  });
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
});


$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});
