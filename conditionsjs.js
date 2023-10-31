let voterAge = prompt("Please enter the voter age: ");

if (voterAge == null || voterAge == "") 
{
    console.log("User haven't entered the voter age.");
} 
else
{   
    if (voterAge < 18)
	{
	console.log("Voter is Not Eligible for Voting this Year");
	}
    else if(voterAge >= 18 && voterAge <= 60 )
	{
    console.log("Voter is Eligible for Voting this Year");
	}
	else(voterAge > 60)
	{
	console.log("Voter is a Seniour Citizen & Eligible for Voting this Year");
	}
  }