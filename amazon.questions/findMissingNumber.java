class Solution 
{
    
//   Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// Follow up: Could you implement a solution using only O(1) extra space 
// complexity and O(n) runtime complexity?
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are 
// in the range [0,3]. 2 is the missing number in the range since it 
// does not appear in nums.

public int missingNumber(int[] nums) 
    {
        int n=nums.length;
        n=(n*(n+1))/2;//sum of n natural numbers
        int sum=0;
        //sum of array elements
        for(int i=0;i<nums.length;i++)
        {
            sum+=nums[i];
        }
        return n-sum;
    }
}

