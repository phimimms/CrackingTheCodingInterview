/**
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */

import { SingleLinkedList, SingleLinkedNode } from './SingleLinkedList';

/**
 * Removes nodes with duplicate values from the single-linked list.
 * @typeParam T    - The values of the nodes in the single-linked list.
 * @param     list - The single-linked list.
 */
export function removeDuplicates< T = unknown >(list: SingleLinkedList<T>): void {
  const values = new Set<T>();

  let node: SingleLinkedNode<T> = list.head;

  if (!node) {
    return;
  }

  values.add(node.value);

  while (node?.next) {
    if (values.has(node.next.value)) {
      node.next = node.next.next;

      continue;
    }

    values.add(node.next.value);

    node = node.next;
  }
}
