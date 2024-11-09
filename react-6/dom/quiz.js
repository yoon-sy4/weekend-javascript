//data,js - 변수 모으기
// func.js - 함수모으기
// style.js - css 관련 모으기
// index.js - 최종 모음집
const position = ["positiony", "z-index", "top", "bottom", "right", "Flexbox"];
const display =  ["display", "opacity", "transform"];
const clipping = ["overflow", "clipping"];
const animation = ["animation", "transition"];
const box = ["margin", "box-shadow", "border", "border-radius"];

const makeTemplate = (titleName, color, buttonList) => {
    const card = document.createElement("section");
    card.style.cssText = "display: flex; flex-direction: column; gap: 10px;";

    const title = document.createElement("h4");
    buttonBox.style.cssText = "display:flex; gap: 5px;";
    card.appendChild(buttonBox);

    buttonList.forEach((v) => {
        const btn = document.createElement("button");
        btn.style.cssText = `background-color: ${color}; border 1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px; font-weight: bold;`;
        btn.innerText = v;
        buttonBox.appendChild(btn);
    });

    document.body.appendChild(btn);
};

makeTemplate("Position and Layout", "#fac0ba", position);
makeTemplate("Display and Viisbility", "#ffc089", display);
makeTemplate("Clipping", "#ffe18b", clipping);
makeTemplate("Animation", "#c8df91", animation);
makeTemplate("Box Model (from outside in)", "#98eccc", box);