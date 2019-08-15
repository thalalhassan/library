
function valid()
{
	var name = document.forms["RegForm"]["name"];			 
	var email = document.forms["RegForm"]["email"]; 
	var phone = document.forms["RegForm"]["phn"]; 
	var age = document.forms["RegForm"]["age"]; 
    var password = document.forms["RegForm"]["pwd"];
    var rpassword= document.forms["RegForm"]["rpwd"]; 

	var emailPat =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var emailid=email.value;
	var matchArray = emailid.match(emailPat);

	var phnPat=/^\+?([0-9]{2})\)?[-. ]?([0-9]{5})([0-9]{5})$/;
	var phn=phone.value;
	var matchPhn = phn.match(phnPat);


	if(name.value=="")
	{
		data="Enter your Name!";
		message(data);
		name.focus();
    	return false;
	 }
	 if((name.value).length<4)
	
	{
		data="Atleast 4 character";
		message(data);
		name.focus();
		return false;
	}
	if(/[^a-z\s]/gi.test(name.value))
	{
		data="Special characters are not allowed in name";
		message(data);
		name.focus();
		return false;
	}
	if(age.value=="")
   	{
		 data="Enter your Age!";
		 message(data);
     	age.focus();
     	return false;
 	}
	if((age.value).length!=2)
	
	{
		data="Age is not valid (age between 9-99 are allowed)";
		message(data);
		age.focus();
		return false;
	}
	if(email.value=="")
	{
		data="Enter your E-mail ID";
		message(data);
		email.focus();
		return false;
	}
	if (matchArray == null)
	{
		data="Email format error. Enter Correct Email ID. ";
		message(data);
		email.focus();
		return false;
	}
	
	if(phone.value=="")
   	{
		 data="Enter Phone Number!";
		 message(data);
     	phone.focus();
     	return false;
 	}
	if( matchPhn==null)  
	{
		data="Phone No. format  should be +91-xxxxxxxxx (x should be a number)";
		message(data);
		phone.focus();
		return false;
	}
	if((phone.value).length<14)
	
	{
		data="Phone number is not valid (length<10)";
		message(data);
		phone.focus();
		return false;
	}
	if((phone.value).length>15)
	
	{
		data="Phone number is not valid (length limit exceeded)";
		message(data);
		phone.focus();
		return false;
	}
	
	
	if(password.value=="")
	{
		data="Enter Password!";
		message(data);
		password.focus();
    	return false;
 	}
	if(password.value.length<8)
	{
		data="Password is too short..(minimum 8 characters)";
		message(data);
		password.focus();
    	return false;
	}
	if(rpassword.value=="")
	{
		data="Enter Confirm Password!";
		message(data);
		rpassword.focus();
    	return false;
 	}
	if((rpassword.value)!=(password.value))
	{
		data="Passwords missmatch!";
		message(data);
		rpassword.focus();
    	return false;
	 }
	 
	 data="Welcome to library!";
	 message(data);

	 document.getElementById('RegForm').submit();
	 return true;
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function message(data) {
	modal.style.display = "block";
	document.getElementById("error").innerHTML=data;
  }

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function close(){
	window.open("../index.html","_self")

}



