var secret = "Basic cHJzOnNlY3JldA==";
var mainPath = "http://localhost:8080/";

function loginRequest(username, password) {
	var path = mainPath+"token?grant_type=password&username="+username+"&password="+password;
	var request = new XMLHttpRequest();
    request.onreadystatechange = state_change;
	request.open("POST", path, true);
	request.setRequestHeader("Authorization", secret);
	request.send(null);
    function state_change() {
		if (request.readyState == 4) {
			alert("1");
			if (request.status == 200) {
				alert("2");
				var response = JSON.parse(request.responseText);
				var token = response.access_token;
				return token;
			}
			else {
				alert("3");
			}
		}
	}
	return request.status;
}
