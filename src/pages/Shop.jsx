import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Filter, ChevronDown } from 'lucide-react';

const categories = ['All', 'Veg Pickles', 'Non-Veg Pickles', 'Sweets', 'Snacks', 'Fryums', 'Curries'];
const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Spice Level'];

const Shop = () => {
    const { category } = useParams();
    const [activeCategory, setActiveCategory] = useState(category || 'All');
    const [activeSort, setActiveSort] = useState('Recommended');
    const [products, setProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    useEffect(() => {
        setActiveCategory(category || 'All');
    }, [category]);

    useEffect(() => {
        let filtered = [...productsData];

        // Filter
        if (activeCategory !== 'All') {
            filtered = filtered.filter(p => p.category === activeCategory);
        }

        // Sort
        switch (activeSort) {
            case 'Price: Low to High':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'Price: High to Low':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'Spice Level':
                filtered.sort((a, b) => b.spiceLevel - a.spiceLevel);
                break;
            default: // Recommended
                // Keep initial order or sort by best seller
                filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        }

        setProducts(filtered);
    }, [activeCategory, activeSort]);

    return (
        <div className="bg-[var(--color-cream)] min-h-screen pt-4 pb-20">
            {/* Banner */}
            <div className="bg-[var(--color-primary-red)] text-white py-16 text-center shadow-inner">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 drop-shadow-md">
                    {activeCategory === 'All' ? 'Our Menu' : activeCategory}
                </h1>
                <p className="text-red-100 font-body text-lg max-w-2xl mx-auto">
                    Authentic homemade flavors prepared with traditional recipes. No preservatives, 100% natural.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center mb-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="font-bold text-gray-700">{products.length} Products</span>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md font-medium text-sm"
                        >
                            <Filter size={18} /> Filters
                        </button>
                    </div>

                    {/* Sidebar / Filters */}
                    <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-28">
                            <h3 className="font-heading font-bold text-2xl text-[var(--color-primary-red)] mb-6 pb-4 border-b border-gray-100">
                                Categories
                            </h3>
                            <ul className="space-y-3 font-body">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <Link
                                            to={cat === 'All' ? '/shop' : `/shop/${cat}`}
                                            className={`block px-3 py-2 rounded-lg transition-colors text-lg ${activeCategory === cat
                                                    ? 'bg-[var(--color-primary-red)] text-white font-bold shadow-md'
                                                    : 'text-gray-600 hover:bg-red-50 hover:text-[var(--color-primary-red)]'
                                                }`}
                                            onClick={() => setShowFilters(false)}
                                        >
                                            {cat}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="font-heading font-bold text-2xl text-[var(--color-primary-red)] mt-10 mb-6 pb-4 border-b border-gray-100">
                                Sort By
                            </h3>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[var(--color-primary-red)] font-medium font-body focus:ring-2 focus:ring-red-100 transition-shadow"
                                    value={activeSort}
                                    onChange={(e) => setActiveSort(e.target.value)}
                                >
                                    {sortOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:w-3/4">
                        {products.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <Filter size={40} className="text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                                <p className="text-gray-500 mb-6">We couldn't find any items matching your current filters.</p>
                                <Link to="/shop" className="px-6 py-3 bg-[var(--color-primary-red)] text-white rounded-full font-bold">
                                    Clear Filters
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}

                        {products.length > 0 && (
                            <div className="mt-16 text-center">
                                <button className="px-8 py-3 border-2 border-[var(--color-primary-gold)] text-[var(--color-dark-text)] rounded-full font-bold hover:bg-[var(--color-primary-gold)] transition-colors shadow-sm">
                                    Load More Products
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;
