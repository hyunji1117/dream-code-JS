// while(조건) {코드블럭}
// while는 조건이 맞으면 계속해서 {코드블럭}을 실행한다.
// 조건이 false가 될때까지 {코드블럭}을 무한정으로 실행한다.
let num = 5;
while (num >= 0) {
    console.log(num);
    num--; // 마지막에는 num을 하나씩 감소해준다. 
}
// 결국 num이 0보다 작을 때 거짓이 됨으로 while문이 종료된다.
// 5 4 3 2 1 0

let isActive = false;
let i = 0;
while (isActive) { // isActive가 flase가 될 때까지 계속 실행해 줄 것이다. 
  console.log('아직 살아있다.'); //loop 실행여부 실시간 확인
  if (i === 1000) {
    break; // 그리고 i가 1000이 되는 순간 break가 된다.
    // 계속 이어서 진행하고 싶다면 continue를 사용하면 된다.
  }
  i++;
}

// do-while는 꼭 한번 무조건 실행해야할 때 사용한다.  

do {
    console.log('do-while 아직 살아있다!');
} while (isActive); // isActive가 false가 될 때까지 계속 실행해 줄 것이다.