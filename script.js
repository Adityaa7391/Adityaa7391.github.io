/* CUSTOM CURSOR */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});
function animateCursor() {
    curX += (mouseX - curX) * 0.1;
    curY += (mouseY - curY) * 0.1;
    cursor.style.left = curX + 'px';
    cursor.style.top = curY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .skill-tab, .stack-tab, .proj-filter, .proj-card, .cert-card, .hcc-skill-card, .mern-tech-card, .about-mini-card, .rn-tech-pill').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* HEADER SCROLL */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

/* HAMBURGER */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

/* NAV ACTIVE ON CLICK */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

/* HERO TYPING */
const typingText = "Hello, I'm";
const typingEl = document.getElementById('typingText');
let tIdx = 0, tDel = false;
function typeHero() {
    if (!tDel && tIdx < typingText.length) {
        typingEl.textContent += typingText[tIdx++];
        setTimeout(typeHero, 110);
    } else if (tDel && tIdx > 0) {
        typingEl.textContent = typingText.substring(0, --tIdx);
        setTimeout(typeHero, 70);
    } else {
        tDel = !tDel;
        setTimeout(typeHero, 1800);
    }
}
typeHero();

/* STACK CATEGORY TABS */
document.querySelectorAll('.stack-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.stack-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.stack-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = document.getElementById('stack-' + tab.dataset.stack);
        if (panel) {
            panel.classList.add('active');
            panel.querySelectorAll('.sp-fill').forEach(bar => {
                const w = bar.style.getPropertyValue('--w');
                if (w) {
                    bar.style.setProperty('--w', '0%');
                    requestAnimationFrame(() => requestAnimationFrame(() => bar.style.setProperty('--w', w)));
                }
            });
        }
    });
});

/* SKILL TABS (scoped per panel) */
document.querySelectorAll('.stack-panel').forEach(stackPanel => {
    stackPanel.querySelectorAll('.skill-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const layout = tab.closest('.skills-layout');
            if (!layout) return;
            layout.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
            layout.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = layout.querySelector('#sp-' + tab.dataset.skill);
            if (panel) {
                panel.classList.add('active');
                panel.querySelectorAll('.sp-fill').forEach(bar => {
                    const w = bar.style.getPropertyValue('--w');
                    bar.style.setProperty('--w', '0%');
                    requestAnimationFrame(() => requestAnimationFrame(() => bar.style.setProperty('--w', w)));
                });
            }
        });
    });
});

/* PROJECT FILTER */
document.querySelectorAll('.proj-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.proj-card').forEach((card, i) => {
            const cat = card.dataset.category;
            const show = filter === 'all' || cat === filter;
            if (show) {
                card.classList.remove('hidden');
                card.style.animationDelay = (i * 0.05) + 's';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* SCROLL REVEAL */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ACTIVE NAV ON SCROLL */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) link.classList.add('active');
            });
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

/* CONTACT FORM */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', () => {
        const emailInput = form.querySelector('input[name="email"]');
        const replyTo = form.querySelector('input[name="_replyto"]');
        if (emailInput && replyTo) replyTo.value = emailInput.value;
    });
});

/* LIVE DATE & TIME */
function updateDateTime() {
    const el = document.getElementById('dateTime');
    if (!el) return;
    el.innerText = new Date().toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();
/* BACK TO TOP BUTTON */
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.scrollY > 400);
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
