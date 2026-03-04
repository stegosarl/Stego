# Quick Start Guide

Get your real estate website up and running in 5 minutes!

## Step 1: Add Your Images

Place these 13 images in the `images/` folder:

```
images/
├── hero-bg.jpg        (1920x1080px)
├── about-1.jpg        (800x600px)
├── vision-1.jpg       (800x600px)
├── gallery-1.jpg      (1200x800px)
├── gallery-2.jpg      (1200x800px)
├── gallery-3.jpg      (1200x800px)
├── gallery-4.jpg      (1200x800px)
├── gallery-5.jpg      (1200x800px)
├── activity-1.jpg     (800x600px)
├── activity-2.jpg     (800x600px)
└── activity-3.jpg     (800x600px)
```

**Don't have images yet?** Download free placeholder images from:
- [Unsplash](https://unsplash.com/s/photos/real-estate)
- [Pexels](https://www.pexels.com/search/architecture/)

## Step 2: Customize Your Content

### 2.1 Update Project Name
In `index.html`, find and replace:
```html
<h2>PROJECT<span>NAME</span></h2>
```
With your actual project name.

### 2.2 Update Contact Information
Search for these sections in `index.html` and update:
- Address
- Phone numbers
- Email addresses

### 2.3 Change Brand Colors (Optional)
In `css/styles.css`, find the `:root` section and change:
```css
--primary-color: #921914;    /* Your brand color */
--secondary-color: #A79D84;  /* Your accent color */
```

## Step 3: Open the Website

### Option A: Direct Open
Simply double-click `index.html`

### Option B: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Step 4: Test Responsiveness

Open your browser's Developer Tools:
- **Chrome/Edge**: Press F12
- **Firefox**: Press F12
- **Safari**: Press Cmd+Option+I

Click the device toolbar icon to test mobile/tablet views.

## Common Customizations

### Change Statistics Numbers
```html
<!-- In index.html, find: -->
<div class="stat-number" data-count="95">0</div>
<!-- Change "95" to your desired number -->
```

### Add More Gallery Images
1. Add image to `images/` folder (e.g., `gallery-6.jpg`)
2. In `index.html`, duplicate a gallery slide:
```html
<div class="swiper-slide">
    <div class="gallery-item">
        <img src="images/gallery-6.jpg" alt="Gallery Image 6">
        <div class="gallery-overlay">
            <h3>Your Title</h3>
            <p>Your Description</p>
        </div>
    </div>
</div>
```

### Update Text Content
All text content is in `index.html`. Simply search and replace:
- Hero title and description
- About section content
- Feature descriptions
- Footer text

## Need More Help?

See the detailed [README.md](README.md) for:
- Complete customization guide
- JavaScript API reference
- Troubleshooting tips
- Advanced features

## Checklist

- [ ] Added all 13 images to `images/` folder
- [ ] Updated project name in navigation
- [ ] Updated contact information
- [ ] Changed text content to match your project
- [ ] Tested on desktop browser
- [ ] Tested on mobile view
- [ ] Customized colors (optional)
- [ ] Updated statistics/numbers

## What's Included?

✅ Responsive design for all devices
✅ Smooth scroll animations
✅ Interactive image gallery
✅ Animated statistics counters
✅ Contact form with validation
✅ Mobile-friendly navigation
✅ SEO-optimized structure
✅ Performance optimized
✅ No build process needed!

---

**Ready to Go Live?**

To deploy your website:
1. Upload all files to your web hosting
2. Ensure the folder structure is maintained
3. Your website will be live at your domain!

Popular hosting options:
- Netlify (Free, drag-and-drop)
- Vercel (Free, git integration)
- GitHub Pages (Free, requires git)
- Traditional web hosting (cPanel, etc.)

Enjoy your new real estate website! 🏢✨
