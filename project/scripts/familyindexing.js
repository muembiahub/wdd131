



// Add a logo to the site based on the site plan ID
function addLogo(sitePlanId) {
    const logoContainer = document.createElement('hover');
    
    // Add a class for styling
    logoContainer.className = 'logo-container';

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

// Add a hover effect to the logo
const logo = document.getElementById('site-logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)'; // Scale up the logo on hover
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)'; // Scale back to original size when not hovering
});



// add copywrite to the footer and link to  personal social media website
const footer = document.querySelector('footer');
const copywrite = document.createElement('p');
const currentyear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.appendChild(copywrite);
copywrite.innerHTML = `&copy; ${currentyear} this site is not affiliated with the Church of Jesus Christ of Latter-day Saints.
<br>All images and content are property of the Church of Jesus Christ of Latter-day Saints.
- All rights reserved.
<br>Created by <a href="https://www.linkedin.com/in/your-profile" target="_blank">Jonathan M. Meumbia</a>.
<br>Site plan ID: ${sitePlanId}
<br>Last modified: ${lastModified}
<br>For more information, visit <a href="https://www.churchofjesuschrist.org/?lang=eng" target="_blank">churchofjesuschrist.org</a>.
<br>For more information about the Church of Jesus Christ of Latter-day Saints, visit <a href="https://www.churchofjesuschrist.org/?lang=eng" target="_blank">churchofjesuschrist.org</a>.
<br>Follow me on <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a>.`;
copywrite.style.textAlign = 'center';
copywrite.style.fontSize = '0.8em';

// Ensure footer styles are consistent for mobile and desktop views
footer.style.padding = '20px';
footer.style.backgroundColor = '#f9f9f9';
footer.style.borderTop = '1px solid #ddd';
footer.style.marginTop = '20px';

// Add responsive styles for the logo container
const style = document.createElement('style');
style.textContent = `
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  footer p {
    line-height: 1.5;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    footer p {
      font-size: 0.7em;
    }
  }
`;
document.head.appendChild(style);

// add any  to dinamic content of form 
// add a form to the site plan
const form = document.createElement('form');
form.id = 'site-plan-form';
form.innerHTML = 
    `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="site-plan-id">Site Plan ID:</label>
    <input type="text" id="site-plan-id" name="site-plan-id" required>

    <label for="date">Preferred Date:</label>
    <input type="date" id="date" name="date" required>

    <label for="time">Preferred Time:</label>
    <input type="time" id="time" name="time" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    

    
    <button type="submit">Submit</button>
`;
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '300px';
form.style.margin = '20px auto';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '5px';
form.style.backgroundColor = '#f9f9f9';
form.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
form.style.fontSize = '0.9em';
form.style.lineHeight = '1.5';
form.style.fontFamily = 'Arial, sans-serif';
form.style.color = '#333';
form.style.fontWeight = 'normal';
