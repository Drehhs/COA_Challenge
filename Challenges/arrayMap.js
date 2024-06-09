function hasSubarrayWithSum(arr, target) {
    let currentSum = arr[0];
    let start = 0;

    for (let i = 1; i <= arr.length; i++) {
        // If currentSum exceeds target, remove elements from the start
        while (currentSum > target && start < i - 1) {
            currentSum -= arr[start];
            start++;
        }

        // If currentSum is equal to target, return true
        if (currentSum === target) {
            return true;
        }

        // Add next element to currentSum
        if (i < arr.length) {
            currentSum += arr[i];
        }
    }

    // If no subarray found, return false
    return false;
}

// Test cases
console.log(hasSubarrayWithSum([4, 2, 7, 1, 9, 5], 17)); // Output: true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 10)); // Output: true
console.log(hasSubarrayWithSum([-1, -2, -3, -4, -5], -8)); // Output: true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 11)); // Output: false
