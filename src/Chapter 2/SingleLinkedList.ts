/**
 * An implementation of the single-linked list data structure.
 * @typeParam T - The values of the nodes in the single-linked list.
 */
export class SingleLinkedList< T = unknown > {

  /**
   * The head of the single-linked list.
   */
  private _head: SingleLinkedNode<T>;

  /**
   * The head of the single-linked list.
   */
  get head(): SingleLinkedNode<T> {
    return this._head;
  }

  /**
   * Instantiates the single-linked list.
   * @param values - The list of values to populate in the single-linked list.
   */
  constructor(values?: T[]) {
    this._head = null;

    if (!Array.isArray(values)) {
      return;
    }

    for (const value of values) {
      this.$append(value);
    }
  }

  /**
   * Appends a new node to the single-linked list.
   * @param value - The value of the new node.
   */
  $append(value: T): void {
    const node: SingleLinkedNode<T> = { next: null, value };

    if (!this._head) {
      this._head = node;

      return;
    }

    let head = this._head;

    while (head.next !== null) {
      head = head.next;
    }

    head.next = node;
  }

}

/**
 * The node of a single-linked list.
 * @typeParam T - The representative value of the node.
 */
export interface SingleLinkedNode< T = unknown > {

  /**
   * The next node in the single-linked list.
   */
  next: SingleLinkedNode<T>;

  /**
   * The representative value of the node.
   */
  value: T;

}
