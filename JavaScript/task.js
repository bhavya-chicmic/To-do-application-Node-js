const arr1=[1,4,5,6]
const arr2=[35,67,7]
const arr=arr1.concat(arr2)
console.log(arr)
arr.push(69)
console.log(arr)
arr.unshift(96)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift(arr)
console.log(arr)
Array.prototype.filter=function(arr, element){
    let newArr = []
    for (let ele of arr){
        if(ele == element){
            newArr.push(element)
        }
    }
    if(newArr.length){
        return newArr
    }else{
        return '*'
    }
}
    
console.log(arr.filter(arr,9))
