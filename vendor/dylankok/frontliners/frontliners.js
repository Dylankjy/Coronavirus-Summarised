// Navbar Fading
$(window).scroll((event) => {
  var scroll = $(window).scrollTop();
  if (scroll === 0) {
    $("#navbar").addClass("navbar-transparent");
  } else {
    $("#navbar").removeClass("navbar-transparent");
  }
});

// Get data for navbar + data for section below hero
$.getJSON("https://api.covid19api.com/world/total", (data) => {
  $("#numberOfCases").text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
  $("#saved").text(parseFloat(data.TotalRecovered).toLocaleString("eng"));
});

// Slideshow for hero
var hero = 0
setInterval(() => {
  $("section.hero.homePage").removeClass("preload-" + hero)
  hero++
  $("section.hero.homePage").addClass("preload-" + hero)
  if (hero > 8) {
    $("section.hero.homePage").removeClass("preload-" + hero)
    hero = 0
  }
}, 5000);

// Easter egg: Change color of emoji
$("#smiley").click(() => {
  $("#smiley").toggleClass("has-text-grey-light");
  $("#smiley").toggleClass("has-text-warning");
});