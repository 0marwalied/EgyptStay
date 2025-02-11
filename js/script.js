var copyButtons = document.querySelectorAll(`.copy-btn`);
copyButtons.forEach((element) => {
  element.onclick = function () {
    window.alert("Copied!");
  };
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".transition-navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
