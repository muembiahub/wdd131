
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Get the <select> element
  const productSelect = document.getElementById('productSelect');
  
  // Populate the <select> with options
    products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Use id as the value
    option.textContent = product.name; // Use name as the display text
    productSelect.appendChild(option);
  });


// Initialize review count from localStorage
// Check if a counter exists in localStorage
if (!localStorage.getItem('reviewCounter')) {
    localStorage.setItem('reviewCounter', '0');
  }
  
  // Increment the counter
  let reviewCounter = parseInt(localStorage.getItem('reviewCounter'), 10);
  reviewCounter += 1;
  localStorage.setItem('reviewCounter', reviewCounter);
  
  // Display the counter value (optional)
  document.getElementById('counterDisplay').textContent = `Reviews submitted: ${reviewCounter}`;

// Add event listener to the form submission





const currentyear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
document.getElementById("currentyear").textContent = currentyear;
document.getElementById("lastModified").textContent = "Last Modified Date: " + lastModified;


