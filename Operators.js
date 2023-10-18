<!DOCTYPE html>
<html>
<body>

<h2>Variables & Operators Usage in Java Script</h2>

<script>

// value of const will not change

/*While the 
value of let might vary*/

	const x,y; 
	x=10;
	y=20;
	let z=x+y;
	
	console.log("Sum value of x & y is" +z);
	
	let a=x*y;
	console.log("multiplication value of x & y is" +a);
	
	let b=y-x;
	console.log("Substracting value of x from y is" +b);
	
	const p,q; 
	p=7;
	q=22;
	let c=q%p;
	console.log("Reminder value of p to q is" +c);
	
	const u,v; 
	u=8;
	v=24;
	let w=v%u;
	console.log("Reminder value of u to v is" +c);

</script>

</body>
</html>