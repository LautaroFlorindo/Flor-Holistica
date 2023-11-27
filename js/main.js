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
                
                if(entry.target.classList.contains("left")){
                entry.target.classList.add("animate__animated", "animate__fadeInLeft");
            }else{
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