// skill 함수를 정의하고
// 스킬 발동 ! ~~스킬 마무리!

// 얼음스킬 -> 얼음 모으기 - 얼음 발사
// 썬더스킬 -> 번개 모으기 - 번개 발사
// 불스킬 - > 불 피우기 - 불 발사

//유저에게 어떠한 스킬을 발동시킬까요 (1, 2, 3)
//콘솔로 결과값 나타내기!

const triggerSkill = (skill) => {
  console.log("스킬발동");
  skill();
  console.log("스킬마무리");
};

const elementSkill = (element) => {
  console.log(`${element} 모으기`);
  console.log(`${element} 발사`);
};

// const iceSkill = () => {
//   console.log("얼음 모으기 - 얼음 발사");
// };
// const thunderSkill = () => {
//   console.log("번개 모으기 - 번개 발사");
// };
// const fireSkill = () => {
//   console.log("불 피우기 - 불 발사");
// };

const skills = ["얼음", "번개", "불", "바람"];
const skillNumber = Number(
  prompt("얼음, 번개, 불, 바람 중에 어떠한 스킬을 발동할까요?")
);
triggerSkill(() => elementSkill(skills[skillNumber]));
