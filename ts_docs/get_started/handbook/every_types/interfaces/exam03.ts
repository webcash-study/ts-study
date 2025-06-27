/**
 * 컴파일러 에러 메세지는 항상 인터페이스의 이름을 사용한다.
 */

interface Mammal {
  name: string;
}

function echoMammal(m: Mammal) {
  console.log(m.name);
}

// 타입스크립트는 아래 오브젝트의 name 프로퍼티를 string 타입으로 추론한다.
echoMammal({ name: 12343 }); // Type 'number' is not assignable to type 'string'.

type Lizard = {
  name: string;
};

function echoLizard(l: Lizard) {
  console.log(l.name);
}

echoLizard({ name: 12345 }); // Type 'number' is not assignable to type 'string'.

type Arachnid = Omit<{ name: string; legs: 8 }, "legs">;

function echoSpider(l: Arachnid) {
  console.log(l.name);
}

echoSpider({ name: 12345, legs: 8 });
