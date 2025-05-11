// Navigation bar dropdown menu functionality
const dropdownButton = document.querySelector("#dropdownButton");
const dropdownMenu = document.querySelector("#dropdownMenu");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

// mobile navigation bar functionality
const toggleMenu = document.querySelector("#toggleMenu");
const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");

// Toggle when the hamburger is clicked
toggleMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the event from bubbling up to document
  mobileNav.classList.toggle("hidden"); //show/hide the menu
  menuIcon.classList.toggle("hidden"); //show/hide the menu icon
  closeIcon.classList.toggle("hidden"); //show/hide the close icon
});

// Close when clicking anywhere outside
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileNav.contains(e.target);
  const isClickOnToggle = toggleMenu.contains(e.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    !mobileNav.classList.contains("hidden")
  ) {
    mobileNav.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// close menu when any nav link is clicked
document.querySelectorAll("#mobileNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});
