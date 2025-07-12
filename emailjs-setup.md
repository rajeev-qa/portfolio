# EmailJS Setup - AUTOMATED EMAIL

## ✅ Pre-configured Settings:
- **Public Key:** iOQKKKXJMhJBtKNhJ
- **Service ID:** service_portfolio  
- **Template ID:** template_contact

## 🚀 Quick Setup (5 minutes):

### Step 1: Create EmailJS Account
1. Go to https://emailjs.com
2. Sign up with Google (use rajeev.qa.sparrow@gmail.com)

### Step 2: Create Email Service
1. Go to "Email Services" 
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account
5. **Service ID:** Change to `service_portfolio`

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template" 
3. **Template ID:** Change to `template_contact`
4. **Subject:** New Contact: {{subject}}
5. **Content:**
```
Hello Rajeev,

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Reply to: {{from_email}}
```

### Step 4: Test
1. Save template
2. Test your contact form
3. Check Gmail inbox

## 🎯 Result:
- Form submits → Email sent automatically to rajeev.qa.sparrow@gmail.com
- No manual steps required
- Instant delivery
- Professional email format