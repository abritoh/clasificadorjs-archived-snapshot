/* 
    Created on : 20/01/2016
    Author     : abrito
*/
angular.module('APP-CLASIFICADOR-ADMIN')

        .controller('AppCtrl',
                ['$rootScope', '$scope', '$location', 'PARAMETROS', 'AppModelService', 'ngDialog',
                    function ($rootScope, $scope, $location, PARAMETROS, AppModelService, ngDialog) {

                        $scope.socket = io.connect(PARAMETROS.SERVER_MIDDLE_NODEJS);                                                    

                        function startupScopedModel() {
                            $scope.app_model = AppModelService.APP_MODEL;
                            $scope.origen = AppModelService.APP_MODEL.ORIGEN;
                            $scope.contenido = AppModelService.APP_MODEL.CONTENIDO;
                            $scope.valoracion = AppModelService.APP_MODEL.VALORACION;
                            $scope.clasificacion = AppModelService.APP_MODEL.CLASIFICACION;
                            console.log("AppCtrl::startupScopedModel::AppModelService", AppModelService);
                        }
                        
                        AppModelService.startupApplicationModel();
                        startupScopedModel();                        

                        //-- window-message

                        $scope.$root.$on('$messageIncoming', function (event, message) {                            
                            message = angular.fromJson(message);
                            if( !(message.source === PARAMETROS.APP1.NAME)) { return; }
                        
                            console.log({ msg:'AppCtrl1 $messageIncoming', message: message });
                            switch(message.command) {
                                case 'location':
                                    message_location(message);
                                    break;
                                case PARAMETROS.EVENTOS.clasificacion_complete:
                                    message_clasificacion_complete(message);
                                break;
                            }
                        });
                        
                        //-- window message functions
                        
                        function message_location(message) {
                            $location.path('/' + message.data.path);
                        }                       

                        //-- socket: message events
                        
                        $scope.socket.on(PARAMETROS.EVENTOS.bandeja_clasificador_adm, function (data) {
                            console.log({msg:PARAMETROS.EVENTOS.bandeja_clasificador_adm, data:data});
                            $scope.$broadcast(PARAMETROS.EVENTOS.bandeja_clasificador_adm, data);
                        });

                        //-- player
                        $scope.cierraReproductor = function() {
                            var player = jwplayer("contenido_src");
                            if(player) { 
                                try {
                                    jwplayer("contenido_src").remove();
                                } catch(ex) {
                                    /*DO-NOTHING*/
                                }
                            }
                        };                        

                    }]);


