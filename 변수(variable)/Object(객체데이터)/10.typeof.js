//typeof: 데이터 타입을 확인할 수 있는 연산자
//특정 값의 타입을 문자열로 반환해주는 연산자

let variable;
console.log(typeof variable); //undefined

variable = '';
console.log(typeof variable); //string

variable = 123;
console.log(typeof variable); //number

/**
 * 컴파일 언어, 자바 같은 경우 Int라는 type를 명시 해주고, 변수 이름 작성 후 숫자를 할당 한다. 
 * 이 때 정적으로 해당 값은 Int 값이라고 명시되고, 
 * 값이 명시된 타입은 다른 타입의 값을 할당 할 수 없다. (strongly type)
 */

/**
 * 자바스크립트는 동적(dynamic)으로 실행할 때 할당된 값에 따라 변경 된다. (weakly type)
 */

variable = function(){};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

//변수의 이름을 만들 때는, 최대한 저장된 값을 잘 나타낼 수 있는 의미 있는 이름으로 구체적으로 사용해야 한다.  
//변수를 작성하거나, 다른 사람의 코드를 볼 때 해당 변수에 어떤 값이 들어 있을까 생각하기. 
//이 것이 처리된 다음에는 어떤 값이 만들어 지는지 생각하기. ¡™¡