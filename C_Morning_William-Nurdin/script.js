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

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;

  const speed = 0.25;

  circle.x = mouse.x;
  circle.y = mouse.y;

  circleFollow.style.display = "block";
  circleFollow.style.left = `${circle.x + 10}px`;
  circleFollow.style.top = `${circle.y + 10}px`;

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
  circleFollow.style.display = "block";
});
