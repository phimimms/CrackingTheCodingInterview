import { zeroizeMatrix } from './1-7';

describe('1-7', () => {

  test('zeroizeMatrix()', () => {
    expect(zeroizeMatrix(null)).toBeNull();
    expect(zeroizeMatrix([ null ])).toBeNull();

    const source1: number[][] = [
      [ 1, 0, 3, 4 ],
      [ 1, 2, 3, 4 ],
      [ 1, 2, 0, 4 ],
    ];
    const zeroize1: number[][] = [
      [ 0, 0, 0, 0 ],
      [ 1, 0, 0, 4 ],
      [ 0, 0, 0, 0 ],
    ];

    expect(zeroizeMatrix(source1)).toEqual(zeroize1);

    const source2: number[][] = [
      [ 1, 2, 3, 4, 5, 6, 7, 8 ],
      [ 1, 2, 0, 4, 5, 6, 7, 8 ],
      [ 1, 2, 3, 4, 5, 6, 7, 8 ],
      [ 1, 2, 3, 4, 0, 6, 7, 8 ],
      [ 1, 2, 3, 4, 5, 6, 7, 8 ],
      [ 1, 2, 3, 4, 5, 6, 0, 8 ],
    ];
    const zeroize2: number[][] = [
      [ 1, 2, 0, 4, 0, 6, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 2, 0, 4, 0, 6, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 2, 0, 4, 0, 6, 0, 8 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0 ],
    ];

    expect(zeroizeMatrix(source2)).toEqual(zeroize2);
  });

});
