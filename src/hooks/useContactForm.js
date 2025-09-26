import { useState } from 'react';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'general'
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Input sanitization
    const sanitizeInput = (input) => {
        if (typeof input !== 'string') return '';
        return input.trim().replace(/[<>]/g, '');
    };

    // Email validation
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes with sanitization
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);

        setFormData(prev => ({
            ...prev,
            [name]: sanitizedValue
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Simulate API call with proper error handling
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate 5% failure rate for realistic testing
                    if (Math.random() < 0.05) {
                        reject(new Error('Network error'));
                    } else {
                        resolve();
                    }
                }, 2000);
            });

            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                company: '',
                message: '',
                interest: 'general'
            });

            // Hide success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);

        } catch (error) {
            console.error('Submission error:', error);
            setErrors({ submit: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset form
    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
            interest: 'general'
        });
        setErrors({});
        setSubmitted(false);
        setIsSubmitting(false);
    };

    return {
        formData,
        submitted,
        isSubmitting,
        errors,
        handleInputChange,
        handleSubmit,
        resetForm,
        validateForm
    };
};