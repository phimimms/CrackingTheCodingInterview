import { removeDuplicates } from './2-1';
import { SingleLinkedList } from './SingleLinkedList';

describe('2-1', () => {

  test('removeDuplicates()', () => {
    const list = new SingleLinkedList([ 1, 2, 1, 2, 3, 2, 3, 2, 3, 1, 3, 4 ]);
    removeDuplicates(list);

    let node = list.head;

    for (let i = 1; i < 5; i++) {
      expect(node.value).toBe(i);

      node = node.next;
    }

    expect(node).toBeNull();
  });

});
