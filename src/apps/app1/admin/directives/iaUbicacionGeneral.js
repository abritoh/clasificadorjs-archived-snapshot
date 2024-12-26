/* *
 abrito (2015-11-03)
 ng-model (example): 
 $scope.evento_ubicacion = { 
 idPais: "MX", 
 idEstado: "MX14", 
 idMunicipio: "MX14004", 
 idColonia: "MX140040005",
 idLocalidadRural: "MX140040005",
 idLocalidadUrbana: "MX140040100",
 
 data: {
 valid: true|false //-- is valid?
 ,pais //-- object
 ,estado //-- object
 ,municipio //-- object
 ,colonia //-- object
 ,localidadRural //-- object
 ,localidadUrbana //-- object
 }
 }
 
 $attrs
 optional: {'true','false'}|DEF:false
 * */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaUbicacionGeneral",
                ['$timeout', 'PARAMETROS', 'MAP_CONFIG', 'AppModelService',
                    function ($timeout, PARAMETROS, MAP_CONFIG, AppModelService) {

                        function fnLink($scope, $element, $attrs, ngModel) {

                            $scope.linkComplete = false;
                            $scope.rootValue = null;

                            var OPTIONAL = false;
                            $scope.optional = ($attrs.optional) ? g_utils.is_true($attrs.optional) : OPTIONAL;
                            $scope.isMX = false;
                            $scope.opt_str_edo = '';
                            $scope.opt_str_mpo = '';

                            $scope.dx = {
                                pais: null, //-- {id: 'MX', nombre: 'MÉXICO' }
                                estado: null, //-- {id: 'MX17', nombre: 'Morelos' }
                                municipio: null, //-- {id: 'MX17027', nombre: 'Totolapan' }
                                colonia: null, //-- {id: 'MX170000001', nombre: 'La calera' }
                                localidadRural: null, //-- {id: 'MX170000005', nombre: 'La rural' }
                                localidadUrbana: null     //-- {id: 'MX170000100', nombre: 'La urbana' }
                            };

                            ngModel.$render = function () {
                                if (ngModel && ngModel.$modelValue) {
                                    if ($scope.optional) {
                                        ngModel.$modelValue.data = {valid: true};
                                    } else {
                                        ngModel.$modelValue.data = {valid: false};
                                    }
                                }

                                if ($scope.linkComplete && $scope.dx.pais && $scope.dx.pais.id) {
                                    $scope.rootValue = angular.copy($scope.dx.pais); //--deeep-copy
                                    f_get_list_pais(function (arr_data) {
                                        $scope.dx.pais = arr_data.getItem("id", $scope.rootValue.id);
                                    });
                                }

                                if ($scope.linkComplete && ngModel.$modelValue && ngModel.$modelValue.idPais === null) {
                                    $scope.dx.pais = null;
                                    $scope.dx.estado = null;
                                    $scope.dx.municipio = null;
                                    $scope.dx.colonia = null;
                                    $scope.dx.localidadRural = null;
                                    $scope.dx.localidadUrbana = null;
                                    f_get_list_pais(function () {
                                    });
                                }
                            };

                            function f_get_list_pais(fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_pais, null, function (response) {
                                    $scope.get_list_pais = response.data.data;
                                    if (!$scope.dx.pais && ngModel.$modelValue && ngModel.$modelValue.idPais && response.data.data.length > 0) {
                                        $scope.dx.pais = $scope.get_list_pais.getItem("id", ngModel.$modelValue.idPais);
                                    } else {
                                        if (ngModel.$modelValue)
                                            ngModel.$modelValue.idPais = null;
                                        $scope.dx.pais = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_estado(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_estado, param, function (response) {
                                    $scope.get_list_estado = response.data.data;
                                    if (!$scope.dx.estado && ngModel.$modelValue && ngModel.$modelValue.idEstado && response.data.data.length > 0) {
                                        $scope.dx.estado = $scope.get_list_estado.getItem("id", ngModel.$modelValue.idEstado);
                                    } else {
                                        ngModel.$modelValue.idEstado = null;
                                        $scope.dx.estado = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_municipio(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_municipio, param, function (response) {
                                    $scope.get_list_municipio = response.data.data;
                                    if (!$scope.dx.municipio && ngModel.$modelValue && ngModel.$modelValue.idMunicipio && response.data.data.length > 0) {
                                        $scope.dx.municipio = $scope.get_list_municipio.getItem("id", ngModel.$modelValue.idMunicipio);
                                    } else {
                                        ngModel.$modelValue.idMunicipio = null;
                                        $scope.dx.municipio = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_colonia(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_colonia, param, function (response) {
                                    $scope.get_list_colonia = response.data.data;
                                    if (!$scope.dx.colonia && ngModel.$modelValue && ngModel.$modelValue.idColonia && response.data.data.length > 0) {
                                        $scope.dx.colonia = $scope.get_list_colonia.getItem("id", ngModel.$modelValue.idColonia);
                                    } else {
                                        ngModel.$modelValue.idColonia = null;
                                        $scope.dx.colonia = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_localidad_rural(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_localidad_rural, param, function (response) {
                                    $scope.get_list_localidad_rural = response.data.data;
                                    if (!$scope.dx.localidadRural && ngModel.$modelValue && ngModel.$modelValue.idLocalidadRural && response.data.data.length > 0) {
                                        $scope.dx.localidadRural = $scope.get_list_localidad_rural.getItem("id", ngModel.$modelValue.idLocalidadRural);
                                    } else {
                                        ngModel.$modelValue.idLocalidadRural = null;
                                        $scope.dx.localidadRural = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }
                            function f_get_list_localidad_urbana(param, fnThen) {
                                AppModelService.getList(PARAMETROS.URL.get_list_localidad_urbana, param, function (response) {
                                    $scope.get_list_localidad_urbana = response.data.data;
                                    if (!$scope.dx.localidadUrbana && ngModel.$modelValue && ngModel.$modelValue.idLocalidadUrbana && response.data.data.length > 0) {
                                        $scope.dx.localidadUrbana = $scope.get_list_localidad_urbana.getItem("id", ngModel.$modelValue.idLocalidadUrbana);
                                    } else {
                                        ngModel.$modelValue.idLocalidadUrbana = null;
                                        $scope.dx.localidadUrbana = null;
                                    }
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }

                            $scope.$watch('dx.pais', function () {
                                if (!($scope.dx.pais && $scope.dx.pais.id))
                                    return;

                                $scope.isMX = ($scope.dx.pais.id === MAP_CONFIG.CODE_PAIS.MX);

                                if (!$scope.optional) {
                                    ngModel.$modelValue.data.valid = $scope.isMX ? false : true;
                                }
                                $scope.opt_str_edo = $scope.isMX ? PARAMETROS.REQ_STR : '';
                                $scope.opt_str_mpo = $scope.isMX ? PARAMETROS.REQ_STR : '';

                                ngModel.$modelValue.idPais = $scope.dx.pais.id;
                                ngModel.$modelValue.data.pais = $scope.dx.pais; //--data
                                f_get_list_estado({id: $scope.dx.pais.id}, function () {
                                });
                            });
                            $scope.$watch('dx.estado', function () {
                                if (!($scope.dx.estado && $scope.dx.estado.id))
                                    return;

                                f_get_list_municipio({id: $scope.dx.estado.id}, function () {
                                    ngModel.$modelValue.idEstado = $scope.dx.estado.id;
                                    ngModel.$modelValue.data.estado = $scope.dx.estado; //--data
                                });
                            });
                            $scope.$watch('dx.municipio', function () {
                                if (!($scope.dx.municipio && $scope.dx.municipio.id))
                                    return;

                                ngModel.$modelValue.data.valid = $scope.isMX ? true : ngModel.$modelValue.data.valid;

                                f_get_list_colonia({id: $scope.dx.municipio.id}, function () {
                                    ngModel.$modelValue.idMunicipio = $scope.dx.municipio.id;
                                    ngModel.$modelValue.data.municipio = $scope.dx.municipio; //--data
                                });
                                f_get_list_localidad_rural({id: $scope.dx.municipio.id}, function () {
                                });
                                f_get_list_localidad_urbana({id: $scope.dx.municipio.id}, function () {
                                });
                            });
                            $scope.$watch('dx.colonia', function () {
                                if (!($scope.dx.colonia && $scope.dx.colonia.id))
                                    return;
                                ngModel.$modelValue.idColonia = $scope.dx.colonia.id;
                                ngModel.$modelValue.data.colonia = $scope.dx.colonia; //--data
                                $scope.dx.localidadRural = null;
                                $scope.dx.localidadUrbana = null;
                            });

                            $scope.$watch('dx.localidadRural', function () {
                                if (!($scope.dx.localidadRural && $scope.dx.localidadRural.id))
                                    return;
                                ngModel.$modelValue.idLocalidadRural = $scope.dx.localidadRural.id;
                                ngModel.$modelValue.data.localidadRural = $scope.dx.localidadRural; //--data
                                $scope.dx.colonia = null;
                                $scope.dx.localidadUrbana = null;
                            });
                            $scope.$watch('dx.localidadUrbana', function () {
                                if (!($scope.dx.localidadUrbana && $scope.dx.localidadUrbana.id))
                                    return;
                                ngModel.$modelValue.idLocalidadUrbana = $scope.dx.localidadUrbana.id;
                                ngModel.$modelValue.data.localidadUrbana = $scope.dx.localidadUrbana; //--data
                                $scope.dx.colonia = null;
                                $scope.dx.localidadRural = null;
                            });
                            
                            //-- destroy
                            $element.on('$destroy', function () {                                
                                $scope.$destroy();
                            });

                            //-- startup
                            (function () {
                                $timeout(function () {
                                    f_get_list_pais(function () {
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
                            templateUrl: "apps/app1/admin/directives/templates/iaUbicacionGeneral.html"
                        };

                    }])
        ;

