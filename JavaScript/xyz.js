let num=24584254
console.log(num)
let x=Array.from(num.toString())
let y=[]
for(let i=0;i<x.length;i++){
    if(parseInt(x[i])%2==0 && parseInt(x[i+1])%2==0){
       y.push(parseInt(x[i]),"(-)")
    }
    else{
        y.push(parseInt(x[i]))
    }
}
num=y.join("")
console.log(num)

let n=-1234500
  let rev=0
  let rem 
  let xy=Math.sign(n) 
  if(n<0)
  { n=n*(-1)
  }
while(n>0)
{ 
   rem = n % 10;  
   rev = rev * 10 + rem;  
   n = parseInt(n/10); 
}

console.log(rev*xy)
