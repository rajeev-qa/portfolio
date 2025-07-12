# Local Testing Instructions

## How to Test Contact Form Locally

### Step 1: Open the Website
1. Navigate to your portfolio folder: `c:\Users\aadri\Downloads\New folder\portfolio\`
2. Double-click `index.html` to open in your browser
3. Or right-click → "Open with" → Choose your browser

### Step 2: Test the Contact Form
1. Scroll down to the "Contact" section
2. Fill out the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Subject:** Test Message
   - **Message:** This is a test message from the contact form

3. Click "Send Message"

### Step 3: What Should Happen
1. Button changes to "Sending..." with spinner
2. After 2 seconds, you'll see "Opening your email client..."
3. Your default email client (Outlook, Gmail, etc.) will open
4. A new email will be composed with:
   - **To:** rajeev.qa.sparrow@gmail.com
   - **Subject:** Test Message
   - **Body:** Contains all form data

### Step 4: Check Browser Console
1. Press F12 to open Developer Tools
2. Go to "Console" tab
3. Submit the form
4. You should see: `Form Data: {name: "Test User", email: "test@example.com", ...}`

### Step 5: Test Different Scenarios
- Try empty fields (should show validation)
- Try invalid email format
- Try long messages
- Test on different browsers

### Troubleshooting
- **Email client doesn't open:** Check if you have a default email client set
- **Form doesn't submit:** Check browser console for errors
- **Validation issues:** Make sure all required fields are filled

### Next Steps
Once local testing works:
1. Deploy to your live site
2. Set up EmailJS for direct email sending (optional)
3. Test on the live website

## Current Behavior
- ✅ Form validation works
- ✅ Data is captured correctly
- ✅ Opens email client with pre-filled data
- ✅ Form resets after submission
- ✅ Loading states work properly