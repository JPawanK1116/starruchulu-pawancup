import { Star, Quote } from 'lucide-react';

const testimonials = [
    { id: 1, name: "Sneha Reddy", location: "Hyderabad", text: "The gongura pickle tastes exactly like how my grandmother used to make it. Pure bliss!", rating: 5 },
    { id: 2, name: "Rahul Sharma", location: "Delhi", text: "Ordered the Chicken Pickle on a friend's recommendation. Best decision ever. Extremely authentic and spicy!", rating: 5 },
    { id: 3, name: "Anitha V", location: "Bangalore", text: "The sweets were super fresh. The bobbatlu practically melted in my mouth. Will definitely order again.", rating: 4 },
];

const TestimonialSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary-red)] mb-4">Happy Customers</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-body text-lg">Don't just take our word for it. Here's what food lovers across India have to say about our flavors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((test) => (
                        <div key={test.id} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-transform duration-300 relative border border-gray-100">
                            <Quote className="absolute top-6 right-8 text-gray-100" size={64} style={{ zIndex: 0 }} />

                            <div className="relative z-10">
                                <div className="flex text-[var(--color-primary-gold)] mb-6">
                                    {[...Array(test.rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-gray-700 italic font-body mb-8 min-h-[100px] text-lg leading-relaxed">"{test.text}"</p>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[var(--color-primary-red)] font-heading font-bold text-xl mr-4 shadow-sm">
                                        {test.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--color-dark-text)]">{test.name}</h4>
                                        <span className="text-sm text-gray-500">{test.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
