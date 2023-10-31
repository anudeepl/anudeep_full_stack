
var even=0;
var odd=1;

for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        even=even+i;
    }
    else if(i%2==1)
    {
        odd=odd*i;
    }
}
console.log("Sum of the Even Numbers upto 100 is "+even);
console.log("Product of the odd Numbers upto 100 is "+odd);
