document.addEventListener("DOMContentLoaded", () => {
    function updateTotalPrice() {
        const cartItems = document.querySelectorAll(".cart-item");
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").dataset.price);
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            total += price * quantity;
        });
        document.getElementById("total-price").textContent = total.toFixed(2);
    }

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("increase-btn")) {
            const quantityElement = event.target.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("decrease-btn")) {
            const quantityElement = event.target.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const cartItem = event.target.closest(".cart-item");
            cartItem.remove();
            updateTotalPrice();
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("like-btn")) {
            event.target.classList.toggle("liked");
        }
    });

    updateTotalPrice();
});
