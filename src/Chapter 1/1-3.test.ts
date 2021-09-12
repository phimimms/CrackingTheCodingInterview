import { areStringsPermutation } from './1-3';

describe('1-3', () => {

  test('areStringsPermutation()', () => {
    expect(areStringsPermutation('', '')).toBe(true);
    expect(areStringsPermutation('aA', 'Aa')).toBe(true);
    expect(areStringsPermutation('ab', 'ba')).toBe(true);
    expect(areStringsPermutation('abc', 'cba')).toBe(true);
    expect(areStringsPermutation('aab', 'baa')).toBe(true);

    expect(areStringsPermutation(null, '')).toBe(false);
    expect(areStringsPermutation('', null)).toBe(false);
    expect(areStringsPermutation(null, null)).toBe(false);
    expect(areStringsPermutation('ab', 'a')).toBe(false);
    expect(areStringsPermutation('ab', 'ac')).toBe(false);
    expect(areStringsPermutation('aB', 'AB')).toBe(false);
  });

});
