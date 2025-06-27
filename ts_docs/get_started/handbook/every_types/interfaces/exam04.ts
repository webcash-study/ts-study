/**
 * interface 타입은 오브젝트에 새로운 값을 추가할 수 있다.
 */
interface Mammal {
  genus: string;
}

interface Mammal {
  breed?: string;
}

const animal: Mammal = {
  genus: "1234",
  breed: 1, // Type 'number' is not assignable to type 'string'.
};

type Reptile = {
  genus: string;
};

// Duplicate identifier 'Reptile'
type Reptile = {
  breed?: string;
};
