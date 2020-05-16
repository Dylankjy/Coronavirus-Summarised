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

// Fetch API data
$.getJSON("https://api.covid19api.com/world/total", function (data) {
  $("#numberOfCases").text(parseFloat(data.TotalConfirmed).toLocaleString("eng"));
});

// Submit form function
$("#symtoms-form").submit(function (e) {
  var counter = 0
  e.preventDefault();

  // Get radio values
  if ($('#contact:checked').val() === "yes") {
    counter = counter + 1
  }

  // Get checkbox values and add score
  if ($("#cough").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#shortness-breath").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#difficultybreathing").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#fever").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#headache").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#chills").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#sore-throat").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#shaking-chills").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#loss-taste-smell").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#muscle-pain").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#discolouration").prop("checked") == true) {
    counter = counter + 1
  }
  if ($("#chest-pressure").prop("checked") == true) {
    counter = counter + 2
  }
  if ($("#speech-movement").prop("checked") == true) {
    counter = counter + 2
  }

  console.log(counter)

  // Show results based on score
  if (counter === 0) {
    $("#form").hide();
    $("#good").show("fade");

  } else if (counter === 1) {
    $("#form").hide();
    $("#maybe").show("fade");
  } else if (counter === 2) {
    $("#form").hide();
    $("#high").show("fade");
  } else if (counter >= 4) {
    $("#form").hide();
    $("#veryhigh").show("fade");
  }
});


// Retry function
function retryForm(section) {
  window.scrollTo(0, 0);
  $(section).hide();
  $("#form").show();
  $('#symtoms-form')[0].reset();
}