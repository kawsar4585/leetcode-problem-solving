class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    addTwoNumbers(l1, l2) {
        let head = new ListNode(0);
        let current = head;
        let carry = 0;

        while (l1 !== null || l2 != null || carry > 0) {
            let sum = carry;
            if (l1 !== null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 !== null) {
                sum += l2.val;
                l2 = l2.next;
            }
            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);
            current = current.next;
        }
        return head.next;
    }
}

let l1 = new ListNode(9, new ListNode(9, null));
let l2 = new ListNode(1, null);

let solution = new Solution();
let result = solution.addTwoNumbers(l1, l2);
while (result) {
    console.log(result.val);
    result = result.next;
}