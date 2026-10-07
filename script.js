(() => {
  const body = document.body;
  const languageButtons = document.querySelectorAll(".language-toggle");
  const applyLanguage = (language) => {
    body.classList.toggle("lang-ko", language === "ko");
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-ko]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.textContent = value;
    });
    languageButtons.forEach((button) => {
      const label = button.querySelector(".lang-label");
      if (label) label.textContent = language === "ko" ? "한국어" : "EN";
      button.setAttribute("aria-label", language === "ko" ? "Switch language to English" : "언어를 한국어로 변경");
    });
    try { localStorage.setItem("ruma-language", language); } catch (_) {}
  };

  let currentLanguage = "en";
  try {
    const saved = localStorage.getItem("ruma-language");
    if (saved === "en" || saved === "ko") currentLanguage = saved;
  } catch (_) {}
  applyLanguage(currentLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "ko" : "en";
      applyLanguage(currentLanguage);
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "Hello");
      const message = String(formData.get("message") || "").trim();
      const emailSubject = encodeURIComponent(`[Ruma Digital World] ${subject}`);
      const emailBody = encodeURIComponent(`Hi Ruma,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`);
      const status = document.querySelector("#form-status");
      if (status) status.textContent = "Opening your email app… / 이메일 앱을 여는 중입니다…";
      window.location.href = `mailto:202602259@g.seoil.ac.kr?subject=${emailSubject}&body=${emailBody}`;
    });
  }
})();