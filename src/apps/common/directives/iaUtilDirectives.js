/* *
 abrito (2016-05-03)
* */
angular.module('AppCommon')

        .directive('iaWhenScrolled', function () {
            return {
                restrict: "A",
                link: function ($scope, $element, $attrs) {
                    var raw = $element[0];
                    $element.bind('scroll', function (event) {
                        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                            $scope.$apply($attrs.iaWhenScrolled);
                        }
                    });
                }
            };
        })

        .directive('iaSelectOnClick', ['$window', function ($window) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        element.on('click', function () {
                            if (!$window.getSelection().toString()) {
                                // Required for mobile Safari
                                this.setSelectionRange(0, this.value.length)
                            }
                        });
                    }
                };
            }])
        
        
        .directive('iaAsyncButton', ['$rootScope', 'AsyncButtonAPI', function ($rootScope, AsyncButtonAPI) {
            return {
                restrict: 'A',
                replace: false,
                scope: {},
                link: function($scope, $element, $attrs) {
                    $scope.api = AsyncButtonAPI;
                    $scope.originalHtml = '';
                    $scope.asyncLabel = $attrs.iaAsyncLabel;
                    $scope.iaAsyncKey = $attrs.iaAsyncKey;

                    $scope.api.addItem($scope.iaAsyncKey);
                    
                    function invoking () {
                        $scope.originalHtml = $element.html();
                        $element.html($scope.asyncLabel);
                        $element.prop('disabled', true);
                        $element.addClass('ia-async-button');                        
                    }
                    
                    function success () {
                        $element.html($scope.originalHtml);
                        $element.prop('disabled', false);
                        $element.removeClass('ia-async-button');                        
                    }
                    
                    function error () {
                        $element.html($scope.originalHtml);
                        $element.prop('disabled', false);
                        $element.removeClass('ia-async-button');                        
                    }
                    
                    $rootScope.$on('IA_AsyncAPI_Event', function(event, data) {                        
                        if(data && data.key === $scope.iaAsyncKey) {
                            switch(data.state) {
                                case 'invoking': invoking(); break;
                                case 'success': success(); break;
                                case 'error': error(); break;
                            }
                        }
                    });
                },
                controller: function ($scope) {
                }
            };
        }])

        

        ;