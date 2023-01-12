
$(function () {
  // displays the current day in the currentDay id
  var today = dayjs()
  $("#currentDay").text(today.format("MMM D, YYYY"))
  // calling the functions
  changeColor()
  saveText()
  displayText()
});

// finction to change color of blocks depending on time
function changeColor() {

  // get the current hour
  var hour = dayjs().hour();
  // console.log(hour)

  // for each function to grab which timeblock were on
  $(".time-block").each(function () {

    // var time gets current timeblock element, attr id grabs which time block id, split removes the hour- from the id
    var time = $(this).attr('id').split('-')[1];
    // console.log(time)
    // changes classes which will change bg color based on what the current hour is in relation to the timeblock elements 
    if (hour < time) {
      $(this).removeClass("past present").addClass("future");
    } else if (hour > time) {
      $(this).removeClass("future present").addClass("past");
    } else {
      $(this).removeClass("past future").addClass("present");
    }
  });
}

// function to save the text inputs to local storage
function saveText() {
  $(".saveBtn").on("click", function () {
    // grabbing the id of the parent
    var hourEl = $(this).parent().attr('id')
    // console.log(hourEl)
    var textEl = $(this).siblings(".description").val();
    console.log(textEl)
    localStorage.setItem(hourEl, textEl);

  })
}

// function to keep text displayed even after refresh
function displayText() {
  // this grabs the entire DOM 
  $(function () {
    // looping description class 
    $('.description').each(function () {
      // grabs description class elements 
      var hourEl = $(this).parent().attr('id');
      // console.log(hourEl)
      // retrieves local storage from key hourEl
      var savedText = localStorage.getItem(hourEl);
      $(this).val(savedText);
    });
  });
}


// sorry for the ugly code due to the comments.  these comments help me remember what each line does as it takes several hours for me to solve each function.  with so many different attempts i get tripped up with understanding how i got to the solutions.




