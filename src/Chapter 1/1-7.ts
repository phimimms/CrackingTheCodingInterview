/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row & column are set to 0.
 */

export function zeroizeMatrix(matrix: number[][]): number[][] {
  if (!Array.isArray(matrix)) {
    return null;
  }

  let valid = true;

  const zeroizeColumns = new Set<number>();
  const zeroizeRows = new Set<number>();

  for (const row of matrix.keys()) {
    const columns = matrix[row];

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

  return Array.from(matrix.keys()).map((row) => {
    const columns = matrix[row];

    if (zeroizeRows.has(row)) {
      return columns.map(() => 0);
    }

    return Array.from(columns.keys()).map((column) => (zeroizeColumns.has(column) ? 0 : columns[column]));
  });
}
