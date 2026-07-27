 const intro = document.querySelector(".intro-splash");
const logoSpan = document.querySelectorAll(".logo");

const isPageReloaded = performance.navigation.type === performance.navigation.TYPE_RELOAD;

if (isPageReloaded) {
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 200);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
      }, 2100);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2800);
    });
  });
} else {
  intro.style.display = "none";
}