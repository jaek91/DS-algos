
  
function findFirstZero(arr, low, high) {
    if (high >= low) {
      
      let mid = low + Math.floor((high - low) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {  
        return findFirstZero(arr, mid + 1, high)
      }
      return findFirstZero(arr, low, mid - 1)
    }
    return -1;
  }

function countZeroes(arr) {
    let n = arr.length;
    let firstZero = findFirstZero(arr, 0, n-1)
    if (firstZero === -1) {
        return 0;  }
    return n - firstZero
}

module.exports = countZeroes