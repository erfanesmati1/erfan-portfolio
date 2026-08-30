/* =========================================
   ERFAN PORTFOLIO — MAIN JAVASCRIPT
========================================= */


/* =========================================
   PROJECT DATA
   Add new projects here in the future
========================================= */

const projects = [
    {
        number: "01",
        title: "Afghan Hospital",
        description:
            "A modern and responsive hospital website designed to provide visitors with clear information about services, departments, and contact details.",
        image: "images/afghan-hospital.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://erfanesmati1.github.io/afghan-hospital/",
        githubLink: "https://github.com/erfanesmati1/afghan-hospital"
    },

    {
        number: "02",
        title: "Khpalwak Mobile",
        description:
            "A modern mobile phone shop website with a clean interface, responsive layout, product presentation, and interactive elements.",
        image: "images/phone.webp",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://erfanesmati1.github.io/khpalwak-mobile/",
        githubLink: "https://github.com/erfanesmati1/khpalwak-mobile"
    },

    {
        number: "03",
        title: "Calculator",
        description:
            "A simple and responsive calculator application built with JavaScript, featuring a clean interface and interactive calculations.",
        image: "images/calculator.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://erfanesmati1.github.io/Calculator/",
        githubLink: "https://github.com/erfanesmati1/Calculator"
    }
];


/* =========================================
   LOAD PROJECTS
========================================= */

const projectsContainer = document.querySelector(".projects-container");

function loadProjects() {

    if (!projectsContainer) return;

    projectsContainer.innerHTML = "";

    projects.forEach((project) => {

        const projectCard = document.createElement("article");

        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title} project preview"
                    loading="lazy"
                >

                <div class="project-overlay">
                    <span>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        View Project
                    </span>
                </div>

            </div>

            <div class="project-content">

                <span class="project-number">
                    PROJECT ${project.number}
                </span>

                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tech">

                    ${project.technologies
                .map((technology) => `<span>${technology}</span>`)
                .join("")}

                </div>

                <div class="project-buttons">

                    <a
                        href="${project.liveLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-btn live-btn"
                    >
                        <i class="fa-solid fa-globe"></i>
                        Live Demo
                    </a>

                    <a
                        href="${project.githubLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-btn github-btn"
                    >
                        <i class="fa-brands fa-github"></i>
                        GitHub
                    </a>

                </div>

            </div>
        `;

        projectsContainer.appendChild(projectCard);

    });

}


/* Load projects when page starts */

loadProjects();

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // Change hamburger icon to X
        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });


    // Close menu when clicking a navigation link
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}

/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.querySelector(".typing");

const typingWords = [
    "Frontend Development",
    "JavaScript",
    "Responsive Web Design",
    "Software Engineering",
    "Learning Cybersecurity"
];

let wordIndex = 0;
let characterIndex = 0;

let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);


    let typingSpeed = isDeleting ? 50 : 90;


    /* When word is completely typed */

    if (!isDeleting && characterIndex === currentWord.length) {

        typingSpeed = 1800;

        isDeleting = true;

    }


    /* When word is completely deleted */

    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= typingWords.length) {
            wordIndex = 0;
        }

        typingSpeed = 400;

    }


    setTimeout(typeEffect, typingSpeed);

}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .journey-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   3D PROJECT CARD TILT
========================================= */

function enableProjectTilt() {

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 850) return;

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
            `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}

enableProjectTilt();


/* =========================================
   3D HERO VISUAL MOUSE MOVEMENT
========================================= */

const heroVisual = document.querySelector(".hero-visual");
const profileContainer = document.querySelector(".profile-container");

if (heroVisual && profileContainer) {

    heroVisual.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 850) return;

        const rect = heroVisual.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        const rotateX =
            ((y - centerY) / centerY) * -8;


        profileContainer.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
        `;

    });


    heroVisual.addEventListener("mouseleave", () => {

        profileContainer.style.transform = "";

    });

}


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton =
    document.getElementById("scroll-top");


if (scrollTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    });


    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   CONTACT LINK PROTECTION
========================================= */

const externalLinks =
    document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach((link) => {

    link.setAttribute("rel", "noopener noreferrer");

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%c Welcome to Erfan's Portfolio!",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "%cSoftware Engineering Student | Frontend Developer | Cybersecurity Learner",
    "font-size:13px;"
);