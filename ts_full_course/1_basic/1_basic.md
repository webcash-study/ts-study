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

## 5. 타입 추론

- `타입 추론(type inference)`은 타입을 입력하지 않아도 타입스크립트가 변수, 함수, 파라미터 값의 타입을 유추하는 기능이다.

```
// 변수 선언
let stringType = "string"; // let stringType: string
let booleanType = true; // let booleanType: boolean
let numberType = 30; // let numberType: number

booleanType = false;
// booleanType = "false"; // Type 'string' is not assignable to type 'boolean'

// 상수 선언
// const 키워드를 사용하면 구체적인 타입으로 지정된다.
const constStringType = "const string"; // const constStringType: "const string"
const constBooleanType = true; // const constBooleanType: true
```

- 객체 프로퍼티의 상수화(구체적인 값을 타입으로 지정)는 `as const` 키워드를 사용한다.

```
let yuJin = {
  name: "안유진", // string
  age: 2003, // number
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2); // { name: '코드팩토리', age: 2003 }

// 객체의 프로퍼티를 구체적인 값으로 지정
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yuJin3.name = "코드팩토리"; // Type '"코드팩토리"' is not assignable to type '"안유진"'
console.log(yuJin3.name); // name: "안유진"
console.log(yuJin2.name); // name: string
```

- 타입스크립트는 배열 요소의 타입이 서로 다르면 유니언(|) 키워드를 사용해 배열의 타입을 지정한다.
- 배열 선언 시, `as const` 키워드를 사용하면 `튜플(tuple)`을 생성할 수 있는데, 튜플의 요소는 수정 불가능하다.
- 또한 타입스크립트는 배열의 길이는 무시하지만 튜플의 길이는 검사하여 에러 메세지를 표시해주므로 에러에 주의해야 한다.

```
let numbers = [1, 2, 3, 4, 5]; // let numbers: number[]
let numbersAndString = [1, 2, 3, "4", "5", "6"]; // let numbersAndString: (string | number)[]

// numbers.push("6"); // Argument of type 'string' is not assignable to parameter of type 'number'
const number = numbers[0]; // const number: number
const nos = numbersAndString[0]; // const nos: string | number

// 특정 값들로 구성된 배열: 튜플(tuple)
const twoNumbers = [1, 3] as const; // const twoNumbers: readonly [1, 3]
// twoNumbers[0] = 10; // Cannot assign to '0' because it is a read-only property
// twoNumbers.push(100); // Property 'push' does not exist on type 'readonly [1, 3]'
const first = twoNumbers[0]; // const first: 1

// 타입스크립트는 배열의 길이를 알지 못한다.
// 하지만 튜플의 경우 에러 메세지를 표시한다.
const nos2 = numbersAndString[6]; // const nos2: string | number
// const first2 = twoNumbers[3]; // Tuple type 'readonly [1, 3]' of length '2' has no element at index '3'
```

## 6. 캐스팅

- 타입스크립트가 자바스크립트로 변환되면 캐스팅 기능은 실행 환경에서 아무런 기능을 하지 않는다.
- 따라서 캐스팅 기능을 남용하면 코드 상에서 사용하는 타입과 실제 실행할 때 사용하는 타입이 일치하지 않을 수 있다.

```
const codefactory = "code factory"; // string
const testNumber = 3; // number

// number 타입은 string 타입의 메소드 호출이 불가능하다.
console.log(codefactory.toUpperCase());
console.log(testNumber.toUpperCase()); // Property 'toUpperCase' does not exist on type '3'

// 코드에서 사용하는 타입과 실행할 때 사용하는 타입이 다르다.
let sampleNumber: any = 5;
let stringVar = sampleNumber as string; // let stringVar: string
console.log(typeof (sampleNumber as string)); // number
```

- `any` 타입은 무엇이든 될 수 있기 때문에, 코드 상에서 에러가 표시되지 않는다.
- 따라서 오류가 발생한다고 무조건 `any` 타입을 사용하는 것에 주의해야 한다.

```
// any 타입은 무엇이든 될 수 있다. (toUpperCase도 호출)
let sampleNumber: any = 5;
console.log(sampleNumber.toUpperCase()); // TypeError: sampleNumber.toUpperCase is not a function

let number = 5; // number;
console.log((number as any).toUpperCase()); // TypeError: number.toUpperCase is not a function
```

## 참고

- [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
