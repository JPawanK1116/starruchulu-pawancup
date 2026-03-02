import { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Load combined state from JSON + Local overrides
        const stored = localStorage.getItem('sr_admin_products');
        if (stored) {
            setProducts(JSON.parse(stored));
        } else {
            setProducts(productsData);
            localStorage.setItem('sr_admin_products', JSON.stringify(productsData));
        }
    }, []);

    const toggleBestSeller = (id) => {
        const updated = products.map(p => p.id === id ? { ...p, isBestSeller: !p.isBestSeller } : p);
        setProducts(updated);
        localStorage.setItem('sr_admin_products', JSON.stringify(updated));
    };

    const deleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const updated = products.filter(p => p.id !== id);
            setProducts(updated);
            localStorage.setItem('sr_admin_products', JSON.stringify(updated));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-heading font-bold text-[var(--color-primary-green)]">Products Management</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-green)] text-white rounded-lg font-bold hover:bg-[var(--color-secondary-green)] shadow-md transition-colors">
                    <Plus size={18} /> Add Product
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium text-sm">
                                <th className="p-4">Image</th>
                                <th className="p-4">Name & Category</th>
                                <th className="p-4">Base Price (250g)</th>
                                <th className="p-4">Stock</th>
                                <th className="p-4">Best Seller</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 w-20">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                            <img src={product.image} className="w-full h-full object-cover" alt="Product" onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }} />
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold text-gray-800 line-clamp-1">{product.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                                    </td>
                                    <td className="p-4 font-medium text-[var(--color-primary-green)]">₹{product.pricePerWeight['250g'] || product.price}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {product.stock || 0} Units
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => toggleBestSeller(product.id)}
                                            className={`w-12 h-6 rounded-full relative transition-colors ${product.isBestSeller ? 'bg-[var(--color-primary-gold)]' : 'bg-gray-200'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${product.isBestSeller ? 'left-7' : 'left-1'}`}></div>
                                        </button>
                                    </td>
                                    <td className="p-4 flex gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                            <Edit2 size={16} />
                                        </button>
                                        <button onClick={() => deleteProduct(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
