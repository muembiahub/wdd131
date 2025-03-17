// Get the current year and display it in the footer
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
// Get the last modified date of the current document and display it in the footer
const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified Date: " + lastModified;