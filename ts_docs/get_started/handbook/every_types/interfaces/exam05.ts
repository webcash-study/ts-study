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
