# Coding Challenge 1: Array Manipulation
# Problem Statement:
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

# The function hasSubarrayWithSum(arr, target)
 in arrayMap.js solves the problem by iterating through the array once, maintaining a currentSum and a start index to track the current subarray being considered. It adjusts the subarray window based on whether the current sum is greater or lesser than the target.

# Coding Challenge 2: String Transformation
Problem Statement:
Given a string, transform it based on certain rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

# The function transformString(s)
 in stringTransform.js solves the problem by checking the divisibility of the string length by 3, 5, and 15, and applying the transformations accordingly.