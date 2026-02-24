import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { getCartCount } from '../utils/cartUtils';
import CartDrawer from './CartDrawer';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(getCartCount());
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateCartCount = () => {
            setCartCount(getCartCount());
        };
        window.addEventListener('cartUpdated', updateCartCount);
        return () => window.removeEventListener('cartUpdated', updateCartCount);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop All', path: '/shop' },
        { name: 'Veg Pickles', path: '/shop/Veg Pickles' },
        { name: 'Non-Veg Pickles', path: '/shop/Non-Veg Pickles' },
        { name: 'Sweets', path: '/shop/Sweets' },
    ];

    return (
        <>
            <header
                className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-[var(--color-cream)] py-4'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-primary-red)]">
                            Star Ruchulu
                        </Link>

                        {/* Desktop Navigation - Mega Menu style for Categories */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="font-medium text-[var(--color-dark-text)] hover:text-[var(--color-primary-green)] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary-gold)] transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center space-x-4">
                            <button className="hidden md:block p-2 text-gray-700 hover:text-[var(--color-primary-red)] transition-colors">
                                <Search size={20} />
                            </button>

                            <button
                                className="p-2 text-gray-700 hover:text-[var(--color-primary-red)] transition-colors relative"
                                onClick={() => setCartOpen(true)}
                            >
                                <ShoppingCart size={24} />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-[var(--color-primary-red)] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-pulse">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            <button className="hidden md:block p-2 text-gray-700 hover:text-[var(--color-primary-red)] transition-colors">
                                <User size={20} />
                            </button>

                            <button
                                className="md:hidden p-2 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu Side Panel */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-5 flex justify-between items-center border-b">
                    <span className="text-xl font-heading font-bold text-[var(--color-primary-red)]">Menu</span>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-5 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-lg font-medium text-gray-800 hover:text-[var(--color-primary-red)] py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-[var(--color-primary-red)] py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-[var(--color-primary-red)] py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            </div>

            {/* Cart Drawer Provider */}
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

            {/* Spacer to push content down because of fixed header */}
            <div className="h-[76px] md:h-[88px]"></div>
        </>
    );
};

export default Navbar;
