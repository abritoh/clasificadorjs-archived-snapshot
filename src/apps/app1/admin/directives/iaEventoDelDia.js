/* *
 abrito (2016-03-23)
 $scope.eventoDelDia = {
 nombre: null,
 ubicacion: {
 idPais: null,
 idEstado: null,
 idMunicipio: null,
 idColonia: null,
 idLocalidadRural: null,
 idLocalidadUrbana: null
 },
 fecha: {
 anio: null,
 mes: null,
 dia: null
 },
 hora: {
 hora: null,
 minuto: null
 },
 prioridad: null,
 asignacion: null,
 activo: null
 };
 
 $attrs:
 iaName: '' //(*)   unique iaName    
 mode: '' //(opt) {'agregar','editar'}|DEF:'agregar'
 * */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaEventoDelDia",
                ['PARAMETROS', '$timeout', 'AppModelService',
                    function (PARAMETROS, $timeout, AppModelService) {

                        function fnLink($scope, $element, $attrs, ngModel) {

                            $scope.MODE = 'agregar'; //-- {'agregar', 'editar'}

                            $scope.iaName = $attrs.iaName ? $attrs.iaName : '';
                            $scope.mode = $attrs.mode ? $attrs.mode : $scope.MODE;
                            $scope.form_valid = false;

                            $scope.dx = {
                                nombre: null,
                                ubicacion: {
                                    idPais: null,
                                    idEstado: null,
                                    idMunicipio: null,
                                    idColonia: null,
                                    idLocalidadRural: null,
                                    idLocalidadUrbana: null},
                                fecha: {
                                    anio: null,
                                    mes: null,
                                    dia: null
                                },
                                hora: {
                                    hora: null,
                                    minuto: null
                                },
                                prioridad: null,
                                asignacion: null,
                                activo: null
                            };

                            //-- ngModel
                            ngModel.$render = function () {
                                if (ngModel && ngModel.$modelValue) {
                                    ngModel.$modelValue.data = {valid: false};
                                }

                                var model = ngModel.$modelValue;
                                console.log('iaEventoDelDia::Model: ', model);
                                $scope.dx.nombre = model.nombre ? model.nombre : '';
                                $scope.dx.ubicacion = model.ubicacion ? model.ubicacion : {
                                    idPais: null, idEstado: null, idMunicipio: null, idColonia: null, idLocalidadRural: null, idLocalidadUrbana: null
                                };
                                $scope.dx.fecha = model.fecha ? model.fecha : {anio: null, mes: null, dia: null};
                                $scope.dx.hora = model.hora ? model.hora : {hora: null, minuto: null};
                                $scope.dx.prioridad = model.prioridad ? model.prioridad : null;
                                $scope.dx.asignacion = model.asignacion ? model.asignacion : null;
                                if($attrs.mode === 'agregar') {
                                    $scope.dx.activo = null;
                                } else {
                                     $scope.dx.activo = g_utils.is_true(model.activo);
                                }
                                
                            };

                            $scope.$watch('dx.nombre', function () {
                                ngModel.$modelValue.nombre = $scope.dx.nombre ? $scope.dx.nombre : '';
                            });
                            $scope.$watch('dx.ubicacion', function () {
                                ngModel.$modelValue.ubicacion = $scope.dx.ubicacion ? $scope.dx.ubicacion : {
                                    idPais: null, idEstado: null, idMunicipio: null, idColonia: null, idLocalidadRural: null, idLocalidadUrbana: null
                                };
                            });
                            $scope.$watch('dx.fecha', function () {
                                ngModel.$modelValue.fecha = $scope.dx.fecha ? $scope.dx.fecha : {anio: null, mes: null, dia: null};
                            });
                            $scope.$watch('dx.hora', function () {
                                ngModel.$modelValue.hora = $scope.dx.hora ? $scope.dx.hora : {hora: null, minuto: null};
                            });
                            $scope.$watch('dx.prioridad', function () {
                                ngModel.$modelValue.prioridad = $scope.dx.prioridad ? $scope.dx.prioridad : '';
                            });
                            $scope.$watch('dx.asignacion', function () {
                                ngModel.$modelValue.asignacion = $scope.dx.asignacion ? $scope.dx.asignacion : '';
                            });
                            $scope.$watch('dx.activo', function () {                                
                                if($scope.dx.activo !== null) {                                
                                    ngModel.$modelValue.activo = g_utils.is_true($scope.dx.activo);
                                }
                            });

                            $scope.validate = function () {
                                $scope.form_valid = $scope.this_form.$valid && $scope.dx.ubicacion.data.valid && 
                                    $scope.dx.fecha.data.valid && $scope.dx.hora.data.valid;                                
                                return $scope.form_valid;
                            };

                            $scope.aceptar = function () {
                                var valid = $scope.validate();
                                var message = {iaName: $scope.iaName, valid: valid};
                                console.log('PARAMETROS.EVENTOS.evento_del_dia_aceptar', message);
                                $scope.$emit(PARAMETROS.EVENTOS.evento_del_dia_aceptar, message);
                            };

                            $scope.cancelar = function () {
                                var message = {iaName: $scope.iaName, cancel: true};
                                console.log('PARAMETROS.EVENTOS.evento_del_dia_cancelar', message);
                                $scope.$emit(PARAMETROS.EVENTOS.evento_del_dia_aceptar, message);
                            };

                            function f_get_list_prioridad(fnThen) {
                                AppModelService.getJsonList(PARAMETROS.URL.get_list_prioridad, function (response) {
                                    $scope.get_list_prioridad = response.data.data;
                                    /*if (!$scope.dx.pais && ngModel.$modelValue && ngModel.$modelValue.idPais && response.data.data.length > 0) {
                                     $scope.dx.pais = $scope.get_list_pais.getItem("id", ngModel.$modelValue.idPais);
                                     } else {
                                     if (ngModel.$modelValue)
                                     ngModel.$modelValue.idPais = null;
                                     $scope.dx.pais = null;
                                     }*/
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }

                            function f_get_list_capturista(fnThen) {
                                var param = {};
                                AppModelService.getList(PARAMETROS.URL.get_list_capturista, param, function (response) {
                                    $scope.get_list_capturista = response.data.data;
                                    /*if (!$scope.dx.pais && ngModel.$modelValue && ngModel.$modelValue.idPais && response.data.data.length > 0) {
                                     $scope.dx.pais = $scope.get_list_pais.getItem("id", ngModel.$modelValue.idPais);
                                     } else {
                                     if (ngModel.$modelValue)
                                     ngModel.$modelValue.idPais = null;
                                     $scope.dx.pais = null;
                                     }*/
                                    if (angular.isFunction(fnThen))
                                        fnThen(response.data.data);
                                });
                            }


                            //-- startup
                            (function () {
                                $timeout(function () {
                                    f_get_list_prioridad(function () {
                                    });
                                    f_get_list_capturista(function () {
                                    });
                                });
                            })();

                        }

                        return {
                            restrict: "AE",
                            replace: true,
                            require: 'ngModel',
                            link: fnLink,
                            scope: {},
                            templateUrl: "apps/app1/admin/directives/templates/iaEventoDelDia.html"
                        };

                    }])


        ;

        