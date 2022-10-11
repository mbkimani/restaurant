import Data from "./data.json";

export default function menu_meat() {
  const menu = document.createElement("div");
  const li = document.createElement("li");

  const meatItems = document.createElement("div");
  meatItems.classList.add("meatMenu");
 // meatItems.setAttribute("class", "hide");
  meatItems.classList.add("menu");
  const meat = Data.menu["meat and fowl"];
  const a = document.createElement("a");
  a.textContent = Object.keys(Data.menu)[2];
  a.href = "#meatMenu";
  a.classList.add("headers");
  li.appendChild(a);
  for (let item in meat) {
    const p = document.createElement("p");
    p.textContent = meat[item];
    meatItems.appendChild(p);
  }

  const menuArr = [];

  menuArr.push(li);
  menuArr.push(meatItems);
  /*a.addEventListener("click", () => {
    meatItems.removeAttribute("id", "hide");
  });*/

  return menuArr;
}
