# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your Gmail account
3. Verify your email

## Step 2: Create Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account (rajeev.qa.sparrow@gmail.com)
5. Copy the SERVICE_ID

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hello Rajeev,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Copy the TEMPLATE_ID

## Step 4: Get Public Key
1. Go to Account Settings
2. Copy your PUBLIC_KEY

## Step 5: Update contact.js
Replace these placeholders in contact.js:
- YOUR_PUBLIC_KEY → Your actual public key
- YOUR_SERVICE_ID → Your Gmail service ID  
- YOUR_TEMPLATE_ID → Your template ID

## Alternative: Simple Mailto (No Setup Required)
If EmailJS doesn't work, the form will use mailto: which opens the user's email client.

## Test the Form
1. Fill out the contact form
2. Check your Gmail inbox
3. Emails should arrive within seconds