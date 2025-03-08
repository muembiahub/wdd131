const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModified;

