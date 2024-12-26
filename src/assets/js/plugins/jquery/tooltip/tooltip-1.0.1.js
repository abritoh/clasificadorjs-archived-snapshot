/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {

    (function ($) {

        $.fn.extend({
            msj_tooltip: function (mensaje) {
                var x = $(this).position().left;
                var y = $(this).position().top;
                var w = $(this).width() + 10;
                $(mensaje).css({left: (x + w) + "px", top: y + "px"});
                $(this).mouseover(function () {
                    if ($(this).val() !== "") {
                        $(mensaje).fadeIn();
                    }
                }).mouseout(function () {
                    $(mensaje).fadeOut();
                });
                $(this).keypress(function () {
                    $(mensaje).fadeOut();
                });
            },
            msj_tooltip_follow_me: function (mensaje) {
                var x = $(this).position().left;
                var y = $(this).position().top;
                var w = $(this).width() + 10;
                var status = 0;
                var css = [];
                var position = $(this).position();
                var heightMensaje = $(this).height();
                heightMensaje = (heightMensaje / 2);
                var interval = null;
                var countInterval = 0;


                $(this).mousemove(function (e) {



                    css = {left: (e.pageX + 15) + "px", top: (e.pageY - 100) + "px"};
                    $(mensaje).css(css);

                });
                $(this).mouseenter(function () {
                    //if( $( this ).val() !==""){

                    $(mensaje).show();

                    //}

                }).mouseout(function () {
                    $(mensaje).hide();
                }).mouseleave(function () {
                    $(mensaje).hide();
                });

            },
            msj_tooltip_all: function () {
                var elemento = this;
                $(this).find(":text").each(function (key, val) {

                    var mensaje = $(val).attr("placeholder");

                    if (mensaje) {
                        $(val).parent().append("  <div id='" + $(val).attr("id") + "-tooltip" + "' class='perso-tooltip'>" + mensaje + "</div>");
                    }
                    $(val).mousemove(function (e) {
                        if ($(val).val() !== "") {

                            var css = {left: (e.pageX - $(val).offset().left + 50) + "px"};
                            $("#" + $(val).attr("id") + "-tooltip").css(css);
                            $("#" + $(val).attr("id") + "-tooltip").show();

                        } else {
                            $("#" + $(val).attr("id") + "-tooltip").hide();
                        }
                    });
                    $(val).mouseenter(function () {

                        if ($(val).val() !== "") {
                            $("#" + $(val).attr("id") + "-tooltip").show();
                        }

                    }).mouseout(function () {

                        $("#" + $(val).attr("id") + "-tooltip").hide();

                    }).mouseleave(function () {

                        $("#" + $(val).attr("id") + "-tooltip").hide();

                    });
                });

                $(this).find("select").each(function (key, val) {

                    var mensaje = $(val).attr("placeholder");

                    if (mensaje) {
                        $(val).parent().append("  <div id='" + $(val).attr("id") + "-tooltip" + "' class='perso-tooltip'>" + mensaje + "</div>");
                    }
                    $(val).mousemove(function (e) {
                        if ($(val).val() !== "") {

                            var css = {left: (e.pageX - $(val).offset().left + 50) + "px", top: "0px"};
                            $("#" + $(val).attr("id") + "-tooltip").css(css);
                            $("#" + $(val).attr("id") + "-tooltip").show();
                        } else {
                            $("#" + $(val).attr("id") + "-tooltip").hide();
                        }
                    });
                    $(val).mouseenter(function () {

                        if ($(val).val() !== "") {
                            $("#" + $(val).attr("id") + "-tooltip").show();
                        }

                    }).mouseout(function () {

                        $("#" + $(val).attr("id") + "-tooltip").hide();

                    }).mouseleave(function () {

                        $("#" + $(val).attr("id") + "-tooltip").hide();
                    });
                });

            }
        });
    })(jQuery);
}).call(this);