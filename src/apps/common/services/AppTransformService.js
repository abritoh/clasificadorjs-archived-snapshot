/* *
 abrito (2016-05)
* */
angular.module('AppCommon')

        .service('AppTransformService',
                ['ENTIDADES',
                    function (ENTIDADES) {

                        /* private */

                        function transform_entidad_sujeto(item, tipoRelacion) {
                            var result = {}, sujeto = {};
                            if (tipoRelacion === ENTIDADES.CONSTANTE.SUJETO) {
                                sujeto = item ? item : {};
                            } else if (tipoRelacion === ENTIDADES.CONSTANTE.SUJ_ORG) {
                                sujeto = (item && item.sujeto) ? item.sujeto : {};
                            }

                            result.idSujeto = sujeto.idSujeto ? sujeto.idSujeto : null;
                            result.nombreSujeto = sujeto.nombre ? sujeto.nombre : null;
                            result.keyWordsList = sujeto.palabrasClave ? sujeto.palabrasClave : [];
                            return result;
                        }

                        function transform_entidad_org(item, tipoRelacion) {

                            var result = {}, organizacion = {}, puesto = null, afiliacion = null;

                            if (tipoRelacion === ENTIDADES.CONSTANTE.ORG) {
                                organizacion = item ? item : {};
                            } else if (tipoRelacion === ENTIDADES.CONSTANTE.SUJ_ORG) {
                                if (item && item.afiliaciones && item.afiliaciones.length > 0) {
                                    organizacion = item.afiliaciones[0].organizacion ? item.afiliaciones[0].organizacion : {};
                                    puesto = item.afiliaciones[0].puesto ? item.afiliaciones[0].puesto : null;
                                    afiliacion = item.afiliaciones[0].afiliacion ? item.afiliaciones[0].afiliacion : null;
                                }
                            }

                            result.idOrganizacion = organizacion.idOrganizacion ? organizacion.idOrganizacion : null;
                            result.nombreOrganizacion = organizacion.nombre ? organizacion.nombre : null;
                            result.siglasOrganizacion = organizacion.siglas ? organizacion.siglas : null;
                            result.tipoOrganizacion = organizacion.tipo ? organizacion.tipo : null;
                            result.subTipoOrganizacion = organizacion.subtipo ? organizacion.subtipo : null;
                            result.subsubTipoOrganizacion = organizacion.subsubtipo ? organizacion.subsubtipo : null;
                            result.subsubsubTipoOrganizacion = organizacion.subsubsubtipo ? organizacion.subsubsubtipo : null;
                            result.nombrePais = organizacion.pais ? organizacion.pais : null;
                            result.nombreEstado = organizacion.estado ? organizacion.estado : null;
                            result.nombreMunicipio = organizacion.municipio ? organizacion.municipio : null;
                            result.nombreLocalidad = organizacion.localidad ? organizacion.localidad : null;
                            result.nombrePuesto = puesto;
                            result.afiliacion = afiliacion;
                            return result;
                        }


                        /* public */

                        function arr_entidades_for_relacionador(arr_data) {
                            if (!arr_data)
                                return [];
                            var i, item, result = [], cloned;
                            for (i = 0; i < arr_data.length; i++) {
                                item = {};
                                cloned = angular.copy(arr_data[i]);
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.SUJETO) {
                                    item = {
                                        idSujeto: cloned.idSujeto
                                    };
                                }
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.ORG) {
                                    item = {
                                        idOrganizacion: cloned.idOrganizacion
                                    };
                                }
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.SUJ_ORG) {
                                    item = {
                                        afiliacion: cloned.afiliacion
                                    };
                                }
                                result.push(item);
                            }
                            return result;
                        }

                        function arr_entidades_for_directiva_desc_entidad(arr_data, tipoRelacion) {
                            if (!arr_data)
                                return [];
                            var i, item, sujeto, organizacion, result = [], cloned;
                            for (i = 0; i < arr_data.length; i++) {

                                item = {};
                                cloned = angular.copy(arr_data[i]);

                                sujeto = transform_entidad_sujeto(cloned, tipoRelacion);
                                organizacion = transform_entidad_org(cloned, tipoRelacion);

                                item.tipoRelacion = tipoRelacion;
                                item.idSujeto = sujeto.idSujeto;
                                item.nombreSujeto = sujeto.nombreSujeto;
                                item.keyWordsList = sujeto.keyWordsList;
                                item.idOrganizacion = organizacion.idOrganizacion;
                                item.nombreOrganizacion = organizacion.nombreOrganizacion;
                                item.siglasOrganizacion = organizacion.siglasOrganizacion;
                                item.tipoOrganizacion = organizacion.tipoOrganizacion;
                                item.subTipoOrganizacion = organizacion.subTipoOrganizacion;
                                item.subsubTipoOrganizacion = organizacion.subsubTipoOrganizacion;
                                item.subsubsubTipoOrganizacion = organizacion.subsubsubTipoOrganizacion;
                                item.nombrePais = organizacion.nombrePais;
                                item.nombreEstado = organizacion.nombreEstado;
                                item.nombreMunicipio = organizacion.nombreMunicipio;
                                item.nombreLocalidad = organizacion.nombreLocalidad;
                                item.nombrePuesto = organizacion.nombrePuesto;
                                item.afiliacion = organizacion.afiliacion;
                                item.temp = false;
                                result.push(item);
                            }
                            return result;
                        }

                        function precarga_org_for_evento_asoc(precargas) {
                            if (!precargas)
                                return [];
                            var i, item, result = [], cloned;
                            for (i = 0; i < precargas.length; i++) {
                                item = {};
                                cloned = angular.copy(precargas[i]);
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.ORG) {
                                    item = {
                                        idOrganizacion: cloned.idOrganizacion,
                                        nombreOrganizacion: cloned.nombreOrganizacion,
                                        nombreMunicipio: cloned.nombreMunicipio,
                                        nombreEstado: cloned.nombreEstado
                                    };
                                    result.push(item);
                                }
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.SUJ_ORG) {
                                    item = {
                                        idOrganizacion: cloned.idOrganizacion,
                                        nombreOrganizacion: cloned.nombreOrganizacion,
                                        nombreMunicipio: cloned.nombreMunicipio,
                                        nombreEstado: cloned.nombreEstado
                                    };
                                    result.push(item);
                                }
                            }
                            return result;
                        }

                        function precarga_sujeto_for_evento_asoc(precargas) {
                            if (!precargas)
                                return [];

                            var i, item, result = [], cloned;
                            for (i = 0; i < precargas.length; i++) {
                                item = {};
                                cloned = angular.copy(precargas[i]);
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.SUJETO) {
                                    var keyWords = g_utils.f(cloned.keyWordsList);
                                    item = {
                                        idsujeto: cloned.idSujeto,
                                        nombre: cloned.nombreSujeto,
                                        palabrasClave: (keyWords ? keyWords : '')
                                    };
                                    result.push(item);
                                }
                                if (cloned.tipoRelacion === ENTIDADES.CONSTANTE.SUJ_ORG) {
                                    var keyWords = g_utils.joinArrayToString(cloned.keyWordsList);
                                    item = {
                                        idsujeto: cloned.idSujeto,
                                        nombre: cloned.nombreSujeto,
                                        palabrasClave: (keyWords ? keyWords : '')
                                    };
                                    result.push(item);
                                }

                            }
                            return result;
                        }


                        /* service */

                        var service = {
                            arr_entidades_for_directiva_desc_entidad: arr_entidades_for_directiva_desc_entidad,
                            arr_entidades_for_relacionador: arr_entidades_for_relacionador,
                            precarga_org_for_evento_asoc: precarga_org_for_evento_asoc,
                            precarga_sujeto_for_evento_asoc: precarga_sujeto_for_evento_asoc
                        };

                        return service;

                    }])

        ;

