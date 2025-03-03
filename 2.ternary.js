// 삼항 조건 연산자 (Ternary Operator)
// if문을 간결하게 표현할 수 있는 연산자

// 조건식 ? (조건 표현식) 작성 후 참인 경우 (표현식1 실행) : 거짓인 경우 (표현식2 실행)

let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
  //코드 블록 안에는 다른 조건을 처리할 수 있다.
  // let a = 1;
  // console.log(a);
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🍇');
}

// 즉, if else문을 작성하는 경우라면
// 조금 더 간편하게 ternary operator를 사용할 수 있다. 
// 1. 무언가를 실행하는 방식으로 사용 가능
fruit === 'apple' ? console.log('🍎') : console.log('🍊');

// 2. 변수를 선언해서 값을 직접 할당하는 방식으로도 사용 가능
let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);
