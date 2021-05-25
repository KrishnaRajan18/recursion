/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    // console.log(words[0].length);
    return words[0].length;
  } else if (words[0].length >= words[1].length) {
    words.splice(1, 1);
    return longest(words);
  } else if (words[0].length < words[1].length) {
    words.splice(0, 1);
    return longest(words);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr = "", index = 0) {
  if (str.length <= index) {
    return newStr;
  }
  newStr = newStr + str[index];
  return everyOther(str, newStr, (index = index + 2));
}
everyOther("hello");

/** isPalindrome: checks whether a string is a palindrome or not. */
const stripNonAlphaNum = val => {
  let str;
  switch (typeof val) {
    case "number":
      str = val.toString();
      break;
    case "object":
      str = JSON.stringify(val);
      break;
    case "string":
      str = val;
      break;
    case "boolean":
      str = null;
      break;
  }
  if (str === null || str === undefined) {
    return null;
  } else if (str.length === 0) {
    return "";
  } else {
    let newStr = str.toLowerCase().replace(/[\W_ ]/g, "");
    return newStr;
  }
};
function isPalindrome(val) {
  let str = stripNonAlphaNum(val);
  if (str == null || str === undefined) return false;

  let length = str.length;
  if (length === 0 || length === 1) {
    return true;
  }
  if (str[0] === str[length - 1]) {
    return isPalindrome(str.slice(1, length - 1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr.length === index) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newstr = "", index = str.length - 1) {
  if (index < 0) return newstr;
  newstr = newstr + str[index];
  return revString(str, newstr, (index = index - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let newArr = [];
  for (key in obj) {
    if (typeof obj[key] === "string") newArr.push(obj[key]);
    if (typeof obj[key] === "object") newArr.push(...gatherStrings(obj[key]));
  }
  return newArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] < val) return binarySearch(arr, val, middle + 1, right);
  return binarySearch(arr, val, left, middle - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
