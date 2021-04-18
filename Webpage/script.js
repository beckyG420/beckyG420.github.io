function validate(){
	event.preventDefault()
    var name = document.getElementById('name');
    if(!name.value){
        alert('Please enter your name');
        name.focus();
        return false;
    }

    var email = document.getElementById('email');
	var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(validate)) {
		if (validate == true) {RemoveRO();}
		} else {
		alert("Please enter valid email address!");
		email.focus();
		return false;
	}

    var message = document.getElementById('message');
    if(!message.value){
        alert('Hey! Leave a message!');
        message.focus();
        return false;
    }

    return window.open ('ThankYou.html');
}