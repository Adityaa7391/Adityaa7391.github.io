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