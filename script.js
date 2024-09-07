let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Aggiungi prodotto al carrello
        cart.push({ name: productName, price: productPrice });
        totalPrice += productPrice;

        updateCartUI();
    });
});

function updateCartUI() {
    // Aggiorna il numero di prodotti nel carrello
    document.getElementById('cart-count').textContent = cart.length;

    // Mostra i dettagli dei prodotti nel carrello
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((product, index) => {
        const item = document.createElement('p');
        item.textContent = `${product.name} - € ${product.price.toFixed(2)}`;
        cartItems.appendChild(item);
    });

    // Aggiorna il prezzo totale
    document.getElementById('total-price').textContent = `Totale: € ${totalPrice.toFixed(2)}`;
}

// Procedi al pagamento (funzione fittizia)
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Il carrello è vuoto. Aggiungi prodotti prima di procedere al pagamento.");
    } else {
        alert(`Totale da pagare: € ${totalPrice.toFixed(2)}\nGrazie per il tuo ordine!`);
        cart = [];
        totalPrice = 0;
        updateCartUI();
    }
});
