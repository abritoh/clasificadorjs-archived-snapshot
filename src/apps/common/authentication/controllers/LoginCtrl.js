angular.module('Authentication')
    .controller('LoginCtrl',
        ['$scope', '$location', '$http', '$cookieStore', 'PARAMETROS', 'AuthenticationService', 'AppModelService',
            function ($scope, $location, $http, $cookieStore, PARAMETROS, AuthenticationService, AppModelService) {

                //--startup
                (function () {

                    //-- if already logged, invoke logout service
                    var globals = $cookieStore.get(PARAMETROS.GLOBAL_COOKIE);

                    if (globals) {
                        var data = { usuario: globals.currentUser.username },
                            url = PARAMETROS.SERVER_BACKEND + 'access/logout?id_aplicacion=' + PARAMETROS.ID_APLICACION,
                            req = { method: 'GET', url: url, data: data };

                        $http(req)
                            .success(function (response) {
                                console.log(response);
                            })
                            .error(function (response) {
                                console.log(response);
                            });
                    }

                    AuthenticationService.ClearCredentials();
                    setButtonState('ACEPTAR', false, 'error_hide');
                })();


                //-- $scope                        
                $scope.login = function () {
                    $scope.dataLoading = true;
                    setButtonState('VALIDANDO...', true, 'error_hide');

                    var errores = $scope.formLogin.$error.required;
                    if (errores) {
                        resetLogin();
                    } else {
                        AuthenticationService.Login($scope.usuario, $scope.password, function (response) {
                            console.log('Loging:response', response);
                            if (response.success) {
                                loginSuccess(response);
                            } else {
                                resetLogin();
                            }
                        });
                    }
                };

                $scope.hideAlerta = function () {
                    setButtonState('ACEPTAR', false, 'error_hide');
                };

                var loginSuccess = function (response) {
                    console.log('loginSuccess');
                    AuthenticationService.SetCredentials({ usuario: $scope.usuario, password: $scope.password }, response.data);
                    $location.path('/confirmar');
                };

                var resetLogin = function () {
                    console.log('resetLogin');
                    $scope.usuario = '';
                    $scope.password = '';
                    $scope.dataLoading = false;
                    setButtonState("ACEPTAR", false, '');
                };

                function setButtonState(btn_name, btn_disabled, error_display) {
                    $scope.btn_name = btn_name;
                    $scope.disabled = btn_disabled;
                    $scope.error_display = error_display;
                }
            }]);

