function transformString(s) {
    const length = s.length;
    let result = '';

    // Check if length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the string
        result = s.split('').reverse().join('');
    }

    // Check if length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        result = Array.from(s, c => c.charCodeAt(0)).join(' ');
    }

    // If divisible by both 3 and 5
    if (length % 3 === 0 && length % 5 === 0) {
        // First reverse, then replace characters with ASCII codes
        result = Array.from(s.split('').reverse(), c => c.charCodeAt(0)).join(' ');
    }

    return result;
}

// Test cases
const inputs = ["Hamburger", "Pizza", "Chocolate Chip Cookie"];
inputs.forEach(input => {
    const output = transformString(input);
    console.log(`Input: '${input}', Output: '${output}'`);
});
