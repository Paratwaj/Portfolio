# EmailJS Setup Guide

To make the contact form send emails to your Gmail address (paratwaj@gmail.com), you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** as your service provider
4. Follow the instructions to connect your Gmail account (paratwaj@gmail.com)

## Step 3: Create Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Choose your Gmail service from the dropdown
4. Create a template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email (paratwaj@gmail.com)

## Step 4: Get Your Configuration
1. Go to **Account** → **API Keys**
2. Copy your:
   - **Service ID** (from Email Services)
   - **Template ID** (from Email Templates)
   - **Public Key** (from API Keys)

## Step 5: Update the Code
Replace these values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'your_service_id'; // Replace with your Service ID
const templateId = 'your_template_id'; // Replace with your Template ID
const publicKey = 'your_public_key'; // Replace with your Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the message

## Troubleshooting
- Make sure your Gmail account allows "less secure apps" or use an App Password
- Check the browser console for any EmailJS errors
- Verify all IDs are correctly copied from your EmailJS dashboard

The contact form will now send emails directly to paratwaj@gmail.com!
