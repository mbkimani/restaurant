import Data from "./data.json";

export default function menu_risotto() {
  const menu = document.createElement("div");
  const li = document.createElement("li");

  const risottoItems = document.createElement("div");
  risottoItems.setAttribute("class", "risottoMenu");
  //risottoItems.setAttribute("id", "hide");
  risottoItems.classList.add("menu");
  const risotto = Data.menu.risotto;
  const a = document.createElement("a");
  a.textContent = Object.keys(Data.menu)[0];
  a.href = "#risottoMenu";
  a.classList.add("headers");
  li.appendChild(a);
  for (let item in risotto) {
    const p = document.createElement("p");
    p.textContent = risotto[item];
    risottoItems.appendChild(p);
  }

  menu.appendChild(li);
  menu.appendChild(risottoItems);
  const menuArr = [];
  menuArr.push(li);
  menuArr.push(risottoItems);
  /*a.addEventListener("click", () => {
    risottoItems.removeAttribute("id", "hide");
  });*/

  return menuArr;
}
