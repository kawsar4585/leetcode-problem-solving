function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let current = head;
    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1){
            l1 = l1.next;
        }
        if (l2){
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return head.next;
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);
while (result) {
    console.log(result.val);
    result = result.next;
}