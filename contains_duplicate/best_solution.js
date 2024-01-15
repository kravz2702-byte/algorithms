"use strict";
function containsDuplicates(nums) {
    const set = new Set(nums);
    return (set.size < nums.length);
}
