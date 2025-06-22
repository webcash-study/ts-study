/**
 * JS의 문제점
 * 
 * 동적 타입(dynamicall typed) 언어
 *  - 코드가 길어지면 유지보수하기 어려움
 */

// var1, var2는 어떤 타입?
// var1 - number;
// var2 - number;
function add(var1, var2) {
    return var1 + var2;
}

console.log(add(1, 2));
console.log(add(1, '2'));
console.log(add('1', '2'));

// typeof runtime에 타입을 체크할 수 있다.
function addTypeSafe(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }else {
        throw Error('숫자만 파라미터에 입력해주세요.');
    }
}

console.log(addTypeSafe(1, 2));
console.log(addTypeSafe(1, '2')); // Error: 숫자만 파라미터에 입력해주세요.