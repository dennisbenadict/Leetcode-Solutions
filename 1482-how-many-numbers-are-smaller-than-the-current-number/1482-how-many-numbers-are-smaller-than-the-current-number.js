/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output=[]
    let count=0
    let arr=nums.map((num,idx)=>({num,idx}))
    arr.sort((a,b)=>b.num-a.num)
    for(i=0;i<=arr.length-1;i++){
        for(j=i+1;j<=arr.length-1;j++){
            if(arr[j].num<arr[i].num){
                count++
            }
        }
        output[arr[i].idx]=count
        count=0
    }
    return output
};

//For the number 3, which came from index 4 in the original array, there are 3 smaller numbers.So put 3 in output[4]