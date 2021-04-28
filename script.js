document.addEventListener ("keyup", function (event) {
  if (event.key == "l"|| event.key == "L") {
    lightTheme();
  
  }

  if (event.key == "d" || event.key == "D") {
    darkTheme();
  }

});

function lightTheme ()  {                                     el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");             el.classList.add ("light");
  
}

function darkTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");

};


/* to remove an 'event listener', we can use the 'removeEventListener' method. To use this method, our function must be extented rather than inline */

/* The code to do this for the 'checkKey' example would be: 'document.removeEventListener("keyup", checkkey)' */