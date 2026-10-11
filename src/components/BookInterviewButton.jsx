import { BOOKING_URL } from '../config/vsl';

// The one "Book Interview" call to action used across the site. Opens Calendly
// in a new tab, or scrolls to the contact section if no booking link is set.
const BookInterviewButton = ({ className = 'btn-primary', children = 'Book Interview', arrow = true }) => {
    const external = Boolean(BOOKING_URL);

    return (
        <a
            href={external ? BOOKING_URL : '/#contact'}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={className}
        >
            {children}
            {arrow && (
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            )}
        </a>
    );
};

export default BookInterviewButton;
