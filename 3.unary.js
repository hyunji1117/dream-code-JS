//단항연산자 Unary Operators
//正负得负，负负得正， 正正得正
// + (양)
// - (음)
// ! (부정)
// ++ (증가)
// -- (감소)

let a = 5;
a = -a; // -1에 5를 곱하는 것과 같은 뜻이다. (-1 * 5)
console.log(a); // -5
a = -a; // 여기서 a에 -1을 다시 곱하면 -1 * -5 = 5 (양수)가 된다.
console.log(a); // 5

a = +a; // 5에 +1을 곱하는 것과 같은 뜻이다. (+1 * 5) = 5
console.log(a); // 5

a = -a; // 5에 -1을 곱하는 것과 같은 뜻이다. (-1 * 5) = -5
a = +a; // -5에 +1을 곱하는 것과 같은 뜻이다. (+1 * -5) = -5
console.log(a);


// 부정 연산자 (!)
let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true 강한 부정은 강한 긍정


// + 연산자를 쓰면, 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있다.
console.clear();
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+'text'); // NaN
console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[1]); // 1
console.log(+[1, 2]); // NaN

//특정 값을 boolean 값으로 변환 해주는 연산자: !!
// ** boolean이 아닌 데이터 타입을 boolean으로 변화하고 싶다면 값을 반대로 바꾸고 싶을 경우, 
console.log(!1);  // 한번 부정 = 부정 연산자
console.log(!!1); // 두번 부정 = boolean 타입으로 변환할 수 있다. 