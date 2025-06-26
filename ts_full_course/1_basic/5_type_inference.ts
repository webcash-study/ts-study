/**
 * Type Inference
 *
 * 타입 추론
 */

// 타입을 입력하지 않아도 타입스크립트에서 변수, 함수, 파라미터 값의 타입을 유추하는 기능
let stringType = "string"; // let stringType: string
let booleanType = true; // let booleanType: boolean
let numberType = 30; // let numberType: number

booleanType = false;
// booleanType = "false"; // Type 'string' is not assignable to type 'boolean'

// const 키워드를 사용하면 구체적인 타입으로 지정된다.
const constStringType = "const string"; // const constStringType: "const string"
const constBooleanType = true; // const constBooleanType: true

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

/**
 * Array
 */
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
