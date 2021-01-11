var headerElement = document.getElementsByTagName("header");

var bodyElement = document.getElementsByTagName("body") [0];

var darkModeButton = documnet.getElementsById('darkModeButton');

var darkModeEnabled = true;

function applyDarkMode() {
  darkModeButton.style.background="lightgray";
  darkModeButton.style.color="black";
  darkModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to bottom, #ffc 100%)";
  lightModeButton.style.background = "lightgray";
  lightModeButton.style.color ="black";
  lightModeButton.style.border="black";

}
function applyLightMode() {
  darkModeButton.style.background="lightgray";
  darkModeButton.style.color="black";
  darkModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to bottom, #ffc 100%)";
  lightModeButton.style.background = "lightgray";
  lightModeButton.style.color ="black";
  lightModeButton.style.border="black";
}
darkModeButton.addEventListener("click", applyDarkMode);
lightModeButton.addEventListener("click", applyLightMode);


$(window).scroll(function() {
  parallax() ;
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-posotion', 'center ' + (wScroll*0.75)+'px');


  $('.parallax--box').css('top', -5 + (wScroll*.005+'em')

}
