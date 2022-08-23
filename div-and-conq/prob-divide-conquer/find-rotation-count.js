//------credit: Springboard solutions-------//

function findRotationCount(nums, low = 0, high = nums.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let midIdx = Math.floor((low + high) / 2)
  
    // Check if element at (midIdx+1) is the minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (midIdx < high && nums[midIdx + 1] < nums[midIdx])
      return midIdx + 1;
  
    // Check if midIdx itself is minimum element
    if (midIdx > low && nums[midIdx] < nums[midIdx - 1]) {
      return midIdx;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if (nums[high] > nums[midIdx]) {
      return findRotationCount(nums, low, midIdx - 1);
    }
  
    return findRotationCount(nums, midIdx + 1, high);
}

module.exports = findRotationCount