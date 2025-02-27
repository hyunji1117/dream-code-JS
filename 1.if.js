// 조건문 (Conditional Statements)

// if(조건) { 실행문 } 
// 만약에 조건이 참이면 실행문을 실행한다.

// if(조건) { 실행문1 } else { 실행문2 } 
// 만약에 조건이 참이면 실행문1을 실행하고, 거짓이면 실행문2를 실행한다.

// if(조건1) { 실행문3 } else if(조건2) { 실행문4 } else { 실행문5 }
// 만약에 조건1이 참이면 실행문3을 실행하고, 조건2가 참이면 실행문4를 실행하고, 둘 다 거짓이면 실행문5를 실행한다.

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

// 조건이 true인지, false인지에 따라 if문을 실행할지 판단하는 제어문을 만들어 보자.

// if 조건문 안에는 true/false를 평가할 수 있는 표현식이 들어간다.
// if (true) { console.log('true') } 즉, 해당 조건이 맞을 때만 코드가 실행이 된다.

// console.log('출력되면 안된다.'); if 조건이 false이면 출력되지 않게 처리할 수 있다.
if (false) {
  console.log('조건이 false여서 출력이 안되는 경우1');
}

if (0) {
  console.log('조건이 false여서 출력이 안되는 경우2');
}

if ('') {
  console.log('조건이 false여서 출력이 안되는 경우3');
}

if (null) {
  console.log('조건이 false여서 출력이 안되는 경우4');
}

if (undefined) {
  console.log('조건이 false여서 출력이 안되는 경우5');
}


// 특정값을 value에 할당하고, 그 값을 boolean type로 출력 후 isTruthy에 할당한다. 
let value = 0;
let isTruthy = Boolean(value);

// 만약에 isTruthy가 true이면 'true'를 출력하고, value의 type를 이어서 확인 후 valueType에 할당한다.
if (isTruthy) {
  console.log('true');
  let valueType = typeof value;
  console.log(valueType);  
} else { // 그렇지 않으면 'false'를 출력하고, value의 type를 확인 후 valueType에 할당한다.
  console.log('false');
  let valueType = typeof (value);
  console.log(valueType);
}