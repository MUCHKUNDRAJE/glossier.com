// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Setup ScrollTrigger to use LocomotiveScroll as proxy
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and LocomotiveScroll on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Animation for page1 elements
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

tl.to("#page1 h1", {
    x: -130,
}, "anim");

tl.to("#page1 h2", {
    x: 130,
}, "anim");

tl.to("#page1 video", {
    width: "95%"
}, "anim");

tl.to("#page1 #lipstick1", {
    rotate: "40deg"
}, "anim");

tl.to("#page1 #lipstick2", {
    rotate: "0deg"
}, "anim");

var vedio = document.querySelector(" #page1 #vedio video");
var mouse = document.querySelector("#game");

vedio.addEventListener("mousemove",function(dets){
 gsap.to(mouse,{ 
        x:dets.x,
        y:dets.y,
 })
});
vedio.addEventListener("mousemove",function(dets){
    gsap.to(mouse,{
        scale:1, 
        opacity:1,
       
    })
   });
   vedio.addEventListener("mouseleave",function(dets){
    gsap.to(mouse,{ 
        scale:0,
        opacity:0,

    })
   });


   var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"top 20%",
        end:"top 40%",
        scroller:"#main",
     //    markers:true,
        scrub:7,
       }

   })

tl.to("#skin",{
  x:550,
  duration:2.5,
  ease:"power3.out"
},"anime")
tl.to("#makeup",{
    x:400,
    duration:2.5,
      ease:"power3.out"
  },"anime")

//   gsap.to("#img1 img", {
//     duration:2.5,
//     ease: "power1.out",
//     y: -100,
//     scrollTrigger: {
//       trigger: "#page2",
//       start: "top top",
//       end: "bottom top",
//       scroller:"#main",
//       scrub: true
//     }
//   });
  
var divs = document.querySelectorAll("#div");
var overlays = document.querySelectorAll("#overlay");

divs.forEach((div, index) => {
  div.addEventListener("mouseenter", function() {
    overlays[index].style.opacity = 0.7;
  });

  div.addEventListener("mouseleave", function() {
    overlays[index].style.opacity = 0;
  });
});
  

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page3",
        // markers:true,
        start:"top center",
     scroller:"#main",
        scrub:1,
    }  
})

tl2.to("#right-1 #slide1",{
    y:-500,
    duration:15,
},"mm")
tl2.to("#left-side-img #slide1",{
    y:-800,
    duration:15,
  },"mm")
  
tl2.to("#right-2 #slide1",{

    y:-500,
    duration:15,
},"mm")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page4",
        // markers:true,
         start:"top 30%",
        scroller:"#main",
        scrub:1,
    }  
})

tl3.to("#right-1 #slide2",{
    y:-500,
    duration:15,
},"..mm")
tl3.to("#left-side-img #slide2",{
    y:-900,
    duration:15,
  },"..mm")
  
tl3.to("#right-2 #slide2",{
   y:-500,
    duration:15,
},"..mm")

document.addEventListener('DOMContentLoaded', function() {
    var click = document.querySelector("#hi");
    var image = document.querySelector("#image-track");

    click.addEventListener("click", function() {
        count = 30;
        count++; 
      gsap.to(image, {
        x: "+= -20%",
        duration: 1 ,// Add a duration for smoother animation
      });
    });
  });
  var imageTrack = document.querySelector("#image-track");
  var isDragging = false;
  var startX;
  var currentX;
  var prevX = 0;

  imageTrack.addEventListener("mousedown", function(e) {
    isDragging = true;
    startX = e.clientX - prevX;
    imageTrack.classList.add('dragging');
  });

  document.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.clientX - startX;
    gsap.to(imageTrack, {
      x: currentX
    });
  });

  document.addEventListener("mouseup", function() {
    if (!isDragging) return;
    isDragging = false;
    prevX = currentX;
    imageTrack.classList.remove('dragging');
  });

  imageTrack.addEventListener("mouseleave", function() {
    if (!isDragging) return;
    isDragging = false;
    prevX = currentX;
    imageTrack.classList.remove('dragging');
  });