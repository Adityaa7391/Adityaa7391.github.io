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
 * CONTACT FORM VALIDATION
 ******************************/
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
const form = document.querySelector(".contact-form");
form.addEventListener("submit", () => {
    const email = form.querySelector('input[name="email"]').value;
    form.querySelector('input[name="_replyto"]').value = email;
});

