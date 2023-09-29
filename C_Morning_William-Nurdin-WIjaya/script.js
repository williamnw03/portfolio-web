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
