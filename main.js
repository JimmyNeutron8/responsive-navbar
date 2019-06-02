const nav_toggler = document.querySelector('#nav-toggler');
const nav_menu = document.querySelector('.main-nav');

checkBreakpoint();

$('#nav-toggler').click(() => {
  $('.main-nav').slideToggle(200);
});

$(window).resize(function(){
	checkBreakpoint();
});

function checkBreakpoint () {
  if ($(window).width() >= 576){
    if (!$('.main-nav').is(':visible')) {
      $('.main-nav').toggle();
    }
	}else{
    if ($('.main-nav').is(':visible')) {
      $('.main-nav').toggle();
    }
  }
}
