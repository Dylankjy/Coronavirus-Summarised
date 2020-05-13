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

var hero = 1
setInterval(() => {
  $("section.hero.homePage").css("background", "url(" + "/static/frontliners/hero-" + hero + ".jpg) no-repeat center")
  hero++
  console.log(hero)
  if (hero >= 8) {
    hero = 1
  }
}, 5000);