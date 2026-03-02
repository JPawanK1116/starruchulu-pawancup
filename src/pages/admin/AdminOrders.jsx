import { useState, useEffect } from 'react';
import { ShoppingCart, Eye, CheckCircle } from 'lucide-react';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('sr_admin_orders');
        if (stored) {
            setOrders(JSON.parse(stored));
        }
    }, []);

    const updateStatus = (orderId, newStatus) => {
        const updated = orders.map(o => o.orderId === orderId ? { ...o, orderStatus: newStatus } : o);
        setOrders(updated);
        localStorage.setItem('sr_admin_orders', JSON.stringify(updated));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-heading font-bold text-[var(--color-primary-green)]">Orders Management</h1>
            </div>

            {orders.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl text-center border border-gray-100 shadow-sm flex flex-col items-center">
                    <ShoppingCart size={48} className="text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold text-gray-700">No Orders Yet</h2>
                    <p className="text-gray-500 mt-2">When customers place orders, they will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium text-sm">
                                    <th className="p-4">Order ID</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4 text-center">Items</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.orderId} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4 font-bold text-[var(--color-primary-green)]">{order.orderId}</td>
                                        <td className="p-4">
                                            <div className="font-bold text-gray-800">{order.customerDetails?.fullName}</div>
                                            <div className="text-xs text-gray-500 mt-1">{order.customerDetails?.phone}</div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mx-auto">
                                                {order.items?.length || 0}
                                            </span>
                                        </td>
                                        <td className="p-4 font-extrabold text-[var(--color-primary-green)]">₹{order.totalAmount}</td>
                                        <td className="p-4">
                                            <select
                                                value={order.orderStatus}
                                                onChange={(e) => updateStatus(order.orderId, e.target.value)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer focus:ring-2 focus:ring-[var(--color-primary-gold)] transition-colors ${order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                        order.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="p-4 flex gap-2 justify-center">
                                            <button className="p-2 text-[var(--color-primary-green)] hover:bg-green-50 rounded-lg transition-colors border border-[var(--color-primary-green)]/20" title="View Details">
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOrders;
