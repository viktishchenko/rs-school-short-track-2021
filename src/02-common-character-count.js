/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const copy = s2.split('');
  for (let i = 0; i < s1.length; i += 1) {
    if (copy.includes(s1[i])) {
      copy.splice(copy.indexOf(s1[i]), 1);
      counter += 1;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
