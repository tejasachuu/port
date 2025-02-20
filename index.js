$(document).ready(function () {

    // Function to initiate typed.js
    function initTyped() {
        var options = {
            strings: ["Dr. Bindhu A Thomas"],
            typeSpeed: 70,  // Adjust the typing speed as needed
            startDelay: 400,  // Delay before typing starts
            showCursor: true,  // Show blinking cursor
            cursorChar: '|',  // Cursor character
            onComplete: function () {
                $('.typed-cursor').fadeOut();  // Hide cursor on completion
                setTimeout(function () {
                    // Restart typing animation after a delay
                    typed.reset();
                    $('.typed-cursor').fadeIn();
                }, 1000);  // Adjust the delay before restarting typing
            }
        };
  
        var typed = new Typed(".home h1 span", options);
    }
  
    // Call the function to initiate typed.js
    initTyped();
  
    // Menu toggle functionality
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
  
    // Scroll reveal effect
  ScrollReveal().reveal('.home p:first-of-type, .home p:last-of-type, .home button', {
          delay: 150,
          origin: 'bottom',
          distance: '50px',
          easing: 'ease-in-out',
          reset: true
      });
  
      ScrollReveal().reveal('.about .info p:first-of-type, .about .info p:last-of-type', {
          delay: 150,
          origin: 'bottom',
          distance: '50px',
          easing: 'ease-in-out',
          reset: true
      });
  
    // Smooth scroll to section
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
  
  });
  
  
  
  ScrollReveal().reveal('.home h3', {
    delay: 350,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
  });
  
  ScrollReveal().reveal('.home p', {
    delay: 350,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
  });
  
  ScrollReveal().reveal('.home button, .about .info, .education .box, .achievements ul li, .membership ul li, .contact .info, .contact form', {
      delay: 300,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-in-out',
      reset: true
  });
  
  
  // Add this code at the end of the file
  
   document.addEventListener("DOMContentLoaded", function () {
        animateProgressBar("webDevProgress", "webDevText",90); // Adjust the percentage as needed
        animateProgressBar("dataAnalysisProgress", "dataAnalysisText", 75); // Adjust the percentage as needed
        animateProgressBar("Matlab", "matlabText", 60); // Adjust the percentage as needed
        animateProgressBar("VHDL", "vhdlText", 80); // Adjust the percentage as needed
        animateProgressBar("Micro", "microText", 70); // Adjust the percentage as needed
        animateProgressBar("pro", "proText", 90); // Adjust the percentage as needed
    });

    function animateProgressBar(progressId, textId, targetWidth) {
        const progressBar = $('#' + progressId);
        const progressText = $('#' + textId);
        progressBar.animate({
            width: targetWidth + '%'
        }, 500, function () {
            // Animation complete, add percentage text
            progressText.html('<span style="color: white; font-size: 18px;">' + targetWidth + '%</span>');
        });
    }