/*!
 * jQuery jsonFrill plugin v0.1
 * https://github.com/sparuvu/jsonFrill
 *
 * Released under the MIT license
 * https://raw.github.com/sparuvu/jsonFrill/master/LICENSE
 *
 * Date: 2014-1-9
 * UPDATED: [ABH]-2016_01
 */

;(function ( $, window, document, undefined ) {
    $.fn.jsonFrill = function(options, jsonSource) {
        var jf = jf || {};
        jf.settings = $.extend({
            collapse: false,
            toolbar: false,
            tabSize: 4
        }, options);

        var _indentationLevel = 1,
            lineBreak = "</br>",
            seperator = " : ",
            seperatorV = "  ", //--"| "
            parentBrace = '<span class="jf-open-brace jf-parent-brace">{</span>',
            collapsedClass = jf.settings.collapse ? "jf-collapsed" : "",
            braces = {
              "object": {
                  open: '<span class="jf-open-brace">{</span>',
                  close: '<span class="jf-close-brace">}</span>'
              },
              "array": {
                  open: '<span class="jf-open-brace">[</span>',
                  close: '<span class="jf-close-brace">]</span>'
              }
            },
            $ellipses = '<span class="jf-ellipses jf-hide">...</span>',
            TAB_SIZE = new Array(jf.settings.tabSize > 0 ? jf.settings.tabSize : 0).join(' '),
            SPACES = "";

        function processPrimitive(key, value, type) {
            return '<div class="jf-prop jf-item ' + collapsedClass + ' " >' + getKey(key) + seperator + '<span class="jf-value jf-' + type +'">' + value + '</span></div>';
        }

        function addSpaces(level) {
            return '<span class="jf-spaces">' + new Array(level + 1).join(seperatorV + TAB_SIZE) + '</span>';
        }
        
        function to_underscore(camelCaseText) {
            return camelCaseText.toString().replace(/\.?([A-Z]+)/g, function (x,y){ return "_" + y.toLowerCase(); }).replace(/^_/, "");
        }

        function getKey(key, jfClass) {
            
            var html_key = $.isNumeric(key) ? (parseInt(key) + 1) : key;
            /*html_key = to_underscore(html_key);*/
            if(jfClass) {
                return '<span class="'+jfClass+'">'+SPACES + '<span class="jf-key jf-collapse">' + html_key + '</span></span>';
            }
            return '<span class="jf-key">' + SPACES + html_key + '</span>';
        }

        function processNonPrimitive(openBrace, closeBrace, key, value, type) {
            var temp = "";
                SPACES = addSpaces(++_indentationLevel);
            var str = process(value), html_key;
            SPACES = addSpaces(--_indentationLevel);
            if(str) {
                html_key = getKey(key, "jf-collapsible-title");
                temp = html_key + seperator + openBrace + $ellipses + lineBreak + str + SPACES + closeBrace;
            } else {
                html_key = getKey(key);
                temp = getKey(key) + seperator + openBrace + " " + closeBrace;
            }
            return '<div class="jf-collapsible jf-item '+ collapsedClass +' ">'+temp+'</div>';
        }

        function process(obj) {
            var str = "";
            if($.isEmptyObject(obj)) {
                return false;
            }
            for (var key in obj) {
                var type = $.type(obj[key]);
                if( type !== "function") {
                    if(type === "object" || type === "array") {
                        str += processNonPrimitive(braces[type].open, braces[type].close, key, obj[key], type);
                    } else {
                        str += processPrimitive(key, obj[key], type);
                    }
                }
            }
            return str;
        }

        function jfShow($obj, $key, animate) {
            (animate ? $obj.slideDown(40) : $obj.show()).removeClass('jf-collapsed').siblings('.jf-ellipses').fadeOut('fast');
            $key.addClass('jf-collapse');
        }

        function jfHide($obj, $key, animate) {
            (animate ? $obj.slideUp(40) : $obj.hide()).addClass('jf-collapsed').siblings('.jf-ellipses').fadeIn('fast');
            $key.removeClass('jf-collapse');
        }

        function bindings() {
            var $title = $('span.jf-collapsible-title'),
                elements = {
                    collapsibleDivs: $title.siblings('div.jf-item'),
                    collapsibleKeys: $title.children('span.jf-key'),
                    formattedJSON: $('div#jf-formattedJSON')
                };

            elements.formattedJSON.on('click', 'span.jf-collapsible-title', function(e){
                e.preventDefault();
                var $divs = $(this).siblings('div'), $key = $(this).children('span.jf-key');
                $divs.hasClass('jf-collapsed') ? jfShow($divs, $key, true) : jfHide($divs, $key, true);
            });

            elements.formattedJSON.on('click', 'span.jf-parent-brace', function(e){
                e.preventDefault();
                var $divs = $(this).siblings('div'), $key = $(this).children('.jf-key');
                $divs.hasClass('jf-collapsed') ? jfShow($divs, $key, true) : jfHide($divs, $key, true);
            });

            $('div.jf-prop').hover(function(e) {
                  $(this).closest('div.jf-collapsible').addClass('jf-highlight');
                  e.preventDefault();
                },
                function(e) {
                  $(this).closest('div.jf-collapsible').removeClass('jf-highlight');
                  e.preventDefault();
            });

            $('div#jf-toolbar').on('click', "label", function(){
                $(this).text() === 'Expandir' ? jfShow($('div.jf-collapsed'), elements.collapsibleKeys)
                    : jfHide(elements.collapsibleDivs, elements.collapsibleKeys);
            });

            if(jf.settings.collapse) {
                elements.formattedJSON.children('.jf-ellipses').show();
            }
        }

        function toolBar(collapseAll) {
            return "<div id='jf-toolbar'>" +
                        "<label id='jf-collapse-all'>Contraer</label>" +
                        "<label id='jf-expand-all'>Expandir</label>" +
                    "</div>";
        }

        return this.each(function() {
            console.time("SP");
            console.time("sanitize");
            try {
                if(jsonSource) {
                    if( type !== "function") {
                        if($.type(jsonSource) === "object" || $.type(jsonSource) === "array") {
                            json = jsonSource;
                        } else {
                            jsonSource = jsonSource.trim();
                            json = jsonSource.length > 0 ? $.parseJSON(jsonSource) : {} ;
                        }
                    }
                } else {
                    json = $(this).text().trim();
                    json = json.length > 0 ? $.parseJSON(json) : {} ;
                }
            } catch(ex) {
                if(console && console.log) {
                    console.log("Invalid Json "+ex);
                }
                $(this).html(jsonSource);
            }
            console.timeEnd("sanitize");
            console.time("Process");
            var str = process(json), type = $.type(json);
            console.timeEnd("Process");
            console.time("render");
            if(str) {
                SPACES = addSpaces(--_indentationLevel);
                var formattedJSON = '<div id="jf-formattedJSON" class="jf-collapsible">'+
                                        parentBrace + $ellipses +
                                        str + SPACES + braces[type].close; +
                                    '</div>',
                    toolbar = jf.settings.toolbar ? toolBar(jf.settings.collapse) : "";
                $(this).html(toolbar + formattedJSON);
            } else {
                $(this).html(braces[type].open + braces[type].close);
            }
            console.timeEnd("render");
            bindings();
            console.timeEnd("SP");
        });
    };
})(jQuery, window, document);