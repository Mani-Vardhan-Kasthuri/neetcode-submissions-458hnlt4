class Solution {
    public int[] productExceptSelf(int[] nums) {
        // [1,2,4,6]
        // [48,48,24,6]
        // [1,2,8,48]
        int[] prePro = new int[nums.length];
        int curr = 1;
        for(int i=0; i<nums.length; i++) {
            prePro[i] = curr * nums[i];
            curr = prePro[i];
        }

        int[] postPro = new int[nums.length];
        curr = 1;
        for(int i=nums.length-1; i > -1; i--) {
            postPro[i] = curr * nums[i];
            curr = postPro[i];
        }

        int[] res = new int[nums.length];
        for(int i=0; i<nums.length; i++) {
            int pre = 1;
            int post = 1;
            if(i>0) pre = prePro[i-1];
            if(i<nums.length-1) post = postPro[i+1];
            res[i] = pre * post;
        }
        return res;
    }
}  
