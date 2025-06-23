"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Types
 */
let helloText = "Hello"; // 타입 강제
helloText = true; // Type 'boolean' is not assignable to type 'string'.
/**
 * 7개의 타입
 */
const stringVar = "String";
const numberVar = 3;
const bigIntVar = BigInt(999999); // tsconfig.json → target → es2020
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined; // undefined는 명시적인 타입은 아님, 하지만 지원은 함
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
// 다른 변수에 할당할 때 any와 차이점
let unknownType;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 타입도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, true, false, false];
