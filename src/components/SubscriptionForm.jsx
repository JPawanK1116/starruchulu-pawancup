const SubscriptionForm = () => {
    return (
        <section className="py-20 bg-[var(--color-primary-red)] text-white relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Get 10% OFF on First Order</h2>
                <p className="text-red-100 font-body text-lg mb-10">
                    Subscribe to our newsletter to receive exclusive offers, new product announcements, and traditional recipes right to your inbox.
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="flex-grow px-6 py-4 rounded-full text-gray-900 border-none outline-none focus:ring-4 focus:ring-[var(--color-primary-gold)]/50 transition-all text-lg"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--color-primary-gold)] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p className="text-sm mt-4 text-red-200">We respect your privacy. No spam, ever.</p>
            </div>
        </section>
    );
};

export default SubscriptionForm;
