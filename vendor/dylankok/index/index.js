// Navbar Fading
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $("#navbar").addClass("navbar-transparent");
        $("#navbar").removeClass("is-black");
    } else {
        $("#navbar").addClass("is-black");
        $("#navbar").removeClass("navbar-transparent");
    }
});

// Get data for navbar + data for section below hero
$.getJSON("https://api.covid19api.com/world/total", function(data) {
  $( "#numberOfCases" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
  $( "#dead" ).text(parseFloat(data.TotalDeaths).toLocaleString("eng"));
  $( "#active-cases" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
  $( "#recovered" ).text(parseFloat(data.TotalRecovered).toLocaleString("eng"));
});

// Detect for hover of section "#tool" to move arrow "#tool-arrow-right"
$('#tool').hover(function(){
    $("#tool-arrow-right").addClass("tool-arrow-right-move");
}, function(){
    $("#tool-arrow-right").removeClass("tool-arrow-right-move");
})

// Detect for hover of section "#frontliners" to move arrow "#tool-arrow-right2"
$('#frontliners').hover(function(){
    $("#tool-arrow-right2").addClass("tool-arrow-right-move");
}, function(){
    $("#tool-arrow-right2").removeClass("tool-arrow-right-move");
})