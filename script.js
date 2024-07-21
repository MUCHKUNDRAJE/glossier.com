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

// Animation for #load element
tl6 =gsap.timeline()

tl6.to("#load", {
  y:-1000,
  delay:2,
  duration:2.5,
  ease:"power3.out",
});









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
  var clickHi = document.querySelector("#hi");
  var clickHello = document.querySelector("#hello");
  var image = document.querySelector("#big-daday");

  clickHi.addEventListener("click", function() {
      gsap.to(image, {
          x: "-=10%",
          duration: 1, // Add a duration for smoother animation
          onComplete: function() {
              console.log(gsap.getProperty(image, "x"));
          }
      });
  });

  clickHello.addEventListener("click", function() {
      gsap.to(image, {
          x: "+=10%",
          duration: 1, // Add a duration for smoother animation
          onComplete: function() {
              console.log(gsap.getProperty(image, "x"));
          }
      });
  });
});



  var width = document.querySelectorAll("#width");
var image = document.querySelectorAll("#image-track");
var class1 = document.querySelectorAll("#class");
var text = document.querySelectorAll("#text");
var count = 0;
var side = document.querySelectorAll(" #side ");
var byside = document.querySelectorAll("#byside");

width.forEach(function(val,index){
  val.addEventListener("click", function() {
    var tl4 = gsap.timeline();
    
    if (count % 2 === 0) {
 side[index].style.opacity=0,
 byside[index].style.opacity=1,
      
        tl4.to(image[index], {
            width: "700px",
            ease: "power3.out",
            duration: 1,
        }, "mmm")
        .to(class1[index], {
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
        }, "mmm")
        .to(text[index], {
            display: "block",
            delay: 0.6,
        }, "mmm")
        .to(text[index], {
            opacity: 1,
            delay: 0.6,
        }, "mmm");
    } else {
      side[index].style.opacity=1,
      byside[index].style.opacity=0,
        tl4.to(text[index], {
            opacity: 0,
            display: "none",
        })
        .to(image, {
          delay: 0.3,
          width: "320px",
          ease: "power3.out",
          duration: 1,
      })
        .to(class1[index], {
            delay: 0.6,
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
        });
     
    }
    
    count++;
});


})

var Skincare = document.querySelector(".skin1");
var makeup = document.querySelector(".skin2");
var display = document.querySelector("#skincare");
var makeup = document.querySelector("#makeup");
var end = document.querySelector("#circle");
var tl5 = gsap.timeline();


Skincare.addEventListener("click",function(){
    tl5.to(display,{
       opacity:1,
     })
     tl5.to(display,{
        display:"block",
     })
  
})


end.addEventListener("click",function(){
    tl5.to(display,{
        opacity:0,
     })
     tl5.to(display,{
        display:"none",
     })
  
})

makeup.addEventListener("click",function(){
    tl5.to(display,{
       opacity:1,
     })
     tl5.to(display,{
        display:"block",
     })
  
})
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let startX, startY;
let undoStack = [];
let redoStack = [];

// Save the current state to the undo stack
function saveState() {
  undoStack.push(canvas.toDataURL());
  redoStack = []; // Clear the redo stack whenever a new action is taken
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
  saveState();
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    const currentX = e.offsetX;
    const currentY = e.offsetY;
    draw(startX, startY, currentX, currentY);
    startX = currentX;
    startY = currentY;
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (isDrawing) {
    isDrawing = false;
  }
});

function draw(x1, y1, x2, y2,) {
//   ctx.strokeStyle = "#EA9A75"; // Set the stroke color to red
  ctx.lineWidth = 5; // Set the stroke size (e.g., 5 pixels)
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function createDiv(x1, y1, x2, y2) {
  const div = document.createElement('div');
  div.classList.add('generated-div');
  div.style.position = 'absolute';
  div.style.left = `${Math.min(x1, x2)}px`;
  div.style.top = `${Math.min(y1, y2)}px`;
  div.style.width = `${Math.abs(x2 - x1)}px`;
  div.style.height = `${Math.abs(y2 - y1)}px`;
  div.style.backgroundColor = "#ff0000"; // Corrected color code
  document.body.appendChild(div);
}

// Clear the canvas when the button is clicked
const clearCanvasButton = document.getElementById('clearCanvas');
clearCanvasButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  saveState();
});

// Undo functionality
const undoButton = document.getElementById('undo');
undoButton.addEventListener('click', () => {
  if (undoStack.length > 0) {
    redoStack.push(canvas.toDataURL());
    const lastState = undoStack.pop();
    restoreState(lastState);
  }
});

// Redo functionality
const redoButton = document.getElementById('redo');
redoButton.addEventListener('click', () => {
  if (redoStack.length > 0) {
    undoStack.push(canvas.toDataURL());
    const nextState = redoStack.pop();
    restoreState(nextState);
  }
});

// Restore the canvas state from a given data URL
function restoreState(state) {
  const img = new Image();
  img.src = state;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
}

// Initial state save
saveState();

var color = [
    "#EA9A75",
    "#CD4464",
    "#D28BA8",
    "#E04E45",
    "#9E5C45",

    "#913469",
    "#A82239",
    "#C56765",
    "#EBBBB9",
    "#DD8384",

    "#C10016",
    "#F09491",
    "#7C3A2D",
    "#AC145A",
    "#D62E44"

]
const colorNames = [
  "Tumbleweed",
  "Brick Red",
  "Careys Pink",
  "Amaranth",
  "Sepia Skin",
  "Royal Heath",
  "Mexican Red",
  "Contessa",
  "Beauty Bush",
  "New York Pink",
  "Guardsman ",
  "Mauvelous",
  "Chocolate",
  "Lipstick",
  "Amaranth"
];


var colorDiv = document.querySelectorAll("#color");
var panel = document.querySelector("#Fine");


colorDiv.forEach((div, index) => {
    div.style.backgroundColor = color[index];
    div.addEventListener('click', () => {
        console.log("Color selected:", color[index]);
      ctx.strokeStyle = `${ color[index]}`;
      panel.style.backgroundColor =`${ color[index]}`
      panel.style.color =`#ffffff`
      panel.innerHTML =`<h2>${ colorNames[index]}</h2>
      <h2>${ colorNames[index]}</h2>`
    });
  });
  var right = document.querySelector("#right");
  var background = document.querySelector("#canvas")
  background.addEventListener("mouseenter",function(){
    right.style.opacity = 0;
  }) 
  var background = document.querySelector("#canvas")
  background.addEventListener("mouseleave",function(){
    right.style.opacity = 0.5;
  }) 




        
  var progress = document.querySelector("#seemore1");
  progress.addEventListener("mouseenter",function(){
    let initial = 0;
        
    
    let max =100;
    let circle = setInterval(() => {
      initial++;
      console.log(initial)
      let angle = (initial / 100) * 360;
      progress.style.background = `conic-gradient(rgb(37, 37, 37) ${angle}deg, #d1d1d1 0deg)`;

      if (initial >= max) {
        clearInterval(circle);
      }
    }, 5);
  })

  progress.addEventListener("mouseleave",function(){
   
      progress.style.background = `conic-gradient(rgb(189, 162, 3) 0deg, #d1d1d1 0deg)`;
  })

