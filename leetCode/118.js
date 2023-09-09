/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    answer = [[1]];
    if(numRows>1)
    {
        answer.push([1,1])
        for(i =2;i<numRows;i++)
        {
            newArr =[1]
           for(x =0;x< answer[answer.lenght-1]-1;x++)
           {
            a =  answer[answer.lenght-1][x]
            b =  answer[answer.lenght-1][x+1]

            newArr = 
            
           }
         
        }
    }
};
console.log(
    JSON.stringify(
        generate(4)
    )
)