
function longestSubStr(str) {
    let map = new Map();
    let length = 0;
    let subLen = 0;
    let k = 0;
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {

            if (map.has(str[i]) && k > map.get(str[i])) {
                // console.log(map.get(str[i]))
                length++;
                if (length > subLen) {
                    subLen = length;
                }
            }
            k = map.get(str[i]) + 1;
           


            map.set(str[i], i);
        }
        else {
            map.set(str[i], i);
            length = i - k + 1;
            if (length > subLen) {
                subLen = length;
                // console.log(subLen,str[i])
            }
        }
    }
    return subLen;
}




let n = parseInt(readLine());
while (n--) {
    let str = readLine();
    console.log(longestSubStr(str))
}