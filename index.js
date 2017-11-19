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

function generateText({content, type}) {
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
    let textContainer = document.createElement("div")
    textContainer.classList.add("description");

    let textElements = [
      {content: "Time For Pizza!", type: "h3"},
      {content: pizzaText, type: "p"}
    ];

    textElements.forEach((element) => textContainer.appendChild(generateText(element)));

    return textContainer;
  }
}

function generateMenuPage(parentContainer) {
  let menuList = generateMenuList();
  parentContainer.appendChild(menuList);

  function generateMenuList(){
    let menuListContainer = document.createElement("div");
    let pizzaPrices = {
      type: "ul",
      items: [{item: "Pepperonni Pizza", price: 10.99},
              {item: "Cheese Pizza", price: 9.99},
              {item: "Mushroom Pizza", price: 10.50},
              {item: "Chicken Pizza", price: 10.00}]
    }
    menuListContainer.appendChild(generateList(pizzaPrices));
    return menuListContainer;
  }
}

function generateList({type, items}) {
  let list = document.createElement(type);

  items.forEach(({item, price}) => {
    listItem = document.createElement("li");
    listItem.textContent = `${item}: $${price}`
    list.appendChild(listItem);
  });
  return list;
}

function generateContactPage() {

}
