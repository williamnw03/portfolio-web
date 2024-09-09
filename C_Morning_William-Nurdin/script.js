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
let xPosition;
let yPosition;

document.addEventListener("mousemove", (e) => {
  if (
    Math.abs(xPosition - e.pageX) > 50 ||
    Math.abs(yPosition - e.pageY) > 50
  ) {
    circleFollow.style.transition = "all 0.5s ease";
  } else {
    setTimeout(() => {
      circleFollow.style.transition = "transform 0.5s ease";
    }, 500);
  }

  xPosition = e.pageX;
  yPosition = e.pageY;

  circleFollow.style.display = "block";

  // console.log(e);

  circleFollow.style.top = `${yPosition + 10}px`;
  circleFollow.style.left = `${xPosition + 10}px`;

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
