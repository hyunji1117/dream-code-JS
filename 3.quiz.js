// 퀴즈!
// let num = 2;
// num이 짝수이면 '👍'을 출력하고, 홀수이면 '👎'을 출력하는 코드를 작성해보기. 

let num = 7;
let evenNum = num % 2 === 0;
let oddNum = num % 2 !== 0;

if (evenNum) {
  console.log('👍')
} else {
  (oddNum)
  console.log('👎')
} // 👍

// ternary operator로 작성하기
// 1. 무언가를 실행하는 방식으로 사용 가능
evenNum ? console.log('👍') : console.log('👎')

// ternary operator로 작성하기
// 2. ternary 간결한 방법
let emoji = num === evenNum ? '👍' : '👎';
console.log(emoji);


// 다른 접근 방법
let num = 2;

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary operator로 작성하기
// 1. 무언가를 실행하는 방식으로 사용 가능
num % 2 === 0 ? console.log('👍') : console.log('👎')

// ternary operator로 작성하기
// 2. ternary 간결한 방법
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);