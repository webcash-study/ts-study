# Interfaces

## 1. interface란

- `interface`는 오브젝트 타입의 이름을 생성하는 방법이다.

```
// `interface`는 오브젝트의 이름을 생성하는 방법이다.
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

## 2. type과 interface의 차이점

- `type`과 `interface`는 매우 유사하기 때문에, 대부분의 경우 둘 중 하나를 자유롭게 선택해 사용하면 된다.
- 대부분 `interface`의 기능은 `type`에서도 사용 가능하다.

```
/**
 * Inteface
 */
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

/**
 * Type
 */

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;
```

- 하지만 이 둘을 구별하는 주요 포인트는 `type`은 확장 불가능하고(새로운 프로퍼티를 추가할 수 없음) `interface`는 항상 확장 가능하다.

```
/**
 * Type과 Interface의 주요 차이점
 *
 * 기존 interface에 새로운 필드를 추가할 수 있다.
 * 하지만 type은 생성 후 변경할 수 없다.
 */

/**
 * interface 타입은 오브젝트에 새로운 값을 추가할 수 있다.
 */
interface Mammal {
  genus: string;
}

interface Mammal {
  breed?: string;
}

const animal: Mammal = {
  genus: "1234",
  breed: 1, // Type 'number' is not assignable to type 'string'.
};

type Reptile = {
  genus: string;
};

// Duplicate identifier 'Reptile'
type Reptile = {
  breed?: string;
};
```

- 또한 `interface`는 주로 원시(primitive) 타입이 아닌 오브젝트의 타입명을 생성할 때 사용한다.

```
/**
 * Type과 Interface를 사용해 오브젝트 선언하기
 */

interface AnObject1 {
  value: string;
}

type AnObject2 = {
  value: string;
};

// type은 원시 타입의 타입명을 생성할 때 사용한다.
type SanitizedString = string;
type EvenNumber = number;

// 아래 코드는 interface로 실행할 수 없다.
interface X extends string {}
```

- 인터페이스를 사용하지 않고 오브젝트 선언을 사용하면 에러 메세지가 읽기 어려워진다.

```
/**
 * 컴파일러 에러 메세지는 인터페이스의 이름을 사용한다.
 */

interface Mammal {
  name: string;
}

function echoMammal(m: Mammal) {
  console.log(m.name);
}

// 타입스크립트는 인터페이스 이름을 받아서 에러 메세지를 표시한다.
echoMammal({ name: 12343 }); // The expected type comes from property 'name' which is declared here on type 'Mammal'

// 인터페이스를 사용하지 않고 오브젝트 선언 자체를 사용하면
// 오브젝트 명을 받지 않아서 에러 메세지가 읽기 어려워진다.
function echoAnimal(m: { name: string }) {
  console.log(m.name);
}

echoAnimal({ name: 12345 }); // The expected type comes from property 'name' which is declared here on type '{ name: string; }'
```

## 2.2 정리

- 대부분의 상황에서 개인 선호에 따라 `type` 또는 `interface`를 사용하면 된다.
- `type`과 `interface`의 차이는 `확장 가능 여부`와 `원시 타입 선언 가능 유무`이다.
- 따라서 `type`은 주로 원시 타입의 타입명을 생성할 때 사용하고 `interface`는 오브젝트 타입명을 생성할 때 사용한다.
- 오브젝트 선언을 사용하는 것보다 `interface`를 사용하면 가독성이 좋은 에러 메세지를 생성할 수 있다.

## 참고

- [Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
