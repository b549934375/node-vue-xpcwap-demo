webpackJsonp([1],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(17),a=i(s),o=n(79),r=i(o),c=n(14);i(c);n(6);var u=n(18),l=i(u),f=n(7),d=i(f),g=n(16),p=i(g);a.default.use(l.default);var v=new l.default.Store(d.default);a.default.use(p.default),new a.default({el:"#app",render:function(t){return t(r.default)},store:v})},,,,,,,,function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}var s,a,o=n(32),r=i(o),c=n(30),u=i(c);!function(i,o){s=o,a="function"==typeof s?s.call(e,n,e,t):s,!(void 0!==a&&(t.exports=a))}(void 0,function(){function t(){var t="mouseup mousedown mousemove mouseout",n="touchstart touchmove touchend touchcancel",i=e.hasTouch?n:t;i.split(" ").forEach(function(t){document.addEventListener(t,b,!1)})}var e={};e.PCevts={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseout"},e.hasTouch="ontouchstart"in window,e.getType=function(t){return Object.prototype.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},e.getSelector=function(t){if(t.id)return"#"+t.id;if(t.className){var e=t.className.split(/\s+/);return"."+e.join(".")}return t===document?"body":t.tagName.toLowerCase()},e.matchSelector=function(t,e){return t.webkitMatchesSelector(e)},e.getEventListeners=function(t){return t.listeners},e.getPCevts=function(t){return this.PCevts[t]||t},e.forceReflow=function(){var t="reflowDivBlock",e=document.getElementById(t);e||(e=document.createElement("div"),e.id=t,document.body.appendChild(e));var n=e.parentNode,i=e.nextSibling;n.removeChild(e),n.insertBefore(e,i)},e.simpleClone=function(t){return(0,u.default)(t)},e.getPosOfEvent=function(t){if(this.hasTouch){for(var e=[],n=null,i=0,s=t.touches.length;s>i;i++)n=t.touches[i],e.push({x:n.pageX,y:n.pageY});return e}return[{x:t.pageX,y:t.pageY}]},e.getDistance=function(t,e){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)},e.getFingers=function(t){return t.touches?t.touches.length:1},e.calScale=function(t,e){if(t.length>=2&&e.length>=2){var n=this.getDistance(t[1],t[0]),i=this.getDistance(e[1],e[0]);return i/n}return 1},e.getAngle=function(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI},e.getAngle180=function(t,e){var n=Math.atan(-1*(e.y-t.y)/(e.x-t.x))*(180/Math.PI);return 0>n?n+180:n},e.getDirectionFromAngle=function(t){var e={up:-45>t&&t>-135,down:t>=45&&135>t,left:t>=135||-135>=t,right:t>=-45&&45>=t};for(var n in e)if(e[n])return n;return null},e.getXYByElement=function(t){for(var e=0,n=0;t.offsetParent;)e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{left:e,top:n}},e.reset=function(){c=l=f=null,_=h=d=g=!1,p=!1,a={},T=!1},e.isTouchMove=function(t){return"touchmove"===t.type||"mousemove"===t.type},e.isTouchEnd=function(t){return"touchend"===t.type||"mouseup"===t.type||"touchcancel"===t.type},e.env=function(){var t={},e=navigator.userAgent,n=e.match(/(Android)[\s\/]+([\d\.]+)/),i=e.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),s=e.match(/(Windows\s+Phone)\s([\d\.]+)/),a=/WebKit\/[\d.]+/i.test(e),o=!!i&&(navigator.standalone?a:/Safari/i.test(e)&&!/CriOS/i.test(e)&&!/MQQBrowser/i.test(e));return n&&(t.android=!0,t.version=n[2]),i&&(t.ios=!0,t.version=i[2].replace(/_/g,"."),t.ios7=/^7/.test(t.version),"iPad"===i[1]?t.ipad=!0:"iPhone"===i[1]?(t.iphone=!0,t.iphone5=568==screen.height):"iPod"===i[1]&&(t.ipod=!0)),s&&(t.wp=!0,t.version=s[2],t.wp8=/^8/.test(t.version)),a&&(t.webkit=!0),o&&(t.safari=!0),t}();var n={proxyid:0,proxies:[],trigger:function(t,e,n){n=n||{};var i,s={bubbles:!0,cancelable:!0,detail:n};try{"undefined"!=typeof CustomEvent?(i=new CustomEvent(e,s),t&&t.dispatchEvent(i)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n),t&&t.dispatchEvent(i))}catch(t){console.warn("Touch.js is not supported by environment.")}},bind:function(t,n,i){t.listeners=t.listeners||{},t.listeners[n]?t.listeners[n].push(i):t.listeners[n]=[i];var s=function t(n){e.env.ios7&&e.forceReflow(),n.originEvent=n;for(var s in n.detail)"type"!==s&&(n[s]=n.detail[s]);n.startRotate=function(){T=!0};var t=i.call(n.target,n);"undefined"==typeof t||t||(n.stopPropagation(),n.preventDefault())};i.proxy=i.proxy||{},i.proxy[n]?i.proxy[n].push(this.proxyid++):i.proxy[n]=[this.proxyid++],this.proxies.push(s),t.addEventListener&&t.addEventListener(n,s,!1)},unbind:function(t,e,n){if(n){var i=n.proxy[e];i&&i.length&&i.forEach(function(){t.removeEventListener&&t.removeEventListener(e,this.proxies[this.proxyid],!1)})}else{var s=t.listeners[e];s&&s.length&&s.forEach(function(n){t.removeEventListener(e,n,!1)})}},delegate:function(t,n,i,s){var a=function n(a){var n,o;a.originEvent=a;for(var r in a.detail)"type"!==r&&(a[r]=a.detail[r]);a.startRotate=function(){T=!0};var c=e.getSelector(t)+" "+i,u=e.matchSelector(a.target,c),l=e.matchSelector(a.target,c+" "+a.target.nodeName);if(!u&&l){for(e.env.ios7&&e.forceReflow(),n=a.target;!e.matchSelector(n,c);)n=n.parentNode;o=s.call(a.target,a),"undefined"==typeof o||o||(a.stopPropagation(),a.preventDefault())}else e.env.ios7&&e.forceReflow(),(u||l)&&(o=s.call(a.target,a),"undefined"==typeof o||o||(a.stopPropagation(),a.preventDefault()))};s.proxy=s.proxy||{},s.proxy[n]?s.proxy[n].push(this.proxyid++):s.proxy[n]=[this.proxyid++],this.proxies.push(a),t.listeners=t.listeners||{},t.listeners[n]?t.listeners[n].push(a):t.listeners[n]=[a],t.addEventListener&&t.addEventListener(n,a,!1)},undelegate:function(t,e,n,i){if(i){var s=i.proxy[e];s.length&&s.forEach(function(){t.removeEventListener&&t.removeEventListener(e,this.proxies[this.proxyid],!1)})}else{var a=t.listeners[e];a.forEach(function(n){t.removeEventListener(e,n,!1)})}}},i={tap:!0,doubleTap:!0,tapMaxDistance:10,hold:!0,tapTime:200,holdTime:650,maxDoubleTapInterval:300,swipe:!0,swipeTime:300,swipeMinDistance:18,swipeFactor:5,drag:!0,pinch:!0,minScaleRate:0,minRotationAngle:0},s={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",CLICK:"click",PINCH_START:"pinchstart",PINCH_END:"pinchend",PINCH:"pinch",PINCH_IN:"pinchin",PINCH_OUT:"pinchout",ROTATION_LEFT:"rotateleft",ROTATION_RIGHT:"rotateright",ROTATION:"rotate",SWIPE_START:"swipestart",SWIPING:"swiping",SWIPE_END:"swipeend",SWIPE_LEFT:"swipeleft",SWIPE_RIGHT:"swiperight",SWIPE_UP:"swipeup",SWIPE_DOWN:"swipedown",SWIPE:"swipe",DRAG:"drag",DRAGSTART:"dragstart",DRAGEND:"dragend",HOLD:"hold",TAP:"tap",DOUBLE_TAP:"doubletap"},a={start:null,move:null,end:null},o=0,c=null,l=null,f=null,d=!1,g=!1,p=!1,v={},h=!1,m=null,_=!1,w=null,A=1,T=!1,x=[],E=0,y=0,I=0,C=null,D={getAngleDiff:function(t){for(var n=parseInt(E-e.getAngle180(t[0],t[1]),10),i=0;Math.abs(n-y)>90&&i++<50;)0>y?n-=180:n+=180;return y=parseInt(n,10)},pinch:function(t){var o=t.target;if(i.pinch){if(!h)return;if(e.getFingers(t)<2&&!e.isTouchEnd(t))return;var r=e.calScale(a.start,a.move),c=this.getAngleDiff(a.move),u={type:"",originEvent:t,scale:r,rotation:c,direction:c>0?"right":"left",fingersCount:e.getFingers(t)};if(g?e.isTouchMove(t)?(u.fingerStatus="move",n.trigger(o,s.PINCH,u)):e.isTouchEnd(t)&&(u.fingerStatus="end",n.trigger(o,s.PINCH_END,u),e.reset()):(g=!0,u.fingerStatus="start",n.trigger(o,s.PINCH_START,u)),Math.abs(1-r)>i.minScaleRate){var l=e.simpleClone(u),f=1e-11;r>A?(A=r-f,n.trigger(o,s.PINCH_OUT,l,!1)):A>r&&(A=r+f,n.trigger(o,s.PINCH_IN,l,!1)),e.isTouchEnd(t)&&(A=1)}if(Math.abs(c)>i.minRotationAngle){var d,p=e.simpleClone(u);d=c>0?s.ROTATION_RIGHT:s.ROTATION_LEFT,n.trigger(o,d,p,!1),n.trigger(o,s.ROTATION,u)}}},rotateSingleFinger:function(t){var i=t.target;if(T&&e.getFingers(t)<2){if(!a.move)return;if(x.length<2){var o=e.getXYByElement(i);x=[{x:o.left+i.offsetWidth/2,y:o.top+i.offsetHeight/2},a.move[0]],E=parseInt(e.getAngle180(x[0],x[1]),10)}var r=[x[0],a.move[0]],c=this.getAngleDiff(r),u={type:"",originEvent:t,rotation:c,direction:c>0?"right":"left",fingersCount:e.getFingers(t)};e.isTouchMove(t)?u.fingerStatus="move":(e.isTouchEnd(t)||"mouseout"===t.type)&&(u.fingerStatus="end",n.trigger(i,s.PINCH_END,u),e.reset());var l=c>0?s.ROTATION_RIGHT:s.ROTATION_LEFT;n.trigger(i,l,u),n.trigger(i,s.ROTATION,u)}},swipe:function(t){var r=t.target;if(h&&a.move&&!(e.getFingers(t)>1)){var c=Date.now(),u=c-o,l=e.getDistance(a.start[0],a.move[0]),f={x:a.move[0].x-v.left,y:a.move[0].y-v.top},g=e.getAngle(a.start[0],a.move[0]),m=e.getDirectionFromAngle(g),_=u/1e3,w=10*(10-i.swipeFactor)*_*_,A={type:s.SWIPE,originEvent:t,position:f,direction:m,distance:l,distanceX:a.move[0].x-a.start[0].x,distanceY:a.move[0].y-a.start[0].y,x:a.move[0].x-a.start[0].x,y:a.move[0].y-a.start[0].y,angle:g,duration:u,fingersCount:e.getFingers(t),factor:w};if(i.swipe){var T=function(){var t=s;switch(m){case"up":n.trigger(r,t.SWIPE_UP,A);break;case"down":n.trigger(r,t.SWIPE_DOWN,A);break;case"left":n.trigger(r,t.SWIPE_LEFT,A);break;case"right":n.trigger(r,t.SWIPE_RIGHT,A)}};d?e.isTouchMove(t)?(A.fingerStatus=A.swipe="move",n.trigger(r,s.SWIPING,A),u>i.swipeTime&&u<i.swipeTime+50&&l>i.swipeMinDistance&&(T(),n.trigger(r,s.SWIPE,A,!1))):(e.isTouchEnd(t)||"mouseout"===t.type)&&(A.fingerStatus=A.swipe="end",n.trigger(r,s.SWIPE_END,A),i.swipeTime>u&&l>i.swipeMinDistance&&(T(),n.trigger(r,s.SWIPE,A,!1))):(A.fingerStatus=A.swipe="start",d=!0,n.trigger(r,s.SWIPE_START,A))}i.drag&&(p?e.isTouchMove(t)?(A.fingerStatus=A.swipe="move",n.trigger(r,s.DRAG,A)):e.isTouchEnd(t)&&(A.fingerStatus=A.swipe="end",n.trigger(r,s.DRAGEND,A)):(A.fingerStatus=A.swipe="start",p=!0,n.trigger(r,s.DRAGSTART,A)))}},tap:function(t){var r=t.target;if(i.tap){var c=Date.now(),u=c-o,l=e.getDistance(a.start[0],a.move?a.move[0]:a.start[0]);clearTimeout(m);var f=function(){if(C&&i.doubleTap&&o-I<i.maxDoubleTapInterval){var t=e.getDistance(C,a.start[0]);if(16>t)return!0}return!1}();if(f)return clearTimeout(w),void n.trigger(r,s.DOUBLE_TAP,{type:s.DOUBLE_TAP,originEvent:t,position:a.start[0]});if(i.tapMaxDistance<l)return;i.holdTime>u&&e.getFingers(t)<=1&&(_=!0,I=c,C=a.start[0],w=setTimeout(function(){n.trigger(r,s.TAP,{type:s.TAP,originEvent:t,fingersCount:e.getFingers(t),position:C})},i.tapTime))}},hold:function(t){var s=t.target;i.hold&&(clearTimeout(m),m=setTimeout(function(){if(a.start){var o=e.getDistance(a.start[0],a.move?a.move[0]:a.start[0]);i.tapMaxDistance<o||_||n.trigger(s,"hold",{type:"hold",originEvent:t,fingersCount:e.getFingers(t),position:a.start[0]})}},i.holdTime))}},b=function(t){var n=t.target;switch(t.type){case"touchstart":case"mousedown":x=[],h=!0,(!a.start||a.start.length<2)&&(a.start=e.getPosOfEvent(t)),e.getFingers(t)>=2&&(E=parseInt(e.getAngle180(a.start[0],a.start[1]),10)),o=Date.now(),c=t,v={};var i=n.getBoundingClientRect(),s=document.documentElement;v={top:i.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||0),left:i.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0)},D.hold(t);break;case"touchmove":case"mousemove":if(!h||!a.start)return;a.move=e.getPosOfEvent(t),e.getFingers(t)>=2?D.pinch(t):T?D.rotateSingleFinger(t):D.swipe(t);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":if(!h)return;f=t,g?D.pinch(t):T?D.rotateSingleFinger(t):d?D.swipe(t):D.tap(t),e.reset(),E=0,y=0,t.touches&&1===t.touches.length&&(h=!0,T=!0)}},S=function(){function t(t){e.hasTouch||(t=e.getPCevts(t)),u.forEach(function(e){n.delegate(e,t,r,o[t])})}function i(t){e.hasTouch||(t=e.getPCevts(t)),u.forEach(function(e){n.bind(e,t,o[t])})}var s,a,o,r,c=arguments;if(c.length<2||c>4)return console.error("unexpected arguments!");var u="string"===e.getType(c[0])?document.querySelectorAll(c[0]):c[0];if(u=u.length?Array.prototype.slice.call(u):[u],3===c.length&&"string"===e.getType(c[1]))return s=c[1].split(" "),a=c[2],void s.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),u.forEach(function(e){n.bind(e,t,a)})});if(3!==c.length||"object"!==e.getType(c[1]))if(2!==c.length||"object"!==e.getType(c[1])){if(4===c.length&&"object"===e.getType(c[2]))return s=c[1].split(" "),a=c[3],void s.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),u.forEach(function(e){n.bind(e,t,a)})});if(4===c.length){var l=u[0];return s=c[1].split(" "),r=c[2],a=c[3],void s.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),n.delegate(l,t,r,a)})}}else{o=c[1];for(var f in o)i(f)}else{o=c[1],r=c[2];for(var d in o)t(d)}},P=function(){var t,i,s=arguments;if(s.length<1||s.length>4)return console.error("unexpected arguments!");var a="string"===e.getType(s[0])?document.querySelectorAll(s[0]):s[0];if(a=a.length?Array.prototype.slice.call(a):[a],1===s.length||2===s.length)return void a.forEach(function(i){t=s[1]?s[1].split(" "):(0,r.default)(i.listeners),t.length&&t.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),n.unbind(i,t),n.undelegate(i,t)})});if(3===s.length&&"function"===e.getType(s[2]))return i=s[2],void a.forEach(function(a){t=s[1].split(" "),t.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),n.unbind(a,t,i)})});if(3===s.length&&"string"===e.getType(s[2])){var o=s[2];return void a.forEach(function(i){t=s[1].split(" "),t.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),n.undelegate(i,t,o)})})}return 4===s.length?(i=s[3],void a.forEach(function(a){t=s[1].split(" "),t.forEach(function(t){e.hasTouch||(t=e.getPCevts(t)),n.undelegate(a,t,o,i)})})):void 0},R=function(t,i,s){var a=arguments;e.hasTouch||(i=e.getPCevts(i));var o="string"===e.getType(a[0])?document.querySelectorAll(a[0]):a[0];o=o.length?Array.prototype.call(o):[o],o.forEach(function(t){n.trigger(t,i,s)})};t();var k={};return k.on=k.bind=k.live=S,k.off=k.unbind=k.die=P,k.config=i,k.trigger=R,k})},,,,,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{}}},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=i(s);e.default={props:["infoData"],data:function(){return{wordsShow:!1,wordsSize:!0}},mounted:function(){$(".scroll").scrollTop(0),a.default.getStrLength(this.infoData.about)>150&&(this.wordsShow=!0)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{}}},,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["personData","isHeight"],methods:{firstMsg:function(){var t=this;zhuge.track("新片场WAP-个人页-点击第一屏私信",{"是否登陆":!!t.$store.state.LoginUserId},function(){t.$store.commit("sendMsg",t.personData.userid)})}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),a=(i(s),n(71)),o=i(a),r=n(2),c=i(r),u=c.default.getRequest();e.default={props:["type","infoData"],components:{ajaxLoading:o.default},data:function(){return{items:[],rawItems:[],pgNo:1,ajaxFlag:!0,ajaxAnimate:!0,scrollTop:0}},mounted:function(){var t=this;this.ajaxAction();$(window).height()<600?600:$(window).height();t.scroll(function(e,n){t.ajax(n)})},activated:function(){$(".scroll").scrollTop(this.scrollTop)},deactivated:function(){this.scrollTop=$(".scroll")[0].scrollTop},methods:{visitWork:function(t){var e=this;zhuge.track("新片场WAP-个人页-点击"+("works"==e.type?"作品":"喜欢")+"tab下的作品",{"是否是创作人页":0!=e.infoData.isadmin},function(){location.href=t})},scroll:function(t){var e=$(".scroll")[0].scrollTop,t=t||function(){};$(".scroll")[0].addEventListener("scroll",function(){var n=$(".scroll")[0].scrollTop,i=n-e;return 0!==i&&(t(i>0,n),void(e=n))},!1)},ajax:function(t){var e=$(window).height()<600?600:$(window).height(),n=$(".works-box").height(),i=t+1.5*e>=n;i&&this.ajaxFlag&&this.ajaxAction(!0)},ajaxAction:function(){var t=this;this.ajaxFlag=!1,$.ajax({type:"GET",xhrFields:{withCredentials:!0},dataType:"json",url:t.$store.getters.baseUrl+"/user/space/ts-"+("works"==t.type?"getUserArticleApi":"getUserLikeArticleApi"),data:{id:u.id,page:t.pgNo},success:function(e){e.data.list.length?(t.pgNo++,t.ajaxFlag=!0,t.items=t.items.concat(e.data.list)):t.ajaxAnimate=!1}})}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(10),a=i(s);n(5),n(9);var o=n(2),r=i(o),c=n(77),u=i(c),l=n(74),f=i(l),d=n(73),g=i(d),p=n(78),v=i(p),h=n(8),m=i(h),_=n(19),w=i(_),A=r.default.getRequest(),T=r.default.getUa();e.default={data:function(){return{tabRender:[{text:"资料",choose:!1,show:"information"},{text:"作品",choose:!0,show:"works"},{text:"喜欢",choose:!1,show:"worksLike"}],tabed:!1,currentView:"works",swipShow:!0,userInfo:{},isLoginId:"",scrollTopBar:!1,workType:"works",imgArr:[],screenHeight:$(window).height()}},components:{information:g.default,works:v.default,worksLike:v.default,personalTop:u.default,loading:f.default},watch:{userInfo:function(){r.default.setWechatTitle(this.userInfo.username+"的作品集")}},created:function(){T.isAndroid||T.isIOS||"space"==A.from?(this.fetchData(),this.isLogin()):location.href="http://www.xinpianchang.com/u"+r.default.getRequest().id},mounted:function(){function t(){return $(window).height()?void(e.screenHeight=$(window).height()):void setTimeout(function(){t()},50)}var e=this;t(),r.default.innerScroll(".scroll");var n=document.querySelector(".scroll");m.default.on(".restrain","swipeup swipedown",function(t){"swipeup"==t.type?(zhuge.track("新片场WAP-个人页-滑动到第二屏"),e.swipShow=!1):"swipedown"==t.type&&0!=e.userInfo.isadmin&&n.scrollTop<5&&(e.swipShow=!0)}),r.default.bdStatistics()},methods:{secondMsg:function(){var t=this;zhuge.track("新片场WAP-个人页-点击第二屏私信",{"是否关注":t.userInfo.isfollow,"是否登陆":!!t.$store.state.LoginUserId},function(){t.$store.commit("sendMsg",t.userInfo.userid)})},attenFn:function(){zhuge.track("新片场WAP-个人页-点击关注");var t=this;this.isLoginId?$.ajax({type:"GET",xhrFields:{withCredentials:!0},dataType:"json",url:t.$store.getters.baseUrl+"/user/follow/ts-"+(this.userInfo.isfollow?"un":"do"),data:{userid:t.userInfo.userid},success:function(e){1===e.status?t.userInfo.isfollow=!1:2===e.status?(zhuge.track("新片场WAP-个人页-关注作者成功"),t.userInfo.isfollow=!0):0===e.status&&alert(e.msg)}}):location.href=this.$store.getters.loginUrl},isLogin:function(){var t=this;$.ajax({type:"GET",xhrFields:{withCredentials:!0},dataType:"json",url:t.$store.getters.baseUrl+"/user/init",success:function(e){t.logingData=1,t.isLoginId=e.data.userid,t.$store.commit("loginState",e.data.userid)}})},fetchData:function(){var t=this;$.ajax({type:"GET",xhrFields:{withCredentials:!0},dataType:"json",url:t.$store.getters.baseUrl+"/user/space/ts-getUserInfoApi",data:{id:A.id},success:function(e){if(0===e.status){var n=e.data;t.userInfo=(0,a.default)({},t.userInfo,n),zhuge.track("新片场WAP-个人页-页面访问",{isadmin:t.userInfo.isadmin}),3!=t.userInfo.isadmin&&4!=t.userInfo.isadmin&&(t.swipShow=!1,t.tabRender.splice(1,1),t.tabFn(t.tabRender[0])),r.default.preloadImages([n.face.face_100,n.face.face_54]),r.default.weixinShare(w.default,{title:n.username+"的作品集",desc:n.desc,img:n.face.face_origin+"@300w_300h_1e_1c.jpg?"+(new Date).getTime(),page:"新片场WAP-个人页"});new jsBridge({registerCallback:function(t){t.registerHandler("loadCompleteAction",function(e,i){var s="",a=navigator.userAgent.match(/App\s?([\d\.]+)\s?\//i);a&&(s=a[1]>="5.1.2"?" | 新片场":"");var o={sharetitle:n.username+"的作品集"+s,sharedefaultdes:n.desc,shareweibodes:n.desc,sharelink:location.href,shareimgurl:n.face.face_54+"@300w_300h_1e_1c"};t.callHandler("handlerShowShare",o,function(t){})})}})}}})},tabFn:function(t){this.tabRender.forEach(function(t){t.choose=!1}),t.choose=!0,this.workType=t.show,this.currentView=t.show;var e=this;zhuge.track("新片场WAP-个人页-点击tab"+t.text,{"是否是创作人页":0!=e.userInfo.isadmin})}}}},function(t,e,n){t.exports={default:n(35),__esModule:!0}},,function(t,e,n){t.exports={default:n(37),__esModule:!0}},,,function(t,e,n){var i=n(4);t.exports=function(t,e){return i.create(t,e)}},,function(t,e,n){n(47),t.exports=n(3).Object.keys},,,,,,,,function(t,e,n){var i=n(11),s=n(3),a=n(12);t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*a(function(){n(1)}),"Object",o)}},,function(t,e,n){var i=n(13);n(45)("keys",function(t){return function(e){return t(i(e))}})},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){},,,,,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAASpJREFUKBVjNDU1bf737186AwODKBCTCv4zMjLeZ2JiymeWkpJaBtQtTqoJUPWMQFoQiP8yAYnJUEFyqX9AF01nUlRU7AQ6bzu5pgD1VZ06deo4yGkMxsbG/EDqOBBrgvjEAqADFp85cyYOpB7kNYazZ89+BFK+QIl3ID4xAKj2uKioaCpMLdhFMA7QZY5ABbv+///PAhPDRgPVPGZmZjY9efLkS5g8M4wBop8/f/5AUlLyNZDpA+LjAF+BgesKDJe7yPIoBoEkgIadkZaWBqUpM2SFUPZ/oCGRp0+f3o8uBw4jdEEeHp4CoPP3oIsD+fVAQ9ZhEWdACSNkBTY2NoLfv3/fCBSzhYpPBEZKAbIaZDZOg0CKQkNDmR8+fGgIdN1HYMDeRtaIzgYAeVVLpH4WVM0AAAAASUVORK5CYII="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAASNJREFUKBVjZMAB/v//z2hmZlYBpPOBSj4yMjLmnz59egcO5QyMuCRMTEwagIbUw+SBBv1hYmJyP3Xq1D6YGDKN1SBjY+NQoKKVQIwiDzTsHSsrq/nx48fvIBsCYqMoBAmYm5sb//379zDQNZwgPhZwAyhmcfbs2Y/IckzIHKBLJP/8+bMRjyEg5RpAl60IDQ1lRtYL5zg4OHD8/v17J1BSE1kBDrbKhw8f+J49ewZSDwZwg4SFhRcCRTyg4sRQFtLS0k+Ahp0HKQZ7DRhDVUB2FDG6kdUAg2A6MInYgsQYgYZ4AgW2gtjIikhgvwGq1WOWlJTcCGSIkaARXSkXUIAV5LW36DJk8N+wiImJub5+/VofmGpJdtU/IGBmZn5w8uTJawAi4luXD3qN8gAAAABJRU5ErkJggg=="},,function(t,e,n){n(52);var i=n(1)(n(21),n(83),"data-v-6288710e",null);t.exports=i.exports},,function(t,e,n){n(50);var i=n(1)(n(23),n(81),"data-v-55662800",null);t.exports=i.exports},function(t,e,n){n(54);var i=n(1)(n(24),n(85),"data-v-648eebe0",null);t.exports=i.exports},,,function(t,e,n){n(56);var i=n(1)(n(27),n(87),null,null);t.exports=i.exports},function(t,e,n){n(51);var i=n(1)(n(28),n(82),null,null);t.exports=i.exports},function(t,e,n){n(53);var i=n(1)(n(29),n(84),null,null);t.exports=i.exports},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"information"},[i("div",{staticClass:"data-box border-bottom-1px"},[i("h3",[t._v("个人数据")]),t._v(" "),0!=t.infoData.isadmin?i("p",{staticClass:"data-item"},[i("span",[t._v("站内播放")]),t._v(" "),i("em",[t._v(t._s(t.infoData.count_article_view))])]):t._e(),t._v(" "),0!=t.infoData.isadmin?i("p",{staticClass:"data-item"},[i("span",[t._v("被喜欢")]),t._v(" "),i("em",[t._v(t._s(t.infoData.count_liked))])]):t._e(),t._v(" "),i("p",{staticClass:"data-item"},[i("span",[t._v("关注")]),t._v(" "),i("em",[t._v(t._s(t.infoData.count_follow))])]),t._v(" "),i("p",{staticClass:"data-item"},[i("span",[t._v("粉丝")]),t._v(" "),i("em",[t._v(t._s(t.infoData.count_followed))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.infoData.isadmin,expression:"infoData.isadmin !=0 "}],staticClass:"identifBox border-bottom-1px"},[i("h3",[t._v("认证描述")]),t._v(" "),i("p",[t._v(t._s(t.infoData.desc))])]),t._v(" "),t.infoData.age||t.infoData.graduation?i("div",{staticClass:"detailBox border-bottom-1px"},[i("h3",[t._v("详细信息")]),t._v(" "),t.infoData.age?i("p",{staticClass:"ageItem"},[i("span",[t._v("年龄")]),t._v(" "),i("em",[t._v(t._s(t.infoData.age))])]):t._e(),t._v(" "),t.infoData.graduation?i("p",{staticClass:"schoolItem"},[i("span",[t._v("毕业院校")]),t._v(" "),i("em",[t._v(t._s(t.infoData.graduation))])]):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"aboutMe"},[i("h3",[t._v("关于我")]),t._v(" "),i("div",{staticClass:"words-box"},[i("p",{class:["words",t.wordsSize?"limit-line-3":""],domProps:{innerHTML:t._s(t.infoData.about?t.infoData.about:"TA还没有留下任何讯息...")}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.wordsShow,expression:"wordsShow"}],staticClass:"showBtn ",on:{click:function(e){t.wordsSize=!t.wordsSize}}},[i("span",[t._v(t._s(t.wordsSize?"收起":"展开"))]),t._v(" "),t.wordsSize?t._e():i("img",{attrs:{src:n(68),alt:""}}),t._v(" "),t.wordsSize?i("img",{attrs:{src:n(69),alt:""}}):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"works-box"},t._l(t.items,function(e,i){return n("li",{staticClass:"works-item"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.visitWork(t.$store.getters.routePath+"/article/index.html?id="+e.articleid)}}},[n("span",{staticClass:"img-cover"}),t._v(" "),n("img",{staticClass:"item-img",attrs:{src:e.cover+"@750w.jpg",alt:""}}),t._v(" "),n("p",{staticClass:"item-descrip"},[e.cate?n("span",{staticClass:"span1"},[t._v("\n              "+t._s(e.cate.cate.catename)+"\n              "),n("i",[t._v("I")]),t._v("\n              "+t._s(e.duration)+"\n            ")]):t._e()]),t._v(" "),n("p",{staticClass:"item-title"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),"works"!=t.type?n("p",{staticClass:"item-name"},[n("span",{staticClass:"span-name"},[t._v("\n              "+t._s(e.author?e.author.username:"多位作者")+"\n            ")]),t._v(" "),n("span",{class:["span-icon","v-"+e.author.isadmin]})]):t._e(),t._v(" "),n("p",{staticClass:"item-icon"},[e.video_format?n("span",[t._v(t._s(e.video_format))]):t._e(),t._v(" "),e.is_vr?n("span",[t._v("VR")]):t._e()])])])})),t._v(" "),t.ajaxFlag&&!t.items.length||!t.ajaxAnimate&&!t.items.length?n("p",{staticClass:"no-works-notice"},[t._v(t._s("works"==t.type?"TA还没有上传过作品":"TA还没有喜欢过作品"))]):t._e(),t._v(" "),!t.ajaxAnimate&&t.items.length?n("div",{staticClass:"to-end"},[n("span",[t._v("END")])]):t._e(),t._v(" "),n("ajaxLoading",{directives:[{name:"show",rawName:"v-show",value:!t.ajaxFlag&&t.ajaxAnimate,expression:"!ajaxFlag && ajaxAnimate"}],style:"margin-top:"+[1==t.pgNo?"40%":""]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"loader"},[n("div",{staticClass:"loader-inner ball-pulse-sync"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"sm-top-box",style:{transform:"translateY("+(t.swipShow?-200:0)+"px)"}},[n("div",{staticClass:"top-info-bar"},[n("div",{staticClass:"userLogo"},[t.userInfo.face?n("img",{staticClass:"img1",attrs:{src:t.userInfo.face.face_54,alt:""}}):t._e(),t._v(" "),n("span",{class:["v-"+t.userInfo.isadmin]})]),t._v(" "),n("h3",[t._v(t._s(t.userInfo.username))]),t._v(" "),n("div",{class:["atten-box",t.userInfo.isfollow?"attened":"atten"],on:{click:t.attenFn}}),t._v(" "),n("div",{staticClass:"msg-box",on:{click:function(e){t.$store.commit("sendMsg",t.userInfo.userid)}}})]),t._v(" "),n("div",{staticClass:"changeBox border-1px"},[n("ul",{staticClass:"nav-ul"},t._l(t.tabRender,function(e){return n("li",{class:["tabItem",e.choose?"tabed":""],on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.tabFn(e)}}},[n("span",[t._v(t._s(e.text))])])}))])]),t._v(" "),n("div",{staticClass:"restrain",style:{height:t.screenHeight+"px"}},[n("div",{staticClass:"container",style:{transform:"translateY("+(t.swipShow?0:-t.screenHeight)+"px)"}},[n("div",{staticClass:"top_floatBox",style:{height:t.screenHeight+"px"}},[t.userInfo.face?n("div",{staticClass:"top-box-background",style:{"background-image":"url("+t.userInfo.face.face_origin+"@50w_100h_1e_1c.jpg)"}}):t._e(),t._v(" "),n("personalTop",{attrs:{personData:t.userInfo,userid:t.isLoginId,isHeight:t.screenHeight}})],1),t._v(" "),n("div",{staticClass:"mainBox scroll",style:{height:t.screenHeight+"px","padding-top":t.swipShow?0:"6rem"}},[n("keep-alive",[n(t.currentView,{tag:"component",attrs:{type:t.workType,infoData:t.userInfo}})],1)],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"rabbit-wrap"},[n("div",{staticClass:"loader"},[n("div",{staticClass:"loader-inner ball-beat"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])])])}]}},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:{height:t.isHeight+"px"}},[i("div",{staticClass:"userLogo"},[t.personData.face?i("img",{staticClass:"img1",attrs:{src:t.personData.face.face_360,alt:""}}):t._e(),t._v(" "),i("span",{class:["v-"+t.personData.isadmin]})]),t._v(" "),i("div",{staticClass:"userTitle"},[i("h3",[t._v(t._s(t.personData.username))]),t._v(" "),t.personData.sarea&&t.personData.sarea.province?i("h5",{directives:[{name:"show",rawName:"v-show",value:t.personData.desc,expression:"personData.desc"}]},[t._v("\n\n   \t    \t"+t._s(t.personData.rolename)+"／"+t._s(t.personData.sarea.province.name)+"\n\n\n   \t    ")]):t._e()]),t._v(" "),i("p",{staticClass:"info-words",domProps:{innerHTML:t._s(t.personData.desc)}}),t._v(" "),i("div",{staticClass:"sixin-btn",on:{click:t.firstMsg}},[t._v("联系TA")]),t._v(" "),i("img",{staticClass:"arrow-up-btn",attrs:{src:n(15)}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=index.481bd5282cd06d514ee3.js.map