// Shared site behavior. Kept minimal by design — no framework, no build step.

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
