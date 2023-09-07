gsap.registerPlugin(ScrollTrigger);
gsap.to(".page3 h1",{
    y: -130,
    duration: 1,
    scrollTrigger:{
        trigger: ".page2",
        start: "bottom 45%",
        scrub: 4,
    }
})
gsap.from(".page2 img, .page2-text h1, .page2-text p",{
    opacity: 0,
    duration: 2,
    stagger: .6,
    scrollTrigger:{
        trigger: ".page1 a",
        start: "bottom 50%",
    }
})


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "#3C208C"; // Change the background color when scrolling
    } else {
        navbar.style.backgroundColor = "transparent"; // Make it transparent when at the top
    }
});

