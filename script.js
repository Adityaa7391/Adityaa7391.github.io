/******************************
 * ACTIVE MENU (CLICK ONLY)
 ******************************/
const navLinks = document.querySelectorAll("nav ul li a");

// Keep clicked menu item active
navLinks.forEach(link => { 
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

/******************************
 * LIVE DATE & TIME (FOOTER)
 ******************************/
function updateDateTime() {
    const now = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const dateTimeEl = document.getElementById("dateTime");
    if (dateTimeEl) {
        dateTimeEl.innerText =
            "Current Date & Time: " + now.toLocaleString("en-IN", options);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

/******************************
 * CONTACT FORM (FORMSPREE REPLY-TO)
 ******************************/
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", () => {
        const emailInput = form.querySelector('input[name="email"]');
        const replyTo = form.querySelector('input[name="_replyto"]');

        if (emailInput && replyTo) {
            replyTo.value = emailInput.value;
        }
    });

});
document.querySelectorAll(".skill-btn").forEach(btn=>{
btn.addEventListener("click",()=>{
document.querySelectorAll(".skill-btn").forEach(b=>b.classList.remove("active"));
document.querySelectorAll(".skill-panel").forEach(p=>p.classList.remove("active"));
btn.classList.add("active");
document.getElementById(btn.dataset.skill).classList.add("active");
});
});
const heroImages = [
    "https://imgs.search.brave.com/bTVz_TW4aCw5p7luxvqW9jQTqTa3uMvnKQvtAedWel0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk1/OTE5NTI3L3ZlY3Rv/ci9pbnRlcm5ldC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WjhFcHB4aG4zd0Vs/X2RUVnhkN256TDc4/SEY2ZW91OEgxZGw5/TzhDZjZ5az0",
    "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/12/04203751/full-stack-1.jpg",
    "https://www.webdevelopmentinstitute.com/media/uploads/course/Web-Expert-with-PHP.webp",
    "https://mindmatters.ai/wp-content/uploads/sites/2/2021/02/aiartificial-intelligence-concept-stockpack-adobe-stock-1597x1065.jpg",
    "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg"
];

let currentHeroIndex = 0;
const heroImg = document.getElementById("heroImage");

setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;

    heroImg.style.opacity = "0";

    setTimeout(() => {
        heroImg.src = heroImages[currentHeroIndex];
        heroImg.style.opacity = "1";
    }, 500);

}, 5000);
const text = "Hello, I'm";
const typingElement = document.getElementById("typingText");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    } 
    else if (isDeleting && index > 0) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, 80);
    } 
    else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
const elements = document.querySelectorAll(".type-effect");

elements.forEach((el) => {
    const text = el.innerText;
    el.innerText = "";

    let index = 0;
    let isDeleting = false;

    function typeLoop() {
        if (!isDeleting && index < text.length) {
            el.innerText += text.charAt(index);
            index++;
            setTimeout(typeLoop, 100);
        } 
        else if (isDeleting && index > 0) {
            el.innerText = text.substring(0, index - 1);
            index--;
            setTimeout(typeLoop, 60);
        } 
        else {
            isDeleting = !isDeleting;
            setTimeout(typeLoop, 1200);
        }
    }

    typeLoop();
});


