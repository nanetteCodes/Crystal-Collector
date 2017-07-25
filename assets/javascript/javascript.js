 // score variables
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

// Computer random number generator.
  var compNum = Math.floor((Math.random() * 150) + 60);

  // crystal random balue
  var cryst1 = Math.floor((Math.random() * 15) + 1);
    console.log(cryst1);

  var cryst2 = Math.floor((Math.random() * 20) + 4);
    console.log(cryst2);

  var cryst3 = Math.floor((Math.random() * 15) + 1);
    console.log(cryst3);

  var cryst4 = Math.floor((Math.random() * 20) + 4);
    console.log(cryst4)

 
 

  // Displays the number you need to guess on the page.
  $(".compRandom").html(compNum);


  // On click events for each crystal.
  $("#crystalBtn1").click(function() {
    update(cryst1);
  });

  $("#crystalBtn2").click(function() {
    update(cryst2);
  });

  $("#crystalBtn3").click(function() {
    update(cryst3);
  });

  $("#crystalBtn4").click(function() {
    update(cryst4);
  });


  // function called after win or lose 
  function reset() {
    // Generates a new number to guess.
    compNum = Math.floor((Math.random() * 150) + 60);
    // Displays that number on the page.
    $(".compRandom").html(compNum);
    // Generates new values for the crystals.
    cryst1 = Math.floor((Math.random() * 15) + 1);
    cryst2 = Math.floor((Math.random() * 20) + 4);
    cryst3 = Math.floor((Math.random() * 15) + 1);
    cryst4 = Math.floor((Math.random() * 20) + 4);
    // Resets the total guess to 0.
    userTotal = 0;
    // Displays the guess total.
    $(".guessdisplay").html(userTotal);
  };

  // update user's total  
  function update(crystal) {
    
    userTotal += crystal;
     
    $(".guessdisplay").empty();
    $(".guessdisplay").append(userTotal);
    // Checks to see if you win or lose.
    if (userTotal > compNum) {
      losses++;
      $("#lossesdisplay").html(losses);
      alert("you lost, try again!");
      // Calls the reset function 
      reset();

    } else if (userTotal == compNum) {
      wins++;
      $("#winsdisplay").html(wins);
       alert("you won!");
      // Calls the reset function 
      reset();
    }
  };

  
  //hover effect for crystals
  $(".button").hover(function(){
    $(this).animate({height: "250px"});
  },
  function(){
    $(this).animate({height: "200px"});
  });
