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

document.addEventListener("mousemove", (e) => {
  if (!detechTouch) {
    circleFollow.style.transition = "transform 0.5s ease";
  }
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  circleFollow.style.display = "block";
  circleFollow.style.left = `${mouse.x + 10}px`;
  circleFollow.style.top = `${mouse.y + 10}px`;

  const style = window.getComputedStyle(e.target);
  if (style.getPropertyValue("cursor") === "pointer") {
    circleFollow.style.transform = "scale(1.5)";
  } else {
    circleFollow.style.transform = "scale(1)";
  }
});

document.addEventListener("mouseout", (e) => {
  circleFollow.style.display = "none";
});

document.addEventListener("mouseenter", (e) => {
  detechTouch = false;
  circleFollow.style.display = "block";
});

document.addEventListener("touchstart", (e) => {
  detechTouch = true;
  circleFollow.style.transition = "all 0.5s ease";
});
