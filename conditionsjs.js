<!DOCTYPE html>
<html>
<body>

<h2>Student Academic Grading</h2>

<p>A <b>JavaScript program</b> for obtaining grade according to the percentage gained in Academics.</p>


<script>

//Student percentage
	let percentage = 79;
	
//Findingout under which grade student percentage would fall

	if (percentage>=90)
		{
		console.log("Grade obtained is A");
		}
	elseif(percentage>=80)
		{
		console.log("Grade obtained is B");
		}
	elseif(percentage>=70)
		{
		console.log("Grade obtained is C");
		}
	elseif(percentage>=60)
		{
		console.log("Grade obtained is D");
		}
	else(percentage<60)
		{
		console.log("Grade obtained is E & Student is Failed");
		}
		
</script>

</body>
</html>