# HireClimb Website - Deployment Guide

## Quick Start: Deploy to Vercel (Free & Easy)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com/signup
2. Sign up with your email
3. Verify your email

### Step 2: Push Your Code to GitHub
1. Go to https://github.com/new
2. Create a new repository named `hireclimb`
3. Follow the instructions to push your code (or we can do this for you)

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Import Project"
5. Select the `hireclimb` repository
6. Click "Import"
7. Vercel will automatically detect it's a Next.js project
8. Click "Deploy"
9. Wait 2-3 minutes for deployment to complete

### Step 4: Connect Your GoDaddy Domain
Once deployed on Vercel, you'll get a URL like `hireclimb.vercel.app`

To connect your GoDaddy domain (e.g., hireclimb.com):

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Enter your domain name (e.g., hireclimb.com)
   - Click "Add"
   - Vercel will show you DNS records to add

2. **In GoDaddy:**
   - Log in to your GoDaddy account
   - Go to "My Products" → "Domains"
   - Click on your domain
   - Go to "DNS" section
   - Add the DNS records that Vercel provided
   - Save changes

3. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours to fully propagate
   - Your domain should work within a few minutes to a few hours

## DNS Records You'll Need (from Vercel)

Vercel will provide you with:
- **A Record** pointing to Vercel's IP
- **CNAME Record** for www subdomain (optional)

These will be shown in your Vercel dashboard when you add the domain.

## What You Get with Vercel (Free Tier)

✅ Free hosting
✅ Automatic deployments from GitHub
✅ SSL certificate (HTTPS)
✅ Global CDN
✅ Unlimited bandwidth
✅ Custom domain support

## Need Help?

If you get stuck:
1. Vercel has excellent documentation: https://vercel.com/docs
2. GoDaddy support: https://www.godaddy.com/help
3. Let me know and I can help troubleshoot!

---

**Your current website is running at:** https://hireclimb.lindy.site

This is temporary for testing. Once you deploy to Vercel, you'll have a permanent home for your site!
