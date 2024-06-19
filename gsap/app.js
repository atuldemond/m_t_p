// gsap.to("#box", { //to properties
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });
// gsap.from("#box", { //from properties
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  duration: 2,
  rotate: 360,
});

tl.to("#box2", {
  x: 1000,
  duration: 2,
  rotate: 360,
});
