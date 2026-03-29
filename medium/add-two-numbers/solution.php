<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

class Solution {
    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
    */

    function addTwoNumbers($l1, $l2) {
        $head = new ListNode(0);
        $current = $head;
        $carry = 0;

        while($l1 !== null || $l2 !== null || $carry > 0){
            $sum = $carry;
            if ($l1 !== null) {
                $sum += $l1->val;
                $l1 = $l1->next;
            }

            if($l2 !== null) {
                $sum += $l2->val;
                $l2 = $l2->next;
            }

            $carry = intval($sum / 10);
            $current->next = new ListNode($sum % 10);
            $current = $current->next;
        }
        return $head->next;
    }

}

$l1 = new ListNode(9, new ListNode(9, null));
$l2 = new ListNode(1, null);

$solution = new Solution();
$result = $solution->addTwoNumbers($l1, $l2);
while ($result !== null) {
    echo $result->val . " ";
    $result = $result->next;
}