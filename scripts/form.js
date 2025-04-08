const currentyear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
document.getElementById("currentyear").textContent = currentyear;
document.getElementById("lastModified").textContent = "Last Modified Date: " + lastModified;
