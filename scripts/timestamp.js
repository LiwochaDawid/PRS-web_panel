function convertToDatetime(timestamp) {
  var d = new Date(timestamp),
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),
		dd = ('0' + d.getDate()).slice(-2),
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),
		time;

	time = dd + '-' + mm + '-' + yyyy + ' ' + h + ':' + min;	
	return time;
}

function pad(num) { 
  return ("0"+num).slice(-2);
}
function getViewTime(timestamp) {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return pad(hours)+":"+pad(minutes)+":"+pad(seconds)
}