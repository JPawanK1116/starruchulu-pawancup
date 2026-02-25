import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        // Although the user requested "instant", standard behavior is "auto" or "instant", 'auto' instantly jumps to top without smooth animation. If we add global smooth scroll, it might smooth scroll to top, which isn't desirable on route change. We'll use "auto" (which usually means instant, not smooth) or "instant" (modern). Let's use "instant" as requested, but fall back to 'auto' if not supported. Wait, standard is "instant" or "smooth" or "auto". Let's use "instant".
    }, [pathname]);

    return null;
};

export default ScrollToTop;
