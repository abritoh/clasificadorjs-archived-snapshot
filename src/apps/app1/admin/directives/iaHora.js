/* *
    abrito (2015-11-05)
    ng-model (example): 
        $scope.hora_evento = { 
            hora: 14, 
            minuto: 20,            
        };
        data: {
            valid: true|false //-- is valid?
            horaFMT: hh:mm:ss:00
        }        

    $attrs
        optional: {'true','false'}|DEF:false
* */
angular.module('APP-CLASIFICADOR-ADMIN')

        .directive("iaHora",
                ['$timeout', 'PARAMETROS', 'AppModelService',
                    function ($timeout, PARAMETROS, AppModelService) {

                        function fnLink($scope, $element, $attrs, ngModel) {
                            
                            var OPTIONAL = false;                            
                            $scope.optional = ($attrs.optional) ? g_utils.is_true($attrs.optional) : OPTIONAL;
                            $scope.opt_str = ($scope.optional) ? '' : PARAMETROS.REQ_STR;                            

                            //-- vars
                            $scope.dx = {
                                hora: null,
                                minuto: null
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
                                $scope.dx.hora = (model && model.hora) ? {hora: model.hora} : null;
                                $scope.dx.minuto = (model && model.minuto) ? {minuto: model.minuto} : null;
                                
                                if($scope.dx.hora && $scope.dx.minuto) {
                                    ngModel.$modelValue.data.valid = true;
                                }                                
                            };
                            function updateData() {
                                if(ngModel && ngModel.$modelValue && ngModel.$modelValue.data) {
                                    var model = ngModel.$modelValue;
                                    ngModel.$modelValue.data.valid = true;
                                    model.data.horaFMT = (model.hora && model.minuto) 
                                        ? g_utils.padZero(model.hora, 2) + ':' + g_utils.padZero(model.minuto, 2) + ':00' : '00:00:00';                                    
                                }
                            }
                            
                            //-- watch
                            $scope.$watch('dx.hora', function () {
                                if( !($scope.dx.hora && $scope.dx.hora.hora)) return null;
                                ngModel.$modelValue.hora = $scope.dx.hora.hora; 
                                updateData();
                            });
                            
                            $scope.$watch('dx.minuto', function () {
                                if( !($scope.dx.minuto && $scope.dx.minuto.minuto)) return null;
                                ngModel.$modelValue.minuto = $scope.dx.minuto.minuto; 
                                updateData();
                            });                            
                            
                            //-- startup
                            (function() {
                                $scope.get_list_hora = g_utils.getIntRangeList(0, 1, 24, 2, 'hora');
                                $scope.get_list_minuto = g_utils.getIntRangeList(0, 1, 60, 2, 'minuto');
                            })();
                        }

                        return {
                            restrict: "AE",
                            replace: true,
                            require: 'ngModel',
                            link: fnLink,
                            scope: { },
                            templateUrl: "apps/app1/admin/directives/templates/iaHora.html"
                        };

                    }])


        ;

