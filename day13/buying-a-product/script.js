const addProductToCart = () => {

    // 1.
    // alert('Product added to cart');

    // 2.
    const button = document.querySelector('.product__buy-button');
    // button.innerHTML = 'In cart';

    // 3.
    button.className = 'product__buy-button product__buy-button_in-cart';

    // 4.
    const quantityInput = document.querySelector('.product__but-quantity');
    const quantity = Number(quantityInput.value) || 1;
    const buttonLabel = quantity + (quantity === 1 ? ' piece' : ' pieces') + ' in cart';
    button.innerHTML = buttonLabel;
}