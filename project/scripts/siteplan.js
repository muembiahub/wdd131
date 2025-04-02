// Add a logo to the site based on the site plan ID
function addLogo(sitePlanId) {
    const logoContainer = document.createElement('nav');
    logoContainer.id = 'logo';

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