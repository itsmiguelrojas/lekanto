$(document).ready(function(){
  $(document).on('.dropdown', 'show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true,true).slideDown(300);
  });

  $(document).on('.dropdown', 'hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true,true).slideUp(300);
  });
});
