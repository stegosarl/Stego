# Real Estate Project Website

A modern, visually attractive website designed to present real estate projects with smooth animations, responsive design, and dynamic image galleries. Inspired by sophisticated corporate design patterns, this website offers an immersive user experience that highlights architecture, progress, and key features.

## Features

### Design & User Experience
- **Modern Architecture**: Clean, contemporary design with elegant typography
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Parallax Effects**: Engaging parallax scrolling on hero sections
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Hover effects, animated counters, and dynamic galleries

### Technical Features
- **Dynamic Image Gallery**: Easy-to-update Swiper-based carousel
- **Scroll Animations**: Intersection Observer API for performant animations
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Contact Form**: Validated form with notification system
- **SEO Optimized**: Semantic HTML5 structure
- **Performance**: Optimized loading and smooth 60fps animations

### Sections
1. **Hero Section**: Full-screen banner with parallax effect
2. **About Section**: Project overview with highlights
3. **Vision Section**: Mission and values presentation
4. **Features**: Key amenities and services
5. **Gallery**: Dynamic image carousel
6. **Progress/Stats**: Animated counters and progress bars
7. **Activities**: Service offerings
8. **Contact**: Contact information and form
9. **Footer**: Site links and newsletter signup

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for testing)

### Quick Start

1. **Download/Clone the Project**
   ```bash
   # If using git
   git clone [repository-url]
   cd STEGO
   ```

2. **Open the Website**
   - **Option 1**: Double-click `index.html` to open in your default browser
   - **Option 2**: Use a local web server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```
     Then navigate to `http://localhost:8000`

3. **View the Website**
   The website will load with placeholder images. Follow the customization guide below to add your own content.

## Project Structure

```
STEGO/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── main.js         # JavaScript functionality and animations
├── images/             # Image assets folder
│   ├── hero-bg.jpg     # Hero section background
│   ├── about-1.jpg     # About section image
│   ├── vision-1.jpg    # Vision section image
│   ├── gallery-1.jpg   # Gallery images
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   ├── activity-1.jpg  # Activity section images
│   ├── activity-2.jpg
│   └── activity-3.jpg
└── README.md           # This file
```

## Customization Guide

### 1. Updating Images

#### Method 1: Replace Image Files (Easiest)
Simply replace the placeholder images in the `images/` folder with your own images, keeping the same filenames:

- `hero-bg.jpg` - Hero background (recommended: 1920x1080px)
- `about-1.jpg` - About section (recommended: 800x600px)
- `vision-1.jpg` - Vision section (recommended: 800x600px)
- `gallery-1.jpg` through `gallery-5.jpg` - Gallery images (recommended: 1200x800px)
- `activity-1.jpg` through `activity-3.jpg` - Activity images (recommended: 800x600px)

#### Method 2: Update Image Paths in HTML
Open `index.html` and find the image tags to update the `src` attributes:

```html
<!-- Example: Update hero background -->
<img src="images/your-new-hero.jpg" alt="Modern Architecture" class="hero-image">
```

#### Method 3: Dynamic JavaScript Updates
Use the provided JavaScript API to update images programmatically:

```javascript
// Update gallery images dynamically
RealEstateProject.updateGalleryImages([
    {
        src: 'images/new-gallery-1.jpg',
        title: 'Exterior View',
        description: 'Modern facade design'
    },
    {
        src: 'images/new-gallery-2.jpg',
        title: 'Interior Spaces',
        description: 'Luxurious living areas'
    }
    // Add more images as needed
]);

// Update activity images
RealEstateProject.updateActivityImages([
    {
        image: 'images/new-activity-1.jpg',
        title: 'Residential Development',
        description: 'Premium apartments and penthouses...'
    }
]);

// Update specific section image
RealEstateProject.updateSectionImage('about', 'images/new-about.jpg');
```

### 2. Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #921914;      /* Main brand color */
    --secondary-color: #A79D84;    /* Secondary accent */
    --accent-color: #6EC1E4;       /* Highlight color */
    /* Change these values to your brand colors */
}
```

### 3. Updating Text Content

Open `index.html` and search for the text you want to change. Key sections to customize:

- **Logo/Project Name**: Search for `PROJECT<span>NAME</span>`
- **Hero Section**: Update title, subtitle, and description
- **About Section**: Update "Our Story" and highlights
- **Contact Info**: Update address, phone, and email

### 4. Customizing Fonts

The website uses Google Fonts (Rubik and Roboto). To change fonts:

1. Update the font import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

2. Update the CSS variables in `css/styles.css`:
```css
:root {
    --font-heading: 'YourHeadingFont', sans-serif;
    --font-body: 'YourBodyFont', sans-serif;
}
```

### 5. Adding/Removing Sections

To add a new section:
```html
<section id="new-section" class="section-padding">
    <div class="container">
        <div class="section-header text-center animate-on-scroll" data-animation="fade-up">
            <span class="section-label">Section Label</span>
            <h2 class="section-title">Section Title</h2>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

Remember to add the navigation link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### 6. Modifying Gallery

#### Change Number of Slides
Edit the Swiper configuration in `js/main.js`:

```javascript
breakpoints: {
    640: {
        slidesPerView: 1,  // Mobile
    },
    768: {
        slidesPerView: 2,  // Tablet
    },
    1024: {
        slidesPerView: 3,  // Desktop - change this number
    },
}
```

#### Add More Gallery Images
In `index.html`, add more slides within `.swiper-wrapper`:

```html
<div class="swiper-slide">
    <div class="gallery-item">
        <img src="images/gallery-6.jpg" alt="Gallery Image 6">
        <div class="gallery-overlay">
            <h3>New Image</h3>
            <p>Description</p>
        </div>
    </div>
</div>
```

### 7. Updating Statistics

Change the numbers in the Progress section:

```html
<div class="stat-number" data-count="95">0</div>
```

Change `data-count` to your desired number. The animation will count up to this value.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### External Libraries
- **Swiper.js v11**: Image carousel functionality
  - Loaded via CDN: `https://cdn.jsdelivr.net/npm/swiper@11/`
- **Google Fonts**: Typography (Rubik, Roboto)

### No Build Process Required
This website uses vanilla HTML, CSS, and JavaScript - no build tools or package managers needed!

## Performance Optimization

### Best Practices Implemented
- Intersection Observer for scroll animations (no scroll event listeners)
- CSS transitions using GPU acceleration
- Optimized image loading
- Minimal external dependencies
- Efficient DOM manipulation

### Optimization Tips
1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Image Formats**: Consider WebP format for better compression
3. **Lazy Loading**: Already implemented via Intersection Observer
4. **Caching**: Configure server to cache static assets

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text on all images
- Color contrast compliance

## Contact Form Integration

The contact form currently shows success notifications. To integrate with a backend:

### Option 1: Email Service (EmailJS)
```javascript
// In js/main.js, replace the setTimeout in initContactForm with:
emailjs.send("service_id", "template_id", data)
    .then(() => {
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    })
    .catch(() => {
        showNotification('Failed to send message.', 'error');
    });
```

### Option 2: Custom Backend API
```javascript
fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
})
.catch(error => {
    showNotification('Failed to send message.', 'error');
});
```

## JavaScript API Reference

### Global Functions Available

```javascript
// Update gallery images
RealEstateProject.updateGalleryImages(imagesArray);

// Update activity images
RealEstateProject.updateActivityImages(activitiesArray);

// Update section image
RealEstateProject.updateSectionImage(sectionId, imagePath);

// Show notification
RealEstateProject.showNotification(message, type); // type: 'success', 'error', 'info'
```

## Troubleshooting

### Images Not Loading
- Check that image paths are correct
- Ensure images are in the `images/` folder
- Verify file extensions match (jpg, png, etc.)

### Animations Not Working
- Check browser console for JavaScript errors
- Ensure Swiper.js CDN is loading correctly
- Verify scroll position triggers animations

### Mobile Menu Not Working
- Clear browser cache
- Check JavaScript console for errors
- Ensure nav elements have correct IDs

### Form Not Submitting
- Open browser console to check for errors
- Verify form validation is passing
- Check that all required fields are filled

## Customization Examples

### Example 1: Change Primary Color to Blue
```css
/* In css/styles.css */
:root {
    --primary-color: #1e40af;  /* Blue */
    --primary-dark: #1e3a8a;
    --primary-light: #3b82f6;
}
```

### Example 2: Add a New Feature Card
```html
<!-- In index.html, within .features-grid -->
<div class="feature-card animate-on-scroll" data-animation="fade-up" data-delay="600">
    <div class="feature-front">
        <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <!-- Add your icon SVG path here -->
            </svg>
        </div>
        <h3>Your Feature Title</h3>
        <p>Your feature description</p>
    </div>
</div>
```

### Example 3: Change Hero Background Video Instead of Image
```html
<!-- Replace hero-background content -->
<div class="hero-background">
    <div class="hero-overlay"></div>
    <video autoplay muted loop class="hero-video">
        <source src="videos/hero-bg.mp4" type="video/mp4">
    </video>
</div>
```

```css
/* Add to styles.css */
.hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Credits

- **Design Inspiration**: TGCC.ma
- **Carousel**: Swiper.js
- **Fonts**: Google Fonts (Rubik, Roboto)
- **Icons**: Custom SVG icons

## License

This project is provided as-is for use in your real estate projects. Feel free to customize and adapt it to your needs.

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure all files are in the correct directories
4. Verify that external CDN resources are loading

## Future Enhancements

Potential features to add:
- [ ] Multi-language support
- [ ] Virtual tour integration
- [ ] Property filtering system
- [ ] Interactive floor plans
- [ ] Video backgrounds
- [ ] Blog/News section
- [ ] Property comparison tool
- [ ] Mortgage calculator

---

**Version**: 1.0.0
**Last Updated**: 2024
**Built with**: HTML5, CSS3, JavaScript (ES6+)
