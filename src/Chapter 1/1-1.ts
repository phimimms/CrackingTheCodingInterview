/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/**
 * Indicates whether the source string has all unique characters.
 * @param source - The source string.
 */
export function doesStringContainUniqueCharacters(source: string): boolean {
  if (typeof source !== 'string') {
    return false;
  }

  const characters = new Set<string>();

  for (const char of source) {
    if (characters.has(char)) {
      return false;
    }

    characters.add(char);
  }

  return true;
}
