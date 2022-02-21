const cardCloseBtn = document.querySelector(".card-dismiss-btn");

// console.log(cardCloseBtn);
cardCloseBtn.addEventListener("click", function cardClose() {
  const card = cardCloseBtn.parentElement;
  const demoContainer = card.parentElement;

  card.remove();

  demoContainer.innerHTML = "Card closed!";
  demoContainer.style.color = "var(--primary-color)";
});