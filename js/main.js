let albumCover = document.querySelectorAll('.album-cover');
let audio = document.querySelectorAll('.audio');

// function to hide all divs
function hideAll() {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

//
hideAll();

//
albumCover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();
//
switch (e.target.getAttribute('id')) {
      case 'Sighnomore':
        document.querySelector('#timshel')
        	.style.display = 'block';
        break;
      case 'babel':
        document.querySelector('#I-Will-Wait')
        	.style.display = 'block';
        break;
      case 'wilder-mind':
        document.querySelector('#Believe')
        .style.display = 'block';
        break;
      case 'delta':
        document.querySelector('#Guiding-Light')
        .style.display = 'block';
        break;
      } // end of switch
      // switch does not need default for this
      let players = document.querySelectorAll('audio');
      players.forEach(function(el) {
              el.pause();
              el.currentTime = 0;
          });
    } // end of function for clicking

  });
// to stop playing at the same time
