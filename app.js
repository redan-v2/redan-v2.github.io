const intro = document.querySelector(".intro-splash");
const logoSpan = document.querySelectorAll(".logo");

const navigationType = performance.getEntriesByType("navigation")[0]?.type;

// Play if this is the first page visited in this tab OR if the page was refreshed.
const shouldPlayIntro =
  !sessionStorage.getItem("siteVisited") ||
  navigationType === "reload";

if (shouldPlayIntro) {
  sessionStorage.setItem("siteVisited", "true");

  window.addEventListener("DOMContentLoaded", () => {
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
} else {
  intro.style.display = "none";
}