app.controller("PeopleCtrl",["$scope","$http", function($scope,$http){
	$scope.peopleList = [];
	
	$scope.search = function(){	
		$http.get('http://localhost:8090/rest/people').then(
		function sucess(response){
			$scope.peopleList = response.data;
		}, function error(response){
			//show error/warning message
		});

	}	
	
}]);