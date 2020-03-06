//ur schemes to work with params
var url = new URL(document.location);
var listID = url.searchParams.get('listID');
// EVERYTHING TO DO WITH STYLING HTML ELEMENTS USING JS
window.onload = doStuff;
$('.everything').hide();
$(document).ready(function() {
    $('.loadingAnime').hide();
    $('.everything').hide();
    $('.eventInfoDiv').hide();
    $('.header').hide();
});

function doStuff() {
 $('.header').fadeIn(500);
   setTimeout(function () {
        $('.everything').css({'display': 'block !important', 'visibility': 'visible'});

        var el = $('.loadingAnime');
            curHeight = "100%";
            autoHeight = '15%';

        $('.header').height(curHeight).animate({height: autoHeight}, 1000);
        el.height(curHeight).animate({height: autoHeight}, 1000);
        $('.marginTime').animate({marginTop: '0%'}, 1000);
        // $('.logoPic').css({'top': '0vh'})

        $('.everything').fadeIn(1000);
   },1000);

}
// $('.everything').fadeIn(2000);
// FADE IN
function main(){
  $('.event-name').hide();
  if(listID == null){
  $('.massive-container').hide();
  $('form').hide();
  $('hr').hide();
  $('.massive-container').fadeIn(2500);
  $('.nameHeading').hide();
  $('.websiteButton').hide();
  $('.location').hide();
  $('.teamCountry').hide();
  $('hr').fadeIn(1000);
  setTimeout(function () {

    $('form').fadeIn(2000);
  }, 300);
  }
  $('.sortable').hide();
  $('.loading').hide();
  $('.teamNumForm').hide();
  $('.twitter').hide();
  $('.facebook').hide();
  $('.instagram').hide();
  $('.youtube').hide();
  $('.github').hide();
  $('.makeEpicAppear').hide();
  $('.yearsParticipated').hide();
  // $('form').show();
  //
  // $('.massive-container').show();
}
$(document).ready(main);
