/* 
 Created on : 30/10/2015
 Author     : abrito
 */
angular.module('AppCommon')

        .constant("MAP_CONFIG", {
            
            DEFAULT: {
                ZOOM: 2,
                STARTUP_MAP_DELAY: 1000,                
                CENTER: { lat:  23.941197654, lng: -102.53243493 },
                PLACE: 'méxico'
            },
            
            MAP_STYLE_DEFAULT: {
                data: [
                    {
                        featureType: 'water',
                        elementType: 'all',
                        stylers: [
                            {hue: '#00ddde'},
                            {saturation: 100},
                            {lightness: -43},
                            {visibility: 'on'}
                        ]
                    }, {
                        featureType: 'landscape',
                        elementType: 'all',
                        stylers: [
                            {hue: '#004d68'},
                            {saturation: 100},
                            {lightness: -77},
                            {visibility: 'on'}
                        ]
                    }, {
                        featureType: 'road.highway',
                        elementType: 'all',
                        stylers: [
                            {hue: '#008c5e'},
                            {saturation: 100},
                            {lightness: -57},
                            {visibility: 'on'}
                        ]
                    }, {
                        featureType: 'road.arterial',
                        elementType: 'all',
                        stylers: [
                            {hue: '#009f9d'},
                            {saturation: 100},
                            {lightness: -60},
                            {visibility: 'on'}
                        ]
                    }, {
                        featureType: 'road.local',
                        elementType: 'all',
                        stylers: [
                            {hue: '#00ffff'},
                            {saturation: 100},
                            {lightness: -50},
                            {visibility: 'on'}
                        ]
                    }, {
                        featureType: 'administrative',
                        elementType: 'all',
                        stylers: [
                            {hue: '#ffffff'},
                            {saturation: 0},
                            {lightness: 100},
                            {visibility: 'simplified'}
                        ]
                    }, {
                        featureType: 'poi',
                        elementType: 'all',
                        stylers: [
                            {hue: '#009f9d'},
                            {saturation: 100},
                            {lightness: -60},
                            {visibility: 'on'}
                        ]
                    }
                ]},
            
            ZOOM_ESTADO: {
                data: [ {
                        id: "MX01",
                        nombre: "AGUASCALIENTES",
                        zoom: 9,
                        lng: -102.36193775,
                        lat:  22.006441085
                    }, {
                        id: "MX02",
                        nombre: "BAJA CALIFORNIA",
                        zoom: 6,
                        lng:  -115.09753049,
                        lat:  30.550923426
                    }, {
                        id: "MX03",
                        nombre: "BAJA CALIFORNIA SUR",
                        zoom: 6,
                        lng:  -112.06621467,
                        lat:  25.91866937
                    }, {
                        id: "MX04",
                        nombre: "CAMPECHE",
                        zoom: 8,
                        lng:  -90.36027731,
                        lat:  18.840554243
                    }, {
                        id: "MX05",
                        nombre: "COAHUILA DE ZARAGOZA",
                        zoom: 7,
                        lng:  -102.04403868,
                        lat:  27.295442975
                    }, {
                        id: "MX06",
                        nombre: "COLIMA",
                        zoom: 8,
                        lng:  -104.11727917,
                        lat:  19.13041077
                    }, {
                        id: "MX07",
                        nombre: "CHIAPAS",
                        zoom: 7,
                        lng:  -92.472911819,
                        lat:  16.485239866
                    }, {
                        id: "MX08",
                        nombre: "CHIHUAHUA",
                        zoom: 7,
                        lng:  -106.46893954,
                        lat:  28.80853805
                    }, {
                        id: "MX09",
                        nombre: "DISTRITO FEDERAL",
                        zoom: 9,
                        lng:  -99.139411189,
                        lat:  19.276889637
                    }, {
                        id: "MX10",
                        nombre: "DURANGO",
                        zoom: 7,
                        lng:  -104.91339857,
                        lat:  24.923610401
                    }, {
                        id: "MX11",
                        nombre: "GUANAJUATO",
                        zoom: 8,
                        lng:  -101.01261435,
                        lat:  20.905432044
                    }, {
                        id: "MX12",
                        nombre: "GUERRERO",
                        zoom: 8,
                        lng:  -99.921833145,
                        lat:  17.668004295
                    }, {
                        id: "MX13",
                        nombre: "HIDALGO",
                        zoom: 8,
                        lng:  -98.887113068,
                        lat:  20.479556679
                    }, {
                        id: "MX14",
                        nombre: "JALISCO",
                        zoom: 8,
                        lng:  -103.61323903,
                        lat:  20.580763154
                    }, {
                        id: "MX15",
                        nombre: "MÉXICO",
                        zoom: 8,
                        lng:  -99.645373806,
                        lat:  19.355957044
                    }, {
                        id: "MX16",
                        nombre: "MICHOACÁN",
                        zoom: 7,
                        lng:  -101.87811329,
                        lat:  19.207096082
                    }, {
                        id: "MX17",
                        nombre: "MORELOS",
                        zoom: 8,
                        lng:  -99.074962327,
                        lat:  18.742077945
                    }, {
                        id: "MX18",
                        nombre: "NAYARIT",
                        zoom: 8,
                        lng:  -104.85497412,
                        lat:  21.802101626
                    }, {
                        id: "MX19",
                        nombre: "NUEVO LEÓN",
                        zoom: 7,
                        lng:  -99.968969916,
                        lat:  25.572590281
                    }, {
                        id: "MX20",
                        nombre: "OAXACA",
                        zoom: 8,
                        lng:  -96.430130262,
                        lat:  16.961442491
                    }, {
                        id: "MX21",
                        nombre: "PUEBLA",
                        zoom: 8,
                        lng:  -97.90009455,
                        lat:  19.006069337
                    }, {
                        id: "MX22",
                        nombre: "QUERÉTARO",
                        zoom: 8,
                        lng:  -99.845796407,
                        lat:  20.855176057
                    }, {
                        id: "MX23",
                        nombre: "QUINTANA ROO",
                        zoom: 8,
                        lng:  -88.111670387,
                        lat:  19.601322059
                    }, {
                        id: "MX24",
                        nombre: "SAN LUIS POTOSÍ",
                        zoom: 8,
                        lng:  -100.4165087,
                        lat:  22.585459822
                    }, {
                        id: "MX25",
                        nombre: "SINALOA",
                        zoom: 8,
                        lng:  -107.50914134,
                        lat:  25.001438158
                    }, {
                        id: "MX26",
                        nombre: "SONORA",
                        zoom: 7,
                        lng:  -110.80994736,
                        lat:  29.687702782
                    }, {
                        id: "MX27",
                        nombre: "TABASCO",
                        zoom: 8,
                        lng:  -92.593986978,
                        lat:  17.937691403
                    }, {
                        id: "MX28",
                        nombre: "TAMAULIPAS",
                        zoom: 8,
                        lng:  -98.640894391,
                        lat:  24.29101156
                    }, {
                        id: "MX29",
                        nombre: "TLAXCALA",
                        zoom: 8,
                        lng:  -98.168549427,
                        lat:  19.428575608
                    }, {
                        id: "MX30",
                        nombre: "VERACRUZ",
                        zoom: 8,
                        lng:  -96.418558574,
                        lat:  19.392957223
                    }, {
                        id: "MX31",
                        nombre: "YUCATÁN",
                        zoom: 8,
                        lng:  -88.928164189,
                        lat:  20.762258979
                    }, {
                        id: "MX32",
                        nombre: "ZACATECAS",
                        zoom: 8,
                        lng:  -102.66055726,
                        lat:  23.289018911
                    }
                ]},
            
            CODE_PAIS: {
                MX: 'MX',
                GT: 'GT',
                US: 'US'
            }
        })


        ;