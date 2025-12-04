
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

  function openPopup() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("pageContent").classList.add("blurred");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("pageContent").classList.remove("blurred");
}
function openPopup() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("pageContent").classList.add("blurred");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("pageContent").classList.remove("blurred");
}

/* --- CLOSE WHEN CLICKING OUTSIDE THE POPUP BOX --- */
window.addEventListener("click", function(e) {
    const popup = document.getElementById("popup");
    const box = document.querySelector(".popup-box");

    // If popup is open AND click is outside the box → close
    if (popup.style.display === "flex" && !box.contains(e.target)) {
        closePopup();
    }
});

   function sendEmail() {
      const message = document.getElementById('message').value;
      const subject = "Message from Website";
      const email = "dkarsolconstruction@gmail.com";
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    }
