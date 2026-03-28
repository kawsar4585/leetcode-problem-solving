package main

import "fmt"

func main() {
	nums := []int{1, 2, 4, 5, 7, 11}
	target := 9
	result := TwoSum(nums, target)
	fmt.Println(result)
	result2 := TwoSum2(nums, target)
	fmt.Println(result2)

}

// has map
func TwoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if idx, found := m[complement]; found {
			return []int{idx, i}
		}
		m[num] = i
	}
	return nil
}

// brute force
func TwoSum2(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return nil
}
