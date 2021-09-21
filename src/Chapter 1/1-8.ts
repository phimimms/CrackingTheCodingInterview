/**
 * Assume you have a method isSubstring() which checks if one word is a substring of another.
 * Given two strings, s1 & s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring().
 * (e.g. "waterbottle" is a rotation of "erbottlewat").
 */

/**
 * Indicates whether the source strings are a rotation of each other.
 * @param source1 - The first source string.
 * @param source2 - The second source string.
 */
export function areStringsRotation(source1: string, source2: string): boolean {
  if (typeof source1 !== 'string' || typeof source2 !== 'string' || source1.length !== source2.length) {
    return false;
  }

  return source1 !== source2 && `${source1}${source1}`.includes(source2);
}
