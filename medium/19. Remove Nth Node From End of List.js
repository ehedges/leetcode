/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(removeNth(head,n) == n) return head.next;
    return head;
};

function removeNth(node,n)
{
    if(node == null) return 0;
    const currentNode = removeNth(node.next,n)+1;
    if(currentNode == n+1) node.next = node.next.next;
    return currentNode; 
}
