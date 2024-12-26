
angular.module('Authentication')
    .controller('TimeoutCtrl',
        ['$scope', '$location', '$cookieStore', 'Idle', 'ngDialog', 'AuthenticationService',
            function ($scope, $location, $cookieStore, Idle, ngDialog, AuthenticationService) {

                $scope.disabled = false;
                $scope.error_display = 'error_hide';
                $scope.btn_name = "CONTINUAR";

                $scope.login = function () {
                    $scope.dataLoading = true;
                    $scope.disabled = true;
                    $scope.btn_name = "VALIDANDO...";

                    var errores = $scope.formLogin_timeout.$error.required;
                    if (errores) {
                        showAlert();
                    } else {
                        AuthenticationService.Login(
                            $scope.usuario, $scope.password, function (response) {
                                if (response.success) {
                                    loginSuccess();
                                } else {
                                    showAlert();
                                }
                            });
                    }
                };

                $scope.hideAlert = function () {
                    $scope.disabled = false;
                    $scope.error_display = 'error_hide';
                };

                var loginSuccess = function () {
                    ngDialog.close();

                    if ($cookieStore.get('timeout')) {
                        $cookieStore.remove('timeout');
                    }
                    Idle.watch();

                    if ($cookieStore.get('timeout_routing')) {
                        $cookieStore.remove('timeout_routing');
                        $location.path('/menu');
                    }
                };

                var showAlert = function () {
                    $scope.dataLoading = false;
                    $scope.error_display = '';

                    $scope.btn_name = "CONTINUAR";
                    $scope.usuario = "";
                    $scope.password = "";
                };



            }]);