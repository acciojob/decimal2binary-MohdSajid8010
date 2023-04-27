

let p=1;
let s="";
while(n>0)
{
    let rem =n%2;
    n=Math.floor(n/2);
	
if(rem == 1)
{
	s = s + '1';
}
else
{
 s = s+'0;
}
	
	
    // s =s+rem*p;
    // p=p*10;
}

console.log(s);



else s = s+'0