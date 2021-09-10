import { doesStringContainUniqueCharacters } from './1-1';

describe('1-1', () => {

  test('doesStringContainUniqueCharacters()', () => {
    expect(doesStringContainUniqueCharacters('')).toBe(true);
    expect(doesStringContainUniqueCharacters('aA')).toBe(true);
    expect(doesStringContainUniqueCharacters('ab')).toBe(true);
    expect(doesStringContainUniqueCharacters('abcde')).toBe(true);

    expect(doesStringContainUniqueCharacters('aBa')).toBe(false);
    expect(doesStringContainUniqueCharacters(null)).toBe(false);
  });

});
