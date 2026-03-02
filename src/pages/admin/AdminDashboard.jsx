import { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import { Package, ShoppingCart, TrendingUp, AlertCircle, DollarSign, Users } from 'lucide-react';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalOrders: 0,
        totalRevenue: 0,
        totalCustomers: 0,
        lowStock: 0,
    });

    useEffect(() => {
        // Simulate data loading from localStorage
        const storedProducts = JSON.parse(localStorage.getItem('sr_admin_products')) || productsData;
        const storedOrders = JSON.parse(localStorage.getItem('sr_admin_orders')) || [];
        const storedCustomers = JSON.parse(localStorage.getItem('sr_admin_customers')) || [];

        const revenue = storedOrders.reduce((sum, order) => sum + order.totalAmount, 0);
        const lowStockCount = storedProducts.filter(p => (p.stock || 0) < 10).length;

        setStats({
            totalProducts: storedProducts.length,
            totalOrders: storedOrders.length,
            totalRevenue: revenue,
            totalCustomers: storedCustomers.length,
            lowStock: lowStockCount,
        });
    }, []);

    const cards = [
        { title: 'Total Revenue', value: `₹${stats.totalRevenue.toLocaleString()}`, icon: <TrendingUp size={24} />, bg: 'bg-green-50', text: 'text-[var(--color-primary-green)]' },
        { title: 'Total Orders', value: stats.totalOrders, icon: <ShoppingCart size={24} />, bg: 'bg-blue-50', text: 'text-blue-600' },
        { title: 'Total Products', value: stats.totalProducts, icon: <Package size={24} />, bg: 'bg-purple-50', text: 'text-purple-600' },
        { title: 'Total Customers', value: stats.totalCustomers, icon: <Users size={24} />, bg: 'bg-yellow-50', text: 'text-yellow-600' },
        { title: 'Low Stock Warnings', value: stats.lowStock, icon: <AlertCircle size={24} />, bg: 'bg-red-50', text: 'text-red-600' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-heading font-bold text-[var(--color-primary-green)] mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all">
                        <div className={`w-14 h-14 ${card.bg} ${card.text} rounded-xl flex items-center justify-center`}>
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">{card.title}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{card.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-heading font-bold text-[var(--color-primary-green)] mb-4 pb-2 border-b border-gray-100">Recent Orders (Simulated)</h2>
                    {stats.totalOrders === 0 ? (
                        <p className="text-gray-500 text-sm italic">No active orders found in simulation space.</p>
                    ) : (
                        <ul className="space-y-3">
                            {JSON.parse(localStorage.getItem('sr_admin_orders') || '[]').slice(0, 5).map(order => (
                                <li key={order.orderId} className="flex justify-between items-center py-2">
                                    <span className="font-medium text-gray-800">{order.orderId}</span>
                                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded font-bold">{order.orderStatus}</span>
                                    <span className="font-bold text-[var(--color-primary-green)]">₹{order.totalAmount}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
