/* *
 abrito (2016-04-13)
 ng-model (example): 
 $scope.categoria = { 
    idTipoCategoria: null, 
    idSubTipoCategoria: null, 
    idSubSubTipoCategoria: null, 
    idSubSubSubTipoCategoria: null,

    data: {
         valid: true|false //-- isValid
    }
 }
 * */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaCategoria",
                ['$timeout', 'PARAMETROS', 'AppModelService',
                    function ($timeout, PARAMETROS, AppModelService) {

                        function fnLink($scope, $element, $attrs, ngModel) {
                            
                            //-- vars
                            $scope.DEF_DEEP = 4;
                            $scope.linkComplete = false;
                            $scope.rootValue = null;

                            $scope.dx = {
                                disabled: false,
                                deep: $scope.DEF_DEEP,
                                tipoCategoria: null,
                                subTipoCategoria: null,
                                subSubTipoCategoria: null,
                                subSubSubTipoCategoria: null
                            };

                            //-- ngModel
                            ngModel.$render = function () {
                                if(ngModel && ngModel.$modelValue) {
                                    ngModel.$modelValue.data = { valid:false };
                                }
                                
                                if ($scope.linkComplete && ngModel.$modelValue && ngModel.$modelValue.idTipoCategoria) {
                                    $scope.rootValue = angular.copy(ngModel.$modelValue); //--deeep-copy
                                    f_get_list_tipo_categoria(function (arr_data) {
                                        $scope.dx.tipoCategoria = arr_data.getItem("id", $scope.rootValue.idTipoCategoria);                                        
                                    });
                                }

                                if ($scope.linkComplete && ngModel.$modelValue && ngModel.$modelValue.idTipoCategoria === null) {
                                    $scope.dx.tipoCategoria = null;
                                    $scope.dx.subTipoCategoria = null;
                                    $scope.dx.subSubTipoCategoria = null;
                                    $scope.dx.subSubSubTipoCategoria = null;
                                    f_get_list_tipo_categoria(function (data) {
                                        $scope.setValid(data);
                                    });
                                }
                            };

                            //-- f_get_list
                            function f_get_list_tipo_categoria(fnThen) {
                                var param = { id: 'AgendaIA'};
                                AppModelService.getList(PARAMETROS.URL.get_list_tipo_categoria, param, function (response) {
                                    $scope.get_list_tipo_categoria = response.data.data;
                                    if (!$scope.dx.tipoCategoria && ngModel.$modelValue && ngModel.$modelValue.idTipoCategoria && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.tipoCategoria = $scope.get_list_tipo_categoria.getItem("id", ngModel.$modelValue.idTipoCategoria);
                                    } else {
                                        if (ngModel.$modelValue)
                                            ngModel.$modelValue.idTipoCategoria = null;
                                        $scope.dx.tipoCategoria = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subtipo_categoria(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_categoria, param, function (response) {
                                    $scope.get_list_subtipo_categoria = response.data.data;
                                    if (!$scope.dx.subTipoCategoria && ngModel.$modelValue && ngModel.$modelValue.idSubTipoCategoria && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subTipoCategoria = $scope.get_list_subtipo_categoria.getItem("id", ngModel.$modelValue.idSubTipoCategoria);
                                    } else {
                                        ngModel.$modelValue.idSubTipoCategoria = null;
                                        $scope.dx.subTipoCategoria = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subsubtipo_categoria(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_categoria, param, function (response) {
                                    $scope.get_list_subsubtipo_categoria = response.data.data;
                                    if (!$scope.dx.subSubTipoCategoria && ngModel.$modelValue && ngModel.$modelValue.idSubSubTipoCategoria && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subSubTipoCategoria = $scope.get_list_subsubtipo_categoria.getItem("id", ngModel.$modelValue.idSubSubTipoCategoria);
                                    } else {
                                        ngModel.$modelValue.idSubSubTipoCategoria = null;
                                        $scope.dx.subSubTipoCategoria = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subsubsubtipo_categoria(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_categoria, param, function (response) {
                                    $scope.get_list_subsubsubtipo_categoria = response.data.data;
                                    if (!$scope.dx.subSubSubTipoCategoria && ngModel.$modelValue && ngModel.$modelValue.idSubSubSubTipoCategoria && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subSubSubTipoCategoria = $scope.get_list_subsubsubtipo_categoria.getItem("id", ngModel.$modelValue.idSubSubSubTipoCategoria);
                                    } else {
                                        ngModel.$modelValue.idSubSubSubTipoCategoria = null;
                                        $scope.dx.subSubSubTipoCategoria = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            
                            //-- $watch
                            $scope.$watch('dx.tipoCategoria', function () {
                                if (!($scope.dx.tipoCategoria && $scope.dx.tipoCategoria.id)) {
                                    $scope.dx.subTipoCategoria = null;
                                    return;
                                }
                                f_get_list_subtipo_categoria({id: $scope.dx.tipoCategoria.id}, function (data) {
                                    ngModel.$modelValue.idTipoCategoria = $scope.dx.tipoCategoria.id;
                                    ngModel.$modelValue.data.tipoCategoria = $scope.dx.tipoCategoria; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subTipoCategoria', function () {
                                if (!($scope.dx.subTipoCategoria && $scope.dx.subTipoCategoria.id)) {
                                    $scope.dx.subSubTipoCategoria = null;
                                    return;
                                }
                                f_get_list_subsubtipo_categoria({id: $scope.dx.subTipoCategoria.id}, function (data) {
                                    ngModel.$modelValue.idSubTipoCategoria = $scope.dx.subTipoCategoria.id;
                                    ngModel.$modelValue.data.subTipoCategoria = $scope.dx.subTipoCategoria; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subSubTipoCategoria', function () {
                                if (!($scope.dx.subSubTipoCategoria && $scope.dx.subSubTipoCategoria.id)) {
                                    $scope.dx.subSubSubTipoCategoria = null;
                                    return;
                                }
                                f_get_list_subsubsubtipo_categoria({id: $scope.dx.subSubTipoCategoria.id}, function (data) {
                                    ngModel.$modelValue.idSubSubTipoCategoria = $scope.dx.subSubTipoCategoria.id;
                                    ngModel.$modelValue.data.subSubTipoCategoria = $scope.dx.subSubTipoCategoria; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subSubSubTipoCategoria', function () {
                                if (!($scope.dx.subSubSubTipoCategoria && $scope.dx.subSubSubTipoCategoria.id)) {
                                    $scope.dx.subSubSubSubTipoCategoria = null;
                                    return;
                                }
                                ngModel.$modelValue.idSubSubSubTipoCategoria = $scope.dx.subSubSubTipoCategoria.id;
                                ngModel.$modelValue.data.subSubSubTipoCategoria = $scope.dx.subSubSubTipoCategoria; //--data
                                $scope.setValid(true);
                            });
                            
                            //-- valid
                            $scope.setValid = function(data) {
                                if(ngModel.$modelValue && ngModel.$modelValue.data) {
                                    ngModel.$modelValue.data.valid = (data===true) ? true : !(data && data.length > 0);
                                }
                            };                            
                            
                            //-- events
                            $scope.$on(PARAMETROS.EVENTOS.categoria_disable, function(event, data) {
                                //--console.log(PARAMETROS.EVENTOS.categoria_disable, data)
                                $scope.dx.disable = data.disable;
                                $scope.dx.deep = data.deep ? parseInt(data.deep) : $scope.DEF_DEEP;                                
                            });                            


                            //-- startup
                            (function () {
                                $timeout(function () {
                                    f_get_list_tipo_categoria(function (data) {
                                        $scope.setValid(data);
                                    });
                                });
                            })();

                            $scope.linkComplete = true;
                        }

                        return {
                            restrict: "AE",
                            replace: true,
                            require: 'ngModel',
                            link: fnLink,
                            scope: {},
                            templateUrl: "apps/app1/admin/directives/templates/iaCategoria.html"
                        };

                    }])
        ;