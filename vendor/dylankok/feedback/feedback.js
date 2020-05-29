// Navbar Fading
$(window).scroll((event) => {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $("#navbar").addClass("navbar-transparent");
        $("#navbar").removeClass("is-black");
    } else {
        $("#navbar").addClass("is-black");
        $("#navbar").removeClass("navbar-transparent");
    }
});

// Get data for navbar
$.getJSON("https://api.covid19api.com/world/total", (data) => {
  $( "#numberOfCases" ).text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
});

// Detect whether query string 'submitted' = 1 to display completed page
if (location.search === "?submitted=1") {
    window.scrollTo(0, 0);
    $("#form-section").hide();
    $("#done").show();
}