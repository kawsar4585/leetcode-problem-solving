package twosum

import (
    "reflect"
    "testing"
)

func TestTwoSum(t *testing.T) {

    result1 := TwoSum([]int{2, 7, 11, 15}, 9)
    expected1 := []int{0, 1}

    if !reflect.DeepEqual(result1, expected1) {
        t.Errorf("Expected %v, got %v", expected1, result1)
    }

    result2 := TwoSum([]int{3, 2, 4}, 6)
    expected2 := []int{1, 2}

    if !reflect.DeepEqual(result2, expected2) {
        t.Errorf("Expected %v, got %v", expected2, result2)
    }
}