const StickyCrawlupBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-[var(--color-crawlup-bar)] h-[28px] flex items-center justify-center z-[60] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <span className="text-white text-[11px] font-body tracking-wider opacity-90">
                    Designed & Developed by <span className="font-bold text-[var(--color-primary-gold)] hover:text-white cursor-pointer transition-colors ml-1">Crawlup</span>
                </span>
            </div>
        </div>
    );
};

export default StickyCrawlupBar;
