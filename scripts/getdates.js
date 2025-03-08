// Purpose: Get and display the current year and the last modified date/time of the document.

// Since the script is deferred, the DOM is already parsed.
// Alternatively, you could use a DOMContentLoaded event listener if needed.

// Get the current year using the Date object.
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get and display the document's last modified date/time.
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


