angular.module('statusModule').controller('StatusModuleCtrl', ['$scope', '$rest', function($scope, $rest) {

    var startupTimeTimer, refreshClusterTimer;

    $scope.init = function() {
        initPropertiesAndStartupTimer();
        // initClusterInstances();
        // stopTimersOnDestroy();
    };

    

    function initPropertiesAndStartupTimer() {
        serverUrl = $scope.server.url;
        $rest.get(serverUrl + 'properties')
            .success(function (properties) {
                $scope.properties = properties;
                // var startUpTime = new Date(parseInt(properties.startUpTime));
                // setAndStartUpTimer(startUpTime)
            });
    }

    $scope.isSsoPropertyAvailable = function(property) {
        return property && property != '';
    }

    // function setAndStartUpTimer(startUpTime) {
    //     $scope.uptime = countdown(startUpTime).toString();
    //     startupTimeTimer = setInterval(function() {
    //         $scope.uptime = countdown(startUpTime).toString();
    //         $scope.$apply();
    //     }, 1000);
    // }


    // function initClusterInstances() {
    //     $rest.get('cluster/members')
    //         .success(function(members) {
    //             $scope.clusterMembers = members;

    //             startRefreshClusterInstancesTimer();
    //         });
    // }

    // function startRefreshClusterInstancesTimer() {
    //     refreshClusterTimer = setInterval(function() {
    //         $rest.get('cluster/members')
    //             .success(function(members) {
    //                 $scope.clusterMembers = members;
    //             });
    //         $scope.$apply();
    //     }, 5000);
    // }


    // function stopTimersOnDestroy() {
    //     $scope.$on("$destroy", function () {
    //         clearInterval(startupTimeTimer);
    //         clearInterval(refreshClusterTimer);
    //     });
    // }

}]);