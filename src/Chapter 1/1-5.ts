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

  let compressedString = '';
  let index = 0;

  while (index < source.length) {
    const char = source[index];

    let count = 1;
    index += 1;

    while (source[index] === char) {
      count += 1;
      index += 1;
    }

    compressedString += `${char}${count}`;
  }

  return compressedString.length < source.length ? compressedString : source;
}
