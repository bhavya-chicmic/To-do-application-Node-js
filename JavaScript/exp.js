let str="sample data for testing  aasvggdjfV"
//     Find Index
let x=str.indexOf("d")
console.log(x)
let find="a"
let index
for(let i=0;i<str.length;i++) {
    if(str.charAt(i)==find) {
        index=i
        break
    }
}
console.log(index)

let count=0,count1 =0
let arr1=[],arr2=[]
for(let i=0;i<str.length;i++) {
        if(str.charAt(i)=="a"||str.charAt(i)=="e" || str.charAt(i)=="i" ||str.charAt(i)=="o" || str.charAt(i)=="u") {
            arr1.push(str.charAt(i))
            count++
        }
        else{
            arr2.push(str.charAt(i))
            count1++
        }
    }
console.log(arr1)
let set=new Set(arr1)
console.log(set,count)
console.log(arr2)
let set1=new Set(arr2)
console.log(set1,count1)
let uniqueVowls=arr1.filter((ele,index,arr1)=>{
    return arr1.indexOf(ele)==index
})
console.log(uniqueVowls)
let consonants=arr2.filter((ele,index,arr2)=>{
    return arr2.indexOf(ele)==index
})
console.log(consonants)

  //Reverse 
let n=str.split('').reverse().join("")
console.log(n)
let y=""
for(let i=str.length-1;i>=0;i--){
    y+=str.charAt(i)
}
console.log(y)

// substring
str2="bhavya"
if(str.includes(str2))
{ 
    console.log("is Substring")
}
else{
    console.log("Not a Substring")
}

for(let i=0;i<str.length; i++)
{ 
   let c=str.charAt(i)

}

let freq={}
  		for(let i=0; i<str.length; i++) {
  		let c=str.charAt(i)
          if(freq[c])
          { freq[c]++}
          else{
              freq[c]=1
          }
  		}
          console.log(freq)
  		//return count;
		 
           let max=0
           let nx=Object.keys( freq).forEach((keys)=>
           { 
               if(freq[keys]>max)
               { max=freq[keys]}
           })
		console.log(max)