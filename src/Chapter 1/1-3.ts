/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

/**
 * Indicates whether the source strings are a permutation of each other.
 * @param source1 - The first source string.
 * @param source2 - The second source string.
 */
export function areStringsPermutation(source1: string, source2: string): boolean {
  if (typeof source1 !== 'string' || typeof source2 !== 'string' || source1.length !== source2.length) {
    return false;
  }

  const characters = new Map<string, number>();

  for (const char of source1) {
    characters.set(char, (characters.get(char) ?? 0) + 1);
  }

  for (const char of source2) {
    if (!characters.has(char)) {
      return false;
    }

    const numOfChar = characters.get(char) - 1;

    if (!numOfChar) {
      characters.delete(char);

      continue;
    }

    characters.set(char, numOfChar);
  }

  return !characters.size;
}
