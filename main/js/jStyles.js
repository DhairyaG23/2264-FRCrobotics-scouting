//ur schemes to work with params
var url = new URL(document.location);
var listID = url.searchParams.get('listID');
// EVERYTHING TO DO WITH STYLING HTML ELEMENTS USING JS
window.onload = doStuff;

$(document).ready(function() {
    $('.loadingLogo').hide();
    $('.everything').hide();
});

function doStuff() {
//  $('.loadingAnime').fadeIn(2000);
//  $('.loadingLogo').fadeIn(2000);
//  // $('.loadingLogo').show();
//  // $('.loadingLogo').fadeOut(2000);
//  setTimeout(function () {
//  $('.loadingAnime').fadeOut(2000);
//  setTimeout(function () {
//  $('.everything').fadeIn(1000);
//  },2000);
//  },2000);
    $('.loadingLogo').fadeIn(1000);
    $('.everything').fadeIn(1000);
  // $('.everything').height();
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
