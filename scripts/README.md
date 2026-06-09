# Send Portfolio PDF via Email

This script generates your portfolio PDF and emails it to a recipient.

## Prerequisites

1. **Node.js** installed on your machine
2. **Gmail Account** (or any email service that supports SMTP)
3. **Gmail App Password** (if using Gmail with 2FA)

## Setup Instructions

### Step 1: Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification (if not already enabled)
3. Create an **App Password** for "Mail" on "Windows Computer"
4. Copy the generated 16-character password

### Step 2: Configure Environment Variables

Create a `.env` file in the project root with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
RECIPIENT_EMAIL=emmanuelkhupuka@gmail.com
PORTFOLIO_URL=http://localhost:5173/portfolio-pdf
```

### Step 3: Install Dependencies

```bash
npm install --save-dev nodemailer puppeteer
```

### Step 4: Run Your Dev Server First

In one terminal:
```bash
npm run dev
```

This starts your site at `http://localhost:5173`

### Step 5: Generate & Email the PDF

In another terminal:
```bash
node scripts/send-portfolio-email.js
```

## What It Does

✅ Launches your portfolio page  
✅ Generates a professional PDF  
✅ Sends it to your email  
✅ Saves a local copy as `bekhukha-portfolio.pdf`

## Troubleshooting

- **"Gmail login failed"**: Double-check your app password (16 characters, no spaces)
- **"ECONNREFUSED"**: Make sure `npm run dev` is running first
- **"PDF generation timeout"**: Increase the timeout in the script if your site is slow

## For Production

When your site goes live, update `PORTFOLIO_URL` to your live domain:

```
PORTFOLIO_URL=https://yoursite.com/portfolio-pdf
```
