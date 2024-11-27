const decreaseButtons = document.querySelectorAll('.fa-minus-circle');
const increaseButtons = document.querySelectorAll('.fa-plus-circle');
const quantityDisplays = document.querySelectorAll('.quantity');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');

function updateTotalPrice() {
  let totalPrice = 0;

  const cards = document.querySelectorAll('.card-body');
  cards.forEach(card => {
    const quantity = parseInt(card.querySelector('.quantity').textContent, 10);
    const price = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());

    if (!isNaN(quantity) && !isNaN(price)) {
      totalPrice += quantity * price;
    }
  });

  const totalPriceDisplay = document.querySelector('.total');
  totalPriceDisplay.textContent = `${totalPrice.toFixed(2)} $`;
}

increaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let quantity = parseInt(quantityDisplays[index].textContent, 10) || 0;
    quantity++; 
    quantityDisplays[index].textContent = quantity; 
    updateTotalPrice(); 
  });
});

decreaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let quantity = parseInt(quantityDisplays[index].textContent, 10) || 0;
    if (quantity > 0) {
      quantity--; 
      quantityDisplays[index].textContent = quantity
      updateTotalPrice(); 
    }
  });
});

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', () => {
    const productCard = deleteButton.closest('.card-body'); 
    if (productCard) {
      productCard.remove(); 
      updateTotalPrice(); 
    }
  });
});

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked'); 
  });
});
