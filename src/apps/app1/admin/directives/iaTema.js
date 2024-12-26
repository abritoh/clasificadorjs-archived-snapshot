/* *
 abrito (2015-11-30)
 ng-model (example): 
 $scope.tema = { 
    idTipoTema: null, 
    idSubTipoTema: null, 
    idSubSubTipoTema: null, 
    idSubSubSubTipoTema: null,

    data: {
         valid: true|false //-- isValid
    }
 }
 * */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaTema",
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
                                tipoTema: null,
                                subTipoTema: null,
                                subSubTipoTema: null,
                                subSubSubTipoTema: null
                            };

                            //-- ngModel
                            ngModel.$render = function () {
                                if(ngModel && ngModel.$modelValue) {
                                    ngModel.$modelValue.data = { valid:false };
                                }
                                
                                if ($scope.linkComplete && ngModel.$modelValue && ngModel.$modelValue.idTipoTema) {
                                    $scope.rootValue = angular.copy(ngModel.$modelValue); //--deeep-copy
                                    f_get_list_tipo_tema(function (arr_data) {
                                        $scope.dx.tipoTema = arr_data.getItem("id", $scope.rootValue.idTipoTema);                                        
                                    });
                                }

                                if ($scope.linkComplete && ngModel.$modelValue && ngModel.$modelValue.idTipoTema === null) {
                                    $scope.dx.tipoTema = null;
                                    $scope.dx.subTipoTema = null;
                                    $scope.dx.subSubTipoTema = null;
                                    $scope.dx.subSubSubTipoTema = null;
                                    f_get_list_tipo_tema(function (data) {
                                        $scope.setValid(data);
                                    });
                                }
                            };

                            //-- f_get_list
                            function f_get_list_tipo_tema(fnThen) {
                                var param = { id: 'TemaIA'};
                                AppModelService.getList(PARAMETROS.URL.get_list_tipo_tema, param, function (response) {
                                    $scope.get_list_tipo_tema = response.data.data;
                                    if (!$scope.dx.tipoTema && ngModel.$modelValue && ngModel.$modelValue.idTipoTema && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.tipoTema = $scope.get_list_tipo_tema.getItem("id", ngModel.$modelValue.idTipoTema);
                                    } else {
                                        if (ngModel.$modelValue)
                                            ngModel.$modelValue.idTipoTema = null;
                                        $scope.dx.tipoTema = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subtipo_tema(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_tema, param, function (response) {
                                    $scope.get_list_subtipo_tema = response.data.data;
                                    if (!$scope.dx.subTipoTema && ngModel.$modelValue && ngModel.$modelValue.idSubTipoTema && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subTipoTema = $scope.get_list_subtipo_tema.getItem("id", ngModel.$modelValue.idSubTipoTema);
                                    } else {
                                        ngModel.$modelValue.idSubTipoTema = null;
                                        $scope.dx.subTipoTema = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subsubtipo_tema(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_tema, param, function (response) {
                                    $scope.get_list_subsubtipo_tema = response.data.data;
                                    if (!$scope.dx.subSubTipoTema && ngModel.$modelValue && ngModel.$modelValue.idSubSubTipoTema && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subSubTipoTema = $scope.get_list_subsubtipo_tema.getItem("id", ngModel.$modelValue.idSubSubTipoTema);
                                    } else {
                                        ngModel.$modelValue.idSubSubTipoTema = null;
                                        $scope.dx.subSubTipoTema = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_subsubsubtipo_tema(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_subtipo_tema, param, function (response) {
                                    $scope.get_list_subsubsubtipo_tema = response.data.data;
                                    if (!$scope.dx.subSubSubTipoTema && ngModel.$modelValue && ngModel.$modelValue.idSubSubSubTipoTema && 
                                            response.data && response.data.data && response.data.data.length > 0) {
                                        $scope.dx.subSubSubTipoTema = $scope.get_list_subsubsubtipo_tema.getItem("id", ngModel.$modelValue.idSubSubSubTipoTema);
                                    } else {
                                        ngModel.$modelValue.idSubSubSubTipoTema = null;
                                        $scope.dx.subSubSubTipoTema = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            
                            //-- $watch
                            $scope.$watch('dx.tipoTema', function () {
                                if (!($scope.dx.tipoTema && $scope.dx.tipoTema.id)) {
                                    $scope.dx.subTipoTema = null;
                                    return;
                                }
                                f_get_list_subtipo_tema({id: $scope.dx.tipoTema.id}, function (data) {
                                    ngModel.$modelValue.idTipoTema = $scope.dx.tipoTema.id;
                                    ngModel.$modelValue.data.tipoTema = $scope.dx.tipoTema; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subTipoTema', function () {
                                if (!($scope.dx.subTipoTema && $scope.dx.subTipoTema.id)) {
                                    $scope.dx.subSubTipoTema = null;
                                    return;
                                }
                                f_get_list_subsubtipo_tema({id: $scope.dx.subTipoTema.id}, function (data) {
                                    ngModel.$modelValue.idSubTipoTema = $scope.dx.subTipoTema.id;
                                    ngModel.$modelValue.data.subTipoTema = $scope.dx.subTipoTema; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subSubTipoTema', function () {
                                if (!($scope.dx.subSubTipoTema && $scope.dx.subSubTipoTema.id)) {
                                    $scope.dx.subSubSubTipoTema = null;
                                    return;
                                }
                                f_get_list_subsubsubtipo_tema({id: $scope.dx.subSubTipoTema.id}, function (data) {
                                    ngModel.$modelValue.idSubSubTipoTema = $scope.dx.subSubTipoTema.id;
                                    ngModel.$modelValue.data.subSubTipoTema = $scope.dx.subSubTipoTema; //--data
                                    $scope.setValid(data);
                                });
                            });
                            $scope.$watch('dx.subSubSubTipoTema', function () {
                                if (!($scope.dx.subSubSubTipoTema && $scope.dx.subSubSubTipoTema.id)) {
                                    $scope.dx.subSubSubSubTipoTema = null;
                                    return;
                                }
                                ngModel.$modelValue.idSubSubSubTipoTema = $scope.dx.subSubSubTipoTema.id;
                                ngModel.$modelValue.data.subSubSubTipoTema = $scope.dx.subSubSubTipoTema; //--data
                                $scope.setValid(true);
                            });
                            
                            //-- valid
                            $scope.setValid = function(data) {
                                if(ngModel.$modelValue && ngModel.$modelValue.data) {
                                    ngModel.$modelValue.data.valid = (data===true) ? true : !(data && data.length > 0);
                                }
                            };                            
                            
                            //-- events
                            $scope.$on(PARAMETROS.EVENTOS.tema_disable, function(event, data) {
                                //--console.log(PARAMETROS.EVENTOS.tema_disable, data)
                                $scope.dx.disable = data.disable;
                                $scope.dx.deep = data.deep ? parseInt(data.deep) : $scope.DEF_DEEP;                                
                            });                            


                            //-- startup
                            (function () {
                                $timeout(function () {
                                    f_get_list_tipo_tema(function (data) {
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
                            templateUrl: "apps/app1/admin/directives/templates/iaTema.html"
                        };

                    }])
        ;