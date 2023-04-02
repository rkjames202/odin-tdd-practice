import { caesarCipher } from "./caesarCipher";

test("Shifts alphabetical characters accordingly", () => {
  expect(caesarCipher("abcdefg", 1)).toBe("bcdefgh");
  expect(caesarCipher("abcdefg", 2)).toBe("cdefghi");
  expect(caesarCipher("zygqwert", 1)).toBe("azhrxfsu");
});

test("Ignores spaces and punctuation", () => {
  expect(caesarCipher("peter piper pepper", 5)).toBe("ujyjw unujw ujuujw");
  expect(caesarCipher("hello, my name is russell. how are you?", 3)).toBe(
    "khoor, pb qdph lv uxvvhoo. krz duh brx?"
  );
  expect(caesarCipher("@#!adasgcz$^$^", 6)).toBe("@#!gjgymif$^$^");
});

test("Keeps casing of original string", () => {
  expect(caesarCipher("ASDGFasdXxEwE", 10)).toBe("KCNQPkcnHhOgO");
  expect(caesarCipher("WoRks As ExPeCtED", 3)).toBe("ZrUnv Dv HaShFwHG");
});