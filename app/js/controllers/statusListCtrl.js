angular.module('statusModule').controller('StatusListCtrl', ['$scope', function($scope) {

	$scope.applications;	

	$scope.init = function() {
		$scope.applications= {
			BOT: {
				name: 'BOT',
				servers: {
					botcegeka: {
						url: "http://best-offer-tool-advisor-next.apps.tln-dev.cegeka.be/bestoffer/status/"
					}	
				}			
			},
			mijntelenet: {
				name: 'Mijn Telenet',
				servers: {
					sup: {
						url: "http://mijn.sup.telenet.be/mijntelenet/rest/status/"
					},
					int: {
						url: "http://mijn.int.telenet.be/mijntelenet/rest/status/"
					},
					uat: {
						url: "http://mijn.uat.telenet.be/mijntelenet/rest/status/"
					},
					trg: {
						url: "http://mijn.trg.telenet.be/mijntelenet/rest/status/"
					}

				}   
			} 
		}     
    };

    $scope.init();

}]);