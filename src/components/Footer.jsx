import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-footer-bg)] text-[#F5F5F5] pt-16 pb-24 md:pb-12 border-t-2 border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-[var(--color-primary-gold)] mb-6">Star Ruchulu</h3>
                        <p className="text-gray-300 mb-6 font-body leading-relaxed max-w-sm">
                            Authentic homemade Andhra flavors delivered fresh from Macherla, Palnadu District to any corner of India.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary-gold)] hover:text-black transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-[var(--color-primary-gold)] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[var(--color-primary-gold)] transition-colors">Our Story</Link></li>
                            <li><Link to="/shop" className="hover:text-[var(--color-primary-gold)] transition-colors">Shop All</Link></li>
                            <li><Link to="/contact" className="hover:text-[var(--color-primary-gold)] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6">Categories</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/shop/Veg Pickles" className="hover:text-[var(--color-primary-gold)] transition-colors">Veg Pickles</Link></li>
                            <li><Link to="/shop/Non-Veg Pickles" className="hover:text-[var(--color-primary-gold)] transition-colors">Non-Veg Pickles</Link></li>
                            <li><Link to="/shop/Sweets" className="hover:text-[var(--color-primary-gold)] transition-colors">Authentic Sweets</Link></li>
                            <li><Link to="/shop/Snacks" className="hover:text-[var(--color-primary-gold)] transition-colors">Crunchy Snacks</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-[var(--color-primary-gold)] shrink-0 mt-1" size={20} />
                                <span>Macherla, Palnadu District, Andhra Pradesh, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-[var(--color-primary-gold)] shrink-0" size={20} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-[var(--color-primary-gold)] shrink-0" size={20} />
                                <span>hello@starruchulu.com</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h5 className="font-bold mb-3 text-[var(--color-primary-gold)]">Newsletter</h5>
                            <div className="flex bg-white/5 rounded-md p-1 border border-white/10 focus-within:border-[var(--color-primary-gold)] transition-colors">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-transparent border-none px-3 py-2 text-white w-full rounded-l focus:ring-0 outline-none placeholder-gray-400"
                                />
                                <button className="bg-[var(--color-primary-gold)] text-[var(--color-primary-green)] px-5 py-2 font-bold rounded hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
