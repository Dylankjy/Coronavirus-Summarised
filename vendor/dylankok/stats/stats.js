// Navbar
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

// Get data for navbar + worldwide data on table
$.getJSON("https://api.covid19api.com/world/total", function (data) {
    $("#numberOfCases").text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
    $("#world-active").text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
    $("#world-rec").text(parseFloat(data.TotalRecovered).toLocaleString("eng"));
    $("#world-dead").text(parseFloat(data.TotalDeaths).toLocaleString("eng"));
});

// Table Countries
const listOfCountries = ["us", "mx", "gb", "fr", "it", "ru", "cn", "tw", "sg", "id", "jp", "kr"]

// Get data for table
for (i = 0; i < listOfCountries.length; i++) {
    $.ajax({
        url: "https://api.covid19api.com/total/country/" + listOfCountries[i],
        dataType: 'json',
        async: false,
        type: "GET",
        // data: data,
        success: function (data) {
            // Set data in HTML
            $("#" + listOfCountries[i] + "-active").text(parseFloat(data[data.length - 1].Confirmed).toLocaleString("eng"));
            $("#" + listOfCountries[i] + "-rec").text(parseFloat(data[data.length - 1].Recovered).toLocaleString("eng"));
            $("#" + listOfCountries[i] + "-dead").text(parseFloat(data[data.length - 1].Deaths).toLocaleString("eng"));
        }
    })
}

// Get data for chart
$.getJSON("https://api.covid19api.com/world", function (data) {
    renderChart(data)
});

// Set data in chart
function renderChart(data) {
    //  Variables
    var confirmedCases = []
    var deaths = []
    var recovered = []
    var dating = []

    // Assign data for past 7 days into arrays
    for (i = 1; i < 8; i++) {
        confirmedCases.push(data[data.length - i].TotalConfirmed)
        deaths.push(data[data.length - i].TotalDeaths)
        recovered.push(data[data.length - i].TotalRecovered)

        // Use Moment.js: Get dates
        dating.push(moment().subtract(i, 'days').calendar('DD/MM/YYYY'))
    }

    // Select canvas with ID of #globalChart
    var ctx = $("#globalChart");

    // Render chart
    Chart.defaults.global.defaultFontFamily	= 'Source Sans Pro';
    var globalChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dating.reverse(),
            datasets: [
                {
                    label: 'Total Deaths',
                    data: deaths.reverse(),
                    borderWidth: 2,
                    backgroundColor: 'rgba(192, 11, 54, .5)'
                }, {
                    label: 'Total Recovered',
                    data: recovered.reverse(),
                    borderWidth: 2,
                    backgroundColor: 'rgba(0, 135, 90, .5)'
                }, {
                    label: 'Total Cases',
                    data: confirmedCases.reverse(),
                    borderWidth: 2,
                    backgroundColor: 'rgba(37, 56, 88, .5)'
                }
            ]
        },
        options: {
            defaultFontFamily: '"Source Sans Pro", sans-serif',
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });
}