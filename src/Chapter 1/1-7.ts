/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row & column are set to 0.
 */

/**
 * Gets the zeroized form of the source matrix such that if an element in the source matrix is 0,
 * its entire row & column are set to 0.
 * @param   source - The source MxN matrix.
 * @returns The zeroized matrix.
 */
export function zeroizeMatrix(source: number[][]): number[][] {
  if (!Array.isArray(source)) {
    return null;
  }

  let valid = true;

  const zeroizeColumns = new Set<number>();
  const zeroizeRows = new Set<number>();

  for (const row of source.keys()) {
    const columns = source[row];

    if (!Array.isArray(columns)) {
      valid = false;

      break;
    }

    for (const column of columns.keys()) {
      const value = columns[column];

      if (value === 0) {
        zeroizeColumns.add(column);
        zeroizeRows.add(row);
      }
    }
  }

  if (!valid) {
    return null;
  }

  return Array.from(source.keys()).map((row) => {
    const columns = source[row];

    if (zeroizeRows.has(row)) {
      return columns.map(() => 0);
    }

    return Array.from(columns.keys()).map((column) => (zeroizeColumns.has(column) ? 0 : columns[column]));
  });
}
