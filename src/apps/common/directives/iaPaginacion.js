/* *
 abrito (2016-05-03)
    model (example): 
    
    $scope.pgData = [];
    $scope.pgLoadData = function(onSuccess, onError, numeroDePagina, totalRes) { ... }
 * */

angular.module('AppCommon')

        .directive("iaPaginacion",
                ['PARAMETROS', '$timeout',
                    function (PARAMETROS, $timeout) {

                        function fnController($scope, $element, $attrs) {

                            $scope.hay_mas_datos = true;
                            $scope.numeroDePagina = 0;
                            $scope.totalRes = 0;
                            $scope.loadingData = false;
                            $scope.firstPage = false;

                            $scope.loadData = function (index) {
                                //-- primera consulta
                                if (index === 0) {
                                    $scope.pgData = [];
                                    $scope.hay_mas_datos = true;
                                    $scope.numeroDePagina = 0;
                                    $scope.totalRes = 0;
                                    $scope.firstPage = true;
                                } else {
                                    $scope.firstPage = false;
                                }

                                if (!$scope.hay_mas_datos) {
                                    return;
                                }

                                $scope.numeroDePagina++;

                                var onSuccess = function (new_data) {
                                    if (new_data.length > 0) {
                                        $scope.hay_mas_datos = true;
                                        $scope.totalRes = new_data[0].totalRes ? new_data[0].totalRes : new_data.length;
                                        $scope.pgData = $scope.pgData.concat(new_data);
                                    } else {
                                        $scope.hay_mas_datos = false;
                                    }
                                    $scope.loadingData = false;
                                };
                                
                                var onError = function() {
                                    $scope.loadingData = false;
                                    $scope.hay_mas_datos = false;
                                };

                                $scope.loadingData = true;

                                //-- invoques load data controllers method
                                if (angular.isFunction($scope.pgLoadData)) {                                    
                                    $scope.pgLoadData(onSuccess, onError, $scope.numeroDePagina, $scope.totalRes, $scope.firstPage);
                                }
                            };
                            
                            var raw = $element[0];
                            $element.bind('scroll', function (event) {
                                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                                    $scope.loadData();
                                }
                            });
                            
                            $scope.$watch('loadingData', function () {
                                //--console.log('iaPaginacion::loadingData', { loadingData: $scope.loadingData, pgLoading:$attrs.pgLoading} );
                                if($scope.loadingData === true) {                                    
                                    $($element).addClass($attrs.pgLoading);
                                } else {
                                    $($element).removeClass($attrs.pgLoading);                                    
                                }
                            });
                            
                            $scope.$watch('pgReload', function () {
                                //--console.log('iaPaginacion::pgReload', {pgReload: $scope.pgReload});
                                if($scope.pgReload === true) {
                                    $timeout(function() {
                                        $scope.loadData(0);
                                        $scope.pgReload = false;
                                    });                                    
                                }
                            });                            
                            
                            $timeout(function() {
                                if( g_utils.is_true($attrs.pgLoadStart)) {
                                    $scope.loadData(0);
                                }
                            });                            
                        }

                        return {
                            restrict: "EA",
                            replace: false,
                            controller: fnController,
                            scope: {
                                pgData: '=',
                                pgReload: '=',
                                pgLoadData: '='
                            }
                        };

                    }])
        ;