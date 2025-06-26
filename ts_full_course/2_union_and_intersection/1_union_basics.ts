/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나다.
 */
type StringOrBooleanType = string | boolean; 

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // Type 'undefined' is not assignable to type 'StringOrBooleanType'

// 타입을 계속 추가할 수 있다.
type StrBoolNullType = string | boolean | null;

// 원하는 값을 입력하도록 만들 수 있다.
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';
let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // Type '"INITIAL"' is not assignable to type 'StateTypes'

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담',
];

strListOrBooleanList = [
    true,
    false,
    false,
    true,
];

// strListOrBooleanList = [
//     true,
//     '아이유'
// ]

type StrOrNumberList = (string | boolean | null)[];
let strOrNumberList = [
    1, 2, 3,
    '아이유',
    '레드벨벳',
];

strOrNumberList = [
    1, 2, 3
];

strOrNumberList = [
    '아이유', '레드벨벳'
];

/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;
let animalOrHuman: AnimalOrHuman = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

// 주소(address)를 입력하면 타입스크립트는 Human 타입으로 추론
console.log(animalOrHuman); // { name: '최지호', age: 32, address: '대한민국' }
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

// 주소(address)를 입력하지 않으면 타입스크립트는 Animal 타입으로 추론
animalOrHuman = {
    name: '오리',
    age: 9,
};
console.log(animalOrHuman); // { name: '오리', age: 9 }
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); // error: Property 'address' does not exist on type 'Animal'.

// 캐스팅의 문제점
// console.log((animalOrHuman as Human).address); // 타입스크립트는 Human 타입으로 착각하게 된다.

/**
 * 타입을 선언할 때 유니언을 형성하면 좋은점
 */
// 타입 직접 지정
let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 9,
};

// 타입 이름으로 에러 메세지를 받지 않아 읽기 어려움
// 타입 키워드를 사용해서 에러를 파악하는 데 유용하다.
// console.log(animalOrHuman2.address); // Property 'address' does not exist on type '{ name: string; age: number; }'
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

// 네 개의 값을 다 넣어도 문제 없다.
// 유니언은 집합의 개념으로 봐야한다. (합집합)
// name과 breed 프로퍼티를 입력하지 않으면 에러가 발생한다.
// 어느 타입도 충족되지 않으면 안된다.
const personOrCat: PersonOrCat = {
    name: '코드팩토리',
    age: 32,
    breed: 'Yorkshire Terrier',
    country: '영국',
}