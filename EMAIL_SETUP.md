# Email Configuration Guide - Nodemailer Setup

## Overview
Your contact form now sends emails using Nodemailer. When someone submits the contact form:
- **Admin email** → You receive the submission details
- **User email** → They receive a confirmation message

---

## Setup Instructions

### 1. Configure Gmail Account

**Option A: Gmail with App Password (Recommended)**

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google Account Settings](https://myaccount.google.com)
3. Click "Security" (left sidebar)
4. Scroll down to "App passwords"
5. Select "Mail" and "Windows Computer" (or your device)
6. Google will generate a 16-character password
7. Copy this password

### 2. Update `.env` File

Edit `.env` in the root directory:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com        # Your Gmail address
EMAIL_PASS=xxxx xxxx xxxx xxxx         # The 16-character app password from step 1
EMAIL_FROM=EPR Nexuss <noreply@eprnexus.com>

# Where to receive contact submissions
CONTACT_EMAIL=contact@eprnexus.com     # Your business email

# Server
PORT=3001
```

### 3. Run Development Server

#### Option 1: Run Frontend & Backend Together
```bash
npm run dev:full
```

#### Option 2: Run Separately (in 2 terminals)
```bash
# Terminal 1 - Frontend 
npm run dev

# Terminal 2 - Backend Server
npm run server
```

The server will start on `http://localhost:3001`

---

## Email Flow

### When form submitted:
1. User fills out form with name, email, phone, message
2. Frontend sends POST request to `http://localhost:3001/api/contact`
3. Server validates data
4. **Email 1**: Admin receives detailed submission at `CONTACT_EMAIL`
5. **Email 2**: User receives confirmation at their email address
6. Success message shown to user

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Connection failed" | Make sure backend server is running (`npm run server`) |
| "Gmail authentication failed" | Check EMAIL_USER and EMAIL_PASS are correct in `.env` |
| Emails not arriving | Check spam folder, verify CONTACT_EMAIL is correct |
| "Less secure apps" error | Use Gmail App Password method (not Basic Auth) |

---

## For Production

Before deploying to production:

1. **Move server to production host** (Heroku, Vercel, AWS, etc.)
2. **Update API URL** in `Contact.tsx` from `localhost:3001` to your production domain
3. **Use environment variables** for sensitive data
4. **Enable CORS properly** for your production domain

### Example production update:
```typescript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const response = await fetch(`${API_URL}/api/contact`, {
```

---

## Files Created/Modified

- ✅ `server.ts` - Backend server with email endpoint
- ✅ `.env` - Email credentials (UPDATE THIS)
- ✅ `.env.example` - Template for .env
- ✅ `package.json` - Added server scripts
- ✅ `src/pages/Contact.tsx` - Updated to send to backend
