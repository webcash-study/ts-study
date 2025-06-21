# Any / Unknown / Never

## 1. Loopholes of Any (Any의 문제점)

### 1.1 메소드 호출

- `any` 타입으로 캐스팅되면 `toUpperCase` 메소드가 실행 가능한 것처럼 보인다.
- 하지만 런타임에서 오류가 발생하므로 사용을 자제해야 한다.

```
let number: number;
number = 10;

number.toUpperCase(); // Property 'toUpperCase' does not exist on type 'number'

(number as any).toUpperCase(); // 실행 가능한 것처럼 보이지만 런타임에서 오류 발생
```

### 1.2 함수 파라미터 

- `any` 타입으로 캐스팅된 인수가 전달되는 경우 인수의 타입을 검사하지 않아 에러 메세지가 표시되지 않는다.

```
const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2); // 에러 메세지가 표시되지 않는다.
multiplyTwo('코드팩토리', true); // Argument of type 'string' is not assignable to parameter of type 'number'
```

### 1.3 자동 완성

- 오브젝트의 타입을 `any`로 캐스팅하면 `name`, `age` 이름으로 프로퍼티에 접근할 수 있지만 코드에서 자동 완성 기능을 사용할 수 없다.

```
// 자동완성 on
let iu1 = { name: '아이유', age: 30 };
iu1.name; 
iu1.age;

// 자동완성 off
let iu2: any = { name: '아이유', age: 30 };
iu2.name;
iu2.age;
```

### 1.4 콜백 함수

- 콜백 함수의 타입을 `any`로 캐스팅하면 콜백 함수에 대한 에러 메세지가 표시되지 않는다.

```
// any 캐스팅 
const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x);
}

const callback = (x: number, y: number) => {
    return x * y; // 5 * undefined = NaN 
}

console.log(callbackRunner(5, 4, callback)); // NaN
```

- `any` 대신 함수 타입을 지정하면 타입스크립트가 콜백 함수에 대한 에러 메세지를 표시해준다.

```
const callbackRunner2 = (x: number, y: number, callback: (x: number, y: number) => number) => {
    return callback(x); // Expected 2 arguments, but got 1
}

const callback2 = (x: number, y: number) => {
    return x * y;
}

console.log(callbackRunner2(5, 4, callback2));
```