// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 같음
// !== 값과 타입이 다름

// 순수 값으로만 확인
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true (타입이 다르지만 문자열 안에 있는 숫자 2가 숫자로 자동으로 변환이 되면서 비교가 되기 때문이다.)
console.log(2 === '2'); 
// false (===는 타입을 확인하는 연산자 이기에 숫자와 문자 타입이 달라 false로 출력이 된다.) 
// 코딩할 때는 웬만하면 타입을 같이 확인하기 떄문에 ✨ === 연산자를 쓰는 것이 좋다. ✨
console.log(true == 1); // true (1을 boolean으로 변환하면 true가 되기 때문에 true가 출력이 된다.)
console.log(false == 0); // true (0을 boolean으로 변환하면 false가 되기 때문에 true가 출력이 된다.)


// object(객체)로 확인
const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
}

console.log(obj1 == obj2); // false (객체는 object가 만들어진 메모리 주소값(예: 0X111)을 비교하기 때문이다. 
console.log(obj1 === obj2); // false (주소값 자체가 다르기 때문)
console.log(obj1.name == obj2.name); // true (객체 안에 있는 값은 같기 때문에 true가 출력이 된다.)
console.log(obj1.name === obj2.name); // true (값도 동일하고, type도 동일하기 떄문에 true가 나온다.)

let obj3 = obj2;
console.log(obj3 == obj2); // true (동일한 메모리 주소값을 가지고 있기 때문)
console.log(obj3 === obj2); // true (type도 같음)
