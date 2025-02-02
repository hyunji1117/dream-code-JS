//정수
let integer = 123;

//음수
let negative = -123;

//실수
let double = 1.23;


console.log(integer);
console.log(negative);
console.log(bouble);


//2진수
let binary = 0b1111011;

//8진수
let octal = 0o173;

//16진수
let hex = 0x7b;

console.log(binary);
console.log(octal);
console.log(hex);


//신경써야 하는 점
//숫자를 나눌 때 발생할 수 있는 데이터 값
console.log(0/123); //결과: 0
console.log(123/0);  //특정 값을 0으로 나눌 떄 결과: Infinity (외우자.)
console.log(123/-0);  //특정 값을 0으로 나눌 떄 결과: -Infinity
console.log(123/'text');  //특정 값을 0으로 나눌 떄 결과: NaN (not a number의 약자)

//BigInt 정말 큰 숫자를 표현하고 싶을 때 (잘 쓰지 않음))
let BigInt = 123456789012345678901234567890n; //큰 정수를 담고 있다.
console.log(BigInt);