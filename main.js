/*function sum() {
    for(let i in arguments){
        console.log(arguments[i])
    }
}
sum(1,2,3,4,5)*/

function delet(input) {
    let sum = input.split(' ')
    for (let i = 0; i < sum.length; i++) {
        if (sum[i]===sum[i+1]) {
            sum.splice(i,1)
        }
        
    }
    let result=sum.join('')
    return result
}
console.log(delet("progress report template elementary school"))