<?php
// has map
function twoSum($nums, $target) {
    $map = [];

    foreach ($nums as $i => $num) {
        $complement = $target - $num;

        if (isset($map[$complement])) {
            return [$map[$complement], $i];
        }

        $map[$num] = $i;
    }

    return [];
}

// brute force
function twoSum2($nums, $target) {
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i+1; $j < count($nums); $j++) {
            if ($nums[$i] + $nums[$j] == $target) {
                return [$i, $j];
            }
        }
    }
    return [];
}

$nums = [1,2,5,7,11];
$target = 9;
$result = twoSum($nums, $target);
print_r($result);
$result2 = twoSum2($nums, $target);
print_r($result2);