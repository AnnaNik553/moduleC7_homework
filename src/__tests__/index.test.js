import { pow } from "../index.js";
import { twoSum } from "../index.js";
import { isPalindrome } from "../index.js";
import { romanToInt } from "../index.js";

describe("test pow", () => {
    it("5 ** 3 to equal 125", () => expect(pow(5, 3)).toBe(125));
});

describe("test twoSum", () => {
    it("nums = [2,7,11,15], target = 9, return [0, 1]", () => expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])),
        it("nums = [2,6,11,7], target = 9, return [0, 3]", () => expect(twoSum([2, 6, 11, 7], 9)).toStrictEqual([0, 3])),
        it("nums = [2,6], target = 9, return undefined", () => expect(twoSum([2, 6], 9)).toBe(undefined));
});

describe("test isPalindrome", () => {
    it("1221 is palindrome", () => expect(isPalindrome(1221)).toBe(true)),
    it("123 not is palindrome", () => expect(isPalindrome(123)).toBe(false));
});

describe("test romanToInt", () => {
    it("Roman 'MCMXCIV' is 1994", () => expect(romanToInt('MCMXCIV')).toBe(1994));
});