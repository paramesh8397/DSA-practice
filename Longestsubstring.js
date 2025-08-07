const longestSubstring = (str: string) => {
  let left = 0;
  let right = 0;
  const charset = new Set();
  let longest = 0;
  while (right < str.length) {
    if (!charset.has(str[right])) {
      charset.add(str[right]);
      longest = Math.max(longest, charset.size);
      right++;
    } else {
      charset.delete(str[left]);
      left++;
    }
  }
  return longest;
};

console.log(longestSubstring("abccart"));
console.log(longestSubstring("abcabcabc"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("bbbbbb"));
