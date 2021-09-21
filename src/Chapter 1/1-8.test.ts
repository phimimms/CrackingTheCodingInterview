import { areStringsRotation } from './1-8';

describe('1-8', () => {

  test('areStringsRotation()', () => {
    expect(areStringsRotation('waterbottle', 'erbottlewat')).toBe(true);
    expect(areStringsRotation('foo', 'oof')).toBe(true);

    expect(areStringsRotation(null, '')).toBe(false);
    expect(areStringsRotation('', null)).toBe(false);
    expect(areStringsRotation('', '')).toBe(false);
    expect(areStringsRotation('waterbottle', 'waterbottle')).toBe(false);
    expect(areStringsRotation('foo', 'bar')).toBe(false);
  });

});
