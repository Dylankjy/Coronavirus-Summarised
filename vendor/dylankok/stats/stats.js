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

// Get data for navbar + worldwide data on table
$.getJSON("https://api.covid19api.com/world/total", (data) => {
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
        success: (data) => {
            // Set data in HTML
            $("#" + listOfCountries[i] + "-active").text(parseFloat(data[data.length - 1].Confirmed).toLocaleString("eng"));
            $("#" + listOfCountries[i] + "-rec").text(parseFloat(data[data.length - 1].Recovered).toLocaleString("eng"));
            $("#" + listOfCountries[i] + "-dead").text(parseFloat(data[data.length - 1].Deaths).toLocaleString("eng"));
        }
    })
}

// Chart ID & variable (Global)
var ctx = $("#globalChart");
var globalChart

// Get data for chart when country is selected
$("#select-country").change(() => {
    try {
        globalChart.destroy()
        initaliseChart($("#select-country").val())
    } catch {
        initaliseChart($("#select-country").val())
    }
});

initaliseChart = (countryCode) => {
    $.ajax({
        url: "https://api.covid19api.com/total/country/" + countryCode,
        dataType: 'json',
        async: false,
        type: "GET",
        error: () => {
            $('#nodataWarning').show()
        },
        success: (data) => {
            try {
                $("#chart-country").text(data[0].Country)
                renderChart(data, countryCode)
            } catch (TypeError) {
                $("#chart-country").text("...")
                $("#chart-country-flag").attr("class", '');
                $('#nodataWarning').show()
            }
        }
    })
}

// Set data in chart
renderChart = (data, countryCode) => {
    // Hide any previous errors
    $('#nodataWarning').hide()

    // Set flag 
    $("#chart-country-flag").attr("class", `flag-icon flag-icon-` + countryCode.toLowerCase());

    //  Variables
    var confirmedCases = []
    var deaths = []
    var recovered = []
    var dating = []

    // Assign data for past 7 days into arrays
    for (i = 1; i < 62; i++) {
        confirmedCases.push(data[data.length - i].Confirmed)
        deaths.push(data[data.length - i].Deaths)
        recovered.push(data[data.length - i].Recovered)

        // Use Moment.js: Get dates
        dating.push(moment().subtract(i, 'days').calendar('DD/MM/YYYY'))
    }

    // Render chart
    Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
    Chart.defaults.global.defaultFontSize = 16;
    globalChart = new Chart(ctx, {
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
        }
    });
}