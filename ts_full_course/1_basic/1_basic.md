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

## 2. 타입스크립트 기본 타입

- 타입스크립트를 사용하면 타입을 강제할 수 있다.

```
let helloText: string = 'Hello';
helloText = true; // error
```

### 2.1 타입스크립트의 7개 기본 타입

- 자바스크립트의 기본 타입과 동일하다.

```
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999); // ES2020
const boolean: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;
```

### 2.2 타입스크립트에만 존재하는 타입

#### any

- `any` 타입은 모든 타입의 변수에 저장할 수 있는 데이터 타입이다.

```
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar; // number인데 저장이 가능하다.
let testString: string = anyVar;
let testBoolean: boolean = anyVar;
```

#### unknown

- `unknown` 타입은 `any` 타입과 유사하지만 유일한 차이점은 다른 타입의 변수에 할당이 불가능하다.

```
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

let testNumber2: number = unknownType; // error
let testString2: string = unknownType;
let testBoolean2: boolean = unknownType;
```

#### never

- `never` 타입은 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입이다.

```
let neverType: never = null;  // error
let neverType: never = undefined;
let neverType: never = 'test';
```

- 타입스크립트는 타입스크립트 컴파일러(tsc)를 통해 자바스크립트로 변환된다.
- 따라서 컴파일전의 타입을 보장하기 때문에 `any` 같은 타입을 남용하면 에러가 발생한다.

#### 리스트 타입

```
const koreanGirlGroup : string[] = ['아이브', '레드벨벳', '블랙핑크'];
const koreanGirlGroup : string[] = ['아이브', '레드벨벳', '블랙핑크', true, false]; // error
const booleanList: boolean[] = [true, true, false, false];
```

## 3. Type과 Interface 기본기

### 3.1 Type

- `타입(type)`은 자바스크립트의 데이터 타입에 이름을 붙여주는 역할을 한다.

```

// 원시 타입 선언
type NewStringType = string; // string은 NewStringType이다.
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = "male" | "female"; // 유니언(Union)

const stringVar: NewStringType = "test";

// 오브젝트 타입 선언
type IdolType = {
  name: string;
  year?: number; // optional
};
```

### 3.2 Inteface

- type과 유사한 기능을 제공한다.
- type과 차이점은 원시(primitive) 타입에 대한 선언은 불가능하다.

```
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

// interface에서 Type 사용 가능
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

// Optional 타입
interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: "안유진",
  // year: 2002,
};
```

## 4. Enum

- 타입스크립트는 한정된 값들을 비교하기 위해 `enum` 타입을 제공한다.

```
/**
 * 자바스크립트 예시
 */
const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITAL";

function runWork2() {
  let state = initialState;
  try {
    state = loadingState;
    // 작업을 한다.

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState); // true

/**
 * 타입스크립트: enum 타입
 */
enum State {
  DONE, // 0
  LOADING, // 1
  INITIAL, // 2
  ERROR, // 3
}

function runWork3() {
  let state = State.INITIAL;
  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE); // true
console.log(runWork3()); // 0
```

## 참고

- [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
