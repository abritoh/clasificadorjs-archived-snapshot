/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
      
    (function($){
        $.fn.extend({
            dropdown_menu_up:function(){
                console.log('aqui');
                $(this).find(" > li").each( function(){
                
                    $( this ).find( " > ul ").each( function(){
                   
                        var subul = $( this );
                        var height_submenu = subul.height();

                        $( this ).find( " > li " ).each( function(){
                        
                            var position_li=$( this ).position();
                        
                            $( this ).find( "ul" ).each( function(){
                            
                                var subul = $( this );
                                var height_submenu = subul.height();
                      
                                subul.css({
                                    left:( subul.width() - 60 )+"px",
                                    top:-( height_submenu - 55 - position_li.top )+"px",
                                    display:"none"
                                });
                            
                            });//ul
                            
                         });//>li
                        subul.css({
                        
                            top:"-"+height_submenu+"px",
                            display:"none"
                        }); 
                    });//en dul
               
                });// end menu > li
                   
                /*eventos*/
                var elemento = this;

                $( this ).find(" li > a.down-dropdown").each(function(){
                    $( this ).on( "click", function(){
                         $( this ).parent().parent().find("ul").hide();
                         $( this ).parent().find("ul").first().show();
                  
                    });
                });
             }
        });
    })(jQuery);
}).call();