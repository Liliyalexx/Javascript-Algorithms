class Solution {
  public int[] twoSum(int[] nums, int target) {
      Map<Integer,Integer> map = new HashMap<Integer,Integer>();
      int arr[] = new int[2];
      for(int i = 0 ;i<nums.length; i++)
      {
          if(map.containsKey(target - nums[i]))
          {
            arr[0] = i;
            arr[1] = map.get(target - nums[i]); 
          }
          map.put(nums[i],i);
      }
      return arr;
  }
}
****APPROACH 2 : BRUTE FORCE

class Solution 
{
  public int[] twoSum(int[] nums, int target) 
  {
     int i=0,j=0,len=nums.length;
      int arr[]=new int[2];
      for(i=0;i<len-1;i++)
      {
          for(j=i+1;j<len;j++)
          {
              if(nums[i]+nums[j]==target)
              {
                  arr[0]=i;
                  arr[1]=j;
                return arr;
              }
          }
      }
      return  arr;
  }
  // This problem we usually think to iterate over the array,this solution can solve this problem.We can use for twice,the solution time is $O(n^2)$

  public int[] twoSum(int[] nums, int target) {
    int[] result = new int[2];
    for (int i = 0; i < nums.length; i++) {
      for (int i1 = i + 1; i1 < nums.length; i1++) {
        if (nums[i] + nums[i1] == target) {
          result[0] = i;
          result[1] = i1;
          break;
        }
      }
    }
    return result;
  }
// if we search the second result one more time,the time is power of the first time.So we must marked in the first time.We can use HashMap,it can help us to marked number when we searching,so this time is$O(n)$

  public int[] twoSum(int[] nums, int target) {
    int[] result = new int[2];
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      //the second number must not not equal to the first number,and add up to target
      if (map.containsKey(target - nums[i]) && i != map.get(target - nums[i])) {
        result[0] = i;
        result[1] = map.get(target - nums[i]);
        break;
      }
      map.put(nums[i], i);
    }
    return result;
  }
}

class Solution {
  public static int[] twoSum(int[] a, int sum) {
  
      HashMap<Integer, Integer> k = new HashMap<>();
      
      for (int i=0; i<a.length; i++) {
          if (k.containsKey(sum - a[i])) {
              return new int[] {i, k.get(sum - a[i])};
          } else {
              k.put(a[i], i);
          }
      }
      
      return null;
  }
  }