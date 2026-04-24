const components = {
    getHeader: (activePage = 'home') => `
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-info">
                    <span><i class="fas fa-envelope"></i> export@royalricemills.com</span>
                    <span><i class="fas fa-map-marker-alt"></i> Port Qasim, Karachi, Pakistan</span>
                </div>
                <div class="top-bar-social">
                    <a href="https://wa.me/923443004914"><i class="fab fa-whatsapp"></i> +92 344 3004914</a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <nav class="main-nav">
            <div class="container nav-container">
                <div class="logo">
                    <a href="index.html"><h1>Royal<span>Rice</span></h1></a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About</a></li>
                    <li><a href="products.html" class="${activePage === 'products' ? 'active' : ''}">Products</a></li>
                    <li><a href="quality.html" class="${activePage === 'quality' ? 'active' : ''}">Quality</a></li>
                    <li><a href="services.html" class="${activePage === 'services' ? 'active' : ''}">Services</a></li>
                    <li><a href="blog.html" class="${activePage === 'blog' ? 'active' : ''}">Blog</a></li>
                    <li><a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
                </ul>
                <div class="nav-actions">
                    <a href="quote.html" class="btn btn-gold">Get Quote</a>
                    <a href="https://wa.me/923443004914" class="btn btn-outline-green"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>
                </div>
            </div>
        </nav>
    `,

    getFooter: () => `
        <footer class="footer section" style="background: var(--primary-color); color: white; padding-top: 80px;">
            <div class="container">
                <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 60px;">
                    <div class="footer-col">
                        <h3 style="color: var(--secondary-color); margin-bottom: 20px;">Royal Rice Mills</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">Premium quality rice exporter from Pakistan, serving global markets with excellence and trust since 2002.</p>
                        <div class="social-links" style="display: flex; gap: 15px;">
                            <a href="#" style="background: rgba(255,255,255,0.1); width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" style="background: rgba(255,255,255,0.1); width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" style="background: rgba(255,255,255,0.1); width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%;"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4 style="margin-bottom: 20px;">Quick Links</h4>
                        <ul style="opacity: 0.8;">
                            <li style="margin-bottom: 10px;"><a href="about.html">About Us</a></li>
                            <li style="margin-bottom: 10px;"><a href="products.html">Our Products</a></li>
                            <li style="margin-bottom: 10px;"><a href="quality.html">Quality Standards</a></li>
                            <li style="margin-bottom: 10px;"><a href="shipping.html">Export & Shipping</a></li>
                            <li style="margin-bottom: 10px;"><a href="quote.html">Request Quote</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 style="margin-bottom: 20px;">Our Products</h4>
                        <ul style="opacity: 0.8;">
                            <li style="margin-bottom: 10px;"><a href="product-details.html?id=super-kernel-basmati">Super Kernel Basmati</a></li>
                            <li style="margin-bottom: 10px;"><a href="product-details.html?id=basmati-sella">Basmati Sella Rice</a></li>
                            <li style="margin-bottom: 10px;"><a href="product-details.html?id=1121-basmati">1121 Basmati Rice</a></li>
                            <li style="margin-bottom: 10px;"><a href="product-details.html?id=irri-6">IRRI-6 Long Grain</a></li>
                            <li style="margin-bottom: 10px;"><a href="product-details.html?id=brown-rice">Natural Brown Rice</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 style="margin-bottom: 20px;">Contact Info</h4>
                        <ul style="opacity: 0.8;">
                            <li style="margin-bottom: 10px;"><i class="fas fa-phone"></i> +92 21 3456789</li>
                            <li style="margin-bottom: 10px;"><i class="fab fa-whatsapp"></i> +92 344 3004914</li>
                            <li style="margin-bottom: 10px;"><i class="fas fa-envelope"></i> info@royalricemills.com</li>
                            <li style="margin-bottom: 10px;"><i class="fas fa-map-marker-alt"></i> Plot 45, Sector 15, Korangi Industrial Area, Karachi.</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom" style="padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; opacity: 0.7; font-size: 0.9rem;">
                    <p>&copy; 2026 Royal Rice Mills. All Rights Reserved.</p>
                    <div class="payment-icons" style="display: flex; gap: 15px; font-size: 1.5rem;">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fas fa-university"></i>
                    </div>
                </div>
            </div>
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        const activePage = headerPlaceholder.getAttribute('data-active');
        headerPlaceholder.innerHTML = components.getHeader(activePage);
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = components.getFooter();
    }

    // Scroll effect for Navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
