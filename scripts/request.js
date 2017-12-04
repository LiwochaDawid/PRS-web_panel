var secret = "Basic cHJzOnNlY3JldA==";
var mainPath = "http://localhost:8080/";

function loginRequest(username, password) {
	var path = mainPath+"token";
	var request = new XMLHttpRequest();
    request.onreadystatechange = state_change;
	request.open("POST", path, false);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.setRequestHeader("Authorization", secret);
	request.send("grant_type=password&username="+username+"&password="+password);
    function state_change() {
		alert(request.readyState)
		if (request.readyState == 4) {
			if (request.status == 200) {
				var response = JSON.parse(request.responseText);
				token = response.access_token;
				return token;
			}
		}
	}
	return request.status;
}
