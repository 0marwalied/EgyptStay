var copyButtons = document.querySelectorAll(`.copy-btn`);
copyButtons.forEach((element) => {
  element.onclick = function () {
    window.alert("Copied!");
  };
});
