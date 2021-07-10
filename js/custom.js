// To top button 
const goTop = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTop.classList.add("active");
    } else {
        goTop.classList.remove("active");
    }

});


// Active Menu start 
// Get the container element
var btnContainer = document.getElementById("navbarText");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Active Menu end