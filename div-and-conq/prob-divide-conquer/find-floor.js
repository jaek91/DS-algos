//------credit: Springboard solutions-------//


function findFloor(arr, num, low = 0, high = arr.length - 1) {
    
    if (num >= arr[high]) return arr[high];

    if (low > high) return -1;

    //find the middle index of the array
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === num) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    return findFloor(arr, num, mid + 1, high)
  }


module.exports = findFloor