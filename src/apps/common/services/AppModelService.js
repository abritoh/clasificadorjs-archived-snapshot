/* *
 abrito (2016-05)
* */
angular.module('AppCommon')

        .service('AppModelService', 
            ['$rootScope', '$localStorage', 'PARAMETROS', 'ENTIDADES', 'CommonAjaxService', 'CommonLog', 'AsyncButtonAPI',
            function ($rootScope, $localStorage, PARAMETROS, ENTIDADES, CommonAjaxService, CommonLog, AsyncButtonAPI) {

                var _this = this;
                
                /* access services */
                
                this.asyncSearchAPI = AsyncButtonAPI;
                
                /* model */
                
                $rootScope.storage = $localStorage;
                
                function newObject(base_object) {
                    return angular.copy(base_object);
                }
                
                this.resetModel = function () {
                    $localStorage.$reset();
                    $rootScope.storage = $localStorage;
                };
                
                this.startupStorageModel = function (nota) {
                    $rootScope.storage.CONSTANTE = newObject(ENTIDADES.CONSTANTE);
                    $rootScope.storage.ACTIVIDAD = newObject(ENTIDADES.ACTIVIDAD);
                    $rootScope.storage.EVENTO = newObject(ENTIDADES.EVENTO);
                    $rootScope.storage.INMUEBLE = newObject(ENTIDADES.INMUEBLE);
                    $rootScope.storage.ORGANIZACION = newObject(ENTIDADES.ORGANIZACION);
                    $rootScope.storage.SUJETO = newObject(ENTIDADES.SUJETO);
                    $rootScope.storage.SUJETO_ORGANIZACION = newObject(ENTIDADES.SUJETO_ORGANIZACION);
                    $rootScope.storage.TENDENCIA_ROL = newObject(ENTIDADES.TENDENCIA_ROL);
                    $rootScope.storage.TENDENCIA_ACT_ANUNCIADA = newObject(ENTIDADES.TENDENCIA_ACT_ANUNCIADA);
                    $rootScope.storage.TENDENCIA = newObject(ENTIDADES.TENDENCIA);
                    $rootScope.storage.APP_MODEL = newObject(ENTIDADES.APP_MODEL);
                    $rootScope.storage.PRECARGA_RELACIONADOR_TEST = ENTIDADES.PRECARGA_RELACIONADOR_TEST;
                    
                    if(nota) { 
                        $rootScope.storage.APP_MODEL.ORIGEN.idNota = nota.id_nota;
                        $rootScope.storage.APP_MODEL.CONTENIDO.idNota = nota.id_nota;
                        $rootScope.storage.APP_MODEL.VALORACION.idUI = nota.id_nota;
                        $rootScope.storage.APP_MODEL.CLASIFICACION.idNota = nota.id_nota;
                        $rootScope.storage.APP_MODEL.CONTENIDO.eventoComoApareceEnNota = nota.titulo; 
                    }                    
                    $rootScope.storage.APP_MODEL.ORIGEN.usuario = $rootScope.globals.infoUser.usuario;                    
                };
                
                this.startupApplicationModel = function() {
                    _this.CONSTANTE = $rootScope.storage.CONSTANTE ? $rootScope.storage.CONSTANTE : newObject(ENTIDADES.CONSTANTE);
                    _this.ACTIVIDAD = $rootScope.storage.ACTIVIDAD ? $rootScope.storage.ACTIVIDAD : newObject(ENTIDADES.ACTIVIDAD);
                    _this.EVENTO = $rootScope.storage.EVENTO ? $rootScope.storage.EVENTO : newObject(ENTIDADES.EVENTO);
                    _this.INMUEBLE = $rootScope.storage.INMUEBLE ? $rootScope.storage.INMUEBLE : newObject(ENTIDADES.INMUEBLE);
                    _this.ORGANIZACION = $rootScope.storage.ORGANIZACION ? $rootScope.storage.ORGANIZACION : newObject(ENTIDADES.ORGANIZACION);
                    _this.SUJETO = $rootScope.storage.SUJETO ? $rootScope.storage.SUJETO : newObject(ENTIDADES.SUJETO);
                    _this.SUJETO_ORGANIZACION  = $rootScope.storage.SUJETO_ORGANIZACION ? $rootScope.storage.SUJETO_ORGANIZACION : newObject(ENTIDADES.SUJETO_ORGANIZACION);
                    _this.TENDENCIA_ROL = $rootScope.storage.TENDENCIA_ROL ? $rootScope.storage.TENDENCIA_ROL : newObject(ENTIDADES.TENDENCIA_ROL);
                    _this.TENDENCIA_ACT_ANUNCIADA  = $rootScope.storage.TENDENCIA_ACT_ANUNCIADA ? $rootScope.storage.TENDENCIA_ACT_ANUNCIADA : newObject(ENTIDADES.TENDENCIA_ACT_ANUNCIADA);
                    _this.TENDENCIA = $rootScope.storage.TENDENCIA ? $rootScope.storage.TENDENCIA : newObject(ENTIDADES.TENDENCIA);
                    _this.APP_MODEL = $rootScope.storage.APP_MODEL ? $rootScope.storage.APP_MODEL : newObject(ENTIDADES.APP_MODEL);
                    _this.PRECARGA_RELACIONADOR_TEST = $rootScope.storage.PRECARGA_RELACIONADOR_TEST ? $rootScope.storage.PRECARGA_RELACIONADOR_TEST : ENTIDADES.PRECARGA_RELACIONADOR_TEST;                    
                };
            

                /* window-message */

                this.postMessageToWindow2 = function (commandName, data) {
                    if ($rootScope.window2) {
                        $rootScope.window2.postMessage(angular.toJson({
                            source: PARAMETROS.APP1.NAME, command: commandName, data: data}), g_utils.get_site_domain());
                    }
                };

                this.postMessageToWindow1 = function (commandName, data) {
                    if (window.opener) {
                        window.opener.postMessage(angular.toJson({
                            source: PARAMETROS.APP2.NAME, command: commandName, data: data}), g_utils.get_site_domain());
                    }
                };                
                
                /* data-services */
                
                this.get = function (obj_url, param, onSuccess, onError) {
                    return this.getList(obj_url, param, onSuccess, onError);
                };
                
                this.getList = function (obj_url, param, onSuccess, onError) {                    
                    CommonAjaxService.get(obj_url, param)
                            .then(function (response) {
                                if (jQuery.isFunction(onSuccess)) {
                                    onSuccess(response);                                    
                                }
                            }, function (response) {
                                CommonLog.logAjaxError(response, obj_url);
                                if (jQuery.isFunction(onError)) {
                                    onError();
                                }
                            });
                };

                this.getJsonList = function (obj_url, onSuccess, onError) {
                    CommonAjaxService.getJSON(obj_url.JSON)
                            .then(function (response) {
                                if (jQuery.isFunction(onSuccess)) {
                                    onSuccess(response);
                                }
                            }, function (response) {
                                CommonLog.logAjaxError(response, obj_url);
                                if (jQuery.isFunction(onError)) {
                                    onError();
                                }
                            });
                };
                
                this.getDiaList = function(year, month) {
                    var i=0, countDays = g_utils.getDaysInMonth(year, month), result=[];
                    for(i=1; i<=countDays; i++) {
                        result.push({ dia: g_utils.padZero(i,2) });
                    }
                    return result;
                };
                
                this.post = function (obj_url, param, onSuccess, onError) {
                    
                    if((PARAMETROS.AMBIENTE === 'desarrollo' && angular.isUndefined(obj_url.FORCE)) || obj_url.FORCE === 'LOCAL') {
                        return this.getList (obj_url, param, onSuccess, onError);
                    }
                    
                    CommonAjaxService.post(obj_url, param)
                        .then(function (response) {
                            if (jQuery.isFunction(onSuccess)) {
                                onSuccess(response);
                            }
                        }, function (response) {
                            CommonLog.logAjaxError(response, obj_url);
                            if (jQuery.isFunction(onError)) {
                                onError();
                            }
                        });
                };
                
                this.postForm = function (obj_url, fnGetData, fnValidate, fnOnSuccess, fnOnError) {
                    var data = null, _this = this, validateResult = 
                        jQuery.isFunction(fnValidate) ? fnValidate() : { success:true, errors:[] };
                
                    if(validateResult.success) {
                        data = jQuery.isFunction(fnGetData) ? fnGetData() : {};
                        
                        CommonAjaxService.post(obj_url, data)
                            .then(function (response) {
                                if (jQuery.isFunction(fnOnSuccess)) {
                                    fnOnSuccess(response);
                                }
                            }, function (response) {
                                CommonLog.logAjaxError(response, obj_url);
                                validateResult.errors.push(PARAMETROS.MSG.SERVICIO_NO_DISPONIBLE);
                                _this.promptValidationErr(validateResult);
                                if (jQuery.isFunction(fnOnError)) {
                                    fnOnError();
                                }
                            });
                        
                    } else {
                        this.promptValidationErr(validateResult);
                    }
                };                
                
                this.promptValidationErr = function(validateResult) {
                    var msg = '<p>Verifique lo siguiente:</p>' + 
                              '<ul class="validation_error">';
                    for(var i=0; i < validateResult.errors.length; i++) {
                            msg += '<li>' + validateResult.errors[i] + '</li>';
                    } msg += '</ul>';
                    g_utils.prompt_msg(msg);
                };    
                          

            }]);


