//credit: Adapted similarly as implemented in 
//https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/1073360/Python-and-JavaScript-Easy-understanding-solution


function findRotatedIndex(nums, target, leftIdx = 0, rightIdx = nums.length - 1) {

    if (nums.length === 0) {
        return -1
    }

    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = nums[middleIdx];
        
        if (middleVal < nums[rightIdx]) {
            if (middleVal > target) {
                rightIdx = middleIdx - 1;
            }
            else if (middleVal < target) {
                if (nums[rightIdx] < target) {
                    rightIdx = middleIdx - 1
                }
                else {
                    leftIdx = middleIdx + 1
                }
            }
            else {
                return middleIdx
            }
        }
        if (middleVal >= nums[leftIdx]) {
            // middle value locates inside an pivot order
            if (middleVal > target) {
                if (nums[leftIdx] > target) {
                    leftIdx = middleIdx + 1;
                } else {
                    rightIdx = middleIdx - 1;
                }
            // target number locates inside an normal order
            } else if (middleVal < target) {
                leftIdx = middleIdx + 1;
            } else {
                return middleIdx
            }
        }
    }
    // Not found
    return -1
}


// console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1













module.exports = findRotatedIndex