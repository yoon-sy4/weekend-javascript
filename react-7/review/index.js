const sec_1 = document.createElement("section");
sec_1.style.cssText = "display: flex; flex-direction: column; gap: 22px;";
document.body.appendChild(sec_1);
// const makeButton = (borderColor, backColor, fontColor) => {
//     const btn = document.createElement("button");
//     btn.innerText = "Button";
//     button.style.cssText
//     =  `padding: 10px; border:1px solid ${borderColor};
//     background-color: ${backColor}; color: ${fontColor};`;
//     return btn;
// }

// ["2563EB", "1D4ED8", "white", "DBEAFE"]
// ["white", "white", ""]

const makeButton = (color) => {
  const btn = document.createElement("button");
  btn.style.cssText = `background-color: ${color}; border: 1px solid ${color};padding:10px 12px; color: white; border-radius: 30px; width: fit-content`;
  btn.innerText = "Button";
  sec_1.appendChild(btn);
};

const colorList = ["#2563EB", "#1D4ED8", "white", "#DBEAFE"];
colorList.forEach((v) => makeButton(v));
