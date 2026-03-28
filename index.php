<?php

$nums = [0, 2, 5, 7, 11, 15];
$target = 9;

function twoSum($nums, $target) {
    $map = [];

    foreach ($nums as $i => $num) {
        echo "num: " . $num . "\n";
        $complement = $target - $num;
        echo "complement: " . $complement . "\n";
        if (isset($map[$complement])) {
            echo "Map: " . json_encode($map) . "\n";
            return [$map[$complement], $i];
        }
        echo "Map before adding: " . json_encode($map) . "\n";
        $map[$num] = $i;
    }
}

// function twoSum($numbers, $target){
//     for ($i = 0; $i < count($numbers); $i++){
//         echo "i: $i\n";
//         echo "numbers[i]: " . $numbers[$i] . "\n";
//         for ($j = $i + 1; $j < count($numbers); $j++){
//             echo "j: $j\n";
//             echo "numbers[j]: " . $numbers[$j] . "\n";
//             if ($numbers[$i] + $numbers[$j] == $target){
//                 return [$i, $j];
//             }
//         }
//     }
// }

$result = twoSum($nums, $target);
print_r($result);