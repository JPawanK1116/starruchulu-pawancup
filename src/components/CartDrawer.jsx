import { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { getCart, removeFromCart, updateQuantity, getCartTotal } from '../utils/cartUtils';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState(getCart());

    useEffect(() => {
        const handleCartUpdate = () => {
            setCartItems(getCart());
        };
        window.addEventListener('cartUpdated', handleCartUpdate);
        return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }, []);

    const total = getCartTotal();
    const freeShippingThreshold = 999;
    const isFreeShipping = total >= freeShippingThreshold;

    return (
        <>
            <div
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={onClose}
            />

            <div
                className={`fixed inset-y-0 right-0 z-[60] w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100 text-[var(--color-primary-red)]">
                    <h2 className="text-xl font-heading font-bold">Your Cart</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="bg-green-50 p-3 text-center text-sm font-medium text-green-800">
                    {isFreeShipping
                        ? "✨ You've unlocked Free Shipping!"
                        : `Add ₹${freeShippingThreshold - total} more for Free Shipping`}
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500">
                            <p className="text-lg">Your cart is empty</p>
                            <button
                                onClick={onClose}
                                className="mt-4 px-6 py-2 bg-[var(--color-primary-red)] text-white font-medium rounded-md"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.id}-${item.weight}`} className="flex gap-4 border-b border-gray-100 pb-4">
                                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-heading font-bold text-[var(--color-dark-text)]">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.weight)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">Weight: {item.weight}</p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border border-gray-200 rounded-md">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <span className="font-bold text-[var(--color-primary-red)] text-lg">
                                            ₹{item.finalPrice * item.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span>Subtotal</span>
                            <span className="text-[var(--color-primary-red)]">₹{total}</span>
                        </div>
                        <p className="text-xs text-gray-500 text-center">Taxes and shipping calculated at checkout</p>
                        <div className="flex flex-col gap-2">
                            <Link
                                to="/cart"
                                onClick={onClose}
                                className="w-full py-3 text-center font-bold border-2 border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:bg-[var(--color-primary-red)] hover:text-white transition-colors rounded-md"
                            >
                                View Cart
                            </Link>
                            <Link
                                to="/checkout"
                                onClick={onClose}
                                className="w-full py-3 text-center font-bold bg-[var(--color-primary-gold)] text-gray-900 hover:brightness-105 transition-all rounded-md"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
