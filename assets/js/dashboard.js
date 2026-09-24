/* =========================================================
   VANTA EVENTS - DASHBOARD JAVASCRIPT
   DASHBOARD.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

function initDashboard() {
  const sidebar = document.getElementById("dashboardSidebar");
  const menuBtn = document.getElementById("dashboardMenu");
  const titleElem = document.getElementById("dashboardTitle");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  const titles = {
    overview: "Overview",
    requirements: "Event Requirements",
    venues: "Venue & Booking",
    vendors: "Vendors & Services",
    rsvp: "RSVP & Headcount",
    budget: "Budget Tracking"
  };

  document.querySelectorAll(".dashboard-link[data-view]").forEach(link => {
    link.addEventListener("click", () => {
      const view = link.dataset.view;
      showDashboardView(view);
      if (sidebar) sidebar.classList.remove("open");
    });
  });

  function showDashboardView(view) {
    document.querySelectorAll(".dashboard-view").forEach(item => {
      item.classList.remove("active");
    });

    const targetView = document.getElementById(`view-${view}`);
    if (targetView) {
      targetView.classList.add("active");
    }

    document.querySelectorAll(".dashboard-link[data-view]").forEach(link => {
      link.classList.toggle("active", link.dataset.view === view);
    });

    if (titleElem && titles[view]) {
      titleElem.textContent = titles[view];
    }
  }

  // Interactive chart animation
  const bars = document.querySelectorAll(".chart .bar");
  bars.forEach(bar => {
    const originalHeight = bar.style.height;
    bar.style.height = "0%";
    setTimeout(() => {
      bar.style.height = originalHeight;
    }, 200);
  });
}
