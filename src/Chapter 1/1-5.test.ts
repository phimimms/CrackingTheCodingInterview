import { compressStringByRepeatedCharacters } from './1-5';

describe('1-5', () => {

  test('compressStringByRepeatedCharacters()', () => {
    expect(compressStringByRepeatedCharacters('')).toBe('');
    expect(compressStringByRepeatedCharacters(null)).toBeNull();

    expect(compressStringByRepeatedCharacters('aabcccccaaa')).toBe('a2b1c5a3');
    expect(compressStringByRepeatedCharacters('aaaabbccccca')).toBe('a4b2c5a1');

    expect(compressStringByRepeatedCharacters('abc')).toBe('abc');
  });

});
