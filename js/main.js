// SCROLL TO LINK NAVBAR
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("#opciones-navbar a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            event.preventDefault();


            let targetId = this.getAttribute("href").substring(1);


            let targetElement = document.getElementById(targetId);


            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// ACTIVE SECTION BY SCROLL

let navLinks = document.querySelectorAll("header nav div ul li a")
let sections = document.querySelectorAll("section")



// ANIMATE-ON-SCROLL
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                if (entry.target.classList.contains("left")) {
                    entry.target.classList.add("animate__animated", "animate__fadeInLeft");
                } else {
                    entry.target.classList.add("animate__animated", "animate__fadeInRight");
                }

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});



// NAVBAR - TOGGLE X BUTTON
let menuIcon = document.querySelector('#toggle-navbar');
let navbarOpciones = document.querySelector('.opciones-navbar');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navbarOpciones.classList.toggle("active-navbar");
    navbar.classList.toggle("active-navbar-border")
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active-link');
        }
    });


    menuIcon.classList.remove("fa-arrow-down");
    navbarOpciones.classList.remove("active-navbar");
    navbar.classList.remove("active-navbar-border");
}


