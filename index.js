const menuContainer = buildTabs();
const contentContainer = buildContentContainer();
const pizzaText = "Our pizza is the best pizza to ever grace the earth. We hand make all pizzas and ingrediants. We manage to hand craft pizzas that are wonderful, authentic, and still have a low cost. If possible our ingrediants are locally sourced and bought straight from the farmers themselves. Try one today!"

function buildTabs() {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  ["Home", "Menu", "Contact-Info"].forEach(function(section) {
    let div = document.createElement('div');
    div.classList.add("tab", section.toLowerCase());
    div.textContent = section;
    menuContainer.appendChild(div);
  });

  document.body.appendChild(menuContainer);
  return menuContainer;
}

function buildContentContainer() {
  let contentContainer = document.createElement("div");
  contentContainer.id = "content";
  document.body.appendChild(contentContainer);
  return contentContainer;
}

function clearContent(){
console.log("CLEAR");
}

function generateHomePage() {
  placePizza();
  placeText();

  function placePizza() {
    let pizzaImage = document.createElement("img");
    pizzaImage.setAttribute("src", "http://4.bp.blogspot.com/_21d4pBhy3P4/RYRZ_ba8umI/AAAAAAAAADg/3Ri9X433shM/s320/pizzaclock-4.jpg");
    contentContainer.appendChild(pizzaImage)
  }

  function placeText() {
    let textContainer = document.createElement("div")
    textContainer.classList.add("Text-Content");

    let headerText = document.createElement("h3");
    headerText.textContent = "Time for Pizza!";

    let paragraphText = document.createElement("p");
    paragraphText.textContent = pizzaText;

    textContainer.appendChild(headerText);
    textContainer.appendChild(paragraphText);

    contentContainer.appendChild(textContainer);
  }
}

function generateMenuPage() {

}

function generateContactPage() {

}
