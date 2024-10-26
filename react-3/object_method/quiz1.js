// 1. 이메일 주소를 입력받고, 도메인을 돌려주는 함수 만들기
//  ex > itkorea@naver.com  -> naver.com
// hint) split 함수 활용

// const email = prompt("이메일 입력");
// const domain = email.split("@");
// console.log(`domain : ${domain[1]}`);

const getDomain = (email) => {
  // const arr = email.split("@");
  // const arr1 = arr[1].split(".");
  // return arr1[0];
  return email.split("@")[1].split(".")[0];
};

// 2. 영어 신문기사를 입력 받고, 모두 대문자로 바꾸는 함수 만들기
const newsUpper = (article) => {
  return article.toUpperCase();
};

// 3. 영어뉴스기사를 가져오고, 단어별로 나누고, 첫번째, 두번째, 세번째 단어들을 돌려주기!
const Reword = (article) => {
  const word = article.split(" ");
  return [word[0], word[2].word[2]];
};
