const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");

  if (dropdownContent.classList.contains("show")) {
    dropdownBtn.textContent = "−";
  } else {
    dropdownBtn.textContent = "+";
  }
});
