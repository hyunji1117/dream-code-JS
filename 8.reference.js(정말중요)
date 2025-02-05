//원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1

b = 2;

console.log(a);
console.log(b);


//객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = { //0X1234 주소라고 가정한다. 
  name: '사과',
};

let orange = apple; //0X1234
//그래서 나중에 오랜지 이름을 바꾸게 되면
orange.name = '오랜지';
console.log(apple);
console.log(orange);