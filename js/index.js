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

var app = angular.module("myApp",[]);
app.controller("myCtrl", function($http, $scope){
	$http.get("data/sample.json") 
	.then(function(response){
		$scope.stName = response.data.states.name;
	});
});