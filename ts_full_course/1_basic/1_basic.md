
# 타입스크립트 기본기

## 1. 타입스크립트를 사용하는 이유

- 자바스크립트는 동적 타입(dynamicall typed) 언어이기 때문에 코드가 길어지면 유지 보수하기 어려워진다. 
- 따라서 주석을 추가하거나 typeof 기능을 사용해서 런타임에 타입을 체크할 수 있다.

```
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
```

- 하지만 코드가 길어질 뿐만 아니라 직접 코드를 실행해봐야 에러를 확인할 수 있다.
- 타입스크립트를 사용하면 변수, 함수, 클래스 등 모든 정의를 정확하게 설계 의도대로 개발자에게 강제할 수 있고, 기록의 기능으로도 사용 가능하다.

```
function add(num1: number, num2: number) {
    return num1 + num2;
}

console.log(add(1, 2)); // 3
console.log(add(1, '2')); // Argument of type 'string' is not assignable to parameter of type 'number'
```