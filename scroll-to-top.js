window.onload = function(){
    var button = document.getElementById("top-btn");

    window.onscroll = function(){
      if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  }

  function scrolltoTop(){
    window.scrollTo(
      {
        top:0,
        behavior:"smooth"
      }
    );
  }