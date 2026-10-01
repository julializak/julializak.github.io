// Shared site behavior. Kept minimal by design — no framework, no build step.

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-form-status");
  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitButton = contactForm.querySelector(".contact-form__submit");
      submitButton.disabled = true;
      contactStatus.textContent = "Sending...";
      contactStatus.className = "contact-form__status";

      try {
        const formData = new FormData(contactForm);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        const result = await response.json();

        if (response.ok && result.success) {
          contactStatus.textContent = "Thanks — your message has been sent. I'll get back to you soon!";
          contactStatus.classList.add("contact-form__status--success");
          contactForm.reset();
        } else {
          throw new Error(result.message || "Something went wrong.");
        }
      } catch (error) {
        contactStatus.textContent = "Something went wrong — please try again or email me directly.";
        contactStatus.classList.add("contact-form__status--error");
      } finally {
        submitButton.disabled = false;
      }
    });
  }
});
