# Fix "Account not found" Error

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up"
3. Use your Gmail: rajeev.qa.sparrow@gmail.com
4. Verify your email

## Step 2: Get YOUR Keys
After signup, you'll get:
- **Your Public Key** (replace iOQKKKXJMhJBtKNhJ)
- **Your Service ID** 
- **Your Template ID**

## Step 3: Update contact.js
Replace in contact.js:
```javascript
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY"); // Replace this
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Quick Alternative: Use Formspree (No signup needed)
Replace the entire contact.js with:
```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('message', document.getElementById('message').value);
    
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData
    }).then(() => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    });
});
```

Which option do you prefer?