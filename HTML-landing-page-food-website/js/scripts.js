const year = new Date().getFullYear();

const getYear = document.querySelector(".year");

getYear.textContent = year;

const toggleNavbar = document.querySelector(".btn-mobile-nav");
const getHeader = document.querySelector(".header");

toggleNavbar.addEventListener("click", addMobileResponsive);

function addMobileResponsive() {
  getHeader.classList.toggle("nav-open");
}

// making smooth scroll effect work in safari
const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      getHeader.classList.toggle("nav-open");
    }
  });
});

// adding intersection observer
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(sectionHero);
