// Add a logo to the site based on the site plan ID
function addLogo(sitePlanId) {
    const logoContainer = document.createElement('header'); // Create a header element for the logo
    logoContainer.id = 'logo-container'; // Set the ID for the logo container
    
    // Add a class for styling
    logoContainer.className = 'logo-container';

    const logo = document.createElement('img');
    logo.src = `https://th.bing.com/th/id/OIP.dvfk2Jb7inTWTNdzxV9T0AAAAA?rs=1&pid=ImgDetMain${sitePlanId}.png`; // Assuming logos are stored in this path
    logo.width = 100; // Set the width of the logo
    logo.alt = 'Site Logo';
    logo.id = 'site-logo';

    logoContainer.appendChild(logo);

    // Locate the header element
    const header = document.querySelector('header');

    // Prepend the logo container to the header instead of the body
    header.prepend(logoContainer);
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


// Check if the element with ID 'blogpage-form' exists in the HTML
const blogpageFormElement = document.getElementById('blogpage-form');
if (blogpageFormElement) {
    // Create and append the form only if the element exists
    const form = document.createElement('form');
    form.id = 'blogpage-form';
    form.name = 'blogpage-form';
    form.className = 'blogpage-form';
    form.method = 'POST';
    form.action = 'https://muembiahub.github.io/wdd131/review.html?productSelect=fc-2050&rating=2&dates=2025-04-14&time=&country=&review=&phone=&email=&updates=yes&offers=yes';

    form.innerHTML = `
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us.</p>
        <label for="family-name">Family Name:</label>
        <input type="text" id="family-name" name="family-name" required>

        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>

        <label for="date"> Date:</label>
        <input type="date" id="date" name="date" required>

        <label for="time">Time:</label>
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

    // Append the form to the main element
    const main = document.querySelector('main');
    main.appendChild(form);
}

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

const familysearchindexingimages = [
    "https://www.familysearch.org/en/images/1/1b/Indexing_Logo.png",
    "https://www.familysearch.org/en/images/2/2d/Indexing_Logo_1.png",
    "https://www.familysearch.org/en/images/3/3c/Indexing_Logo_2.png",
    "https://www.familysearch.org/en/images/5/5c/Indexing_Logo_2.png",
    "https://www.familysearch.org/en/images/3/3d/Indexing_Logo_3.png",
    "https://www.familysearch.org/en/images/4/4f/Indexing_Logo_4.png",
    "https://www.familysearch.org/en/images/2/2e/Indexing_Logo_5.png",
];
const familysearchindexing = document.getElementById("familysearchindexing");
if (familysearchindexing) {
    familysearchindexing.innerHTML = familysearchindexingimages
        .map((image) => `<img src="${image}" alt="Family Search Indexing" />`)
        .join("");
}
// Add a hover effect to the images 
const images = document.querySelectorAll("#familysearchindexing img");
images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)"; // Scale up the image on hover
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)"; // Scale back to original size when not hovering
    });
});
// Add a click event to the images to open a new tab with the FamilySearch Indexing page
images.forEach((image) => {
    image.addEventListener("click", () => {
        window.open("https://www.familysearch.org/en/indexing/", "_blank"); // Open the FamilySearch Indexing page in a new tab
    });
});


