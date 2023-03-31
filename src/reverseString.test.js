import { reverseString } from "./reverseString";

test("Reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverses string with spaces", () => {
  expect(reverseString("string with 4 words")).toBe("sdrow 4 htiw gnirts");
});

test("Reverses string with special characters", () => {
  expect(reverseString("#!#!!#!#abcdefg#$@$")).toBe("$@$#gfedcba#!#!!#!#");
});

test("Throws error if a string is not passed", () => {
  expect(() => reverseString(123123)).toThrow(Error);
});
