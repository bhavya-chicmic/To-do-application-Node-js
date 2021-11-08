let arr=[
    {id:2,value:'a'},
    {id:1,value:'x'},
    {id:2,value:'b'},
    {id:2,value:'c'},
    {id:1,value:'y'},
    {id:3,value:'q'},
]

Array.prototype.filter= function(arr)
{ 
    let obj={}
     for(let ele of arr){
        if(obj.hasOwnProperty(ele.id))
        { 
          obj[ele.id].push(ele.value)
        }
        else{
         obj[ele.id]=[]
         obj[ele.id].push(ele.value)
        }
           }
  
        arr.splice(0,arr.length,obj)
        console.log(obj)
    return  arr        
 }

console.log(arr.filter(arr))
let tempGirls = Array(5).fill("girl",0);
console.log(tempGirls)