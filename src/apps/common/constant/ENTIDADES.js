/* 
 Created on : 04/12/2015
 Author     : abrito
 
 Tipos de dato:
 int         -> 0
 string      -> '' 
 date        -> date    
 array       -> []
 objeto      -> {}    
 compuesto   -> NA
 */


angular.module('AppCommon')

        .constant("ENTIDADES", (function () {

            /* proto */

            var CONSTANTE = {
                SUJ_ORG: 1,
                SUJETO: 2,
                ORG: 3,
                ORIGEN: 1,
                CONTENIDO: 2,
                VALORACION: 3,
                CLASIFICACION: 4
            };

            var ACTIVIDAD = {
                actividadComoApareceEnNota: '',
                momentoActividad: '',
                fechaActividad: '',
                horaExactaActividad: '',
                referenciaTemporalActividad: '',
                mismaUbicacionDelEvento: '',
                ubicacionComoApareceEnNotaActividad: '',
                idLugarActividad: '',
                idPaisActividad: '',
                idEstadoActividad: '',
                idMunicipioActividad: '',
                idLocalidadActividad: '',
                idColoniaActividad: '',
                idGeoreferenciaActividad: '',
                idInmuebleActividad: '',
                nombreInmuebleActividad: '',
                inmuebleActividad: '',
                otroTipoInfraestructuraActividad: '',
                idPuntoDeReferenciaActividad: ''
            };

            var EVENTO = {
            };

            var INMUEBLE = {
            };

            var ORGANIZACION = {
                usuario: '', //--- usuario que está dando de alta la organización,
                instancia:true, //-- true si es instancia false si es Dependencia,
                idDependencia: null, //-- '', este  campo solo se utiliza si "instancia"=true
                nombre: null, //-- ''
                siglas: null, //-- ''                
                lugar: {
                    pais: 'MX',
                    estado: null, //-- ''
                    municipio: null, //-- ''
                    localidad: null, //-- ''
                    colonia: null //-- ''
                }, //-- {}
                tipo: {
                    TipoOrg: null, //-- ''
                    subTipoOrg: null, //-- ''
                    subSubTipoOrg: null, //-- ''
                    subSubSubTipoOrg: null //-- ''
                } //-- {}

            };

            var SUJETO = {
                paterno: null, //-- ''
                materno: null, //-- ''
                nombre: null  //-- ''
            };

            var SUJETO_ORGANIZACION = {
                puesto: '',
                palabrasClave: [],
                sujeto: angular.copy(SUJETO),
                organizacion: angular.copy(ORGANIZACION)
            };

            var TENDENCIA_ROL = {
                rol: '', //-- Vocero, testigo, Informa
                tipoRol: '', //-- APOYA, CRITICA, INFORMA, AMENAZA
                citaTextual: '', //-- cita como viene en la nota
                idEntidadImplicada: '' //-- apunta a idSujeto o idOrganizacion o afiliacion segun el tipo de entidad
            };

            var TENDENCIA_ACT_ANUNCIADA = {
                tipoActividad: '',
                subtipoActividad: '',
                subsubtipoActividad: '',
                citaTextual: '',
                fecha: '', //dd/MM/yyyy
                hora: '', //-- hh:mm:ss
                idPais: '',
                idEstado: '',
                idMunicipio: '',
                idLocalidadRural: '', //solo si no existe idColonia
                idLocalidadUrbana: '', //solo si no existe idColonia
                idColonia: '', //solo si no existe idLocalidad
                desde: '',
                hasta: ''
            };

            var TENDENCIA = {
                idEntidad: '',
                roles: [],
                numeroDeParticipantes: '',
                unidadDeParticipantes: '',
                agresiones: '', //cita como viene en la nota
                actividadesAnunciadas: []
            };
            
            
            var NOTA = {
                
            };

            var ORIGEN = {
                usuario: '', //-- (*)
                idNota: '', //-- (*)
                tiempoDeCaptura : '', //--(*,auto) Tiempo de captura del módulo HH:MM:SS
                //-- [FUENTE]
                fuente: [], //-- (*[1-n]) Gobierno, Sociedad, Política, Directa
                tipoFuente: '', //-- solamente si el tipo es Gobierno (Redes,Canales,Campo,Comunicado)
                idSubTipoFuente: '', //-- 'OTRO,..'
                subTipoFuente: '', //-- solamente si idSubTipoFuente es igual a OTRO
                //-- [LUGAR]
                lugarComoApareceEnNota: '', //-- (?)
                idLugarDeEmision: '', //-- 
                /*      SUB-SECCION, los sig campos solo van si no existe idLugarDeEmision */
                idPaisEmision: '', //-- (new!!)
                idEstadoEmision: '', //-- (new!!)
                idMunicipioEmision: '', //-- (new!!)
                idLocalidadEmision: '', //Solo si no existe idColoniaMedio
                idColoniaEmision: '', //Solo si no existe idLocalidadMedio 
                //-- [TIEMPO]
                fechaPublicacion: '', //-- (?) dd/MM/yyyy
                horaPublicacion: '', //-- HH:mm:ss En caso de que no exista horaPublicacion, enviar "horaPublicacion":''
                //-- [MEDIO]
                idMedio: '', //-- enviar si hay resultados en la búsqueda de medio
                idOrganizacion: '', // -- en caso de utilizar organizacion emisora
                /*      SUB-SECCION, datos sólo va si no se encuentra el idMedio */
                nombreMedio: '', //-- (*)
                tipoMedio: '', //-- (*)
                idSubTipoMedio: '', //-- (*) obligatorio si existe 
                generoMedio: '', //-- (*) obligatorio un valor del catálogo de Géneros
                seccionMedio: '', //-- (*) obligatorio un valor del catálogo de Secciones
                idPaisMedio: '', //-- (*)
                idEstadoMedio: '', //-- (*)
                idMunicipioMedio: '', //-- 
                idLocalidadMedio: '', //-- Solo si no existe idColoniaMedio
                idColoniaMedio: '', //-- Solo si no existe idLocalidadMedio                
                //-- [AUTOR]
                redaccionDelMedio: false, 
                autorComoApareceEnNota: '', //-- 
                idAutor: '', //-- Enviar si hay resultados en la búsqueda de autor
                /*      SUB-SECCION, datos sólo va si no se encuentra el idAutor */
                nombreAutor: '', //-- (*)
                paternoAutor: '', //-- (*)
                maternoAutor: '', //-- (*)
                puestoAutor: '', //-- (*)
                tendenciaAutor: '' //--  (*)
            };

            var CONTENIDO = {
                idNota: '', //-- (*) obligatorio
                tiempoDeCaptura : '', //-- (*)
                //-- [EVENTO]
                eventoComoApareceEnNota: '', //-- (*)
                fechaEvento: '', //-- (*) dd/MM/yyyy
                ubicacionComoApareceEnNota: '', //-- (*)
                idUbicacionEvento: '', //-- (*) se debe enviar un id de localidad, un id de colonia MX01001C0001 o un id de municipio MX01001
                /*      SUB-SECCION, datos sólo va si no se encuentra el idUbicacionEvento */
                idPaisEvento: '', //-- (*)
                idEstadoEvento: '', //--  (*)
                idMunicipioEvento: '', //-- 
                idLocalidadEvento: '', //-- Solo si no existe idColoniaEvento
                idColoniaEvento: '', //-- Solo si no existe idLocalidadEvento
                //-- [GEOREFERENCIA]
                idGeoreferenciaEvento: '', //-- (*)
                //-- [INMUEBLE]
                idInmuebleEvento: '', //-- (*)
                /*      SUB-SECCION, datos sólo va si no se encuentra el idInmuebleEvento */
                nombreInmuebleEvento: '', //-- (*) Obligatorio, como aparece en la UI
                inmuebleEvento: '', //-- (*) Valor del último listado seleccionado, Obligatorio
                //-- [INFRAESTRUCTURA]
                otroTipoInfraestructuraEvento: '', //-- (*) Solo se manda si se elige "Otro" en inmuebleEvento
                //-- [REFERENCIA]
                idPuntoDeReferenciaEvento: '', //-- 
                //-- [ACTIVIDADES]
                actividadesUI: [], //-- 
                //-- [TERRITORIALIDAD]
                territorialidadComoApareceEnNota: '', //-- 
                tipoTerritorialidad: '', //-- 
                //-- [RELACIONADOR]
                relacionadorUI: [], //-- Relacionador de entidades
                //-- [EVENTO_ASOCIADO]
                eventoAsociado: [] //-- Eventos asociados
            };

            var VALORACION = {
                idUI: '',
                tiempoDeCaptura: '',
                tendencias: [],
                gradoEstabilidad: ''   //ATENCIÓN, PRESIÓN, TENSIÓN, CONFLICTO
            };
            
            var CLASIFICACION = {
                idNota: '',
                tiempoDeCaptura: '',
                idEvento: '',
                tema: [],
                idCaso: ''
            };

            var COMPLETITUD_ETAPA = {
                etapa_actual: 0, //-- CONSTANTE.ORIGEN|CONSTANTE.CONTENIDO|CONSTANTE.VALORACION|CONSTANTE.CLASIFICACION
                origen: {
                    tiempoCaptura: '00:00:00',
                    porcentajeCompletez: '0%',
                    tiempoTotal: '00:00:00'
                },
                contenido: {
                    tiempoCaptura: '00:00:00',
                    porcentajeCompletez: '0%',
                    tiempoTotal: '00:00:00'
                },
                valoracion: {
                    tiempoCaptura: '00:00:00',
                    porcentajeCompletez: '0%',
                    tiempoTotal: '00:00:00'
                },
                clasificacion: {
                    tiempoCaptura: '00:00:00',
                    porcentajeCompletez: '0%',
                    tiempoTotal: '00:00:00'
                }
            };

            var PRECARGA_RELACIONADOR_TEST = {
                "sujetos": [{
                        "idSujeto": "David_Corona_Reza_vULfM3QfLEApToCO",
                        "nombre": "David Corona Reza 01",
                        "palabrasClave": ["Pinos", "Casa Blanca"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_1",
                        "nombre": "Luis Roberto Zacarías Granados 02",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    },
                    {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_2",
                        "nombre": "Luis Roberto Zacarías Granados 03",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    },
                    {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_3",
                        "nombre": "Luis Roberto Zacarías Granados 04",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_4",
                        "nombre": "Luis Roberto Zacarías Granados 05",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_5",
                        "nombre": "Luis Roberto Zacarías Granados 06",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_6",
                        "nombre": "Luis Roberto Zacarías Granados 07",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_7",
                        "nombre": "Luis Roberto Zacarías Granados 08",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_8",
                        "nombre": "Luis Roberto Zacarías Granados 09",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }, {
                        "idSujeto": "Luis_Roberto_Zacarias_Granados_o9MBCZMIEULAk0yA_9",
                        "nombre": "Luis Roberto Zacarías Granados 10",
                        "palabrasClave": ["Zacarias", "Zeta"]
                    }
                ],
                "organizaciones": [{
                        "idOrganizacion": "Reforma",
                        "nombre": "REFORMA",
                        "tipo": "A",
                        "subtipo": "B",
                        "subsubtipo": "C",
                        "pais": "MEXICO",
                        "estado": "DF",
                        "municipio": "COYOACAN"
                    }, {
                        "idOrganizacion": "El_universal",
                        "nombre": "EL_UNIVERSAL",
                        "tipo": "C",
                        "subtipo": "D",
                        "subsubtipo": "E",
                        "pais": "MEXICO",
                        "estado": "MORELOS",
                        "municipio": "CUERNAVACA"
                    }
                ],
                "sujetosOrganizaciones": [{
                        "sujeto": {
                            "idSujeto": "David_Corona_Reza_kClXRIux1XyoY9h3",
                            "nombre": "David Corona Reza"
                        },
                        "afiliaciones": [{
                                "organizacion": {
                                    "idOrganizacion": "ElarsenalNet",
                                    "nombre": "elarsenalnet",
                                    "tipo": "X",
                                    "subtipo": "Y",
                                    "subsubtipo": "Z",
                                    "pais": "MEXICO",
                                    "estado": "MEXICO",
                                    "municipio": "TOLUCA"
                                },
                                "puesto": "Periodista",
                                "afiliacion": "Afiliacion_Bimbo_izpgoroxcegwchsi_jose_martinez_uNPf6EGos6rfjWuE"
                            }
                        ]
                    }
                ]
            };

            var APP_MODEL = {
                relacionador_sujetos: []
                , relacionador_organizaciones: []
                , relacionador_afiliaciones: []
                , response_origen: {
                    precarga_entidades: []
                }
                , response_contenido: {
                    precarga_entidades: []
                }
                , completitud_etapa: COMPLETITUD_ETAPA
                , NOTA: NOTA
                , ORIGEN: ORIGEN
                , CONTENIDO: CONTENIDO
                , VALORACION: VALORACION
                , CLASIFICACION: CLASIFICACION
            };

            /* result */

            return {
                CONSTANTE: CONSTANTE
                , ACTIVIDAD: ACTIVIDAD
                , EVENTO: EVENTO
                , INMUEBLE: INMUEBLE
                , ORGANIZACION: ORGANIZACION
                , SUJETO: SUJETO
                , SUJETO_ORGANIZACION: SUJETO_ORGANIZACION
                , TENDENCIA_ROL: TENDENCIA_ROL
                , TENDENCIA_ACT_ANUNCIADA: TENDENCIA_ACT_ANUNCIADA
                , TENDENCIA: TENDENCIA
                , PRECARGA_RELACIONADOR_TEST: PRECARGA_RELACIONADOR_TEST
                , APP_MODEL: APP_MODEL
            };

        })())
        ;
