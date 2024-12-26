/* 
 Created on : 31/12/2015
 Author     : abrito
 */
angular.module('AppCommon')

        .constant('CONFIG', {
            
            FILE_TYPE : {
                imagen: 1
                ,audio: 2
                ,video: 3
                ,documento: 4
            }

            , FORMATOS_AUDIO: {
                '.mp3': 'audio/mpeg',
                '.ogg': 'audio/ogg',
                '.wav': 'audio/wav'
            }
            , FORMATOS_ARCHIVO: {
                ".xls": "assets/images/resource/documento-excel.jpg",
                ".xlsx": "assets/images/resource/documento-excel.jpg",
                ".doc": "assets/images/resource/documento-word.jpg",
                ".docx": "assets/images/resource/documento-word.jpg",
                ".xml": "assets/images/resource/documento-xml.jpg",
                ".pdf": "assets/images/resource/documento-pdf.jpg",
                ".ppt": "assets/images/resource/documento-power-point.jpg",
                ".pptx": "assets/images/resource/documento-power-point.jpg",
                ".txt": "assets/images/resource/documento-txt.jpg",
                ".xlt": "assets/images/resource/documento-excel.jpg",
                ".pps": "assets/images/resource/documento-power-point.jpg",
                ".log": "assets/images/resource/documento-log.jpg",
                ".wri": "assets/images/resource/documento-wri.jpg",
                "def": "assets/images/resource/icono_def.jpg"
            }
            , GENERIC_ICON: {
                video:  'assets/images/resource/icono-video-generico-03.png'
                ,audio: 'assets/images/resource/audio-activo-03.png'
                ,playerAudio: 'assets/images/resource/playerAudio.png'
            }
        })
        ;
