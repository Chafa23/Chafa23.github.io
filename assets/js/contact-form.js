// Contact Form 

const formTranslations = {
    en: {
        'send-message': 'Send Message',
        'sending': 'Sending...',
        'message-sent-success': 'Message sent successfully! Thank you for contacting me.',
        'message-sent-error': 'There was an error sending your message. Please try again.',
        'message-sent-error-later': 'There was an error sending your message. Please try again later.',
        'name-error': 'Please enter a valid name',
        'email-error': 'Please enter a valid email address',
        'subject-error': 'Please enter a subject',
        'message-error': 'Please enter a message (at least 10 characters)',
        'recaptcha-error': 'Please complete the reCAPTCHA verification.'
    },
    es: {
        'send-message': 'Enviar Mensaje',
        'sending': 'Enviando...',
        'message-sent-success': 'Mensaje enviado exitosamente! Gracias por contactarme.',
        'message-sent-error': 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',
        'message-sent-error-later': 'Hubo un error al enviar tu mensaje. Por favor intenta más tarde.',
        'name-error': 'Por favor ingresa un nombre válido',
        'email-error': 'Por favor ingresa una dirección de correo válida',
        'subject-error': 'Por favor ingresa un asunto',
        'message-error': 'Por favor ingresa un mensaje (al menos 10 caracteres)',
        'recaptcha-error': 'Por favor, completa la verificación reCAPTCHA.'
    }
};

window.onRecaptchaLoad = function() {
    console.log('reCAPTCHA loaded successfully');
};

function isRecaptchaLoaded() {
    return typeof grecaptcha !== 'undefined' && grecaptcha.render;
}

function validateRecaptcha() {
    if (!isRecaptchaLoaded()) {
        console.warn('reCAPTCHA not loaded, skipping validation');
        return true; 
    }
    
    const response = grecaptcha.getResponse();
    return response && response.length > 0;
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitButton = form.querySelector('button[type="submit"]');
    
    const showFieldError = (input, message) => {
        const formControl = input.closest('.mb-3') || input.parentElement;
        removeFieldError(input); 
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-danger mt-1';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.textContent = message;
        formControl.appendChild(errorDiv);
        input.classList.add('is-invalid');
    };

    const removeFieldError = (input) => {
        const formControl = input.closest('.mb-3') || input.parentElement;
        const errorDiv = formControl.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.classList.remove('is-invalid');
    };

    const setLoading = (isLoading) => {
        const currentLanguage = localStorage.getItem('language') || 'en';
        submitButton.disabled = isLoading;
        
        if (isLoading) {
            submitButton.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${formTranslations[currentLanguage]['sending']}`;
        } else {
            submitButton.innerHTML = `<i class="fas fa-paper-plane me-2"></i>${formTranslations[currentLanguage]['send-message']}`;
        }
    };

    const showFormResponse = (message, isError = false) => {
        const existingResponse = form.querySelector('.form-response');
        if (existingResponse) {
            existingResponse.remove();
        }

        const responseDiv = document.createElement('div');
        responseDiv.className = `form-response alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`;
        responseDiv.style.opacity = '0';
        responseDiv.style.transition = 'opacity 0.3s ease';
        responseDiv.textContent = message;
        
        submitButton.parentElement.appendChild(responseDiv);
        
        setTimeout(() => {
            responseDiv.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            responseDiv.style.opacity = '0';
            setTimeout(() => {
                if (responseDiv.parentNode) {
                    responseDiv.remove();
                }
            }, 300);
        }, 5000);
    };

    const validateForm = () => {
        const currentLanguage = localStorage.getItem('language') || 'en';
        let isValid = true;
        
        const fields = {
            name: {
                element: form.querySelector('[name="name"]'),
                message: formTranslations[currentLanguage]['name-error'],
                minLength: 2
            },
            email: {
                element: form.querySelector('[name="email"]'),
                message: formTranslations[currentLanguage]['email-error'],
                validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            },
            subject: {
                element: form.querySelector('[name="subject"]'),
                message: formTranslations[currentLanguage]['subject-error'],
                minLength: 5
            },
            message: {
                element: form.querySelector('[name="message"]'),
                message: formTranslations[currentLanguage]['message-error'],
                minLength: 10
            }
        };

        Object.values(fields).forEach(field => {
            if (field.element) removeFieldError(field.element);
        });

        Object.entries(fields).forEach(([key, field]) => {
            if (!field.element) return;
            
            const value = field.element.value.trim();
            let fieldValid = true;

            if (!value) {
                fieldValid = false;
            } else if (field.minLength && value.length < field.minLength) {
                fieldValid = false;
            } else if (field.validator && !field.validator(value)) {
                fieldValid = false;
            }

            if (!fieldValid) {
                showFieldError(field.element, field.message);
                isValid = false;
            }
        });

        return isValid;
    };

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim()) {
                validateForm();
            }
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                removeFieldError(input);
            }
        });
    });
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            const firstError = form.querySelector('.is-invalid');
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        const currentLanguage = localStorage.getItem('language') || 'en';
        const formData = new FormData(form);
        
        if (isRecaptchaLoaded()) {
            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                const errorMessage = formTranslations[currentLanguage]['recaptcha-error'];
                showFormResponse(errorMessage, true);
                return;
            }
            formData.append('g-recaptcha-response', recaptchaResponse);
        } else {
            console.warn('reCAPTCHA not available, proceeding without verification');
        }
        
        setLoading(true);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showFormResponse(formTranslations[currentLanguage]['message-sent-success'], false);
                form.reset();
                if (isRecaptchaLoaded()) {
                    grecaptcha.reset();
                }
                inputs.forEach(input => removeFieldError(input));
            } else {
                const errorData = await response.json();
                if (errorData.errors) {
                    showFormResponse('Please fix the following errors: ' + errorData.errors.map(error => error.message).join(', '), true);
                } else {
                    showFormResponse(formTranslations[currentLanguage]['message-sent-error'], true);
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormResponse(formTranslations[currentLanguage]['message-sent-error-later'], true);
        } finally {
            setLoading(false);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});
