// Function to generate the complete landing page HTML from form data
function generateLandingPage() {
    // 1. Get all form values
    const data = {
        profName: document.getElementById('profName').value,
        headline: document.getElementById('headline').value,
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

    // 2. The Complete Landing Page HTML Template String (Final Output)
    const finalLandingPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.profName} | Landing Page</title>
    <link rel="stylesheet" href="style.css"> 
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

    <section id="hero" class="hero-section section">
        <div class="hero-content">
            <h1>${data.headline}</h1>
            <a href="#contact" class="cta-button primary-cta large">${data.primaryCtaText}</a>
        </div>
        <div class="hero-image-placeholder">Image Placeholder (Replace this div with an img tag)</div>
    </section>

    <section id="problem-solution" class="section dark-bg">
        <h2>We Understand Your Challenge.</h2>
        <div class="split-content">
            <div class="pain-point">
                <h3>The Frustration:</h3>
                <ul>
                    <li>Struggling to find clarity?</li>
                    <li>Feeling uncertain about the next step?</li>
                </ul>
            </div>
            <div class="solution">
                <h3>The Clarity Compass Solution:</h3>
                <p>Our proven, step-by-step method cuts through the noise to deliver **clear, personalized results** faster and more reliably.</p>
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
            <span>As Seen In:</span>
            <div class="logo-placeholder"></div>
        </div>
    </section>

    <section id="about" class="section" >
        <div class="split-content about-me-content">
            <div class="bio-content">
                <h2>Meet ${data.profName}</h2>
                <p class="lead-bio">${data.bio}</p>
            </div>
        </div>
    </section>

    <section id="contact" class="final-cta-block dark-bg">
        <h2>Ready to take the next step?</h2>
        <p>Book your no-obligation discovery call today and start the path to clarity.</p>
        <a href="#" class="cta-button primary-cta large">${data.primaryCtaText} Now</a>
    </section>

    <footer>
        <p>&copy; 2024 ${data.profName}. All rights reserved.</p>
    </footer>

</body>
</html>
    `;

    // 3. Display the generated HTML in the iframe for live preview
    const iframe = document.getElementById('landingPagePreview');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(finalLandingPageHTML);
    iframe.contentWindow.document.close();

    // 4. Publish Step: Display the HTML source code in the textarea
    const finalHtmlOutput = document.getElementById('finalHtmlOutput');
    finalHtmlOutput.value = finalLandingPageHTML; 
}


// Function to copy the code easily to the clipboard
function copyHtmlCode() {
    const finalHtmlOutput = document.getElementById('finalHtmlOutput');
    
    finalHtmlOutput.select(); 
    finalHtmlOutput.setSelectionRange(0, 99999);

    document.execCommand('copy'); 
    
    alert('Final HTML Code copied to clipboard! Paste it into a file named index.html in your deployment subdirectory (alongside style.css).');
}
