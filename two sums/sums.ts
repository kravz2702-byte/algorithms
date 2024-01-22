function twoSum(nums: number[], target: number): number[] {
    let hashmap:{[key:number]:number} = {};
    for (let i: number=0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hashmap.hasOwnProperty(difference)){
            return [hashmap[difference], i]
        } else {
            hashmap[nums[i]] = i;
        }
    }
    return [-1,-1]
};

console.log(twoSum([2,7,4,4,5,6,1,2], 9))