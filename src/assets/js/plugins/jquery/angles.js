/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
      var _ORIGEN_POSITIONS_XY = [];
    (function($){
      
     $.fn.extend({
         positionAngle:function( options ){
             var defaults = { x:0, y:0, r:0, angle:0, width:0};
              options = $.extend( {}, defaults, options );
              options.angle = ( options.angle + ( - 90 ) );
              if( options.width === 0 ){
                  options.width = $( this ).width();
              }
              var radianes = ( options.angle * Math.PI / 180) ;
              var position_x_cos = Math.cos( radianes );
              var position_y_sin = Math.sin( radianes);
              var radio = options.r + ( options.width / 2 );
              var posX = options.x + ( radio * position_x_cos ) - ( options.width / 2 );
              var posY = options.y + ( radio * position_y_sin ); //radio para crear elipse (radio -  cantidad )
              var css = { 
                  left: posX + "px", 
                  top: posY + "px", 
                  width: options.width + "px" 
              };
              $( this ).origenPosition( { x:posX, y:posY } );
              $( this ).css( css );
              /*$( this ).angle( options.angle + 90  );*/
         }
     });
     

     $.fn.extend({
         angle:function( angle ){
             angle = ( angle + ( - 90 ) );
             $(this).css({
                 WebkitTransform:'rotate('+angle+'deg)'
             });
         }
     });
     $.fn.extend({
         origenPosition:function(options){
              var defaults = { x:0, y:0};
              var nuevo_options = $.extend( {}, defaults, options );
              
              if( options ){ 
                  
                  _ORIGEN_POSITIONS_XY[ String( $(this).attr("id") ) ] = nuevo_options;
                  
              }else{
                  
                  if( !_ORIGEN_POSITIONS_XY[ String( $(this).attr("id") ) ] ){
                      
                      _ORIGEN_POSITIONS_XY[ String( $(this).attr("id") ) ] = defaults;
                  }
             }
              return _ORIGEN_POSITIONS_XY[ String( $(this).attr("id") ) ];
         }
     });


   })( jQuery );
}).call( this );