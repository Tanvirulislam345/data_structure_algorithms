// Big O Notation: O(log n) - Binary Search Algorithm Because it divides the search space in half with each iteration.
// When we told log(n) that means that is log2(n)
// Description: This function performs a binary search on a sorted array to find the index of a target value.

// 1.1 Suppose you have a sorted list of 128 names, and you’re searching
// through it using binary search. What’s the maximum number of
// steps it would take?

// 1.2 Suppose you double the size of the list. What’s the maximum
// number of steps now?

// Every list will take at most log2(n) steps where n is the number of items in the list.

// If the list is 100 items long, it takes at most
// 7 guesses. If the list is 4 billion items, it takes at most 32 guesses.
// Example : 100 = 50 => 25 => 13 => 7 => 4 => 2 => 1

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
