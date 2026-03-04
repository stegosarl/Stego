/**
 * Website Configuration Example
 * Copy this file to config.js and customize with your project details
 * This makes it easy to update content without editing HTML
 */

const SiteConfig = {
    // Project Information
    project: {
        name: "PROJECT",
        nameAccent: "NAME",
        tagline: "Modern Living Redefined",
        description: "Experience exceptional architecture, innovative design, and sustainable living in our premium real estate project"
    },

    // Contact Information
    contact: {
        address: {
            line1: "123 Project Avenue, City Center",
            line2: "Postal Code, Country"
        },
        phones: [
            "+1 (234) 567-8900",
            "+1 (234) 567-8901"
        ],
        emails: [
            "info@project.com",
            "sales@project.com"
        ]
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/yourproject",
        instagram: "https://instagram.com/yourproject",
        linkedin: "https://linkedin.com/company/yourproject",
        twitter: "https://twitter.com/yourproject"
    },

    // Brand Colors (will override CSS variables)
    colors: {
        primary: "#921914",      // Main brand color
        primaryDark: "#6b0f0c",
        primaryLight: "#b52920",
        secondary: "#A79D84",    // Secondary accent
        accent: "#6EC1E4"        // Highlight color
    },

    // Statistics/Counters
    stats: {
        completion: 95,           // Percentage
        units: 150,              // Number of residential units
        amenities: 12,           // Number of amenities
        squareMeters: 5000       // Total area
    },

    // Gallery Images
    gallery: [
        {
            src: "images/gallery-1.jpg",
            title: "Exterior View",
            description: "Modern facade design"
        },
        {
            src: "images/gallery-2.jpg",
            title: "Interior Spaces",
            description: "Luxurious living areas"
        },
        {
            src: "images/gallery-3.jpg",
            title: "Amenities",
            description: "World-class facilities"
        },
        {
            src: "images/gallery-4.jpg",
            title: "Landscaping",
            description: "Beautiful outdoor spaces"
        },
        {
            src: "images/gallery-5.jpg",
            title: "Night View",
            description: "Stunning evening ambiance"
        }
    ],

    // Activities/Services
    activities: [
        {
            image: "images/activity-1.jpg",
            title: "Residential Development",
            description: "Premium apartments and penthouses designed for contemporary living with state-of-the-art amenities."
        },
        {
            image: "images/activity-2.jpg",
            title: "Commercial Spaces",
            description: "Flexible retail and office spaces strategically positioned for business success."
        },
        {
            image: "images/activity-3.jpg",
            title: "Property Management",
            description: "Comprehensive management services ensuring seamless operations and resident satisfaction."
        }
    ],

    // Features
    features: [
        {
            title: "Modern Architecture",
            description: "Contemporary design with timeless elegance"
        },
        {
            title: "Smart Home Technology",
            description: "Integrated systems for modern convenience"
        },
        {
            title: "Premium Materials",
            description: "Finest quality construction and finishes"
        },
        {
            title: "Wellness Facilities",
            description: "Spa, gym, and recreational areas"
        },
        {
            title: "24/7 Security",
            description: "Advanced security systems and personnel"
        },
        {
            title: "Prime Location",
            description: "Strategic access to key city amenities"
        }
    ],

    // About Highlights
    aboutHighlights: [
        {
            title: "Premium Quality",
            description: "Only the finest materials and craftsmanship"
        },
        {
            title: "Sustainable Design",
            description: "Environmentally conscious and energy efficient"
        },
        {
            title: "Prime Location",
            description: "Strategic positioning for modern lifestyle"
        }
    ],

    // Vision Points
    visionPoints: [
        {
            title: "Innovative Architecture",
            description: "Cutting-edge design that pushes boundaries"
        },
        {
            title: "Community Focus",
            description: "Spaces designed to bring people together"
        },
        {
            title: "Environmental Responsibility",
            description: "Green building practices and sustainable materials"
        }
    ],

    // SEO Settings
    seo: {
        title: "Real Estate Project - Modern Living Redefined",
        description: "Discover our premium real estate project featuring modern architecture, sustainable design, and exceptional living spaces.",
        keywords: ["real estate", "luxury apartments", "modern architecture", "sustainable living"]
    }
};

// Apply configuration on page load
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SiteConfig !== 'undefined') {
        applyConfiguration(SiteConfig);
    }
});

// Function to apply configuration
function applyConfiguration(config) {
    // Update project name
    if (config.project) {
        const logoElements = document.querySelectorAll('.logo h2');
        logoElements.forEach(el => {
            el.innerHTML = `${config.project.name}<span>${config.project.nameAccent}</span>`;
        });
    }

    // Update statistics
    if (config.stats) {
        const statElements = document.querySelectorAll('.stat-number[data-count]');
        if (statElements[0]) statElements[0].setAttribute('data-count', config.stats.completion);
        if (statElements[1]) statElements[1].setAttribute('data-count', config.stats.units);
        if (statElements[2]) statElements[2].setAttribute('data-count', config.stats.amenities);
        if (statElements[3]) statElements[3].setAttribute('data-count', config.stats.squareMeters);
    }

    // Update colors
    if (config.colors) {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', config.colors.primary);
        root.style.setProperty('--primary-dark', config.colors.primaryDark);
        root.style.setProperty('--primary-light', config.colors.primaryLight);
        root.style.setProperty('--secondary-color', config.colors.secondary);
        root.style.setProperty('--accent-color', config.colors.accent);
    }

    // Update gallery images (if RealEstateProject API is available)
    if (config.gallery && typeof RealEstateProject !== 'undefined') {
        RealEstateProject.updateGalleryImages(config.gallery);
    }

    // Update activities (if RealEstateProject API is available)
    if (config.activities && typeof RealEstateProject !== 'undefined') {
        RealEstateProject.updateActivityImages(config.activities);
    }

    // Update contact information
    if (config.contact) {
        // Update address
        const addressElements = document.querySelectorAll('.contact-detail p');
        if (addressElements[0]) {
            addressElements[0].innerHTML = `${config.contact.address.line1}<br>${config.contact.address.line2}`;
        }

        // Update phones
        if (addressElements[1]) {
            addressElements[1].innerHTML = config.contact.phones.join('<br>');
        }

        // Update emails
        if (addressElements[2]) {
            addressElements[2].innerHTML = config.contact.emails.join('<br>');
        }
    }

    // Update social links
    if (config.social) {
        const socialLinks = document.querySelectorAll('.social-links a');
        if (socialLinks[0]) socialLinks[0].href = config.social.facebook;
        if (socialLinks[1]) socialLinks[1].href = config.social.instagram;
        if (socialLinks[2]) socialLinks[2].href = config.social.linkedin;
    }

    // Update SEO meta tags
    if (config.seo) {
        document.title = config.seo.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', config.seo.description);
        }
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SiteConfig;
}
