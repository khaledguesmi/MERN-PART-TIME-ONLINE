function countEvenNegatives(nums) { 
    s=0
        for(i=0;i<=nums.length-1;i++){
            if((nums[i]%2==0)&&(nums[i]<0)){
                s=s+1
            }
        }
        return s 

}