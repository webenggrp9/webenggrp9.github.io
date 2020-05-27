function validate(){
	var name = document.getElementByld("name").value;
	var number document.getElementByld("number").value;
	var mail = document.getElementByld("mail").value;
	var message = document.getElementByld("message").value;
		var error_message = document.getElementByld("error_message");
	
	error_message.style.padding = "10px";
	
	var text;
	if(name.length<5){
		text=" Please Enter valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if(isNaN(phone)||number.length!=10){
		text = "Please Enter Valid Phone number";
		error_message.innerHTML= text;
		return false;
	}
	if(message.length<=60){
		text="Please Enter More than 60 characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("From Submitted Successfully!")
	return true;
}