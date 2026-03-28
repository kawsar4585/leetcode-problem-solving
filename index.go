package main

import "fmt"

func main() {

	nums := []int{0, 1, 1, 2, 7, 11, 15}
	target := 2
	result := twoSum(nums, target)
	fmt.Print(result)
}

func twoSum(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}

	return []int{}
}

// Two Sum - O(n) HashMap
// func twoSum(nums []int, target int) []int {
// 	m := make(map[int]int)

// 	for i, nums := range nums {
// 		complement := target - nums

// 		if idx, found := m[complement]; found {
// 			return []int{idx, i}
// 		}

// 		m[nums] = i
// 	}

// 	return []int{}
// }
