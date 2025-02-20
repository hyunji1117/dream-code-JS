//let 재할당 가능
let a = 1;
a = 2;

// const 재할당이 불가능
/** 불리는 방법: 
 * 1. 상수
 * 2. 상수변수 또는 변수
 */
const text = 'Hello';
//text = '재할당 시도'; //에러 발생으로 프로그램이 강제 종료 된다. text = '재할당 시도'; 
//에러 발생으로 프로그램이 강제 종료 된다. (이렇게 하면 안 됨.)          ^
//TypeError: Assignment to constant variable. 
//에러코드: 상수 변수에 재할당이 되었다. 

// 1. 상수 (변수를 항상 대문자로 작성 해야 한다.)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 / 변수 
//즉, 재할당이 필요없는 로직에는 const를 상요하는 것이 좋다. 
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
//apple = {}; X
console.log(apple);
//가능하면 let 보다는 const로 작성하는게 좋다. 

//그런데 
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

//즉, 변수 재할당만 불가한 것이고
//해당 객체 안 데이터는 변경이 가능하다.
