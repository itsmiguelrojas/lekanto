$(document).ready(function(){
  var maxValue = parseInt($('#max-value').text(), 10);

  var calculate = function(){
    var percentage = 0;
    var count = parseInt($('#count').text(), 10);
    if(count == 0){
      $('.progress-bar').css('width', percentage + '%');
      $('.progress-bar').attr('aria-valuenow', percentage);
    } else {
      percentage = parseInt((count/maxValue)*100, 10);
      $('.progress-bar').css('width', percentage + '%');
      $('.progress-bar').attr('aria-valuenow', percentage);
    };
    if(percentage >= 100){
      $('.progress-bar').css('width', '100%');
      $('.progress-bar').text('¡Completo!');
      $('.progress-bar').attr('aria-valuenow', '100');
    };
  };

  calculate();
});
