angular.module('statusModule')
    .factory('$requestParam', ['$location', function($location) {
        return {
            getOriginUrl: function() {
                var originUrl = $location.search()["origin"];

                if(typeof originUrl === 'undefined') {
                    return ""
                }

                return originUrl;
            }
        }
    }]);