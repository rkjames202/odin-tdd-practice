import { capitalize } from "./capitalize.js";

test("Capitalizes the first character in a string", () => {
  expect(capitalize("russell")).toBe("Russell");
});

test("Leading or trailing whitespaces", () => {
  expect(capitalize("    david")).toBe("    David");
  expect(capitalize("david    ")).toBe("David    ");
});

test("Special characters in beginning", () => {
  expect(capitalize("!david")).toBe("!David");
  expect(capitalize("!@$%david")).toBe("!@$%David");
});

test("Spaces in between characters", () => {
  expect(capitalize("not your average string")).toBe("Not your average string");
});

test("Special characters in between alphabetical characters", () => {
  expect(capitalize("not$!$@your$@$$average$!@$string")).toBe(
    "Not$!$@your$@$$average$!@$string"
  );
});

test("Special characters inside and around alphabetical character(s)", () => {
  expect(capitalize("#!$%!%!abc#@$ppp@$@")).toBe("#!$%!%!Abc#@$ppp@$@");
});

test("Just special characters", () => {
  expect(capitalize("!@!$!%!@#")).toBe("!@!$!%!@#");
});

test("Empty string", () => {
  expect(capitalize(" ")).toBe(" ");
});
