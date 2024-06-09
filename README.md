# COA_Challenge 1. Photo gallery 2.  Solutions to the two coding challenges.
# Photo Gallery

This project is a responsive photo gallery designed based on a Figma design. It features a desktop and mobile view with hover effects and click interactivity.

Features
Responsive design with separate layouts for desktop and mobile views.
Hover effects to enlarge images slightly.
Click functionality to display an alert with the image caption.

# Technologies Used
# HTML
# CSS
# JavaScript

photo-gallery/
├── images/
│   ├── fennec-fox.jpg
│   ├── humpback-whale.jpg
│   ├── common-brown-baboon.jpg
│   └── spotted-deer.jpg
├── index.html
├── styles.css
└── scripts.js

# Code Explanation
# HTML (index.html)
Defines the structure of the photo gallery.
Contains two sections: one for desktop view (gallery-desktop) and one for mobile view (gallery-mobile).

# CSS (styles.css)
Styles the photo gallery for both desktop and mobile views.
Includes hover effects and responsive design using media queries.

# JavaScript (scripts.js)
Adds interactivity to the gallery items.
Displays an alert with the image caption when an image is clicked.
event listeners to gallery items to open the modal and to the navigation buttons to navigate between images.


###################################################################################################################################################################################################################################################################################

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
