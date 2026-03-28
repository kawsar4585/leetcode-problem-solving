//has map
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
}

// brute force
function twoSum2(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

let nums = [1,2,5,7,11];
let target = 9;
console.log(twoSum(nums, target));
console.log(twoSum2(nums, target));
module.exports = twoSum;