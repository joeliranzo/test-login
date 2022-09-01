
const validateLogin = ({data}) => {
	console.log(data)
	if (data.username === "test" && data.password == "1234"){
		alert("User Successful")
		return true;
	} 

	alert("Wrong username or password")
	return false;
}

export default validateLogin;