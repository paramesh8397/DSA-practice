// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: There is no pair with sum equals to given target.

const twoSumBoolean = (arr: number[], target: number) => {
  const charSet = new Set();
  for (const num of arr) {
    const complement = target - num;
    if (charSet.has(complement)) return true;
    charSet.add(num);
  }
  return false;
};

console.log(twoSumBoolean([0, -1, 2, -3, 1], -2));
console.log(twoSumBoolean([1, -2, 1, 0, 5], 0));

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSumIndexx = (arr: number[], target: number) => {
  const charmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (charmap.has(complement)) {
      return [charmap.get(complement), i];
    } else {
      charmap.set(arr[i], i);
    }
  }
};

console.log(twoSumIndexx([2, 7, 11, 15], 9));
console.log(twoSumIndexx([3, 2, 4], 6));
console.log(twoSumIndexx([3, 3], 6));
