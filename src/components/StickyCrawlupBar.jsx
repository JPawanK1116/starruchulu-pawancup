const StickyCrawlupBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#111] border-t border-gray-800 py-1 md:py-2 z-[60]">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <span className="text-gray-400 text-[10px] md:text-sm font-body tracking-wider">
                    Designed & Developed by <span className="font-bold text-[var(--color-primary-gold)] hover:text-white cursor-pointer transition-colors">Crawlup</span>
                </span>
            </div>
        </div>
    );
};

export default StickyCrawlupBar;
