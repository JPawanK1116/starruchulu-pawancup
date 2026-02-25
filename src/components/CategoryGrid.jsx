import { Link } from 'react-router-dom';

const categories = [
    { name: 'Veg Pickles', image: '/images/veg-pickles.jpg', count: 12 },
    { name: 'Non-Veg Pickles', image: '/images/nonveg-pickles.jpg', count: 8 },
    { name: 'Sweets', image: '/images/sweets.jpg', count: 15 },
    { name: 'Snacks', image: '/images/snacks.jpg', count: 20 },
    { name: 'Fryums', image: '/images/fryums.jpg', count: 6 },
    { name: 'Curries', image: '/images/curries.jpg', count: 10 },
];

const CategoryGrid = () => {
    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-5xl font-heading font-bold text-[var(--color-primary-green)] mb-3 md:mb-4">Shop by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-body text-sm md:text-base">Explore our wide range of authentic homemade delicacies categorized for your convenience.</p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={`/shop/${category.name}`}
                            className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-square bg-gray-100">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-2 md:p-4">
                                    <h3 className="text-white font-bold text-center text-[10px] md:text-lg mb-0.5 md:mb-1 leading-tight">{category.name}</h3>
                                    <span className="text-[var(--color-primary-gold)] text-[8px] md:text-xs text-center leading-tight">{category.count} Items</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
