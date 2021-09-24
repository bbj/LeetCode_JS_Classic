function isPalindrome(s) {

    /** naive version:
            //abc,['a','b','c'],['c','b','a'],"cba"
            let reversed = s.split("").reverse().join("");
            return reversed === s;

            will work but we would get O(n) space complexity & O(3n) time = O(n)
     */

    //lower case and remove non-alphanum, "_" is a valid character
    //[\W]===[^A-Za-z0-9_]     ^:beginning
    s = s.toLowerCase().replace(/[\W_]/g,""); //[\W]===[^A-Za-z0-9_]

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
