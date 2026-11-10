(function(w){'use strict';var map={};w.Astra.Events={on:function(n,f){map[n]=map[n]||[];map[n].push(f);},emit:function(n,d){var a=map[n]||[];var i;for(i=0;i<a.length;i+=1){a[i](d);}}};}(window));
