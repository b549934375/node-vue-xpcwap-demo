(function(root, doc, setup) {
    // bind setup function to window
    window[setup] = jsBridge;
    
    // constantly define the event type name for android injection
    var typeForEvent = 'WebViewJavascriptBridgeReady';

    function jsBridge(opts) {
      var defaultOpts = {
        iOSInjection: true,
        registerCallback : null
      }

      // v电影app新版webview交互
      defaultOpts.iOSInjection = versionCompare("5.1.3");

      opts  = extend(defaultOpts,opts);
  
      if (root.WebViewJavascriptBridge) { 
          // execute callback next frame if WebViewJavascriptBridge has been injected
          setTimeout(eventCallback, 0, root.WebViewJavascriptBridge);

      } else if (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())) {
          if (opts.iOSInjection) {
            if (root.WVJBCallbacks) {
                root.WVJBCallbacks.push(opts.registerCallback);
                console.error('setupJSBridge(iOS): a potential injecting error');
                return; // FIXME 可能已经先注入，但push了callback，应该尝试iframe
            }
            // notify iOS injection via iframe
            root.WVJBCallbacks = [ opts.registerCallback ];
            var WVJBIframe = doc.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            doc.documentElement.appendChild(WVJBIframe);

            // remove iframe next frame
            setTimeout(function() { doc.documentElement.removeChild(WVJBIframe) }, 0);
          } else {
            
            // register a callback for ios injection
            doc.addEventListener(typeForEvent, eventCallback, false);

          }

      } else if (doc.addEventListener) { // non-iOS device, such as android, pc chrome etc.

          // register a callback for android injection
          doc.addEventListener(typeForEvent, eventCallback, false);

          if (root.androidPreBridge && androidPreBridge.inject) {
              // notify android injection via android pre-injected bridge
              try {
                  // android may throw any exceptions, for sake of that, we catch it
                  androidPreBridge.inject();
              } catch(e) {
                  console.error(e);
              }
          }
      }

      
      // event callback for js bridge initialization
      function eventCallback(event) {
          
          onInit(event.bridge);
         
          doc.removeEventListener(typeForEvent, eventCallback);
      }


      function extend(o,n) {

        for (var p in n){
            if(n.hasOwnProperty(p) && (o.hasOwnProperty(p) ))
                o[p]=n[p];
        }
        return o;

      }

      function versionCompare(version) {

        var vAppVersionMatch = navigator.userAgent.match(/App\s?([\d\.]+)\s?\//i);
        return vAppVersionMatch ? (vAppVersionMatch[1] >= version) : false;

      }

      function onInit(bridge) {

        if (bridge && typeof bridge.init != 'undefined' && bridge.init instanceof Function) {
            bridge.init(function(message, responseCallback) {
                console.log('JS got a message', message);
                var data = {
                    'Javascript Responds': 'Wee!'
                };
                console.log('JS responding with', data);
                responseCallback(data);
            });
          }

        opts.registerCallback(bridge);

      }
    }


    jsBridge.prototype.callHandler = function(handlerName,data,handler){

      root.WebViewJavascriptBridge.callHandler(handlerName,data,handler);

    }


})(window, document, "jsBridge"/*setup Function name*/);