//https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return "";
    }

    var arr = newArr(strarr, k);
    
    var maxLength = getLongest(arr);

    var out = arr.find(element => element.length == maxLength);

    return out;
}

function getConsecutive(strarr, i, k) {
    var str = strarr[i];
    var l = i;

    for (var j=1; j<k; j++) {
        l++;
        if (l < strarr.length) {
            str += strarr[l];
        }
    }
    return str;
}

function newArr(strarr, k) {
    var arr = Array();
    strarr.forEach((element, i) => {
        if (i < strarr.length) {
            arr.push(getConsecutive(strarr, i, k));
        }
    });

    return arr;
}

function getLongest(arr){
    var len = 0;
    arr.forEach(element => {
        if (element.length > len) {
            len = element.length;
        }
    })
    return len;
}
