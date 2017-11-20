const tabContainer = buildTabs();
const contentContainer = buildContentContainer();
const pizzaText = "Our pizza is the best pizza to ever grace the earth. We hand make all pizzas and ingrediants. We manage to hand craft pizzas that are wonderful, authentic, and still have a low cost. If possible our ingrediants are locally sourced and bought straight from the farmers themselves. Try one today!";
const pizzaImageSrc = "http://4.bp.blogspot.com/_21d4pBhy3P4/RYRZ_ba8umI/AAAAAAAAADg/3Ri9X433shM/s320/pizzaclock-4.jpg";
const contactInfo = "Come visit our wonderful restaraunt at 222 S main st. in nemerous locations. Get ahold of us!";

(function buildWebPage() {
  document.body.appendChild(tabContainer);
  addTabEventListeners();
  showPage("Home");
})();

function buildTabs() {
  let tabContainer = document.createElement("div");
  tabContainer.classList.add("menu-container");

  ["Home", "Menu", "Contact-Info"].forEach(function(section) {
    let div = document.createElement('div');
    div.classList.add("tab", section.toLowerCase());
    div.textContent = section;
    tabContainer.appendChild(div);
  });
  return tabContainer;
}

function buildContentContainer() {
  let contentContainer = document.createElement("div");
  contentContainer.id = "content";
  document.body.appendChild(contentContainer);
  return contentContainer;
}



function addTabEventListeners() { //BROKEN
  for(let i = 0; i< tabContainer.children.length; i++){
    let tab = tabContainer.children[i];
    tab.addEventListener("click", () => showPage(tab.textContent));
  }
}

function clearContent(container){
  container.innerHTML = "";
}

function generateHomePage(parentContainer) {
  let pizzaImage = generateImage(pizzaImageSrc);
  let pizzaTextBlock = generatePizzaText(pizzaText);

  return [pizzaImage, pizzaTextBlock];

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

  function generateImage(imageSrc) {
    let image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    return image;
  }

  function generateText({content, type}) {
    let text = document.createElement(type)
    text.textContent = content;
    return text;
  }
}

function generateMenuPage() {
  let menuList = generateMenuList();
  return menuList;

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

  items.forEach(({item, info}) => {
    listItem = document.createElement("li");
    listItem.textContent = `${item}: ${info}`
    list.appendChild(listItem);
  });
  return list;
}


function generateContactPage() {
  let contactParagraph = document.createElement("p");
  contactParagraph.textContent = contactInfo;

  bullets = {type: "ul",
            items: [{item: "Store Phone", info: "1800-666-6666"},
                    {item: "Email", info: "timeforpizza@pizzaplace.moc"},
                    {item: "Mail", info: "City, State: Box 1: 55584"}]
            }

  let contactBullets = generateList(bullets);
  return [contactParagraph, contactBullets];
}

function showPage(tabName) {
  clearContent(contentContainer);
  appendToPage(contentContainer, selectGenerator(tabName));
}

function selectGenerator(tabName) {
  if(tabName === "Home"){
    return generateHomePage();
  } else if (tabName === "Menu") {
    return generateMenuPage();
  } else {
    return generateContactPage();
  }
}

function appendToPage(container, element){
  if(element instanceof Array){
    for(let i = 0; i < element.length; i++) {
      container.appendChild(element[i]);
    }
  } else{
  container.appendChild(element);
  }
}
