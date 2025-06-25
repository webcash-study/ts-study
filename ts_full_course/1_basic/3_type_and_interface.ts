/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string; // string은 NewStringType이다.
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = "male" | "female"; // 유니언(Union)

const stringVar: NewStringType = "test";

// object 선언
type IdolType = {
  name: string;
  year?: number; // optional
};

// 타입 직접 정의
// const yuJin: {
//   // 타입 정의
//   name: string;
//   year: number;
// } = {
//   // 실제 값
//   name: "안유진",
//   year: 2002,
// };

const yuJin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 *
 * Type과 겹치는 부분이 있다.
 */
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

// type과 interface의 차이점
// interface는 원시(primitive) 타입 선언이 불가능하다.
