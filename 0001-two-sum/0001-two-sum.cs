public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int,int>HashMap=new Dictionary<int,int>();
        for(int i=0;i<=nums.Length-1;i++){
            int diff=target-nums[i];
            if(HashMap.ContainsKey(diff)){
                return new int[] {HashMap[diff],i};
            }
            else{
                HashMap[nums[i]]=i;
            }
        }
        return new int[0];
    }
}