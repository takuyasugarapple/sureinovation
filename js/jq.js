$(function () {

    //.accordion1の中のp要素がクリックされたら
    $('.accordion1 .li-question').click(function () {
        $(this).next('.li-answer').slideToggle();
});
    
    $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, 1000, 'swing');
    return false;
  });
});
