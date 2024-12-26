/* 
 Created on : 20/01/2016
 Author     : abrito
 */
angular.module('AppCommon')

        .constant("PARAMETROS", (function () {

            var AMBIENTE = 'produccion' //--desarrollo|produccion
                , SERVER_BACKEND = 'http://192.168.2.204:8080/'
                , REDES_EXPLOTACION = 'RedesExplotacion/rest/'
                , REDES_SUPERVISOR = 'RedesSupervisor/rest/'
                , REDES_CLASIFICADOR = 'Clasificador/rest/'
                , REDES_HOMOLOGADOR = 'Homologador/rest/'
                , SERVER_MIDDLE = 'http://192.168.2.242'
                , SERVER_MIDDLE_NODEJS = SERVER_MIDDLE + ':9009/redes'
                ;

            return {
                AMBIENTE: AMBIENTE
                , SERVER_BACKEND: SERVER_BACKEND + REDES_EXPLOTACION
                , SERVER_BACKEND_SUPERVISOR: SERVER_BACKEND + REDES_SUPERVISOR
                , SERVER_BACKEND_CLASIFICADOR: SERVER_BACKEND + REDES_CLASIFICADOR
                , SERVER_BACKEND_HOMOLOGADOR: SERVER_BACKEND + REDES_HOMOLOGADOR
                , SERVER_MIDDLE_NODEJS: SERVER_MIDDLE_NODEJS
                , URL: {
                    login_service: {SERVICE: 'access/login/clasificador', LOCAL: '', FORCE: 'LOCAL'}
                    , get_nota_clasificada: {SERVICE: 'unidadInformacion/listadoTodo', LOCAL: 'assets/json/service/get_nota_clasificada.json', FORCE: 'LOCAL'}
                    , get_list_clasificadas: {SERVICE: 'unidadInformacion/listadoClasificado', LOCAL: 'assets/json/service/get_list_clasificadas.json', FORCE: 'LOCAL'}
                    , get_list_eventos: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE:'evento/listado', LOCAL:'assets/json/service/get_list_eventos.json', FORCE: 'LOCAL'}
                    , get_list_casos: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE:'caso/listado', LOCAL:'assets/json/service/get_list_casos.json', FORCE: 'LOCAL'}
                    , get_list_clasificadas_bloque3: {SERVICE:'unidadInformacion/listadoBlq3', LOCAL:'assets/json/service/get_list_clasificadas.json', FORCE: 'LOCAL'}
                    
                    //-- [local]
                    , get_list_anio: {JSON: 'assets/json/service/local/get-list-anio.json'}
                    , get_list_hora: {JSON: 'assets/json/service/local/get-list-hora.json'}
                    , get_list_mes: {JSON: 'assets/json/service/local/get-list-mes.json'}
                    , get_list_prioridad: {JSON: 'assets/json/service/local/get-list-prioridad.json'}
                    , get_list_patron_tipo: {JSON: 'assets/json/service/local/get-list-patron-tipo.json'}
                    , get_list_patron_recupera: {JSON: 'assets/json/service/local/get-list-patron-recupera.json'}
                    
                    //-- [catalogo]
                    , get_list_pais: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/paises', LOCAL: 'assets/json/service/catalogo/get-list-pais.json', FORCE: 'LOCAL'}
                    , get_list_estado: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/estados', LOCAL: 'assets/json/service/catalogo/get-list-estado.json', FORCE: 'LOCAL'}
                    , get_list_municipio: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/municipios', LOCAL: 'assets/json/service/catalogo/get-list-municipio.json', FORCE: 'LOCAL'}
                    , get_list_colonia: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/colonias', LOCAL: 'assets/json/service/catalogo/get-list-colonia.json', FORCE: 'LOCAL'}
                    , get_list_localidad_rural: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/localidadesRurales', LOCAL: 'assets/json/service/catalogo/get-list-localidad-rural.json', FORCE: 'LOCAL'}
                    , get_list_localidad_urbana: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/localidadesUrbanas', LOCAL: 'assets/json/service/catalogo/get-list-localidad-urbana.json', FORCE: 'LOCAL'}
                    , get_list_capturista: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogo/capturista', LOCAL: 'assets/json/service/catalogo/get-list-capturista.json', FORCE: 'LOCAL'}
                    , get_list_tipo_tema: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE:'catalogo/temas', LOCAL:'assets/json/service/local/get-list-tipo-tema.json', FORCE: 'LOCAL'}
                    , get_list_tipo_patrones: {SERVER:'SERVER_BACKEND_HOMOLOGADOR', SERVICE:'crawler/get_patrones', LOCAL:'assets/json/service/catalogo/get-list-patrones.json', FORCE: 'LOCAL'}
                    
                    , get_list_casoEvento: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE:'catalogo/casos', LOCAL:'assets/json/service/catalogo/get-list-casoEvento.json', FORCE:'SERVICE'}
                    , get_list_eventoDia: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE:'catalogo/eventosDia', LOCAL:'assets/json/service/catalogo/get-list-eventoDia.json', FORCE:'SERVICE'}
                    , get_list_subtipo_tema: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE: 'catalogo/temas', LOCAL: 'assets/json/service/catalogo/get-list-subtipo-tema.json', FORCE: 'LOCAL'}
                    , get_list_tipo_categoria: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE: 'catalogo/categoriaAgenda', LOCAL: 'assets/json/service/catalogo/get-list-categoria.json', FORCE: 'LOCAL'}
                    , get_list_subtipo_categoria: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE: 'catalogo/categoriaAgenda', LOCAL: 'assets/json/service/catalogo/get-list-subtipo-categoria.json', FORCE: 'LOCAL'}
                    
                    //-- [agregar]
                    , agregar_evento: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'evento/agregar', LOCAL: '', FORCE: 'LOCAL'}
                    , agregar_caso: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'caso/agregar', LOCAL: '', FORCE: 'LOCAL'}
                    , agregar_tema: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'catalogoTema/agregar', LOCAL: '', FORCE: 'LOCAL'}
                    
                    //-- [guardar]
                    , guardar_patron: {SERVER:'SERVER_BACKEND_HOMOLOGADOR', SERVICE: 'crawler/patrones', LOCAL: '', FORCE: 'LOCAL'}
                    
                    //-- [editar]
                    , editar_evento: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'evento/agregar', LOCAL: '', FORCE: 'LOCAL'}
                    , editar_caso: {SERVER:'SERVER_BACKEND_SUPERVISOR', SERVICE: 'caso/agregar', LOCAL: '', FORCE: 'LOCAL'}
                    , post_clasificacion: {SERVER:'SERVER_BACKEND_CLASIFICADOR', SERVICE: 'clasificacionUI/agregar', LOCAL: 'assets/json/service/post/post-agregar-nota.json', FORCE: 'LOCAL'}
                    
                }                
                , EVENTOS: {
                    bandeja_clasificador_adm: 'notas_clasificadas'
                    , bandeja_eventos: 'eventos_listado'
                    , evento_del_dia_aceptar: 'evento_del_dia_aceptar'
                    , caso_aceptar: 'caso_aceptar'                    
                    , status_avail: 'status_avail'
                    , clasificacion_complete: 'clasificacion_complete'
                    , permiso_off: 'permiso_off'
                    , tema_disable: 'tema_disable'
                    , restart_clasificacion: 'restart_clasificacion'
                    , ia_reconocimiento_event: 'ia_reconocimiento_event'
                }                
                , ID_APLICACION: 'ClasificadorAdmin'
                , ENABLE_TIMEOUT: false //true|false
                , LIST_CLASIF_RESULTS_BY_PAGE: 100
                , LIST_CLASIF_BLOQ3_RESULTS_BY_PAGE: 20
                , LIST_CASE_EVENT_RESULTS_BY_PAGE: 20
                , EVENTO_DIA_MAX_TEMA: 2
                , EVENTO_DIA_MAX_SUBTEMA: 1
                , GLOBAL_COOKIE: 'GLOBALCOOKIECLASIFADM'
                , FECHA_ANIOS_ANTES: 117
                , APP1: {
                    NAME: 'admin'
                    , INDEX: 'index.html'
                    , ACTION: {
                        HOME: 'clasificados'
                        , LOGIN: 'acceso'
                    }
                },
                MSG: {
                    SERVICIO_NO_DISPONIBLE: '<p class="p_err">Servicio no disponible</p>'
                    , SERVICE_ERROR: '<p class="p_err">Servicio no disponible o error en el servicio</p>'
                    , NO_RESULTS_FOUND: 'NO SE ENCONTRARON RESULTADOS'
                    , FTM_TEMA_YA_EXISTE: 'El {0} ya existe.'
                    , PASO_COMPLETO: 'Paso completado.'
                    , ETAPA_COMPLETA: '<center>ETAPA COMPLETADA.<br/>Datos guardados correctamente.</center>'
                    , FMT_ERR_PERSISTENCIA_BLOQUE_4: '<p class="p_err">Error en persistencia BLOQUE 4: <br/>CLASIFICACIÓN</p>'
                    , FMT_MAX_TEMAS_EXCEEDED: 'Máximo {0} temas son permitidos'
                    , TEMA_YA_FUE_AGREGADO: 'Tema agregado previamente, no se permiten duplicados.'
                    , LBL_CONFIRMAR: 'Confirmar'
                    , LBL_CONFIRMANDO: 'Confirmando...'                    
                    , MAPS_GEOCODE_ERROR: '<p class="p_err">Error en servicio de geolocalización o dirección de búsqueda incorrecta.</p>'
                    , ERROR_PATRON: 'Error en Servicio de Patrones '
                }
                , REQ_STR: '*'
                , OR_STR: ''
                
            };

        })())
        ;

