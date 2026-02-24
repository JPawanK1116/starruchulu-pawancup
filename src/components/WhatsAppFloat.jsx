import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
    const handleClick = () => {
        window.open('https://wa.me/919876543210?text=I want to order from Star Ruchulu', '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-12 md:bottom-10 right-4 md:right-8 lg:right-10 z-[55] w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce cursor-pointer group"
            aria-label="Order on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md" />
            <span className="absolute hidden group-hover:block -top-10 right-0 bg-white text-green-700 text-sm font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap">
                Order on WhatsApp
            </span>
        </button>
    );
};

export default WhatsAppFloat;
