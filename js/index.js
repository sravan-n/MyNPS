 function addingZero(x){
	if (x<10) {
		return '0'+x;
	}
	else{
		return x;
	}
}

setInterval(function(){
	var date = new Date;
	var time = addingZero(date.getHours())+":"+addingZero(date.getMinutes())+":"+
	addingZero(date.getSeconds());
	document.getElementById('clock').innerHTML = time;
}, 1000)

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$http.get("/data/states.json").then(function(response){
		$scope.states = response.data; 
	});
});

var app2 = angular.module("myApp2", []);
app2.controller("myCtrl2", function($scope) {
	$scope.regions = [ "NorthAtlantic", "Mid Atlantic", "National Capital", "Southeast", 
	"Midwest", "Southwest", "Rocky Mountain", "Western", "Pacific NW and Alaska"];
});