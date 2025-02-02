//boolean type  해당 변수명은 한글로 나쁜변수로 해당되오나, 예시 설명을 위해 부득이 한글로 사용하였음.
let 참 = true;
let 거짓 = false;

console.log(true);
console.log(false);   


//활용 예시: 참과 거짓은 변수명이 is로 시작한다. 
let isFree = true;
let isActivated = false;
let isEnrolled = true;

console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);


console.clear(); //이전 값은 다 지우고 이후 값만 출력
//향후 조건문을 배우고 특정 값이 조건값에 들어갔을 때 true인지 false인지 구분해주는 중요한 정보이다. 

//Falsy 거짓인 값
console.log(!!0); //0은 false로 간주된다. **특정 값을 boolean 값으로 변환 해주는 연산자: !!
console.log(!!-0);
console.log(!!''); //빈 값
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.clear(); //이전 값은 다 지우고 이후 값만 출력
//Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); //object 값
console.log(!!Infinity);