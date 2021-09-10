import { areStringsPermutations } from './1-3';

describe('1-3', () => {

  test('areStringsPermutations()', () => {
    expect(areStringsPermutations('', '')).toBe(true);
    expect(areStringsPermutations('aA', 'Aa')).toBe(true);
    expect(areStringsPermutations('ab', 'ba')).toBe(true);
    expect(areStringsPermutations('abc', 'cba')).toBe(true);
    expect(areStringsPermutations('aab', 'baa')).toBe(true);

    expect(areStringsPermutations(null, '')).toBe(false);
    expect(areStringsPermutations('', null)).toBe(false);
    expect(areStringsPermutations(null, null)).toBe(false);
    expect(areStringsPermutations('ab', 'ac')).toBe(false);
    expect(areStringsPermutations('aB', 'AB')).toBe(false);
  });

});
