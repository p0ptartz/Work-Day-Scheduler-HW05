
$(function () {
// displays the current day in the currentDay id
  var today = dayjs()
  $("#currentDay").text(today.format("MMM D, YYYY"))
// calls the changeColor function
  changeColor()
  saveText ()

});

function changeColor() {

  // get the current hour
  var hour = dayjs().hour();
  // console.log(hour)

  // for each function to grab which timeblock were on
  $(".time-block").each(function() {

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

function saveText (){

  $(".saveBtn").on("click", function(){
    // grabbing the id of the parent
    var hourEl = $(this).parent().attr('id')
    // console.log(hourEl)
    var textEl = $(this).siblings(".description").val();
    // console.log(textEl)
    localStorage.setItem(hourEl, textEl);
  })

  $(".description").each(function(){
    var textEl = $(this).siblings(".description").val();
    var showText = localStorage.getItem(textEl)
    $(this).val(showText)
  })

}


  
  




  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  
  
// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

// HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 

// How might the id be useful when saving the description in local storage?


