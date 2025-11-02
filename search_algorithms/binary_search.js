let a = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1; // Invalid input
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
let target = 23;
let result = binarySearch(a, target);
if (result !== -1) {
  console.log(`Element found at index: ${result} = ${a[result]}`);
} else {
  console.log("Element not found in the array.");
}
