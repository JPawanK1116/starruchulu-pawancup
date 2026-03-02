import { useState, useEffect } from 'react';
import { Users, Mail, Phone } from 'lucide-react';

const AdminCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('sr_admin_customers');
        if (stored) {
            setCustomers(JSON.parse(stored));
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-heading font-bold text-[var(--color-primary-green)]">Customers Database</h1>
            </div>

            {customers.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl text-center border border-gray-100 shadow-sm flex flex-col items-center">
                    <Users size={48} className="text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold text-gray-700">No Customers Found</h2>
                    <p className="text-gray-500 mt-2">Customer records are generated upon successful checkout simulation.</p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium text-sm">
                                    <th className="p-4">Customer Name</th>
                                    <th className="p-4">Contact Info</th>
                                    <th className="p-4">Total Orders</th>
                                    <th className="p-4">Lifetime Spent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-gold)]/20 text-[var(--color-primary-green)] flex items-center justify-center font-bold text-lg">
                                                    {customer.name?.charAt(0) || 'U'}
                                                </div>
                                                <span className="font-bold text-gray-800">{customer.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600"><Phone size={14} className="text-[var(--color-primary-gold)]" /> {customer.phone}</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600"><Mail size={14} className="text-[var(--color-primary-gold)]" /> {customer.email || 'N/A'}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                                                {customer.totalOrders} Orders
                                            </span>
                                        </td>
                                        <td className="p-4 font-bold text-[var(--color-primary-green)] text-lg">
                                            ₹{customer.totalSpent}
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

export default AdminCustomers;
