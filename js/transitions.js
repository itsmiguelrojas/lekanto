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
  
  $('.show-1').on('click', function(){
    if ($('#articles-1').hasClass('d-none')) {
      $('#articles-1').removeClass('d-none');
    } else {
      $('#articles-1').addClass('d-none')
    }
  });

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

  // Scroll window 

  $(".fa-arrow-up").on('click', function () {
    $("html, body").animate({scrollTop: 0}, 1000);
  });

  $(".fa-arrow-down").on('click', function () {
    $("html, body").animate({scrollTop: $(document).height()}, 1000);
  });
  
  // Parallax Android fix
  
  $('#story-banner').parallax({androidFix: false});
  
  // Replace elements in comments
  
  var commentElem = [$('#HCB_comment_box h3'), $('#hcb_form_name'), $('#hcb_form_content'), $('#hcb_submit'), $('#HCB_comment_box label a'), $('#no_comments')];
  
  commentElem[0].empty();
  commentElem[0].text('Komentoj / Comentarios');
  
  commentElem[1].attr('placeholder', 'Nomo / Nombre');
  commentElem[2].attr('placeholder', 'Enigu vian komenton ĉi tie / Ingresa tu comentario aquí');
  
  commentElem[3].val('Komenti / Comentar');
  
  commentElem[4].empty()
  commentElem[4].text('Aldonu bildon / Añada una imagen')
  
  commentElem[5].empty()
  commentElem[5].text('Neniu ankoraŭ komentis. Estu la unua! / Nadie ha comentado aún. ¡Sé el primero!')
  
});
