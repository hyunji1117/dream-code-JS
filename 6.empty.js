//nul, undefined
let variable; //메모리 상에 어떤 데이터도 들어있지 않고 정해져 있지 않은 상태. 
console.log(variable);

//명시적으로 해당 데이터는 아무것도 담고 있지 않다고 한다면. 
variable = null;
console.log(variable);

/**
 * value: 꽃이 담아 있구나
 * null: 꽃이 있어야 하는데 담아 있지 않구나.
 * undefined: 아무것도 담아 있지 않고, 정해진 것이 없는 상태구나.
*/


//아직 활성화된 아이템이 있는지 없는지 모르는 상태!
let activeItem;
//활성화된 아이템이 없는 상태로 지정 가능!
activeItem = null;

console.log(typeof null); //object, 즉, 자바스크립트에서는 null을 표현하기 위해서 object를 만들어서 표현한 것이다. (확실하게 비어있다.)
console.log(typeof undefined); //undefined (정해진 것이 없다.)