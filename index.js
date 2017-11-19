const menuContainer = buildTabs();
const contentContainer = buildContentContainer();
const pizzaText = "Our pizza is the best pizza to ever grace the earth. We hand make all pizzas and ingrediants. We manage to hand craft pizzas that are wonderful, authentic, and still have a low cost. If possible our ingrediants are locally sourced and bought straight from the farmers themselves. Try one today!"
const pizzaImageSrc = "http://4.bp.blogspot.com/_21d4pBhy3P4/RYRZ_ba8umI/AAAAAAAAADg/3Ri9X433shM/s320/pizzaclock-4.jpg"

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

function generateText(content, type) {
  let text = document.createElement(type)
  text.textContent = content;
  return text;
}

function generateImage(imageSrc) {
  let image = document.createElement("img");
  image.setAttribute("src", imageSrc);
  return image;
}


function generateHomePage(parentContainer) {
  let pizzaImage = generateImage(pizzaImageSrc);
  let pizzaTextBlock = generatePizzaText(pizzaText);

  [pizzaImage, pizzaTextBlock].forEach(element => parentContainer.appendChild(element));

  function generatePizzaText(){
    textContainer = document.createElement("div")
    textContainer.classList.add("description");

    [["Time For Pizza!", "h3"], [pizzaText, "p"]].forEach((item) => textContainer.appendChild(generateText(...item)));

    return textContainer;
  }
}


function generateMenuPage() {
  let menuText = generateMenuText();

  function generateMenuText(){

  }
}

function generateContactPage() {

}
