"use strict";
function containsDuplicate(nums) {
    let hashmap = {};
    let num;
    for (num of nums) {
        if (!hashmap[num]) {
            hashmap[num] = 1;
        }
        else {
            hashmap[num] += 1;
        }
    }
    let keys = Object.keys(hashmap);
    for (let key of keys) {
        if (hashmap[key] > 1) {
            return true;
        }
    }
    return false;
}
;
