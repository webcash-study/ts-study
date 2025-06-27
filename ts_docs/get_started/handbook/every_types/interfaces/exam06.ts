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

// 인터페이스를 사용하지 않으면 오브젝트 선언 자체를 표시한다.
// 오브젝트 명을 받지 않으면 에러 메세지를 읽기 어려워진다.
function echoAnimal(m: { name: string }) {
  console.log(m.name);
}

echoAnimal({ name: 12345 }); // The expected type comes from property 'name' which is declared here on type '{ name: string; }'
