# Union과 Intersection

## 1. Union 기본기

### 1.1 유니언이란

- `유니언(Union)`은 타입스크립트에서 타입을 병합할 때 사용하는 방법이다.
- 예를 들어 문자열(string) 또는 불리언(boolean) 타입을 병합하기 위해 `|` 키워드를 사용한다.

```
type StringOrBooleanType = string | boolean; 

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // Type 'undefined' is not assignable to type 'StringOrBooleanType'
```

- 타입을 계속 추가할 수 있을 뿐만 아니라 원하는 값을 입력받도록 타입을 선언할 수 있다.

```
// 타입을 계속 추가할 수 있다.
type StrBoolNullType = string | boolean | null;

// 원하는 값을 입력하도록 만들 수 있다.
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';
let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // Type '"INITIAL"' is not assignable to type 'StateTypes'
```


### 1.2 리스트 타입 선언

- 리스트 타입을 유니언 타입으로 선언할 수 있다.
- 이때 주의해야 할 점은 타입 선언시 스코프에 따라서 입력할 수 있는 리스트의 요소가 달라진다.

```
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

// error: 문자열 요소만 입력받거나 불리언 요소만 입력 받아야 한다.
// strListOrBooleanList = [
//     true,
//     '아이유'
// ]

// 문자열 요소와 불리언 요소 모두 입력 받을 수 있도록 유니언 타입을 수정한다.
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
```

### 1.3 인터페이스 타입 선언

- `interface` 타입을 유니언 타입으로 선언할 수 있다.

```
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
```

- 타입명을 지정하지 않고 직접 타입을 지정할 수도 있다.
- 하지만 이 경우 에러 발생시 타입명으로 에러 메세지를 받지 않아 에러를 파악하기 어렵다.
- 따라서 가급적 유니언 사용시 타입명을 지정해 주도록 하자.

```
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
```

### 1.4 서로 관계가 없는 타입 선언

- `union`은 합집합 개념이므로 서로 관계 없는 타입을 병합할 수 있다.
- 여기서 주의해야 할 점은 아래 예시처럼 `name`과 `breed` 프로퍼티를 생략하면 `Person` 또는 `Cat` 타입을 충족시키지 못해 에러가 발생하게 된다.

```
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
```