// for loop 문법
// 자바와 동일
// #
// ##
// ###
// ####
// #####

for (let i = 1; i <= 5; i++){
  let star = ''
    for (let j=1; j <= i; j++){
      star = star + '#';
    }
      
    console.log(star)
}

// Java : advanced For
// for(int x : data) {
// }

// JavaScript
// for ~ in 구문 : 인덱스 기준
// for ~ of 구문 : Java의 advanced for 랑 같음.

const ahn = {
  name : "안유진",
  yeer : 2003,
  group : "ive"
}