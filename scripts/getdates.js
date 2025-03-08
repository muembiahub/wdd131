// Purpose: Get the current year and last modified date of the document

const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");
// Get the current year
currentyear.innerHTML = new Date().getFullYear();

// Get the last modified date
lastmodified.innerHTML = document.lastModified;
//u
