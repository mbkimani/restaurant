import Food from "./food.jpg";
import json from "./data.json";

export default function pageLoad() {
  const myImage = document.createElement("div");
  const myText = document.createElement("h2");
  const myPara = document.createElement("p");
  myText.textContent = json.heading;
  myPara.textContent = json.para;
  const foodImage = new Image();
  foodImage.src = Food;

  myImage.appendChild(foodImage);
  myImage.appendChild(myText);
  myImage.appendChild(myPara);

  return myImage;
}
