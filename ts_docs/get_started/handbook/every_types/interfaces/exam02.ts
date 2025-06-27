/**
 * Diferences Between Type Aliases and Interfaces
 */

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

/**
 * Type과 Interface의 주요 차이점
 *
 * 기존 interface에 새로운 필드를 추가할 수 있다.
 * 하지만 type은 생성 후 변경할 수 없다.
 */
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// 타입은 생성 후 변경할 수 없다.
type Window = {
  title: string;
};

type Window = {
  ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'
