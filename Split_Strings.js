//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
    if (str.length % 2 != 0) {
            str += "_";
    }

    var out = [];
    str.split("").forEach((element, i) => {
        if (i % 2 == 0) {
            out.push(element + str[i+1]);
        }
    });
    return out;
}
