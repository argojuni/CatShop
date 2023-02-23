// Current Time
    var dt = new Date();
    document.getElementById('date-time').innerHTML=dt;

//   Header Name
  var namew = prompt("Input Your Name");
    document.getElementById("namew").innerText = namew;
    document.getElementById("namex").innerText = namew;
    document.getElementById("namez").innerText = namew;

// SlideShow
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    // Form
    function validateForm(){
        var name = document.forms["message-form"]["full-name"].value;
        var birthDate = document.forms["message-form"]["birth-date"].value;
        var gender = document.forms["message-form"]["gender"].value;
        var messages = document.forms["message-form"]["messages"].value;

        if(name == "" || birthDate == "" || gender == "" || messages == ""){
            alert("Tidak boleh ada yang kosong");
            return false;
        }

        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-full-name").innerHTML = name;
        document.getElementById("sender-birth-date").innerHTML = birthDate;
        document.getElementById("sender-messages").innerHTML = messages;
        return false;
    }