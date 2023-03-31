import { Calculator } from "./calculator";

let testCalculator = new Calculator();

test("Adds two numbers", () => {
  expect(testCalculator.add(2, 2)).toBe(4);
});

test("Subtracts two numbers", () => {
  expect(testCalculator.subtract(4, 1)).toBe(3);
});

test("Divides two numbers", () => {
    expect(testCalculator.divide(3, 2)).toBe(1.5);
});

test("Multiplies two numbers", () => {
    expect(testCalculator.multiply(4, 3)).toBe(12);
});

test("Throws error if numbers are not passed", () => {
    expect(() => testCalculator.add("2", "2")).toThrow(Error);
    expect(() => testCalculator.subtract("4", "1")).toThrow(Error);
    expect(() => testCalculator.divide("3", "2")).toThrow(Error);
    expect(() => testCalculator.multiply("4", "3")).toThrow(Error);
});

 test("Rounds numbers with decimal parts to 4 places", () => {
    expect(testCalculator.add(2.3433, 1.234)).toBe(3.5773);
    expect(testCalculator.subtract(5.34, 3.4)).toBe(1.94);
    expect(testCalculator.divide(4.534, 6.432)).toBe(0.7049);
    expect(testCalculator.multiply(2.3433, 1.234)).toBe(2.8916);
});

test("Handles negative numbers", () => {
    expect(testCalculator.add(-234, -43)).toBe(-277);
    expect(testCalculator.subtract(-143, -6)).toBe(-137);
    expect(testCalculator.divide(-342, -2)).toBe(171);
    expect(testCalculator.multiply(-345, -32)).toBe(11040);
});