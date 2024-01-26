"use strict";
function isPalindrome(s) {
    let sStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let sArr = sStr.split('');
    let sReverseArr = [...sArr].reverse();
    let sReverseStr = sReverseArr.join('');
    if (sReverseStr === sStr) {
        return true;
    }
    else {
        return false;
    }
}
;
