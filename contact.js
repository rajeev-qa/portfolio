// EmailJS Configuration
(function() {
    emailjs.init("ofTf06bF8dlmZ_55e"); // Your actual public key
})();

// Contact Form Handler - Automated Email
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Get form data
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        time: new Date().toLocaleString()
    };
    
    // Send email using EmailJS
    emailjs.send('service_portfolio', 'template_contact', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formStatus.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Message sent successfully! I will reply soon.</div>';
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            formStatus.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or email directly to rajeev.qa.sparrow@gmail.com</div>';
        })
        .finally(function() {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        });
});

