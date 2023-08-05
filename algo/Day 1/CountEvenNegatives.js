/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) { 
    CEN=0
        for(i=0;i<=nums.length-1;i++){
            if((nums[i]%2==0)&&(nums[i]<0)){
                CEN=CEN+1
            }
        }
        return CEN 
}
var x=countEvenNegatives(nums2);
console.log(x);