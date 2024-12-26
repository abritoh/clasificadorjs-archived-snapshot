/* *
    abrito (2015-11-05)
    ng-model (example): 
        $scope.fecha_evento = { 
            anio: 2010, 
            mes:8, 
            dia:7 
        };
        data: {
            valid: true|false //-- is valid?
            fechaFMT: dd/MM/YYYY
        }
    $attrs
        yearStep = '1'
        yearCount = '5'
        optional: {'true','false'}|DEF:false

* */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaFecha",
                ['$timeout', 'PARAMETROS', 'AppModelService',
                    function ($timeout, PARAMETROS, AppModelService) {

                        function fnLink($scope, $element, $attrs, ngModel) {
                            
                            var OPTIONAL = false;
                            $scope.optional = ($attrs.optional) ? g_utils.is_true($attrs.optional) : OPTIONAL;
                            $scope.opt_str = ($scope.optional) ? '' : PARAMETROS.REQ_STR;
                            
                            //-- vars
                            $scope.dx = {
                                anio : null,    //-- {anio: 2010}
                                mes : null,     //-- {mes: 1, nombreMes: 'ENERO'}
                                dia : null,      //-- {dia: 1}
                                data: {}        //-- internal
                            };
                            
                            //-- ngModel
                            ngModel.$render = function() {
                                
                                if(ngModel && ngModel.$modelValue) {                                    
                                    if($scope.optional) {
                                        ngModel.$modelValue.data = { valid:true };
                                    } else {
                                        ngModel.$modelValue.data = { valid:false };
                                    }
                                }                                
                                
                                var model = ngModel.$modelValue;
                                $scope.dx.anio = (model && model.anio) ? {anio: model.anio} : null;
                                $scope.dx.mes = (model && model.mes) ? {mes: model.mes, nombreMes: g_utils.monthList[model.mes-1]} : null;
                                $scope.dx.dia = (model && model.dia) ? {dia: model.dia} : null;
                                 
                                if($scope.dx.anio && $scope.dx.mes && $scope.dx.dia) {
                                    ngModel.$modelValue.data.valid = true;
                                }
                            };
                            
                            function updateData() {
                                if(ngModel && ngModel.$modelValue && ngModel.$modelValue.data) {
                                    var model = ngModel.$modelValue;
                                    ngModel.$modelValue.data.valid = true;
                                    model.data.fechaFMT = g_utils.getDateFormat_DDMMYYYY(g_utils.DateFromObject(ngModel.$modelValue));                                    
                                }
                            }

                            //-- watch
                            $scope.update_list_dia = function (fnThen) {
                                var anio_obj = $scope.dx.anio, mes_obj = $scope.dx.mes;
                                if (anio_obj && mes_obj) {
                                    $scope.get_list_dia = AppModelService.getDiaList(anio_obj.anio, mes_obj.mes);
                                    if( angular.isFunction(fnThen)) { fnThen(); }
                                }
                            };                            
                            $scope.$watch('dx.anio', function () {
                                if( !($scope.dx.anio && $scope.dx.anio.anio)) return;                                
                                var model = ngModel.$modelValue;
                                model.anio = $scope.dx.anio.anio;
                                $scope.update_list_dia(function() {
                                    $scope.dx.dia = (model && model.dia && 
                                        model.dia <= $scope.get_list_dia[$scope.get_list_dia.length-1].dia ) ? {dia: model.dia} : null;                                    
                                });
                            });
                            $scope.$watch('dx.mes', function () {
                                if( !($scope.dx.mes && $scope.dx.mes.mes) ) return; 
                                $scope.update_list_dia(function() {
                                    var model = ngModel.$modelValue;
                                    model.mes = $scope.dx.mes.mes;
                                    $scope.dx.dia = (model && model.dia && 
                                        model.dia <= $scope.get_list_dia[$scope.get_list_dia.length-1].dia ) ? {dia: model.dia} : null;                                        
                                });
                            });
                            $scope.$watch('dx.dia', function () {
                                if( !($scope.dx.dia && $scope.dx.dia.dia)) return null;
                                ngModel.$modelValue.dia = $scope.dx.dia.dia;
                                updateData();
                            });                            
                            
                            //-- startup
                            (function () {
                                $timeout(function() {
                                    var d = new Date(),
                                        anios_antes = $attrs.yearCount > 40 ? $attrs.yearCount : PARAMETROS.FECHA_ANIOS_ANTES;
                                    $scope.get_list_anio = g_utils.getIntRangeList(d.getFullYear(), $attrs.yearStep, anios_antes, false, 'anio');
                                    AppModelService.getJsonList(PARAMETROS.URL.get_list_mes, function (response) { $scope.get_list_mes = response.data.data; });
                                });
                            })();
                        }

                        return {
                            restrict: "AE",
                            replace: true,
                            require: 'ngModel',
                            link: fnLink,
                            scope: { },
                            templateUrl: "apps/app1/admin/directives/templates/iaFecha.html"
                        };

                    }])


        ;

