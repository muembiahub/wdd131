// Get the current year and display it in the footer
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
// Get the last modified date of the current document and display it in the footer
const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified Date: " + lastModified;

const temples = [
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2019, December, 15",
    area: 10000,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/61a9bf72e29c45210c113c3f70c8d80ceb388362/full/800%2C/0/default.jpg",
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, United States",
    dedicated: "1985, December, 12",
    area: 10000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/800%2C/0/default.jpg",
  },
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }, 
    
  ];
// create TempleCard function to create a card for each temple
createTempleCard();
function createTempleCard() {
  const gallery = document.querySelector(".temple-gallery");
  if (!gallery) {
    console.error("Error: .temple-gallery container not found in the HTML.");
    return;
  }

  temples.forEach(temple => {
    let card = document.createElement("div");
    let templeName = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let image = document.createElement("img");

    templeName.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;

    // Debugging: Log the image URL
    console.log(`Loading image for ${temple.templeName}: ${temple.imageUrl}`);
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.setAttribute("loading", "lazy");

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    card.classList.add("temple-card");
    gallery.appendChild(card);
  });
}