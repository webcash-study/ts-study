/**
 * Interfaces
 */

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
