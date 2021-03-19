$('body').scrollspy({target: '#main-nav'});

//Add Smooth Scrolling
$('#main-nav a').on('click', function(e){
  //Check for hash Value
  if(this.hash !== ' '){
    //Prevent Default behaviour
    e.preventDefault();

    //Store Hash
    const hash = this.hash;

    //Animate Smooth Scrool
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      //Add Hash to URL after Scroll
        window.location.hash =hash;
    });
  }
});

// HAMBURGER MENU
 $(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
