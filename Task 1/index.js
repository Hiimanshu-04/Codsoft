

gsap.registerPlugin(ScrollTrigger);
//page 4----------------------------------------------
gsap.to(".biggorup h1", {
  y: 1,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", // Adjust this threshold
    end: "bottom 50%", // Adjust this threshold
    
  },
});
gsap.to("#progress1", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", // Adjust this threshold
    end: "bottom 50%", // Adjust this threshold
    
  },
});
gsap.to("#progress2", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 50%", // Adjust this threshold
    end: "bottom 50%", // Adjust this threshold
    
  },
});
gsap.to("#progress3", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#progress-bar1",
    start: "top 50%", // Adjust this threshold
    end: "bottom 50%", // Adjust this threshold
    
  },
});
gsap.to("#progress4", {
  x: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#progress-bar1",
    start: "top 50%", // Adjust this threshold
    end: "bottom 50%", // Adjust this threshold
    
  },
});



