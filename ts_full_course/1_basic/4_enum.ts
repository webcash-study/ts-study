/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */
function runWork() {
  let state = "INITIAL";
  try {
    state = "LOADING";
    // 작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

// 한정된 값들을 비교할 때 가장 큰 문제점
console.log(runWork() === "DONE"); // true
console.log(runWork() === "DONNE"); // false

/**
 * 자바스크립트만 사용하는 경우
 */
const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITAL";

function runWork2() {
  let state = initialState;
  try {
    state = loadingState;
    // 작업을 한다.

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState); // true

/**
 * 타입스크립트: enum 타입
 */
enum State {
  DONE, // 0
  LOADING, // 1
  INITIAL, // 2
  ERROR, // 3
}

function runWork3() {
  let state = State.INITIAL;
  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE); // true
console.log(runWork3()); // 0
