angular.module('statusModule')
    .factory('$rest', ['$http', '$requestParam', function($http, $requestParam) {
        

        function appendSlash(url) {
            if(url.length > 0) {
                url = (url[url.length - 1] === '/') ? url : url + '/';
            }

            return url;
        }

        return {
            get: function(url) {
                delete $http.defaults.headers.common['X-Requested-With'];
                return $http.get(url);
            },
            post: function(url, content) {
                delete $http.defaults.headers.common['X-Requested-With'];
                return $http.post(url, content);
            }
        }
    }]);