function validadiamax(t,n){return t=0===t?1:t,function(e){for(var r=1;r<=e;r++)if(t===r){var o=31;4!==r&&6!==r&&9!==r&&11!==r||(o=30),2===r&&(o=(i=n)%4!=0||i%100==0&&i%400!=0?28:29);break}var i;return o}(12)}angular.module("AppCommon").factory("Base64",(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(n){var e,r,o,i,u,a="",c="",f="",s=0;do{o=(e=n.charCodeAt(s++))>>2,i=(3&e)<<4|(r=n.charCodeAt(s++))>>4,u=(15&r)<<2|(c=n.charCodeAt(s++))>>6,f=63&c,isNaN(r)?u=f=64:isNaN(c)&&(f=64),a=a+t.charAt(o)+t.charAt(i)+t.charAt(u)+t.charAt(f),e=r=c="",o=i=u=f=""}while(s<n.length);return a},decode:function(n){var e,r,o,i,u="",a="",c="",f=0;/[^A-Za-z0-9\+\/\=]/g.exec(n)&&window.alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{e=t.indexOf(n.charAt(f++))<<2|(o=t.indexOf(n.charAt(f++)))>>4,r=(15&o)<<4|(i=t.indexOf(n.charAt(f++)))>>2,a=(3&i)<<6|(c=t.indexOf(n.charAt(f++))),u+=String.fromCharCode(e),64!==i&&(u+=String.fromCharCode(r)),64!==c&&(u+=String.fromCharCode(a)),e=r=a="",o=i=c=""}while(f<n.length);return u}}})).factory("pickerDate",(function(){var t=1,n=1,e=1997;return{upDia:function(){return(t=(t+=1)>31?1:t)<10?"0"+t:t},downDia:function(){return(t=(t-=1)<1?31:t)<10?"0"+t:t},getDia:function(){return t<10?"0"+t:t},upMes:function(){return(n=(n+=1)>12?1:n)<10?"0"+n:n},downMes:function(){return(n=(n-=1)<1?12:n)<10?"0"+n:n},getMes:function(){return n<10?"0"+n:n},upAnio:function(){return e=(e+=1)>1997?1942:e},downAnio:function(){return e=(e-=1)<1942?1997:e},getAnio:function(){return e}}})).factory("pickerOnly",(function(){var t=1;return{upDia:function(){return(t=(t+=1)>6?1:t)<10?""+t:t},downDia:function(){return(t=(t-=1)<1?6:t)<10?""+t:t},getDia:function(){return t<10?""+t:t}}})).factory("pickerDateGen",(function(){return function(){var t=(new Date).getFullYear(),n=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],e=0,r=0,o=-1,i=0;return{setAnio:function(n){t=n},upDia:function(){return(e=(e+=1)>validadiamax(r,i)?1:e)<10?"0"+e:e},downDia:function(){return(e=(e-=1)<1?validadiamax(r,i):e)<10?"0"+e:e},getDia:function(){return e<10?"0"+e:e},setDia:function(t){e=t},upMes:function(){return(r=(r+=1)>12?1:r)<10?"0"+r:r},downMes:function(){return(r=(r-=1)<1?12:r)<10?"0"+r:r},getMes:function(){return r<10?"0"+r:r},upNmbMes:function(){return n[o=(o+=1)>11?0:o]},downNmbMes:function(){return n[o=(o-=1)<0?11:o]},getNmbMes:function(){return n[o]},setMes:function(t){r=t,o=t-1},upAnio:function(){return i=0===i?t:i+=1},downAnio:function(){return i=(i=0===i?t:i-=1)<1900?t:i},getAnio:function(){return i},reset:function(){e=0,r=0,o=-1,i=0},diaVal:function(){return(e=e>validadiamax(r,i)||0===e?1:e)<10?"0"+e:e}}}})).factory("fechaFactory",(function(){return{getFecha:function(){var t=new Date,n=t.getFullYear(),e=getNombreMes(t.getMonth()),r=t.getMonth()+1,o=getNombreDia(t.getDay());return{y:n,mt:r,nm:e,d:t.getDate(),nd:o,h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),mo:" AM",t:t.getTime()}},getHoraMeridiano:function(){var t=new Date,n=t.getHours(),e=t.getMinutes(),r=t.getSeconds(),o=" AM";return n>=12&&(o=" PM"),n>12&&(n-=12),n<10&&(n="0"+n),e<10&&(e="0"+e),r<10&&(r="0"+r),{hora:n+":"+e+":"+r+" "+o,time:t.getTime()}}}})).factory("createUUID",(function(){return{newuuid:function(){for(var t=[],n="0123456789abcdef",e=0;e<36;e++)t[e]=n.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=n.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}}})).factory("display",(function(){return{bloques:function(t){angular.forEach(t,(function(t,n){!1===t.display?$(t.elemento).hide():$(t.elemento).show()}))}}})).service("CommonAjaxService",["$http","PARAMETROS",function(t,n){var e={};function r(t){return t.SERVER?n[t.SERVER]:n.SERVER_BACKEND}return e.getUrl=function(t){return r(t)+t.SERVICE},e.get=function(e,o){var i;return i=e.FORCE?"SERVICE"===e.FORCE?r(e)+e.SERVICE:e.LOCAL:"produccion"===n.AMBIENTE?r(e)+e.SERVICE:e.LOCAL,t({method:"GET",url:i,params:o})},e.getJSON=function(n){return t({method:"GET",url:n})},e.post=function(e,o){var i;return i=e.FORCE?"SERVICE"===e.FORCE?r(e)+e.SERVICE:e.LOCAL:"produccion"===n.AMBIENTE?r(e)+e.SERVICE:e.LOCAL,t({method:"POST",url:i,headers:{"Content-Type":"application/json; charset=utf-8"},data:o})},e}]).service("CommonLog",["$http",function(t){var n={logAjaxError:function(t,n,e){}};return n}]).factory("AsyncButtonAPI",["$rootScope",function(t){return{items:[],getAttrName:function(t){return t&&t.target?t.target.getAttribute("ia-async-key"):null},addItem:function(t){this.getItem(t)||this.items.push({key:t,state:null})},getItem:function(t){for(var n=0;n<this.items.length;n++)if(this.items[n].key===t)return this.items[n];return null},getState:function(t){var n=this.getItem(t);return n?n.state:null},invoking:function(n){var e=this.getAttrName(n),r=this.getItem(e);r&&(r.state="invoking",t.$broadcast("IA_AsyncAPI_Event",r))},success:function(n){var e=this.getAttrName(n),r=this.getItem(e);r&&(r.state="success",t.$broadcast("IA_AsyncAPI_Event",r))},error:function(n){var e=this.getAttrName(n),r=this.getItem(e);r&&(r.state="error",t.$broadcast("IA_AsyncAPI_Event",r))}}}]);