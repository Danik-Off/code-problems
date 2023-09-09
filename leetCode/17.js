/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
const pushedNums =digits.split('');
const keyboard =
{
    1:[],
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
    '*':[],
    0:[],
    '#':[]  
}
array  = [""]
    console.log(pushedNums)
    for (x=0;x<pushedNums.length;x++)
    {
        num  = pushedNums[x]
        console.log(keyboard[num])
        newArr = []
        for(i = 0;i<array.length; i ++)
        {
            
            sym = array[i];
            for (y=0;y<keyboard[num].length;y++)
            { 
                w = keyboard[num][y]
                newArr.push(sym+w)
            }
        }
        array = newArr
    }

if(array[0]==="")
{
    array = []
}
return array;
};
console.log(letterCombinations(""));