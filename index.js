const body = document.body;
const contentDiv = document.querySelector("#content");

(function buildPage() {
  buildTabs();
  buildContentContainer();
})()

function buildTabs() {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  ["Home", "Menu", "Contact-Info"].forEach(function(section) {
    let div = document.createElement('div');
    div.classList.add("tab", section)
    div.textContent = section;
    menuContainer.appendChild(div);
  });

  body.appendChild(menuContainer);
}

function buildContentContainer() {
  let contentContainer = document.createElement("div");
  contentContainer.id = "content";
  body.appendChild(contentContainer);

}
