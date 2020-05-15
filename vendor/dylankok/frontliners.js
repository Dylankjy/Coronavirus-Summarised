$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll === 0) {
      $("#navbar").addClass("navbar-transparent");
  } else {
      $("#navbar").removeClass("navbar-transparent");
  }
});

$.getJSON("https://api.covid19api.com/world/total", function(data) {
  $( "#numberOfCases" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
  $( "#saved" ).text(parseFloat(data.TotalRecovered).toLocaleString("eng"));
});

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