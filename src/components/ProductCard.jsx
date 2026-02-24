import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { addToCart } from '../utils/cartUtils';

const ProductCard = ({ product }) => {
    const [selectedWeight, setSelectedWeight] = useState('250g');
    const [isHovered, setIsHovered] = useState(false);

    const price = product.pricePerWeight[selectedWeight];

    const renderSpiceLevel = (level) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-sm ${i < level ? 'text-red-500' : 'text-gray-300'}`}>🌶️</span>
        ));
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product, 1, selectedWeight);
        // Optional: show a toast notification here
    };

    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-1 relative flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {product.isBestSeller && (
                <div className="absolute top-4 -left-2 z-10">
                    <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-r-md shadow-md uppercase tracking-wide">
                        🔥 Best Seller
                    </div>
                    <div className="w-0 h-0 border-t-[8px] border-t-red-800 border-l-[8px] border-l-transparent -mb-2"></div>
                </div>
            )}

            <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    loading="lazy"
                />
                {/* Overlay for quick action on desktop */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 ${isHovered ? 'md:opacity-100' : ''} transition-opacity duration-300 hidden md:flex`}>
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-[var(--color-primary-red)] font-bold py-2 px-6 rounded-full hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors transform translate-y-4 shadow-lg hover:translate-y-0"
                        style={{ transitionDuration: '400ms' }}
                    >
                        Quick Add
                    </button>
                </div>
            </Link>

            <div className="p-3 md:p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1 md:mb-2 gap-1">
                    <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-green)] line-clamp-1">
                        {product.category}
                    </p>
                    <div className="flex" title={`Spice Level: ${product.spiceLevel}/5`}>
                        {product.spiceLevel > 0 && renderSpiceLevel(product.spiceLevel)}
                    </div>
                </div>

                <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm md:text-lg font-heading font-bold text-[var(--color-dark-text)] mb-2 line-clamp-2 hover:text-[var(--color-primary-red)] transition-colors leading-tight">
                        {product.name}
                    </h3>
                </Link>

                <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-2 md:gap-3 border-t border-gray-100">
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-0.5 md:p-1 gap-0.5 md:gap-1">
                        {Object.keys(product.pricePerWeight).map(weight => (
                            <button
                                key={weight}
                                onClick={() => setSelectedWeight(weight)}
                                className={`py-1 px-1 text-[10px] md:text-sm font-medium rounded-md flex-1 transition-colors ${selectedWeight === weight
                                    ? 'bg-white shadow text-[var(--color-primary-red)]'
                                    : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {weight}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-base md:text-xl font-bold text-[var(--color-primary-red)]">
                            ₹{price}
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className="md:hidden bg-[var(--color-primary-red)] text-white p-2 rounded-full hover:bg-red-800 active:scale-95 transition-all shadow-md flex items-center justify-center"
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
