AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

const modal = document.getElementById('enquiryModal');
const floatingBtn = document.getElementById('floatingEnquiry');
const closeBtn = document.getElementById('closeModal');
const enquiryLinks = document.querySelectorAll('a[href="#enquiry"]');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobileNav');

function openModal() {
  if (modal) modal.classList.add('active');
}

function closeModal() {
  if (modal) modal.classList.remove('active');
}

if (floatingBtn) floatingBtn.addEventListener('click', openModal);
if (closeBtn) closeBtn.addEventListener('click', closeModal);
enquiryLinks.forEach(link => link.addEventListener('click', e => { e.preventDefault(); openModal(); }));
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const enquiryForm = document.getElementById('enquiry');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will contact you soon.');
    closeModal();
    e.target.reset();
  });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
  });
}

if (hamburger && mobileNav) {
  const toggleNav = () => mobileNav.classList.toggle('active');
  hamburger.addEventListener('click', toggleNav);
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleNav();
  });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileNav) mobileNav.classList.remove('active');
      }
    }
  });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.style.boxShadow = window.scrollY > 100 ? '0 5px 20px rgba(221, 1, 37, 0.15)' : '0 2px 15px rgba(221, 1, 37, 0.1)';
});
