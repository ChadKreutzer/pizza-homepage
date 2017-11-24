const pizzaText = [
    { content: "Time For Pizza!", type: "h3" },
    { content: `Our pizza is the best pizza to ever grace the earth. We hand
        make all pizzas and ingredients. We manage to hand craft pizzas that
        are wonderful, authentic, and still have a low cost. If possible our
        ingredients are locally sourced and bought straight from the farmers
        themselves. Try one today!`, type: "p" }
];

const contactText = [
    { content: "Contact Us!", type: "h3" },
    { content: `Come visit our wonderful restaurant at 222 S main ST. In
        numerous locations. Get ahold of us!`, type: "p" }
];

const contactMethods = {
    type: "ul",
    items: [{ item: "Store Phone", info: "1800-666-6666" },
        { item: "Email", info: "timeforpizza@pizzaplace.moc" },
        { item: "Mail", info: "City State, Box 1, 55584" }
    ]
};

const menuText = [
    { content: "Try a New Pizza!", type: "h3" },
    { content: `-------------------------------------------------`, type: "p" }
];

const pizzaPrices = {
    type: "ul",
    items: [{ item: "Pepperonni Pizza", info: 10.99 },
        { item: "Cheese Pizza", info: 9.99 },
        { item: "Mushroom Pizza", info: 10.50 },
        { item: "Chicken Pizza", info: 10.00 }
    ]
};

const tabs = {
    "Home": generatePage("images/Pizza-Capricciosa.jpg", pizzaText),
    "Menu": generatePage("images/Pizza-Selection.jpg", menuText, pizzaPrices),
    "Contact": generatePage("images/Pizza-place.jpg", contactText, contactMethods)
};

const tabContainer = document.createElement("div");
tabContainer.classList.add("menu-container");
document.body.appendChild(tabContainer);

const tabContentContainer = document.createElement("div");
tabContentContainer.innerHTML = "<div></div>";
tabContentContainer.id = "content";
document.body.appendChild(tabContentContainer);

Object.keys(tabs).forEach(function(section) {
    const div = document.createElement("div");

    div.classList.add("tab", section.toLowerCase());
    div.textContent = section;
    tabContainer.appendChild(div);

    div.addEventListener("click", function() {
        showPage(div);
        toggleActiveTab(div);
    });
});

tabContainer.firstChild.classList.add("clicked");
showPage(tabContainer.firstChild);

function showPage(tab) {
    tabContentContainer.replaceChild(tabs[tab.textContent], tabContentContainer.firstChild);
}

function toggleActiveTab(tab) {
    const currentActiveTab = document.querySelector('.tab.clicked');
    currentActiveTab.classList.remove('clicked');
    tab.classList.add('clicked');
}

function generatePage(image, text, list = false) {
    const pageContainer = document.createElement("div");
    const textBlock = generateText(text);

    const pageImage = document.createElement("img");
    pageImage.setAttribute("src", image);

    const listElements = (list) ? generateList(list) : document.createElement("div");

    [pageImage, textBlock, listElements].forEach(function(element) {
        pageContainer.appendChild(element);
    });

    return pageContainer;
}

function generateText(textElements) {
    const textContainer = document.createElement("div");
    textContainer.classList.add("description");

    textElements.forEach(function(element) {
        textContainer.appendChild(generateTextBlock(element));
    });

    return textContainer;
}

function generateTextBlock({ content, type }) {
    const text = document.createElement(type);
    text.textContent = content;
    return text;
}

function generateList({ type, items }) {
    const list = document.createElement(type);

    items.forEach(function({ item, info }) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item}: ${info}`;
        list.appendChild(listItem);
    });
    return list;
}
