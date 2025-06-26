/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 * 실제 구동하는 코드에서 아무런 기능이 없다.
 */

// 타입스크립트 -> 자바스크립트 컴파일
const codefactory = "code factory";
const testNumber = 3;
console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase()); // Property 'toUpperCase' does not exist on type '3'

let sampleNumber: any = 5;

// any 타입은 무엇이든 될 수 있다. (toUpperCase도 호출)
// console.log(sampleNumber.toUpperCase()); // TypeError: sampleNumber.toUpperCase is not a function

// 강제 캐스팅
let stringVar = sampleNumber as string; // let stringVar: string

// 코드를 실행해보면 캐스팅되지 않아 number가 출력된다.
console.log(typeof (sampleNumber as string)); // number

// 코드를 쓸때 사용하는 타입과 실행할 때 사용하는 타입이 다르다.
let number = 5;
console.log((number as any).toUpperCase());

// 타입스크립트 초보일때
// any를 난사하면 안된다.

// 그러면 as는 언제 써야할까?
// 상속상에서 더 구체화된 값으로 캐스팅을 할 때
