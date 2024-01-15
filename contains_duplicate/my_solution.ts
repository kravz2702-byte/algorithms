function containsDuplicate(nums: number[]): boolean {
    interface Hash {
        [key:string] : number
    }
    let hashmap: Hash = {};
    let num:number
    for (num of nums) {
        if (!hashmap[num]) {
            hashmap[num] = 1
        } else {
            hashmap[num] += 1
        }
    }
    let keys = Object.keys(hashmap)
    for (let key of keys) {
        if (hashmap[key] > 1) {
            return true
        } 
    }
    return false
};
