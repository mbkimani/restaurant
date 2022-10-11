import pageLoad from "./page-load";
import menu_risotto from "./menu_risotto";
import menu_fish from "./menu_fish";
import menu_meat from "./menu_meat";
import "./style.css";

console.log("Switched a bit; The start of a restaurant webpage");

const content = document.querySelector("#content");
const menuGrid = document.createElement("div");
const tabOne = menu_risotto()[0];
const tabTwo = menu_fish()[0];
const tabThree = menu_meat()[0];
const menuOne = menu_risotto()[1];
const menuTwo = menu_fish()[1];
const menuThree = menu_meat()[1];
const tabs = document.createElement("div");

menuGrid.classList.add("menugrid");

//menuGrid.appendChild(menu_risotto()[0]);
//menuGrid.appendChild(menu_fish()[0]);
//menuGrid.appendChild(menu_meat()[0]);
//menuGrid.appendChild(menu_risotto()[1]);
//menuGrid.appendChild(menu_fish()[1]);
//menuGrid.appendChild(menu_meat()[1]);

console.log(menu_fish());
console.log(menu_risotto());

tabs.classList.add("hometabs");
const tabsArray = [tabOne, tabTwo, tabThree];
const menusArray = [menuOne, menuTwo, menuThree];

tabs.append(tabOne, tabTwo, tabThree);
menuGrid.appendChild(menuOne);
menuGrid.append(tabs);

function tabular() {
  for (let tab in tabsArray) {
    let newAnchor = tabsArray[tab];
    newAnchor.addEventListener("click", (event) => {
      showStuff(event);
    });
  }
}

function showStuff(event) {
  tabsArray.forEach((soloTab) => {
    if (soloTab.querySelector("a").textContent == event.target.textContent) {
      //    soloTab
      //      .querySelector("a")
      //      .parentElement.nextElementSibling.removeAttribute("id", "hide");
      menusArray.forEach((menuItem) => {
        if (
          menuItem.classList.contains(
            soloTab.querySelector("a").getAttribute("href").slice(1)
          )
        ) {
          menuItem.classList.remove("hide");
          menuGrid.appendChild(menuItem);
        } else {
          menuItem.classList.add("hide");
        }
      });
      console.log(soloTab.querySelector("a").getAttribute("href").slice(1));
    }
  });
}

content.appendChild(pageLoad());
content.appendChild(menuGrid);
tabular();
