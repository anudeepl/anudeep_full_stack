<!DOCTYPE html>
<html>
<body>

<h2>Using While Loop</h2>

<script>

	let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
		
</script>

</body>
</html>