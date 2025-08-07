function findMaxConsecutiveOnes(nums: number[]): number {
    let count=0;
    let count1=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]===1) {
            count++;
        }else{
            count1=Math.max(count1,count);
            count=0;
        }
    }
    if(count1>count){
        return count1
    }
    else{
        return count
    }
}
