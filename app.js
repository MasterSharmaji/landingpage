function generateLandingPage() {
    // 1. Get all form values
    const data = {
        profName: document.getElementById('profName').value,
        headline: document.getElementById('headline').value,
        subHeadline: document.getElementById('subHeadline').value,
        primaryCtaText: document.getElementById('primaryCtaText').value,
        bio: document.getElementById('bio').value,
        service1Title: document.getElementById('service1Title').value,
        service1Desc: document.getElementById('service1Desc').value,
        service2Title: document.getElementById('service2Title').value,
        service2Desc: document.getElementById('service2Desc').value,
        service3Title: document.getElementById('service3Title').value,
        service3Desc: document.getElementById('service3Desc').value,
        quote: document.getElementById('quote').value,
        cite: document.getElementById('cite').value,
    };

    // 2. Load the base HTML structure (from your original template)
    // NOTE: In a real system, you'd load the "index.html" content dynamically.
    // For this example, we build the structure string and inject the data.
    const baseTemplateHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.profName} | Landing Page</title>
            <style>
                /* Insert your complete style.css content here */
                ${document.querySelector('style').textContent}
            </style>
            <style>
                /* Adjustments for the iframe preview */
                body { padding-top: 0 !important; }
                .hero-section { padding-top: 60px; }
            </style>
        </head>
        <body>
            <header class="sticky-nav">
                <div class="logo">${data.profName}</div>
                <nav>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact" class="cta-button primary-cta">${data.primaryCtaText}</a>
                </nav>
            </header>

            <section id="hero" class="hero-section">
                <div class="hero-content">
                    <h1>${data.headline}</h1>
                    <p class="sub-headline">${data.subHeadline}</p>
                    <a href="#contact" class="cta-button primary-cta large">${data.primaryCtaText}</a>
                    <a href="#" class="cta-button secondary-cta">Download Free Guide</a>
                </div>
                <div class="hero-image-placeholder">Professional Image Here</div>
            </section>

            <section id="problem-solution" class="section dark-bg">
                <h2>We Understand Your Challenge.</h2>
                <div class="split-content">
                    <div class="pain-point">
                        <h3>The Frustration:</h3>
                        <ul>
                            <li>Struggling to find clarity?</li>
                            <li>Feeling uncertain about the next step?</li>
                            <li>Wasting time on generic advice?</li>
                        </ul>
                    </div>
                    <div class="solution">
                        <h3>The Clarity Compass Solution:</h3>
                        <p>Our proven, step-by-step method cuts through the noise to deliver **clear, personalized results** faster and more reliably than traditional approaches.</p>
                    </div>
                </div>
            </section>

            <section id="services" class="section">
                <h2>Our Approach</h2>
                <div class="service-cards">
                    <div class="card">
                        <div class="icon-placeholder"></div>
                        <h3>${data.service1Title}</h3>
                        <p>${data.service1Desc}</p>
                    </div>
                    <div class="card">
                        <div class="icon-placeholder"></div>
                        <h3>${data.service2Title}</h3>
                        <p>${data.service2Desc}</p>
                    </div>
                    <div class="card">
                        <div class="icon-placeholder"></div>
                        <h3>${data.service3Title}</h3>
                        <p>${data.service3Desc}</p>
                    </div>
                </div>
            </section>

            <section id="testimonials" class="section dark-bg">
                <h2>Client Success Stories</h2>
                <div class="testimonial-slider">
                    <div class="testimonial-item">
                        <p>"${data.quote}"</p>
                        <cite>- ${data.cite}</cite>
                    </div>
                </div>
                <div class="authority-logos">
                    <span>As Featured In:</span>
                    <div class="logo-placeholder"></div>
                    <div class="logo-placeholder"></div>
                    <div class="logo-placeholder"></div>
                </div>
            </section>

            <section id="about" class="section" >
                <div class="split-content about-me-content">
                    <div class="image-container">
                        <div class="profile-image-placeholder"></div>
                    </div>
                    <div class="bio-content">
                        <h2>Meet ${data.profName}</h2>
                        <p class="lead-bio">${data.bio}</p>
                        <ul>
                            <li>✅ 15+ Years Experience</li>
                            <li>✅ Certified in [Your Niche]</li>
                            <li>✅ 500+ Clients Served</li>
                        </ul>
                        <a href="#contact" class="cta-button secondary-cta">View Credentials</a>
                    </div>
                </div>
            </section>

            <section id="contact" class="final-cta-block">
                <h2>Ready to Finally Achieve ${data.headline.split('.')[0]}?</h2>
                <p>Book your no-obligation discovery call today and start the path to clarity.</p>
                <a href="#" class="cta-button primary-cta large">${data.primaryCtaText} Now</a>
            </section>

            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Sitemap</a>
                    </div>
                    <div class="social-links">
                        <div class="social-icon">F</div>
                        <div class="social-icon">L</div>
                        <div class="social-icon">I</div>
                    </div>
                    <p>&copy; 2024 ${data.profName}. All rights reserved.</p>
                </div>
            </footer>
        </body>
        </html>
    `;

    // 3. Display the generated HTML in the iframe for preview
    const iframe = document.getElementById('landingPagePreview');
    iframe.style.display = 'block'; // Show the preview
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(baseTemplateHTML);
    iframe.contentWindow.document.close();
}
