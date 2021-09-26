/**
 * An implementation of the double-linked list data structure.
 * @typeParam T - The values of the nodes in the double-linked list.
 */
export class DoubleLinkedList< T = unknown > {

  /**
   * The head of the double-linked list.
   */
  private _head: DoubleLinkedNode<T>;

  /**
   * The head of the double-linked list.
   */
  get head(): DoubleLinkedNode<T> {
    return this._head;
  }

  /**
   * Instantiates the double-linked list.
   * @param values - The list of values to populate in the double-linked list.
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
   * Appends a new node to the double-linked list.
   * @param value - The value of the new node.
   */
  $append(value: T): void {
    const node: DoubleLinkedNode<T> = { next: null, prev: null, value };

    if (!this._head) {
      this._head = node;

      return;
    }

    let head = this._head;

    while (head.next !== null) {
      head = head.next;
    }

    node.prev = head;

    head.next = node;
  }

}

/**
 * The node of a double-linked list.
 * @typeParam T - The representative value of the node.
 */
export interface DoubleLinkedNode< T = unknown > {

  /**
   * The next node in the double-linked list.
   */
  next: DoubleLinkedNode<T>;

  /**
   * The previous node in the double-linked list.
   */
  prev: DoubleLinkedNode<T>;

  /**
   * The representative value of the node.
   */
  value: T;

}
