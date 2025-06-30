/**
 * Intersection
 *
 * 오브젝트 타입 인터섹션: And 개념
 * 원시 타입 인터섹션: Never 타입
 */

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

// Contacts의 phone, address가 필요하다.
let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01012345678",
  address: "서울시",
};

// 원시 타입을 인터섹션하면 never 타입으로 변경된다.
// never: 절대로 존재할 수 없는 상황에서 사용하는 타입
type NumberAndString = number & string;

// never 타입은 어떤 타입에도 해당되지 않는다.
let numberAndString: NumberAndString = undefined;
