// #1
export const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}


// #2
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

export function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j]
            }
        }
    }
};


// #3
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

export function isPalindrome(x) {
    let s = String(x).split('').reverse().join('');
    return String(x) == s;
};


// #4 Roman to Integer
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

export function romanToInt(s) {
    const digits = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] + s[i + 1] in digits) {
            sum += digits[s[i] + s[i + 1]];
            i++;
        } else {
            sum += digits[s[i]];
        }
    }
    return sum;
};