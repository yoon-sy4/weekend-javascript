import { makeRoomCard } from "./func.js";
import { data } from "./data.js";

const container = document.querySelector(".container");

// appendChild vs insertAdjactionHTML
//1번째 문법

// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[0].imgUrlList[0], data[0].priceTitle, data[0].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[1].imgUrlList[0], data[1].priceTitle, data[1].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[2].imgUrlList[0], data[2].priceTitle, data[2].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[3].imgUrlList[0], data[3].priceTitle, data[3].roomDesc)
// );

// 2. 두번째 문법
data.forEach((v) =>
  container.insertAdjacentHTML(
    "beforeend",
    makeRoomCard(v.imgUrlList[0], v.priceTitle, v.roomDesc)
  )
);
