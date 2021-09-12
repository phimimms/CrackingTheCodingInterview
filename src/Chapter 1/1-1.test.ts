import { isStringAllUnique } from './1-1';

describe('1-1', () => {

  test('isStringAllUnique()', () => {
    expect(isStringAllUnique('')).toBe(true);
    expect(isStringAllUnique('aA')).toBe(true);
    expect(isStringAllUnique('ab')).toBe(true);
    expect(isStringAllUnique('abcde')).toBe(true);

    expect(isStringAllUnique('aBa')).toBe(false);
    expect(isStringAllUnique(null)).toBe(false);
  });

});
