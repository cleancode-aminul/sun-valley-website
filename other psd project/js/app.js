document.getElementById("btn").addEventListener("click", function () {
  const inputFieldValue = document.getElementById("inputField").value;
  if (inputFieldValue.trim() === "") {
    alert("Please enter your email here!");
  } else {
    alert("Your response has been record!");
    document.getElementById("inputField").value = "";
  }
});


// counter up
$(document).ready(function(){
  $(".small").counterUp({
    delay: 10,
    time: 1200
    
  });
});



$(document).ready(function() {
  var $scrollButton = $('#scroll-button');
  
  $scrollButton.click(function() {
    if ($(this).hasClass('bottom')) {
      $('html, body').scrollTop($(document).height());
      $(this).text('🚀').removeClass('bottom').addClass('top');
    } else {
      $('html, body').scrollTop(0);
      $(this).text('🚀').removeClass('top').addClass('bottom');
    }
  });
});

//auto change background color

window.addEventListener('beforeunload', () => {
  const overlay = document.getElementById('overlayy');
  overlay.style.display = 'block';
});
window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});








  AOS.init();

