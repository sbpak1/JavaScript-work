const dic = {
  red : '빨강색',
  orange : '주황색',
  yellow : '노랑색',
}

console.log(dic);
console.log(dic.orange);
console.log(dic['red'])
// 백틱을 이용해서 저는 빨강색을 좋아해요.. 출력
let likeColor = 'red';
console.log(`저는 ${dic[likeColor]}를 좋아해요..`);