import React, { useState } from 'react';
import { isValidEmail } from './EmailValidator'; 
import SuccessMessage from './SuccessMessage'; 
import ErrorMessage from './ErrorMessage'; 
import NewsletterIcon from '../../SVG/NewsletterIcon';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setShowError(false); 
    };

    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            setShowError(true);
            setSubmitted(false);
        } else {
            setShowError(false);
            setSubmitted(true);
        }
    };

    return (
        <div className="flex flex-col lg:mb-6 gap-2 lg:gap-3">
            {submitted ? (
                <SuccessMessage />
            ) : (
                <>
                <div className='flex items-center gap-3 mt-4'>
                    <input
                        type="text"
                        placeholder="Your email..."
                        className={`border rounded h-8 md:h-10 lg:h-12 w-full pl-3 text-sm lg:text-base ${showError ? 'border-red-500' : ''}`}
                        aria-label="Sign up for newsletter"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        className="bg-primary text-white min-w-10 h-8 md:h-10 lg:min-w-12 lg:h-12 rounded flex items-center justify-center"
                        onClick={handleSubmit}
                        aria-label="Sign up for newsletter button"
                    >
                        <NewsletterIcon/>

                    </button>
                </div>
                {showError && <ErrorMessage />}    
                </>
            )}
        </div>
    );
}

export default Newsletter;