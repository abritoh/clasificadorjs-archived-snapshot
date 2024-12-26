'use strict';

/*** 
 * Modified: 2015-07-10 IA-(abrito) 
 ***/
angular.module('draggableModule', []).
        directive('draggable', ['$document', function ($document) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        
                        var startX, startY, initialMouseX, initialMouseY;
                        element.css({position: 'absolute'});

                        element.bind('mousedown', function ($event) {
                            if(typeof RESIZING !== 'undefined') {
                                if(RESIZING) { return false; }
                            }
                            
                            startX = element.prop('offsetLeft');
                            startY = element.prop('offsetTop');
                            initialMouseX = $event.clientX;
                            initialMouseY = $event.clientY;

                            $document.bind('mousemove', mousemove);
                            $document.bind('mouseup', mouseup);
                            return false;
                        });

                        function mousemove($event) {
                            if(typeof RESIZING !== 'undefined') {
                                if(RESIZING) { return false; }
                            }
                            
                            var dx = $event.clientX - initialMouseX;
                            var dy = $event.clientY - initialMouseY;
                            element.css({
                                top: startY + dy + 'px',
                                left: startX + dx + 'px'
                            });
                            
                            scope.$emit("DRAGGING", {element: element});
                            
                            return false;
                        }

                        function mouseup() {
                            $document.unbind('mousemove', mousemove);
                            $document.unbind('mouseup', mouseup);
                        }
                    }
                };
            }]);
