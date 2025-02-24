// 증가 & 감소 연산자 (Increment & Decrement Operator)
let a = 0;
console.log(a); // 0
a++; // a = a + 1; 변수 자기 자신에 하나를 더한다. 
console.log(a); // 1
a--; // a = a - 1; 변수 자기 자신에 하나를 뺀다. 
console.log(a); // 0

console.clear();
// ⚠️ 주의사항 : about a++ and ++a
// 앞에 쓰느냐, 뒤에 쓰느냐에 따라 동작이 달라진다. 
// a++ : 필요한 연산을 하고, 그 뒤에 값을 증가시킴.
a = 0;
let b = a++;
console.log(b); // 0
// a가 0 임으로, a를 b에 먼저 할당하고, 그 다음에 a+1되어 증가시킨다. 
// 먼저 할당된 a는 0이기에, b는 0이 된다.
console.log(a); // 1

console.clear();
// ++a : 먼저 값을 증가시키고, 그 다음에 필요한 연산을 함.
a = 0;
let b = ++a;
console.log(b); // 1
// a가 0이고, 먼저 a를 +1로 증가시킨 후, 증가된 값을 b에 할당한다.