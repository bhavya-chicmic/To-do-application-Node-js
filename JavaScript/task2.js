let arr=[
    {type:'car',vehicle:'audi'},
    {type:'bike',vehicle:'splendor'},
    {type:'car',vehicle:'zen'},
    {type:'car',vehicle:'Amaze'},
    {type:'bike',vehicle:'platinum'},
    {type:'bike',vehicle:'bullet'},
]

Array.prototype.filter= function(arr){
    let obj={}
   let x
    for(let ele of arr){
       if(obj.hasOwnProperty(ele.type))
       { 
         obj[ele.type].push(ele.vehicle)
       }
       else{
        obj[ele.type]=[]
        obj[ele.type].push(ele.vehicle)
       }
         
          }
         console.log(Object.keys(obj)) 

   return obj
}
console.log(arr.filter(arr))        
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty(property1));
// expected output: true


// expected output: false
