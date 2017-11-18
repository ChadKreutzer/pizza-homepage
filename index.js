const contentDiv = document.querySelector("#content");

(function buildPage() {
  buildTabs();
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

  contentDiv.appendChild(menuContainer);
}
