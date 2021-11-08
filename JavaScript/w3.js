// const e = require("express");

// //1
// console.log(Array.isArray('w3resource'));
// console.log(Array.isArray([1, 2, 4, 0]));
// // 3
// function first(arr,n)
// { 
//     if(n==null) {
//         return arr[0]
//     }
//     else if(n<0)
//     { return []}
//     else{
//         return arr.slice(0,n);
//     }
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// function last(arr,n)
// { 
//     if(n==null) {
//         return arr[arr.length-1]
//     }
//     else if(n<0)
//     { return []}
//     else{
//         return arr.slice(-n);
//     }
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// // 5
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString())
// console.log(myColor.join(","))
// console.log(myColor.join("+"))

// //6
// let q = 25468546
// let x = q.toString().split("")
// let ar=[]
// for(let i=0;i<x.length;i++)
// { 
//     if(parseInt(x[i])%2==0 && parseInt(x[i+1])%2==0)
//     ar.push(x[i],"-")
//     else
//     ar.push(x[i])
// }
// console.log(ar)

// // 7
// var arr1 = [ 3, 8, 7, 6, 5, -4, 3, -2, 1 ];
// arr1.sort((a,b)=>{return a-b})
// console.log(arr1.toString())
// //8
// var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let freq={}
//   		for(let i=0; i<arr2.length; i++) {
  		
//           if(freq[arr2[i]])
//           { freq[arr2[i]]++}
//           else{
//             freq[arr2[i]]=1
//           }
//   		}
//           console.log(freq)
//   		//return count;
		 
//            let max=0
//            let key
//            let nx=Object.keys( freq).forEach((keys)=>
//            { 
//                if(freq[keys]>max)
//                { 
//                    max=freq[keys]
//                    key=keys
//             }                          
//            })
// 		console.log(max, key)
// //9
// let str='The Quick Brown Fox'
// console.log(str)
// let val=""
// for(let i=0;i<str.length;i++){
//     if( str.charCodeAt(i)>64 && str.charCodeAt(i)<=90 )
//     { 
//        val+= str.charAt(i).toLowerCase()
//     }
//     else{ 
//         val+= str.charAt(i).toUpperCase()
//     }
// }
// console.log(val)
// //10
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// for(let i=0;i<a.length;i++)
//  { 
//      console.log("row "+i)
//    for(let j=0;j<a[i].length;j++)
//     { 
//         console.log(a[i][j])
//     }5
// }
// //14
// var mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,76,5];
// let arr=[]
// for(x of mynum)
// { 
//     if(!arr.includes(x))
//     { 
//         arr.push(x)
//     }
// }
// console.log(arr)
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// function binary_Search(item,l,r,x) {
   
//     if(r>=l){
//     let m=l+Math.floor((r-l)/2)
    
//     if(item[m]==x)
//     {
//         return m
       
//     }
//     if(item[m]>x){
//     return binary_Search(item,l,m-1,x)
//     }
//     return binary_Search(item,m+1,r,x)    
   
// }
// }
// let r=items.length-1
// let x=binary_Search(items,0,r,9)
//     console.log(x)
// let arr=[1,2,3,4,67,5,6,9]
// let arr1=[67,10,5,99,87]
// console.log(arr)
// for(let item of arr1)
// {
//     if(!arr.includes(item)){
//         arr.push(item)
//     }
// }
// console.log(arr)
// var arr = ['a', , 'c'];
// var sparseKeys = Object.keys(arr);
// var denseKeys = [...arr.keys()];
// console.log(denseKeys); 
// for(let x in denseKeys)
// {
// console.log(x);  
// }
let arr=[1,2,3,4,5]
let x=arr.find((val)=>{
arr.push(10)
console.log(val)
})
console.log(x)