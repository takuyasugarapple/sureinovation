$(function () {

    //.accordion1の中のp要素がクリックされたら
    $('.accordion1 p').click(function () {

        //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
        $(this).next('ul').slideToggle();

    });
    
    $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, 1000, 'swing');
    return false;
  });
});
