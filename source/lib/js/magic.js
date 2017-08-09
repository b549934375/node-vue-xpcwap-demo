let Magic = {

};
Magic.getUa = function(){
	var ua = navigator.userAgent.toLowerCase();
	return {
		isAndroid : /android/i.test(ua),
		isIOS : /iphone|ipad|ipod/i.test(ua),
		isQq : /qq/i.test(ua),
		isWeibo : /weibo/i.test(ua),
		isWeixin : /MicroMessenger/i.test(ua),
		isWeixin : /MicroMessenger/i.test(ua)
	}
}
Magic.callApp = function(schema,callback){
	callback = callback ||function(){};
    var openDate = new Date().getTime();
    setTimeout(function(){
        if(new Date().getTime() - openDate < 1020){
            callback();
        }
    },1000)
    if(this.getUa['isIOS']){
        location.href = schema;
    }else{
    	var schemaIframe = document.createElement("iframe");
        schemaIframe.height = 0;
    	schemaIframe.src = schema;
    	document.body.appendChild(schemaIframe);
    }
}

Magic.getAppDownload = function(number) {
    var ua = this.getUa();
    return "http://magicapi.vmovier.com/magicapi/index/getApp?_vplatform=" + (ua['isAndroid'] ? "android" : "iphone");
}

Magic.getRequest = function(){
    var url = location.search;
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
        var str = url.substr(1);   
        var strs = str.split("&");   
        for(var i = 0; i < strs.length; i ++) {   
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
        }   
    }   
    return theRequest;
}

Magic.weixinShare = function(wx,shareConfig) {
    $.getJSON('http://magicapi.vmovier.com/index/getRefererWeixinShareConfig', function(re) {
        if(re.status == 0){
            wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: re.data.appId, // 必填，公众号的唯一标识
                    timestamp: re.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: re.data.nonceStr, // 必填，生成签名的随机串
                    signature: re.data.signature, // 必填，签名，见附录1
                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','launch3rdApp','getInstallState'] //  必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title: shareConfig.title, // 分享标题
                    link: shareConfig.link, // 分享链接
                    imgUrl: shareConfig.img, // 分享图标
                    success: function () { 
                        if(zhuge && shareConfig.page){
                            zhuge.track(shareConfig.page + '朋友圈分享')
                        }
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: shareConfig.title, // 分享标题
                    desc: shareConfig.desc, // 分享描述
                    link: shareConfig.link, // 分享链接
                    imgUrl: shareConfig.img, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () { 
                        if(zhuge && shareConfig.page){
                            zhuge.track(shareConfig.page + '好友分享')
                        }
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
            })
        }
    })
  
}

Magic.preloadImages = function(arr) {
  var imgNum = arr.length,i = 0,_loading = $(".loading-page");
  arr.forEach(function(elem){
      var img = new Image();
      img.src = elem;
      img.onload = function(){
        
        if(++i && i >= imgNum){
            _loading.addClass("loading-fade");
            setTimeout(function(){
              _loading.hide();
            },200)
        }
      }
  })
}

Magic.innerScroll = function(selector){
    var scrollContainer = document.querySelector(selector);
    
    scrollContainer.addEventListener('touchstart', function() {
      var top = scrollContainer.scrollTop
        , totalScroll = scrollContainer.scrollHeight
        , currentScroll = top + scrollContainer.offsetHeight;
      if(top === 0) {
        scrollContainer.scrollTop = 1;
      } else if(currentScroll === totalScroll) {
        scrollContainer.scrollTop = top - 1;
      }
    });

    scrollContainer.addEventListener('touchmove', function(evt) {
      if(scrollContainer.offsetHeight < scrollContainer.scrollHeight)
        evt._isScroller = true;
    });
    
    document.body.addEventListener('touchmove', function(evt) {
        if(!evt._isScroller) {
          evt.preventDefault();
        }
    });
}

Magic.getStrLength = function(str){
    var len = 0;
    var code = -1;
    for(var i=0;i<str.length;i++){
        code = str.charCodeAt(i);
        if( code >= 0 && code <= 128 )
            len++;
        else
            len+=2;
    }
    return len;
}
Magic.bdStatistics = function(){
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?dfbb354a7c147964edec94b42797c7ac";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
}

Magic.setWechatTitle = function (title) {
  document.title = title
  var mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    // 替换成站标favicon路径或者任意存在的较小的图片即可
    iframe.setAttribute('src', 'http://h5.xinpianchang.com/public/favicon.ico')
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}


Magic.iframeReplace = function () {
    var video_arr = $('.insert_video');
    var Len = video_arr.length; 
    for(var i=0;i<Len;i++){
      var swf_url = video_arr.eq(i).attr('swf');
      var ios_url = video_arr.eq(i).attr('ios');
      var vid = video_arr.eq(i).attr('vid');
      var swf_w = video_arr.eq(i).attr('swf_w');
      var swf_h = video_arr.eq(i).attr('swf_h');
      var video_link = video_arr.eq(i).attr('video_link');
      var realW = video_arr.eq(i).parent().width();
      var realH = realW * swf_h / swf_w;
      var vars = video_arr.eq(i).attr('vars');
      var image = video_arr.eq(i).attr('image');
      var shortcode = "";
      //优酷的视频可用直接嵌入播放
      if(ios_url.indexOf("youku") != -1){
        shortcode = "<iframe height="+realH +" width="+ realW +" frameborder=0 src=\""+ ios_url +"\" allowfullscreen></iframe>";
        video_arr.eq(i).html(shortcode);

      }else if(ios_url.indexOf("tudou") != -1){//土豆的视频直接嵌入播放
        shortcode = "<iframe src='http://www.tudou.com/programs/view/html5embed.action?code="+vid+"' height="+realH +" width="+ realW +" frameborder='0' scrolling='no'></iframe>";
        video_arr.eq(i).html(shortcode);
        //对于 iPhone iPad ，如果存在为它们准备的视频源地址，则用 video 标签播放
      }else if( /iPad|iPhone/.test(navigator.userAgent) && ios_url && (!ios_url.match(/qiyi/i)) && (!ios_url.match(/tudou/i))){
        shortcode = "<video width=\""+ realW +"\" height=\""+realH +"\" controls=\"controls\" src=\""+ ios_url +"\"></video>";
        video_arr.eq(i).html(shortcode);
      }
      //用图片替换，让用户进入视频网站观看
      else{
        // var imageStr = /iPad/.test(navigator.userAgent)?'':((image != 0 && image!=undefined)?'<img src="'+image+'">':'');
        // var height = /iPad/.test(navigator.userAgent)?'style="height:'+swf_h+'px;"':'';
        // var time = $('#link-report').attr('duration');
        // shortcode = '<a href="'+video_link+'" target="_blank" class="poster" '+height+'>'+imageStr+'<span class="play_btn"></span><div class="time">'+time+'</div>';
        // video_arr.eq(i).html(shortcode);
        window.iframeReplaceFlag = true;
        $(".video_imgBox").on("click",function(){
          location.href = video_link;
        })
      }
    }
}


export default Magic;