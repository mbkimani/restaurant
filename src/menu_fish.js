import Data from "./data.json";

export default function menu_fish() {
  const menu = document.createElement("div");
  const li = document.createElement("li");

  const fishItems = document.createElement("div");
  fishItems.classList.add("fishMenu");
  //fishItems.setAttribute("class", "hide");
  fishItems.classList.add("menu");
  const fish = Data.menu["fish and seafood"];
  const a = document.createElement("a");
  a.textContent = Object.keys(Data.menu)[1];
  a.href = "#fishMenu";
  a.classList.add("headers");
  li.appendChild(a);
  for (let item in fish) {
    const p = document.createElement("p");
    p.textContent = fish[item];
    fishItems.appendChild(p);
  }
  const menuArr = [];
  menuArr.push(li);
  menuArr.push(fishItems);
  /*a.addEventListener("click", () => {
    fishItems.removeAttribute("id", "hide");
  });*/

  return menuArr;
}
