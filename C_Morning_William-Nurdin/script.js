document.addEventListener("scroll", (e) => {
  const currentScroll = Math.ceil(window.scrollY);
  const scrollInnerProgressBar = document.querySelector(
    "div.scroll-progress div.inner-progress"
  );
  const endScroll = document.documentElement.scrollHeight - innerHeight;
  const scrollProgress = (currentScroll / endScroll) * 100;
  const navbar = document.querySelector("nav.navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;

  // Progress Scroll Bar
  scrollInnerProgressBar.style.width = `${scrollProgress}%`;

  // Navbar move to bottom
  if (currentScroll > navbarHeight) {
    navbar.classList.add("moved-bottom");
  } else {
    navbar.classList.remove("moved-bottom");
  }
});

// Circle follow Cursor
const circleFollow = document.querySelector("div.circle-follow-cursor");
let detechTouch = false;

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 }; // Circle's position
const delay = 0.1; // Adjust this value to increase or decrease the delay (0.1 = slight delay, 0.5 = more delay)

document.addEventListener("mousemove", (e) => {
  if (detechTouch) return; // Ignore if touch device detected
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  circleFollow.style.display = "block";

  const style = window.getComputedStyle(e.target);
  if (style.getPropertyValue("cursor") === "pointer") {
    circleFollow.style.transform = "scale(1.5)";
  } else {
    circleFollow.style.transform = "scale(1)";
  }
});

document.addEventListener("mouseout", (e) => {
  if (detechTouch) return;
  circleFollow.style.display = "none";
});

document.addEventListener("mouseenter", (e) => {
  detechTouch = false;
  circleFollow.style.display = "block";
});

document.addEventListener("touchstart", (e) => {
  detechTouch = true;
  const touch = e.touches[0];
  mouse.x = touch.pageX;
  mouse.y = touch.pageY;
  circleFollow.style.display = "block";
  circleFollow.style.transform = "scale(1)";
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  mouse.x = touch.pageX;
  mouse.y = touch.pageY;
});

// Animation loop for smooth movement
function animateCircle() {
  // Smoothly interpolate the circle's position toward the mouse/touch position
  circle.x += (mouse.x - circle.x) * delay;
  circle.y += (mouse.y - circle.y) * delay;

  // Update the circle's position
  circleFollow.style.left = `${circle.x + 10}px`;
  circleFollow.style.top = `${circle.y + 10}px`;

  requestAnimationFrame(animateCircle);
}

// Start the animation loop
animateCircle();
