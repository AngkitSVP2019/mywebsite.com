function saySomething()
{	
//alert ( "your message: " + document.getElementById("msg").value)
//alert("HI " + document.getElementById("name").value+"." + " Thank you for your feedback");
var x = document.getElementById("name").value;
var y = document.getElementById("msg").value;
var z = document.getElementById("email").value;
if(x =="" && y =="" && z =="")
{
alert("Please give your name, email and the feedback")
}

else if(x =="" && z =="")
{
alert("Sorry, you forgot to put your name and email id.")
}
else if(x =="" && y =="")
{
alert("Sorry, you forgot to put your name and you forgot to give your feedback.")
}
else if(y =="" && z =="")
{
alert("Sorry, you forgot to put your email and you forgot to give your feedback.")
}
else if(z =="")
{
alert("Sorry, you forgot to put your email id.")
}
else if(y =="")
{
alert("Please give your feedback in the message box.")
}

else if(x =="")
{
alert("Sorry, you forgot to put your name.")
}

else{
	alert( "HI " + x + "." + " Thank you for your feedback")
    }
}
