/* =========================================================
   VANTA EVENTS
   CORE APPLICATION JAVASCRIPT
   MAIN.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initRTL();
  initMobileNav();
  initBackToTop();
  initReveal();
  initForms();
  highlightActiveNav();
});

/* =========================================================
   THEME TOGGLE & PERSISTENCE
   ========================================================= */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("vanta-theme", theme);

  const icon = theme === "dark" ? "☀" : "☾";
  document.querySelectorAll("#themeBtn, #authTheme, #signupTheme").forEach(button => {
    if (button) button.textContent = icon;
  });

  const dashboardTheme = document.getElementById("dashboardTheme");
  if (dashboardTheme) {
    dashboardTheme.textContent = `${icon} Theme`;
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
}

function initTheme() {
  const savedTheme = localStorage.getItem("vanta-theme") || "light";
  setTheme(savedTheme);

  document.querySelectorAll("#themeBtn, #authTheme, #signupTheme, #dashboardTheme").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });
}

/* =========================================================
   RTL TOGGLE & PERSISTENCE
   ========================================================= */
function toggleRTL() {
  document.body.classList.toggle("rtl");
  const enabled = document.body.classList.contains("rtl");
  localStorage.setItem("vanta-rtl", enabled ? "true" : "false");
  showToast(enabled ? "RTL layout enabled" : "LTR layout enabled");
}

function initRTL() {
  if (localStorage.getItem("vanta-rtl") === "true") {
    document.body.classList.add("rtl");
  }

  document.querySelectorAll("#rtlBtn, #authRtl, #signupRtl, #dashboardRtl").forEach(btn => {
    btn.addEventListener("click", toggleRTL);
  });
}

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */
function initMobileNav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("mobile-open");
      document.body.classList.toggle("menu-open", navbar.classList.contains("mobile-open"));
    });

    // Close on navigation click
    document.querySelectorAll(".navbar .nav-link, .navbar .login-nav").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("mobile-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Escape key handler
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (navbar) navbar.classList.remove("mobile-open");
      document.body.classList.remove("menu-open");
      const sidebar = document.getElementById("dashboardSidebar");
      if (sidebar) sidebar.classList.remove("open");
    }
  });
}

/* =========================================================
   ACTIVE LINK HIGHLIGHTER
   ========================================================= */
function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  const pageName = path.substring(path.lastIndexOf("/") + 1) || "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPage = href.substring(href.lastIndexOf("/") + 1);

    if (
      linkPage === pageName ||
      (pageName === "" && linkPage === "index.html") ||
      (pageName === "index.html" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* =========================================================
   BACK TO TOP
   ========================================================= */
function initBackToTop() {
  const backTop = document.getElementById("backTop");
  if (!backTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */
function initReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10 }
    );

    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => element.classList.add("visible"));
  }
}

/* =========================================================
   TOAST NOTIFICATION
   ========================================================= */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Make showToast globally available
window.showToast = showToast;

/* =========================================================
   FORMS HANDLING
   ========================================================= */
function initForms() {
  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Event enquiry submitted successfully. Our planners will contact you shortly.");
      this.reset();
    });
  }

  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Login successful. Opening corporate event dashboard...");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
    });
  }

  // Signup Form
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Account created successfully. Welcome to Vanta Events!");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
    });
  }
}

/* =========================================================
   LOADER
   ========================================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 350);
  }
  initReveal();
});
