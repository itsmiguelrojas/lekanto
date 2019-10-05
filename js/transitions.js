$(document).ready(function(){

  //Dropdown

  var moveUp = function(e){
    $(this).find('.accordion').first().stop(true,true).slideUp(300);
  };

  var moveDown = function(e){
    $(this).find('.accordion').first().stop(true,true).slideDown(300);
  };

  $('.dropdown').on('show.bs.dropdown', moveDown);

  $('.dropdown').on('hide.bs.dropdown', moveUp);

  $('.dropdown-submenu').on('show.bs.dropdown', moveDown)

  $('.dropdown-submenu').on('hide.bs.dropdown', moveUp)

  //Show categories

  $('.show-2').on('click', function(){
    if ($('#articles-2').hasClass('d-none')) {
      $('#articles-2').removeClass('d-none');
    } else {
      $('#articles-2').addClass('d-none')
    }
  });

  $('.show-3').on('click', function(){
    if ($('#articles-3').hasClass('d-none')) {
      $('#articles-3').removeClass('d-none');
    } else {
      $('#articles-3').addClass('d-none')
    }
  });

  //Submenus

  $('.dropdown-menu a.dropdown-toggle').on('click', function(e){
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
  
  //To top

  $(window).on('scroll', function() {
    if ($(this).scrollTop()) {
        $('.fa-arrow-up').fadeIn();
    } else {
        $('.fa-arrow-up').fadeOut();
    }
});

$(".fa-arrow-up").on('click', function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});
  
//Replace "Comments"
  
  $("#HCB_comment_box h3").text(function(){
    return $(this).replaceWith("<h3>Comentarios / Komentoj</h3>");
});
});
