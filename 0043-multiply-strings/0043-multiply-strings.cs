public class Solution {
    public string Multiply(string num1, string num2) {
        BigInteger nums1=BigInteger.Parse(num1);
        BigInteger nums2=BigInteger.Parse(num2);
        BigInteger product=nums1*nums2;
        string result=product.ToString();
        return result;
    }
}