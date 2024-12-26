angular.module('Authentication')

    .controller('ConfirmarCtrl', ['$rootScope', '$scope', '$location', 'PARAMETROS', 'AppModelService',
        function ($rootScope, $scope, $location, PARAMETROS, AppModelService) {

            var user = $rootScope.globals.infoUser;
            if (user) {
                $scope.display_name = "";
                $rootScope.nombre = user.nombre;
                $scope.foto = user.foto;
                $rootScope.puesto = user.puesto;
            }

            var width = ($(window).width() / 2) - ($("#gafete").width() / 2);
            $("#gafete").css({ left: width + "px" });
            var inicio = setInterval(function () {
                $("#gafete").animate({ left: "0" }, 1000, function () {
                    $("#advertencia_inicio").fadeIn();
                });
                clearInterval(inicio);
            }, 2000);

            $scope.aceptar = function () {
                console.log('acepta terminos');
                $location.path(PARAMETROS.APP1.ACTION.HOME);
            };

            $scope.login = function () {
                $location.path(PARAMETROS.APP1.ACTION.LOGIN);
            };

        }]);