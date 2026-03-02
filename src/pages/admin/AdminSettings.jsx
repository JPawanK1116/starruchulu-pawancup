import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        phone: '+91 98765 43210',
        email: 'hello@starruchulu.com',
        address: 'Macherla, Palnadu District, Andhra Pradesh',
        whatsapp: '+91 98765 43210',
        freeShippingThreshold: 999
    });

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('sr_admin_settings');
        if (stored) {
            setSettings(JSON.parse(stored));
        }
    }, []);

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
        setSaved(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('sr_admin_settings', JSON.stringify(settings));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-heading font-bold text-[var(--color-primary-green)] mb-6 border-b border-gray-200 pb-4">Store Settings</h1>

            <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-gold)]/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>

                {saved && (
                    <div className="bg-green-50 text-green-600 p-4 rounded-xl font-bold flex items-center justify-center animate-in fade-in zoom-in border border-green-200">
                        Settings successfully saved to LocalStorage!
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Business Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={settings.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all font-medium text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Business Email</label>
                        <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all font-medium text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">WhatsApp Number</label>
                        <input
                            type="text"
                            name="whatsapp"
                            value={settings.whatsapp}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all font-medium text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Free Shipping Threshold (₹)</label>
                        <input
                            type="number"
                            name="freeShippingThreshold"
                            value={settings.freeShippingThreshold}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all font-bold text-[var(--color-primary-green)]"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Store Address</label>
                        <textarea
                            name="address"
                            value={settings.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] transition-all font-medium text-gray-800 resize-none"
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-end border-t border-gray-100 pt-6 mt-8 relative z-10">
                    <button type="submit" className="flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-green)] text-white rounded-xl font-bold hover:bg-[var(--color-secondary-green)] transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                        <Save size={20} /> Save Configuration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminSettings;
