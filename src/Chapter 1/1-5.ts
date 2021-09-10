/**
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2b1c5a3.
 * If the "compressed" string would not become smaller than the original string,
 * your method should return the original string.
 */

export function compressStringByRepeatedCharacters(source: string): string {
  if (typeof source !== 'string') {
    return null;
  }

  let compressed = '';

  let [ char ] = source;
  let count = 1;

  for (let i = 1; i < source.length; i++) {
    const nextChar = source[i];

    if (nextChar === char) {
      count += 1;

      continue;
    }

    compressed += `${char}${count}`;
    char = nextChar;
    count = 1;
  }

  compressed += `${char}${count}`;

  return compressed.length < source.length ? compressed : source;
}
