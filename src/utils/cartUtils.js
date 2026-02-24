export const getCart = () => {
    const cart = localStorage.getItem('star_ruchulu_cart');
    return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
    localStorage.setItem('star_ruchulu_cart', JSON.stringify(cart));
};

export const addToCart = (product, quantity = 1, weight = '250g') => {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(
        (item) => item.id === product.id && item.weight === weight
    );

    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity,
            weight,
            finalPrice: product.pricePerWeight[weight]
        });
    }

    saveCart(cart);
    // Dispatch an event so other components can listen and update state
    window.dispatchEvent(new Event('cartUpdated'));
    return cart;
};

export const removeFromCart = (productId, weight) => {
    const cart = getCart();
    const updatedCart = cart.filter(
        (item) => !(item.id === productId && item.weight === weight)
    );
    saveCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
    return updatedCart;
};

export const updateQuantity = (productId, weight, quantity) => {
    if (quantity < 1) return removeFromCart(productId, weight);

    const cart = getCart();
    const existingItemIndex = cart.findIndex(
        (item) => item.id === productId && item.weight === weight
    );

    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity = quantity;
        saveCart(cart);
        window.dispatchEvent(new Event('cartUpdated'));
    }
    return cart;
};

export const clearCart = () => {
    localStorage.removeItem('star_ruchulu_cart');
    window.dispatchEvent(new Event('cartUpdated'));
};

export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.finalPrice * item.quantity, 0);
};

export const getCartCount = () => {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
};
