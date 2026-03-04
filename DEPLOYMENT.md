# Deployment Guide

This guide will help you publish your real estate website to the internet.

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Replaced all placeholder images with your actual images
- [ ] Updated project name and branding
- [ ] Updated contact information (address, phone, email)
- [ ] Customized text content for all sections
- [ ] Changed brand colors (if desired)
- [ ] Updated statistics/numbers
- [ ] Tested website on desktop browsers
- [ ] Tested website on mobile devices
- [ ] Tested all forms and interactive elements
- [ ] Optimized images (compressed for web)
- [ ] Verified all links work correctly

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

**Pros**: Free, easy drag-and-drop, automatic HTTPS, custom domain support

**Steps**:
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for a free account
3. Click "Add new site" → "Deploy manually"
4. Drag your entire STEGO folder into the upload area
5. Wait for deployment (usually 1-2 minutes)
6. Your site is live! Netlify will give you a URL like: `your-site.netlify.app`

**Custom Domain**:
- Go to Site Settings → Domain Management
- Click "Add custom domain"
- Follow instructions to point your domain to Netlify

---

### Option 2: Vercel

**Pros**: Free, fast, git integration, automatic deployments

**Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "Add New Project"
4. Import your code or drag-and-drop
5. Click "Deploy"
6. Your site is live at: `your-site.vercel.app`

**Custom Domain**:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### Option 3: GitHub Pages

**Pros**: Free, integrated with GitHub, good for version control

**Prerequisites**: Basic knowledge of Git

**Steps**:
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `your-project-name`
3. Upload your files:
   ```bash
   cd c:\Users\bouio\OneDrive\Desktop\STEGO
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-project-name.git
   git push -u origin main
   ```
4. Go to repository Settings → Pages
5. Under "Source", select "main" branch
6. Click "Save"
7. Your site will be live at: `yourusername.github.io/your-project-name`

---

### Option 4: Traditional Web Hosting (cPanel)

**Pros**: Full control, works with existing hosting

**Steps**:
1. Log in to your hosting cPanel
2. Open "File Manager"
3. Navigate to `public_html` folder (or your domain's root folder)
4. Upload all files from your STEGO folder
5. Ensure folder structure is maintained:
   ```
   public_html/
   ├── index.html
   ├── css/
   ├── js/
   └── images/
   ```
6. Visit your domain to see the live site

**FTP Upload Alternative**:
1. Download an FTP client (FileZilla recommended)
2. Connect using your hosting credentials
3. Upload all files to the public_html directory
4. Maintain the folder structure

---

### Option 5: AWS S3 + CloudFront

**Pros**: Highly scalable, professional grade, CDN included

**Steps**:
1. Create an AWS account
2. Create an S3 bucket
3. Enable static website hosting on the bucket
4. Upload all files to the bucket
5. Set bucket permissions for public read
6. (Optional) Configure CloudFront for CDN
7. Your site is available at the S3 website endpoint

---

## Custom Domain Setup

After deploying to any platform, you can use your own domain:

### Step 1: Purchase a Domain
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Step 2: Configure DNS

**For Netlify/Vercel/GitHub Pages:**
1. Get the DNS records from your hosting platform
2. Go to your domain registrar's DNS settings
3. Add the provided DNS records:
   - Usually an A record pointing to their IP
   - Or a CNAME record pointing to their URL

**Example DNS Records (Netlify):**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Step 3: Wait for Propagation
DNS changes can take 1-48 hours to propagate globally.

---

## SSL/HTTPS Setup

### Free SSL (Recommended)

Most modern hosting platforms provide free SSL:
- **Netlify**: Automatic HTTPS (Let's Encrypt)
- **Vercel**: Automatic HTTPS
- **GitHub Pages**: Automatic HTTPS
- **cPanel**: Use "Let's Encrypt" in SSL/TLS section

### Manual SSL Setup (cPanel)
1. Go to cPanel → SSL/TLS
2. Click "Let's Encrypt SSL"
3. Select your domain
4. Click "Issue"

---

## Performance Optimization

### Before Deploying

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com)
   - Target sizes: Hero image < 500KB, others < 300KB

2. **Minify CSS/JS** (Optional)
   - Use [CSS Minifier](https://cssminifier.com)
   - Use [JavaScript Minifier](https://javascript-minifier.com)

3. **Enable Caching**
   - Most platforms do this automatically
   - For cPanel, add to `.htaccess`:
     ```apache
     <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
     </IfModule>
     ```

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Navigation works on all devices
- [ ] Contact form functions (if connected to backend)
- [ ] All sections scroll smoothly
- [ ] Mobile menu works
- [ ] Gallery slider functions
- [ ] Statistics counters animate
- [ ] HTTPS is enabled (padlock in browser)
- [ ] Website loads quickly (under 3 seconds)

---

## Testing Tools

Use these tools to test your live website:

1. **Mobile Responsiveness**
   - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

2. **Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)

3. **SEO**
   - [Google Search Console](https://search.google.com/search-console)

4. **Cross-Browser Testing**
   - [BrowserStack](https://www.browserstack.com)
   - Test on Chrome, Firefox, Safari, Edge

---

## Updating Your Live Site

### Netlify/Vercel
- Simply drag and drop your updated folder again
- Or connect to Git for automatic deployments

### GitHub Pages
```bash
git add .
git commit -m "Update content"
git push
```

### cPanel/FTP
- Upload only the changed files
- Or upload everything to replace all files

---

## Troubleshooting

### Site Not Loading
- Check DNS settings are correct
- Wait for DNS propagation (up to 48 hours)
- Verify index.html is in the root directory

### Images Not Showing
- Check image paths are relative, not absolute
- Verify images/ folder uploaded correctly
- Check file permissions (should be 644 for files, 755 for folders)

### Styles Not Applied
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check css/ folder uploaded correctly
- Verify CSS file paths in index.html

### JavaScript Not Working
- Check browser console for errors (F12)
- Verify js/ folder uploaded correctly
- Check Swiper CDN is accessible

---

## Maintenance

### Regular Tasks
- Update images as project progresses
- Update statistics/counters
- Check for broken links monthly
- Monitor website performance
- Keep backups of your files

### Security
- Keep hosting platform updated
- Use strong passwords
- Enable two-factor authentication
- Regular backups (weekly recommended)

---

## Cost Estimates

### Free Options
- Netlify: Free (100GB bandwidth/month)
- Vercel: Free (100GB bandwidth/month)
- GitHub Pages: Free (1GB storage, 100GB bandwidth/month)

### Paid Hosting
- Shared Hosting: $3-10/month
- VPS: $5-20/month
- Premium CDN: $20-100/month

### Domain
- .com domain: $10-15/year
- .net/.org: $10-15/year
- Country TLDs: Varies

---

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com
- **Web.dev**: https://web.dev (Performance tips)

---

## Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review your hosting platform's documentation
3. Check browser console for error messages
4. Verify all files uploaded correctly

---

**Congratulations on deploying your real estate website!** 🎉

Your site is now live and accessible to the world. Share your URL with potential clients and showcase your amazing project!
