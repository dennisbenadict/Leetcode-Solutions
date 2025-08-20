/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
l=0
m=0
h=nums.length-1

while(m<=h){
    switch (nums[m]){
        case 0:
            [nums[l],nums[m]]=[nums[m],nums[l]]
            l++
            m++
             break;
        case 1:
            m++
             break;
        case 2:
            [nums[h],nums[m]]=[nums[m],nums[h]]
            h--
            break;
    }
}
return nums
};