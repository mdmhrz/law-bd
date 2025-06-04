import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        let title = 'Law.BD'; // default title

        if (path.startsWith('/myBookings')) {
            title = 'My Booking';
        } else if (path.startsWith('/lawyer/')) {
            // Assuming the lawyer's name might be in a state or fetched from an API.
            // For simplicity, extracting a mock lawyer name from the URL:
            const segments = path.split('/');
            const lawyerName = decodeURIComponent(segments[2] || 'Lawyer Details');
            title = lawyerName;
        }

        document.title = title;
    }, [location]);

    return null; // No UI needed
};

export default TitleManager;
