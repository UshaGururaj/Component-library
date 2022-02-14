const alertCloseBtn = document.querySelector(".close-alert");

// console.log(alertCloseBtn);
alertCloseBtn.addEventListener("click", function alertClose() {
  const alert = alertCloseBtn.parentElement;
  const demoContainer = alert.parentElement;

  alert.remove();

  demoContainer.innerHTML = "Alert closed!";
  demoContainer.style.color = "var(--primary-color)";
});