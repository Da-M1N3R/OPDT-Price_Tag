console.log("Hello World");

const gallery = document.querySelector(".gallery");
const budgetElement = document.querySelector("#budget");

let budgetText = budgetElement.textContent;
let budget = parseInt(budgetText.split('=')[1].trim());



// Function - card creation
function generateCardHTML(character) {
  return `
    <div class="card">
      <img src="${character.image}" alt="${character.name}">
      <span>${character.name}</span>
      <span class="price">$${character.price}</span>
    </div>
  `;
}

// Get data from .json file
fetch('data.json').then(response => response.json()).then(data => {
  const characters = data;
  characters.forEach(character => {
    const cardHTML = generateCardHTML(character);
    gallery.innerHTML += cardHTML;
  })
}).catch(error => console.error(error));

