
// for profile drop-down 
document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profile-icon");
    const dropdown = document.getElementById("dropdown-menu");

    profileIcon.addEventListener("click", function (event) {
        dropdown.classList.toggle("show"); // Toggle class to show/hide
        event.stopPropagation(); // Prevent immediate closing
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show"); // Hide dropdown
        }
    });
});



// for image transition 
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const totalImages = images.length;
    
    // Clone first few images for infinite effect
    images.forEach((img) => {
        let clone = img.cloneNode(true);
        slides.appendChild(clone);
    });

    let index = 0;
    const slideWidth = images[0].clientWidth;
    
    function moveSlide() {
        index++;
        slides.style.transition = "transform 1.0s linear"; // Smooth transition
        slides.style.transform = `translateX(-${index * slideWidth}px)`;

        // When reaching the cloned images, reset instantly
        if (index === totalImages) {
            setTimeout(() => {
                slides.style.transition = "none"; // Remove transition
                slides.style.transform = "translateX(0)";
                index = 0;
            }, 1000); // Wait for transition to end
        }
    }

    // Auto move every 2 seconds
    setInterval(moveSlide, 2000);
});


// for report date range
document.getElementById("start-date").addEventListener("change", function () {
    let startDate = this.value;
    document.getElementById("end-date").min = startDate;
});

// for password eye icon 
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleEye = document.getElementById("toggleEye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleEye.classList.remove("fa-eye");
        toggleEye.classList.add("fa-eye-slash");
        // toggleEye.setAttribute("data-tooltip", "Hide Password");
    } else {
        passwordInput.type = "password";
        toggleEye.classList.remove("fa-eye-slash");
        toggleEye.classList.add("fa-eye");
        // toggleEye.setAttribute("data-tooltip", "Show Password");
    }
}