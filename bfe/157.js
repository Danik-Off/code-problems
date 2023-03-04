/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
const numsV1 = v1.split('.');
const numsV2 = v2.split('.');
for (let index = 0; index < numsV1.length; index++) {
    if(+numsV1[index]> +numsV2[index])
    {
        return 1;
    }
    else if(+numsV1[index]< +numsV2[index])
    {
        return -1;
    }
}
return 0;
}
console.log(compare('0.1.100', '0.1.99'));
