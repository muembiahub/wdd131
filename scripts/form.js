const stars = document.querySelectorAll('.rating span');  
stars.forEach(star => {  
  star.addEventListener('click', () => {  
    const rating = star.getAttribute('data-value');  
    // Appel d'une fonction pour envoyer la note au backend  
    submitRating(rating);  
  });  
});  

function submitRating(rating) {  
  console.log(`Note soumise : ${rating}`);  
  // Vous pouvez utiliser fetch ou axios pour envoyer la note à votre serveur  
}  



const currentyear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
document.getElementById("currentyear").textContent = currentyear;
document.getElementById("lastModified").textContent = "Last Modified Date: " + lastModified;


