/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

export function areStringsPermutations(sourceA: string, sourceB: string): boolean {
  if (typeof sourceA !== 'string' || typeof sourceB !== 'string') {
    return false;
  }

  const characters = new Map();

  for (const char of sourceA) {
    characters.set(char, (characters.get(char) ?? 0) + 1);
  }

  for (const char of sourceB) {
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
