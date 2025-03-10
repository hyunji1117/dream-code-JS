/** 반복문 (Loop Statement)
 * for (변수선언문; 조건식; 증감식) {
 * 해당 조건이 맞을 때까지 코드 블럭을 실행한다. (반복 실행)
 * }
 * 
 * 실행순서:
 * 1. 변수선언문 실행 후 변수를 초기화
 * 2. 조건식의 값이 참이면 {코드블럭}을 수행한다. 
 * 3. 증감식을 수행하여 값을 하나 증가시킨다. 
 * 4. 이 과정은 값이 거짓이 될 때까지 반복된다. 
 */

for (let i = 0; i < 5; i++) {
  // i가 하나씩 증가하는 것을 5번 반복한다. 
  // 즉, 0부터 5보다 작을 때까지 {코드블럭}을 계속 실행한다. 
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// i는 0으로 초기화되고, 0은 5보다 작으므로 코드블럭을 실행한다.
// i는 1로 증가하고, 1은 5보다 작으므로 코드블럭을 실행한다.
// i는 2로 증가하고, 2는 5보다 작으므로 코드블럭을 실행한다.
// i는 3으로 증가하고, 3은 5보다 작으므로 코드블럭을 실행한다.
// i는 4로 증가하고, 4는 5보다 작으므로 코드블럭을 실행한다.
// i는 5로 증가하고, 5는 5보다 작지 않으므로 코드블럭을 실행하지 않는다.


// for문 중첩
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
// 0
// 1
// 2
// 3
// 4 
// 0 0 i가 0일 때, j를 0부터 5보다 작을 때까지 반복한다.
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0 그다음 i를 증가 시키고, j를 0부터 5보다 작을 때까지 반복한다.
// 1 1
// 1 2
// 1 3
// 1 4
// 2 0
// 2 1
// 2 2
// 2 3
// 2 4
// 3 0
// 3 1
// 3 2
// 3 3
// 3 4
// 4 0
// 4 1
// 4 2
// 4 3
// 4 4
// 결국 반복은 중지되게 된다. 


// 하지만 이런 반복이 중지되지 않는 경우를 무한루프라고 한다.
// 이렇게 되면 어플이 한가지 일반 빙글빙글 반복하는 나쁜 상태에 빠지게 된다. 

// for (;;) {
//   console.log('무한루프');
// }

// 조건은 항상 거짓이 될 수 있도록, loop가 언제가는 종료 되도록 작성 해주어야 한다. 



// 반복문 안에서 흐름을 제어하는 방법: continue, break
// continue: 현재 반복을 중지하고 다음 반복을 시작한다.
// break: 반복문을 종료한다.

console.clear();
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // continue를 만나면 아래 코드를 무시하고 다음 반복으로 넘어간다. (아래 코드가 희미하게 보일 것이다.)
    console.log('i가 10이 되었다.'); // i가 10이 되면 출력하고
    break; // i가 10이 되면 반복문을 종료시킬 수 있다. 
  }
  console.log(i); // 그렇지 않은 경우 i를 출력한다. 
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// i가 10이 되었다.
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19