import { analyzeArray } from "./analyzeArray";

test("Finds average value of array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ average: 3 });
  expect(analyzeArray([10, 20, 30, 40, 50])).toMatchObject({ average: 30 });
  expect(analyzeArray([2, 4, 6, 8, 10, 12])).toMatchObject({ average: 7 });
});

test("Rounds average up to two decimal places", () => {
  expect(analyzeArray([53, 23, 43, 76, 91, 333, 222])).toMatchObject({
    average: 120.14
  });
  expect(analyzeArray([23.15, 123.34, 234.3455, 56.76])).toMatchObject({
    average: 109.4
  });
});

test("Finds minimum value", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ min: 1 });
  expect(analyzeArray([-23, -345, 10, 3])).toMatchObject({ min: -345 });
  expect(analyzeArray([234, 654, 543, 968, 233])).toMatchObject({ min: 233 });
});

test("Finds maximum value", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ max: 5 });
  expect(analyzeArray([4353, 3412, 3242, 2546])).toMatchObject({ max: 4353 });
  expect(analyzeArray([10000, 1000, 100, 10])).toMatchObject({ max: 10000 });
});

test("Finds length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ length: 5 });
  expect(analyzeArray([12, 32, 43, 5, 64, 45, 64, 45, 12])).toMatchObject({
    length: 9
  });
});

test("Throws error if invalid data type is inside of array", () => {
    expect(() => analyzeArray([1, 2, 3, 4, 5, "6"])).toThrow(Error);
    expect(() => analyzeArray(["34", "56", "12", 1, 2 ,3])).toThrow(Error);
});

