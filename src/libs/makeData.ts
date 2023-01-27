import { faker } from "@faker-js/faker";
import { ITask } from "./interfaces";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newTask = (): ITask => {
  return {
    date: faker.date.between(
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 3))
    ),
    desc: faker.lorem.sentence(),
    name: faker.lorem.sentence(2),
    isComplete: faker.datatype.boolean(),
    id: faker.datatype.uuid(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): ITask[] => {
    const len = lens[depth]!;
    return range(len).map((d): ITask => {
      return {
        ...newTask(),
      };
    });
  };

  return makeDataLevel();
}
