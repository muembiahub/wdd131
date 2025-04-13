// Add a logo to the site based on the site plan ID
function addLogo(sitePlanId) {
    const logoContainer = document.createElement('hover');
    
    // Add a class for styling
    

    const logo = document.createElement('img');
    logo.src = `https://th.bing.com/th/id/OIP.dvfk2Jb7inTWTNdzxV9T0AAAAA?rs=1&pid=ImgDetMain${sitePlanId}.png`; // Assuming logos are stored in this path
    logo.width = 100; // Set the width of the logo
    logo.alt = 'Site Logo';
    logo.id = 'site-logo';

    logoContainer.appendChild(logo);
    document.body.prepend(logoContainer); // Add the logo container to the top of the body
}

// Example usage
const sitePlanId = 'logo'; // Replace with actual site plan ID
addLogo(sitePlanId);

// Add a footer to the site with a copyright notice
function addCopyright() {
    const footerbutton = document.createElement('footer-button');
    footerbutton.className = 'footer-button'; // Add a class for styling

    const copyrightNotice = document.createElement('div');
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);
    const siteName = document.title; // Get the site name from the title
    const lastModifiedDate = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Set the copyright notice text
  
    copyrightNotice.innerHTML = `
        <p>© ${currentYear} Jonathan M. Muembia. All rights reserved.</p>
        <p>Built with HTML, CSS, and JavaScript.</p>
        <p>This site ${siteName} is not affiliated with The Church of Jesus Christ of Latter-day Saints. The information provided is for educational purposes only.</p>
        <p>The images and content are the property of their respective owners. For more information, please visit the official website of The Church of Jesus Christ of Latter-day Saints.</p>
        <p>This site is not an official site of The Church of Jesus Christ of Latter-day Saints. The information provided is for educational purposes only.</p>
        <p>The images and content are the property of their respective owners. For more information, please visit the official website of The Church of Jesus Christ of Latter-day Saints.</p>
        <p>This site was last modified on ${lastModifiedDate}.</p>
    `;
    footerbutton.appendChild(copyrightNotice); // Append the copyright notice to the footer button
    footerbutton.appendChild(copyrightNotice); // Append the copyright notice to the footer button
y
}
