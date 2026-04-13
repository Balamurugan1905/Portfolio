// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Smooth scroll + close mobile menu on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  });
});

// Intersection Observer for fade-in cards
const fadeElements = document.querySelectorAll('.card, .section-title');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease';
  observer.observe(el);
});

// Hero immediate reveal
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
  // update year in footer if needed
  const footerYear = document.querySelector('.footer p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    if (footerYear.innerHTML.includes('2026')) {
      footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
    }
  }
});
document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
  el.style.transition = 'opacity 0.7s ease';
  el.style.opacity = '1';
});

// Certificate group tab switching
const certificateTabs = document.querySelectorAll('.certificate-tab');
const certificateGroups = document.querySelectorAll('.certificate-group');

certificateTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    certificateTabs.forEach(t => t.classList.remove('active'));
    certificateGroups.forEach(group => group.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.dataset.target;
    const targetGroup = document.getElementById(targetId);
    if (targetGroup) {
      targetGroup.classList.add('active');
      targetGroup.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// console greeting
console.log("%c🔥 Balamurugan T | Full Stack Java Dev | Spring Boot + React + Microservices", "color: #2563eb; font-size: 15px; font-weight: bold;");
