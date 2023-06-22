/* Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word prout one character at a time (one letter per second). 
Once the word is written on the screen clear the interval. */

function typeWriter() {
    const word = "prout";
    let i = 0;

    const interval = setInterval(() => {
      if (i < word.length) {
        console.log(word[i]); i++;
      } else {
        clearInterval(interval);
      }
    }, 1000); 
  }
  // Call the function 
  typeWriter();

  /* Write a function that displays every second that has passed on the page since it was opened. 
  The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", 
  then "2 minutes have passed" (for 120 seconds and more), etc. */

  function displaySecondsPassed() {
    var seconds = 0;
    var displayElement = document.createElement("p");
    document.body.appendChild(displayElement);
  
    setInterval(function() {
      seconds++;
      var minutes = Math.floor(seconds / 60);
      var secondsRemaining = seconds % 60;
  
      if (minutes > 0) {
        if (secondsRemaining === 0) {
          displayElement.textContent = minutes + " minute(s) have passed";
        } else {
          displayElement.textContent = minutes + " minute(s) and " + secondsRemaining + " second(s) have passed";
        }
      } else {
        displayElement.textContent = seconds + " second(s) have passed";
      }
    }, 1000);
  }
  
  displaySecondsPassed();
  
  