window.onload = loginLoad;
function loginLoad(){
	var logInButton = document.getElementById("myLogin");
	logInButton.onsubmit = checkLogin;
	logInButton.onreset = resetLogin;
}

function resetLogin(){
	alert("Reset");
}
function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const usernameRegis = urlParams.get("username");
	const passwordRegis = urlParams.get("password");

	var usernameLogIn = document.forms["myLogin"]["username"];
	var passwordLogIn = document.forms["myLogin"]["password"];
	if(usernameLogIn.value == usernameRegis && passwordLogIn.value == passwordRegis){
		alert("Login Complete");
	}
	else{
		alert("Wrong Username or Password");
		return false;
	}
	//return false;
}