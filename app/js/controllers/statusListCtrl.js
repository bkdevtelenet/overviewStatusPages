angular.module('statusModule').controller('StatusListCtrl', ['$scope', function($scope) {

	$scope.applications;	

	$scope.init = function() {
		$scope.applications = applicationWithServerList;   
    };

    $scope.init();

}]);