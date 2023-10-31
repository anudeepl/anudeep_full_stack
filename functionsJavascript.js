
function emp(empName, num, salary) 
{
  this.empName=empName;
  this.num=num;
  this.salary=salary;
}

const emp1 = new emp("nani", 555,15000);
console.log(emp1)

function add(a,b)
{
  let c=a+b;
  return c;
}

function sub(x,y)
{
  let z=x-y;
  return z;
}

function combine()
{
  let r=add (5,5);
  let e=sub (100,50);
  // let w=r*e;
  return e;
}

console.log(combine());