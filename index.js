const menuContainer = buildTabs();
const contentContainer = buildContentContainer();

function buildTabs() {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  ["Home", "Menu", "Contact-Info"].forEach(function(section) {
    let div = document.createElement('div');
    div.classList.add("tab", section)
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
