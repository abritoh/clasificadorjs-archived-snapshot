angular.module('APP-CLASIFICADOR-ADMIN')

        .controller('Paso_4_01Ctrl',
                ['$scope', '$location', 'PARAMETROS', 'AppModelService',
                    function ($scope, $location, PARAMETROS, AppModelService) {

                        $scope.$parent.pasoBase = 1;
                        var NEXT_STEP = 'clasificacion/caso',
                            MAX_TEMA = PARAMETROS.EVENTO_DIA_MAX_TEMA, 
                            MAX_SUBTEMA = PARAMETROS.EVENTO_DIA_MAX_SUBTEMA; 
                                
                        $scope.dx = {
                            eventoDia: null,
                            tema: {
                                idTipoTema: null,
                                idSubTipoTema: null,
                                idSubSubTipoTema: null,
                                idSubSubSubTipoTema: null,
                                childs: []
                            }
                        };
                        
                        $scope.toComplete = true;
                        $scope.temas = [];
                        $scope.ui_quest_tema = false;
                        $scope.ui_quest_subtema = false;
                        $scope.otro_tema = null;
                        $scope.otro_subtema = null;
                        $scope.verResumen = false;
                        
                        //-- helper
                        
                        function getCurrentTema() {
                            if($scope.temas.length <=0) return null;
                            return $scope.temas[$scope.temas.length - 1];
                        }
                        
                        var recursive_find = function (item, temas) {
                            if (temas !== null) {
                                for (var i=0; i<temas.length; i++) {
                                    if (equals_tema(item, temas[i])) {
                                        return { parent: temas, index:i };
                                    }
                                    var found = recursive_find(item, temas[i].childs);
                                    if (found) return { parent: found.parent, index:found.index };
                                }
                            }
                        };                        
                        
                        function equals_tema(a,b) {
                            return (a.idTipoTema === b.idTipoTema &&  
                                    a.idSubTipoTema === b.idSubTipoTema &&  
                                    a.idSubSubTipoTema === b.idSubSubTipoTema &&
                                    a.idSubSubSubTipoTema === b.idSubSubSubTipoTema);
                        }                        
                        
                        function getIdTema(x) {
                            return g_utils.firstNotNull(x.idSubSubSubTipoTema, x.idSubSubTipoTema, x.idSubTipoTema, x.idTipoTema);
                        }
                        
                        function transformTema() {
                            var result = [], tema;
                            for (var i = 0; i < $scope.temas.length; i++) {
                                tema = $scope.temas[i];
                                result.push(getIdTema(tema));
                                if(tema.childs !== null && angular.isArray(tema.childs) ) {
                                    for (var j = 0; j < tema.childs.length; j++) {
                                        result.push(getIdTema(tema.childs[j]));
                                    }
                                }
                            }
                            return result;
                        }
                        
                        function restart_tema_ui() {
                            $scope.$broadcast(PARAMETROS.EVENTOS.tema_disable, {disable: false});
                            $scope.dx.tema = {
                                idTipoTema: null,
                                idSubTipoTema: null,
                                idSubSubTipoTema: null,
                                idSubSubSubTipoTema: null,
                                childs: []
                            };                            
                        }
                        
                        function show_ui_tema_question(item, parent) {
                            $scope.ui_quest_tema = $scope.ui_quest_subtema = false;                            
                            
                            restart_tema_ui();
                            
                            //-- is root
                            if(parent === null) {
                                if(item.childs.length < MAX_SUBTEMA) {
                                    $scope.ui_quest_subtema = true;
                                } else {
                                    if($scope.temas.length < MAX_TEMA) {
                                        $scope.ui_quest_tema = true;
                                    }
                                }
                            } 
                            //-- is child
                            else {
                                if($scope.temas.length < MAX_TEMA) {
                                    $scope.ui_quest_tema = true;
                                }
                            }
                            
                            $scope.temaCompleted = ($scope.temas.length > 0);
                        }
                        
                        //-- scope
                        
                        $scope.acceptEventoDelDia = function () {
                            if($scope.dx.eventoDia) {
                                $scope.toComplete = false;
                                $scope.eventoDiaCompleted = true;
                                $scope.showTemaEvento = true;
                                $scope.verResumen = true;
                            }
                        };
                        
                        $scope.acceptTema = function() {
                            if (!$scope.dx.tema.data.valid) return;
                            
                            var found = recursive_find($scope.dx.tema, $scope.temas);
                            if(found) {
                                var msg = PARAMETROS.MSG.TEMA_YA_FUE_AGREGADO;
                                console.log(msg, { found: found});
                                
                                if( (found.parent !== null && angular.isArray(found.parent) && 
                                      found.parent[found.index] && found.parent[found.index].childs &&
                                      found.parent[found.index].childs.length < MAX_SUBTEMA)) {
                                    g_utils.prompt_msg(msg);                                    
                                } else {
                                    restart_tema_ui();
                                }
                                return;
                            }
                            
                            var fn_add_tema = function (item, arr_temas, parent) {                                
                                if( (parent === null) && ($scope.temas.length === MAX_TEMA)) {
                                    restart_tema_ui();
                                    g_utils.prompt_msg(PARAMETROS.MSG.FMT_MAX_TEMAS_EXCEEDED.cformat(MAX_TEMA));
                                    return;
                                }
                                
                                $scope.$broadcast(PARAMETROS.EVENTOS.tema_disable, {disable: true});
                                arr_temas.push(item);
                                show_ui_tema_question(angular.copy($scope.dx.tema), parent);
                                
                            };
                            
                            //-- is root
                            if(angular.isArray($scope.dx.tema.childs)) {
                                fn_add_tema($scope.dx.tema, $scope.temas, null);
                            }
                            //-- is child
                            else {
                                var parent = getCurrentTema();                                
                                if(parent === null) {
                                    fn_add_tema($scope.dx.tema, $scope.temas, null);
                                } else {
                                    fn_add_tema($scope.dx.tema, parent.childs, parent);
                                }
                            }
                        };
                        
                        $scope.addNewTema = function() {
                            if($scope.otro_tema === true) {
                                $scope.dx.tema = {
                                    idTipoTema: null,
                                    idSubTipoTema: null,
                                    idSubSubTipoTema: null,
                                    idSubSubSubTipoTema: null,
                                    childs: []
                                };
                                $scope.$broadcast(PARAMETROS.EVENTOS.tema_disable, {disable: false});
                            }
                            
                            //-- starts-up itself
                            if($scope.otro_tema !== null) {
                                $scope.ui_quest_tema = false;
                                $scope.otro_tema = null;
                            }
                        };
                        
                        $scope.addNewSubtema = function() {                            
                            if($scope.otro_subtema === true) {
                                var parent = getCurrentTema();
                                if(parent !== null) {
                                    $scope.dx.tema = {
                                        idTipoTema: parent.data.tipoTema.id,
                                        idSubTipoTema: null,
                                        idSubSubTipoTema: null,
                                        idSubSubSubTipoTema: null,
                                        childs: null
                                    };
                                    $scope.$broadcast(PARAMETROS.EVENTOS.tema_disable, {disable: true, deep: 1});
                                }
                            }
                            
                            //-- starts-up itself
                            if($scope.otro_subtema !== null) {
                                $scope.ui_quest_subtema = false; 
                                $scope.otro_subtema = null;
                            }
                        };

                        $scope.deleteTema = function (item) {                            
                            var found = recursive_find(item, $scope.temas);
                            if(found) {
                                if(angular.isArray(found.parent)) {
                                    found.parent.splice(found.index, 1);
                                } else {
                                    if(found.parent.childs && angular.isArray(found.parent.childs)) {
                                        found.parent.childs.splice(found.index, 1);
                                    }
                                }                                
                            }                            
                        };

                        $scope.acceptFullStep = function () {                            
                            if ($scope.temaCompleted) {                                
                                $scope.clasificacion.idEvento = ($scope.dx.eventoDia ? $scope.dx.eventoDia.id : '');
                                $scope.clasificacion.tema = transformTema();                                
                                console.log('acceptFullStep::temas', {temas: $scope.temas, ids: $scope.clasificacion.tema});
                                $location.path(NEXT_STEP);
                            }
                        };
                        
                        //-- startup
                        (function () {
                            AppModelService.get(PARAMETROS.URL.get_list_eventoDia, null, function (response) {
                                if (response.data.success) {
                                    $scope.get_list_eventoDia = response.data.data;
                                }
                            });
                        })();

                    }]);
