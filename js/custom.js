// To top button 
const goTop = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTop.classList.add("active");
    } else {
        goTop.classList.remove("active");
    }

});

$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for (let i = 0; i<menuLength; i++) {
//     if (menuItem[i].href === currentLocation) {
//         menuItem[i].className = "active"
//     }
// }