// 연산자 우선순위

// 연산자 우선순위가 높은 순 mdn 사이트 참조
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

let a = 2;
let b = 3;
let result = a + b * 4; // 곱하기가 더하기 보다 우선순위가 높다.
console.log(result); // 14

result = a++ + b * 4; // 해당 연산자 (a + b * 4)가 먼저 실행되고, 끝나면 a++이 실행되어 a = 3이 된다.
console.log(result); // 14

// 우선 시 하고 싶은 것을 (괄호)로 묶어서 정확히 명시하기. 