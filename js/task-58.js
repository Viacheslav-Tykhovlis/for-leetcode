// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let lastWord = "";

  if (s.trim().includes(" ")) {
    const arr = s.split(" ");
    console.log("arr: ", arr);

    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] !== "") {
        lastWord = arr[i];
        break;
      }
    }
  } else {
    lastWord = s.trim();
  }

  console.log("lastWord: ", lastWord);
  const result = lastWord.length;
  console.log("result: ", result);
  return result;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));
