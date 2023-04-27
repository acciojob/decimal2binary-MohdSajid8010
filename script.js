

let p=1;
let sum=0;
while(n>0)
{
    let rem =n%2;
    n=Math.floor(n/2);
    
    sum =sum+rem*p;
    p=p*10;
}

console.log(sum);