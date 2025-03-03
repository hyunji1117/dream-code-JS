// 조건문 (Conditional Statements)
// switch문
// switch문은 if문과 같이 조건문을 사용하여 특정 조건에 따라 다른 코드를 실행할 수 있게 하는 조건문이다. 
// 즉, 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 사용한다. 

// if문 접근 방식
let day = 0;
let dayName;

if (day === 0) {
  dayName = 'Monday';
} else if (day === 1) {
  dayName = 'Tuesday';
} else if (day === 2) {
  dayName = 'Wednesday';
} else if (day === 3) {
  dayName = 'Thursday';
} else if (day === 4) {
  dayName = 'Friday';
} else if (day === 5) {
  dayName = 'Saturday';
} else if (day === 6) {
  dayName = 'Sunday';
} else {
  dayName = 'Invalid day';
}
console.log(dayName);


// switch문 접근 방식
let day = 0;
let dayName;

switch (day) {
  case 0:
    dayName = 'Monday';
    break; //코드가 다음 case를 확인하지 않도록 break문을 사용해야 한다. 
    // break문을 사용하지 않으면 다음 case를 확인하고 마지막 case까지 실행 후 마지막 값이 출력되게 된다.
  case 1:
    dayName = 'Tuesday';
    break;
  case 2:
    dayName = 'Wednesday';
    break;
  case 3:
    dayName = 'Thursday';
    break;
  case 4: 
    dayName = 'Friday';
    break;
  case 5: 
    dayName = 'Saturday';
    break;
  case 6:
    dayName = 'Sunday';
    break;
}
console.log(dayName);

// break문을 사용하지 않는 경우
let condition = 'soso'; // okey, gppd -> 좋음, none -> 없음 bad -> 나쁨
// 하나 이상의 여러가지 케이스가 동일한 결과를 반환하는 경우 break문을 사용하지 않아도 된다.
let text;
switch (condition) {
  case 'okey':
  case 'good': 
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';

  // 위 모든 조건이 해당하지 않는 경우
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(text); // 좋음