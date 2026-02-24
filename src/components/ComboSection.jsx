import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

const combos = [
    { id: 1, name: 'Pickle Lovers Combo', description: 'Gongura + Avakaya + Tomato (250g each)', price: 799, originalPrice: 950, image: '/images/combo1.jpg', tag: 'Most Popular' },
    { id: 2, name: 'Non-Veg Feast Combo', description: 'Chicken + Mutton + Prawns (250g each)', price: 1499, originalPrice: 1800, image: '/images/combo2.jpg', tag: 'Value Deal' },
    { id: 3, name: 'Festival Sweet Box', description: 'Bobbatlu + Laddu + Ariselu (Special Box)', price: 899, originalPrice: 1100, image: '/images/combo3.jpg', tag: 'Gifting Special' },
];

const ComboSection = () => {
    return (
        <section className="py-20 bg-[var(--color-cream)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary-red)] mb-4 flex items-center gap-3">
                            Special Combos <Gift className="text-[var(--color-primary-gold)]" size={32} />
                        </h2>
                        <p className="text-gray-600 font-body text-lg">
                            Curated packs for family gatherings and festive gifting. Save big on authentic flavors!
                        </p>
                    </div>
                    <Link to="/shop" className="hidden md:inline-flex mt-6 md:mt-0 font-bold border-b-2 border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:text-red-900 transition-colors pb-1">
                        View All Offers
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {combos.map((combo) => (
                        <div key={combo.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 flex flex-col h-full transform hover:-translate-y-2 relative">
                            <div className="absolute top-0 right-8 bg-[var(--color-primary-gold)] text-gray-900 font-bold text-xs px-4 py-1.5 rounded-b-lg shadow-md uppercase tracking-wider">
                                {combo.tag}
                            </div>

                            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 mt-4">
                                <img src={combo.image} alt={combo.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 bg-gray-100" />
                            </div>

                            <h3 className="text-2xl font-bold font-heading text-[var(--color-dark-text)] mb-3">{combo.name}</h3>
                            <p className="text-gray-500 mb-6 flex-grow">{combo.description}</p>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-gray-400 line-through text-sm mr-2">₹{combo.originalPrice}</span>
                                    <span className="text-3xl font-bold text-[var(--color-primary-red)]">₹{combo.price}</span>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                    Save ₹{combo.originalPrice - combo.price}
                                </div>
                            </div>

                            <button
                                className="w-full py-4 bg-[var(--color-dark-text)] hover:bg-[var(--color-primary-red)] text-white rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2"
                                onClick={() => {
                                    window.dispatchEvent(new Event('cartUpdated'));
                                    alert(`Added ${combo.name} to cart!`);
                                }}
                            >
                                Add Combo to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComboSection;
