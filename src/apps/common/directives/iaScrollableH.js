/* *
 abrito (2016-05-03)
* */
angular.module('AppCommon')

        .directive("iaScrollableH", ['$compile',
            function ($compile) {
                var SCROLL_STEP = 40,
                        TIMEOUT_SCROLL = 200;

                function fnLink(scope, element, attrs) {

                    var id = g_utils.newConsecutive('iaScrollableH');
                    $(element).attr('id', id);

                    var selectorId = '#' + id,
                            buttonLeft = '<span class="scroll_left_arrow" ng-click="btnScrollLeft()" id="' + id + '_ScrollLeft"></span>',
                            buttonRight = '<span class="scroll_right_arrow" ng-click="btnScrollRight()" id="' + id + '_ScrollRight"></span>';

                    $(element).before($compile(buttonLeft)(scope));
                    $(element).after($compile(buttonRight)(scope));

                    scope.btnScrollLeft = function () {
                        var currentScrollVal = parseInt($(selectorId).scrollLeft());
                        $(selectorId).scrollLeft(currentScrollVal - SCROLL_STEP, 1000);
                    };

                    scope.btnScrollRight = function () {
                        var currentScrollVal = $(selectorId).scrollLeft();
                        $(selectorId).scrollLeft(SCROLL_STEP + currentScrollVal, 1000);
                    };

                    function checkScrollVisibility(e) {
                        ($(selectorId).scrollLeft() !== 0)
                                ? $(selectorId + '_ScrollLeft').css('visibility', 'visible')
                                : $(selectorId + '_ScrollLeft').css('visibility', 'hidden');

                        var diff = Math.abs($(selectorId)[0].scrollWidth -
                                ($(selectorId).scrollLeft() + $(selectorId).width()));

                        (diff <= 20)
                                ? $(selectorId + '_ScrollRight').css('visibility', 'hidden')
                                : $(selectorId + '_ScrollRight').css('visibility', 'visible');
                    }

                    function bindScroll() {
                        var fnScroll = function (e) {
                            var evt = window.event || e;
                            evt = evt.originalEvent ? evt.originalEvent : evt;
                            var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
                            (delta > 0) ? scope.btnScrollLeft() : scope.btnScrollRight();
                            /*? scope.$apply(function () { scope.btnScrollLeft(); })
                             : scope.$apply(function () { scope.btnScrollRight(); });*/
                            e.stopPropagation();
                            e.preventDefault();
                        };
                        $(selectorId).bind("mousewheel", fnScroll);
                        $(selectorId).bind('scroll', checkScrollVisibility);
                    }

                    scope.$watch(
                            function () {
                                return element[0].childNodes.length;
                            },
                            function (newValue, oldValue) {
                                checkScrollVisibility();
                                setTimeout(function () {
                                    $(element).scroll();
                                }, TIMEOUT_SCROLL);
                            }
                    );

                    bindScroll();
                    checkScrollVisibility();
                }

                return {
                    scope: {},
                    restrict: "A",
                    link: fnLink
                };

            }])
        
        ;