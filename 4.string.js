//문자열타입
let string = '안녕하세요';
//let string = "안녕하세요"; //commend + , 설정에서 quote style 필요 시 설정 후 결과 확인 가능
console.log(string);

string = `안녕하세요`;
console.log(string);

string = '"안녕하세요"';
console.log(string);


//특수문자 출력하는 방법
string = "'안녕하세요'"; //이 경우 설정에서 quote style를 double로 변경하지 않아도 특수 케이스여서 적용이 된다. 
console.log(string);

//새로운 줄 바꿈
string = '안녕\n하세요';
console.log(string);

//텝 기능
string = '안녕\t\t하세요';
console.log(string);

//빽 슬레시
string = '안녕\\하세요';
console.log(string);

//유니코드 작성 MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences 참조
string = '안녕\\\u09AC하세요';
console.log(string);


let id = 'Evelyn';
let grreatings = "안녕!, " + id + "👋\n즐거운 하루 보내요!"; 
console.log(grreatings);
//템플릿 리터럴 (Template Literal)으로 작성한 경우 (超方便!)
//빽틱 안에서는 줄바꿈을 자유자재로 사용 가능함.
greetings = `안녕!, ${id}👋
즐거운 하루 보내요!`
console.log(greetings);