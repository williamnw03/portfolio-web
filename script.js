// Progress Scroll Bar
const scrollInnerProgressBar = document.querySelector(
  "div.scroll-progress div.inner-progress"
);

document.addEventListener("scroll", (e) => {
  const currentScroll = Math.ceil(window.scrollY);
  const endScroll = document.documentElement.scrollHeight - innerHeight;
  const scrollProgress = (currentScroll / endScroll) * 100;

  scrollInnerProgressBar.style.width = `${scrollProgress}%`;
});
