"use strict";
function twoSum(nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hashmap.hasOwnProperty(difference)) {
            return [hashmap[difference], i];
        }
        else {
            hashmap[nums[i]] = i;
        }
    }
    return [0, 0];
}
;
console.log(twoSum([2, 7, 4, 4, 5, 6, 1, 2], 9));
