var requirejs,require,define;!function(e){function n(e,n){return v.call(e,n)}function t(e,n){var t,r,i,o,u,f,c,l,s,a,p,d=n&&n.split("/"),g=m.map,h=g&&g["*"]||{};if(e&&"."===e.charAt(0))if(n){for(e=e.split("/"),u=e.length-1,m.nodeIdCompat&&q.test(e[u])&&(e[u]=e[u].replace(q,"")),e=d.slice(0,d.length-1).concat(e),s=0;s<e.length;s+=1)if(p=e[s],"."===p)e.splice(s,1),s-=1;else if(".."===p){if(1===s&&(".."===e[2]||".."===e[0]))break;s>0&&(e.splice(s-1,2),s-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((d||h)&&g){for(t=e.split("/"),s=t.length;s>0;s-=1){if(r=t.slice(0,s).join("/"),d)for(a=d.length;a>0;a-=1)if(i=g[d.slice(0,a).join("/")],i&&(i=i[r])){o=i,f=s;break}if(o)break;!c&&h&&h[r]&&(c=h[r],l=s)}!o&&c&&(o=c,f=l),o&&(t.splice(0,f,o),e=t.join("/"))}return e}function r(n,t){return function(){var r=y.call(arguments,0);return"string"!=typeof r[0]&&1===r.length&&r.push(null),s.apply(e,r.concat([n,t]))}}function i(e){return function(n){return t(n,e)}}function o(e){return function(n){d[e]=n}}function u(t){if(n(g,t)){var r=g[t];delete g[t],h[t]=!0,l.apply(e,r)}if(!n(d,t)&&!n(h,t))throw new Error("No "+t);return d[t]}function f(e){var n,t=e?e.indexOf("!"):-1;return t>-1&&(n=e.substring(0,t),e=e.substring(t+1,e.length)),[n,e]}function c(e){return function(){return m&&m.config&&m.config[e]||{}}}var l,s,a,p,d={},g={},m={},h={},v=Object.prototype.hasOwnProperty,y=[].slice,q=/\.js$/;a=function(e,n){var r,o=f(e),c=o[0];return e=o[1],c&&(c=t(c,n),r=u(c)),c?e=r&&r.normalize?r.normalize(e,i(n)):t(e,n):(e=t(e,n),o=f(e),c=o[0],e=o[1],c&&(r=u(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:r}},p={require:function(e){return r(e)},exports:function(e){var n=d[e];return"undefined"!=typeof n?n:d[e]={}},module:function(e){return{id:e,uri:"",exports:d[e],config:c(e)}}},l=function(t,i,f,c){var l,s,m,v,y,q,x=[],b=typeof f;if(c=c||t,"undefined"===b||"function"===b){for(i=!i.length&&f.length?["require","exports","module"]:i,y=0;y<i.length;y+=1)if(v=a(i[y],c),s=v.f,"require"===s)x[y]=p.require(t);else if("exports"===s)x[y]=p.exports(t),q=!0;else if("module"===s)l=x[y]=p.module(t);else if(n(d,s)||n(g,s)||n(h,s))x[y]=u(s);else{if(!v.p)throw new Error(t+" missing "+s);v.p.load(v.n,r(c,!0),o(s),{}),x[y]=d[s]}m=f?f.apply(d[t],x):void 0,t&&(l&&l.exports!==e&&l.exports!==d[t]?d[t]=l.exports:m===e&&q||(d[t]=m))}else t&&(d[t]=f)},requirejs=require=s=function(n,t,r,i,o){if("string"==typeof n)return p[n]?p[n](t):u(a(n,t).f);if(!n.splice){if(m=n,m.deps&&s(m.deps,m.callback),!t)return;t.splice?(n=t,t=r,r=null):n=e}return t=t||function(){},"function"==typeof r&&(r=i,i=o),i?l(e,n,t,r):setTimeout(function(){l(e,n,t,r)},4),s},s.config=function(e){return s(e)},requirejs._defined=d,define=function(e,t,r){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(r=t,t=[]),n(d,e)||n(g,e)||(g[e]=[e,t,r])},define.amd={jQuery:!0}}(),define("vendor/almond",function(){})