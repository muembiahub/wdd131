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
        <h2>Blog Page Form</h2>
        <label for="productSelect">Product:</label>
        <select id="productSelect" name="productSelect" required>
            <option value="fc-2050">FC-2050</option>
            <option value="fc-2060">FC-2060</option>
            <option value="fc-2070">FC-2070</option>
            <option value="fc-2080">FC-2080</option>
            <option value="fc-2090">FC-2090</option>
            <option value="fc-2100">FC-2100</option>
        </select>
        <label for="rating">Rating:</label>
        <select id="rating" name="rating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="dates">Dates:</label>
        <input type="date" id="dates" name="dates" required>
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" required>
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required>
        <label for="review">Review:</label>
        <textarea id="review" name="review" required></textarea>

        <button type="submit">Submit </button>
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
// create a footer element with copyright information
// Check if the element with ID 'copyright' exists in the HTML
const copyright = document.getElementById('.copyright');
if (!copyright) { // Check if the copyright element does not exist
    // Create and append the footer only if the element does not exist
    const footer = document.createElement('footer');
    const currentYear = new Date().getFullYear(); // Get the current year
    const lastModified = new Date(document.lastModified).toLocaleDateString(); // Get the last modified date
    footer.id = 'copyright';
    footer.name = 'copyright';
    footer.innerHTML = `
        <p>&copy; ${currentYear} Family Search Indexing. All rights reserved.</p>
        <p>Last modified on: ${lastModified}</p>
        <p>Family Search Indexing is a volunteer-driven project that allows individuals to help digitize and index historical records.</p>
        <p>By participating, you can help make these records accessible to people around the world.</p>
        <p>For more information, visit our <a href="https://www.familysearch.org/en/indexing/">website</a>.</p>
    `;


    // Append the footer to the body
    document.body.appendChild(footer);
}


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

// create a contact form with a submit button in contact.html with contact-form id
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.innerHTML = `
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
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
}
// Add a hover effect to the submit button
const submitButton = document.querySelector("#contact-form button[type='submit']");
if (submitButton) {
    submitButton.addEventListener("mouseover", () => {
        submitButton.style.backgroundColor = "#4CAF50"; // Change background color on hover
    });
    submitButton.addEventListener("mouseout", () => {
        submitButton.style.backgroundColor = ""; // Reset background color when not hovering
    });
}
// responsive styles for the contact form
const contactFormStyle = document.createElement("style");
contactFormStyle.textContent = `
  #contact-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  #contact-form label {
    margin-bottom: 5px;
  }

  #contact-form input,
  #contact-form textarea {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  @media (max-width: 600px) {
    #contact-form {
      width: 100%;
      padding: 10px;
      font-size: 0.8em;
    }
  }
`;
document.head.appendChild(contactFormStyle);



