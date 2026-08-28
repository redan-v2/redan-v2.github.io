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

document.addEventListener('DOMContentLoaded', () => {
  const OFFSET_X = 14;
  const OFFSET_Y = 18;
 
  // Find every element on the page that has a .cursor-label inside it
  document.querySelectorAll('.cursor-label').forEach((label) => {
    const target = label.parentElement;
    if (!target) return;
 
    target.addEventListener('mousemove', (e) => {
      label.style.transform = `translate(${e.clientX + OFFSET_X}px, ${e.clientY + OFFSET_Y}px)`;
    });
 
    // Reset position when the mouse leaves, so it doesn't linger
    // off in the wrong spot if the user re-enters from elsewhere
    target.addEventListener('mouseleave', () => {
      label.style.transform = 'translate(-9999px, -9999px)';
    });
  });
});