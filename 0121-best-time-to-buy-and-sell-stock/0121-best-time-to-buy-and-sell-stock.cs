public class Solution {
    public int MaxProfit(int[] prices) {
        int minValue=prices[0];
        int profit=0;
        for(int i=0;i<=prices.Length-1;i++){
            if(prices[i]<minValue){
                minValue=prices[i];
            }
            else{
                int currentProfit=prices[i]-minValue;
                if(currentProfit>profit){
                   profit=currentProfit;
                }
            }
        }
        return profit;
    }
}