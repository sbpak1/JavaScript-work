const groupA = [
  '안유진',
  '장원영',
  '레이',
  '이서',
  '가을',
  '리즈'
]

const groupB = [
  '카리나',
  '윈터',
  '지젤',
  '닝닝'
]

const groupC = [
  '최유진',
  '샤오팅',
  '김채현',
  '김다인',
  '히카루',
  '휴닝바히에',
  '서영은'
]

const k_group = {
  'ive' : groupA,
  '에스파': groupB,
  '케플러': groupC
}

console.log(`에스파 멤버 : ${k_group.에스파}
에스파 멤버 수 : ${k_group.에스파.length}`);

const group_k = [
  {
  group : 'ive',
  name : ['장원영','안유진','이서'],
  count : 5
  },
  
  {
  group : '에스파',
  name : ['카리나','윈터','닝닝'],
  count : 5
  },
  
  {
  group : '케플러',
  name : ['최유진','김채현','김다인'],
  count : 5
  }

]

// 에스파 멤버 이름
console.log(group_k[1].name)
// 에스파 멤버 수
console.log(group_k[1].count)