var curs = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  curs.style.left = dets.x + 20 + "px";
  curs.style.top = dets.y + "px";
});
document.addEventListener("mousemove", function (dets) {
  cursorBlur.style.left = dets.x - 170 + "px";
  cursorBlur.style.top = dets.y - 170 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    curs.style.scale = 3;
    curs.style.border = "1px solid #fff";
    curs.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    curs.style.scale = 1;
    curs.style.border = "0px solid #ffffff";
    curs.style.backgroundColor = "#ffffff";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3,

  }
})

gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration: 1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1,

  }
})

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#page4 h1",{
  y: -10,
  scale:0.5,
  duration:3,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3
  }
})