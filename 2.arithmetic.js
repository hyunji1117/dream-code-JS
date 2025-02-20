// 산술 연산자 (Arithmetic Operators)
console.log(6 + 2);
console.log(6 - 2);
console.log(6 * 2);
console.log(6 / 2);
console.log(6 % 2); // 나머지 값
console.log(6 ** 2); // 거듭제곱 (ES7에 새로 추가된 내용)
// 이 전에는 console.log(Math.paw(6, 2)); 를 사용했다. 


/** 주의사항 : 
 * + 연산자
 * 더하는 것도 있지만 두 문자를 합하는 기호로 사용이 가능하다. 
 
 let text = '오늘은 ' + '연산자를 ' +'공부했다.';
 console.log(text);
 
 이런 경우 실수로 '1'(문자열)과 '1'(숫자열)을 합하는 경우가 있다. 
 */

let textError = '1' + 1;
log(textError); // 11
console.log(typeof textError); // string
// 이런 경우에는 문자열로 인식해서 합쳐진다.
// 즉, 숫자와 문자열을 더하면 문자열로 변환이 된다.