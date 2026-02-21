//Focus Btn Logic
const allBtn = document.getElementById("all-btn");
const mainContentDiv = document.getElementById("main-content-div");

document.addEventListener("click", function (event) {
  if (allBtn.contains(event.target) || mainContentDiv.contains(event.target)) {
    allBtn.classList.add("stay-blue");
  } else {
    allBtn.classList.remove("stay-blue");
  }
});
