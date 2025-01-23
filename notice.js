jQuery (document).ready(function() {

    $('.navi>li') .mouseover(function() {
      $('.submenu').stop().slideDown(500);
      $("#menu_bg").stop().slideDown(500);
    }) .mouseout(function () {
      $('.submenu').stop().slideUp(500);
      $("#menu_bg").stop().slideUp(500);
    });

});