//기본타입 : String, Number, Boolean, Null, undefined
// 참조타입 : Object

const car = {
  color: "white",
  maxSpeed: 300,
  company: "kia",
  model: "쏘렌토",
};

const major = {
  name: "컴공",
  capacity: 500,
  head: "엄준식",
  department: "공학대학",
  course: {
    name: "컴공개론",
  },
};

console.log(major.name); //컴공
console.log(major["name"]); //컴공
console.log(major.course.name); //개론
console.log(major["course"]["name"]); //개론
