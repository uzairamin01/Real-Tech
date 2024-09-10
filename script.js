onload();


function onload() {
  menuSideBar();
  animationForMobile();
}

function menuSideBar(){
  const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("toggle");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
  hamburger.classList.remove("toggle");
});
}

function animationForMobile() {
  let mm = gsap.matchMedia();
  let tl = gsap.timeline();
  mm.add("(max-width:1023px)", ()=>{

    gsap.from(".logo",  {
      x: -1000,
      opacity: 0,
      duration: 1,
    })
    gsap.from("#hamburger",  {
      x: 1000,
      opacity: 0,
      duration: 1.2,
    })
    gsap.from(".textarea h1, .textarea h2, .textarea p,.textarea button ", {
      opacity: 0,
      y: 50,
      stagger: 0.2,   // 0.2 seconds delay between each animation
      duration: 1     // Each animation lasts 1 second
    });

    // gsap.from(".pictures img, .pictures h1", {
    //   y: 100,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".second-page",
    //   }
    // })

  })
}


