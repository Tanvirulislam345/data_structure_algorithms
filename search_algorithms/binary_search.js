// Big O Notation: O(log n) - Binary Search Algorithm Because it divides the search space in half with each iteration.
// Description: This function performs a binary search on a sorted array to find the index of a target value.

let list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const midValue = arr[mid];
    if (target === midValue) {
      return mid;
    } else if (target < midValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findResult(value) {
  if (value !== -1) {
    console.log(`Element found at index: ${value} = ${list[value]}`);
  } else {
    console.log("Element not found in the array.");
  }
}

findResult(binarySearch(list, 23)); // Element found at index: 5 = 23
findResult(binarySearch(list, 19));
findResult(binarySearch(list, 91));
