(function($){
	if (typeof jQuery == 'undefined'){
		return;	
	}
	function flashChecker(){
		var hasFlash=0;　　　　//是否安装了flash

		if(document.all)
		{
			var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); 
			if(swf) {
				hasFlash=1; 
			}
		}else{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				var swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					hasFlash=1;
				}
			}
		}
		return hasFlash;
	}
	function try_canvas() {
			var canvas = document.createElement("canvas");
			    var div = document.getElementById("canvas_div");
			    if (canvas) {
			        return canvas.getContext;
			    }
		}
	function is_iPad(){ 
	    var ua = navigator.userAgent.toLowerCase(); 
	    if(ua.match(/iPad/i)=="ipad") { 
	       return true; 
	    } else { 
	       return false; 
	    } 
	}
	function is_iPhone(){ 
	    var ua = navigator.userAgent.toLowerCase(); 
	    if(ua.match(/iPhone/i)=="iphone") { 
	       return true; 
	    } else { 
	       return false; 
	    } 
	}
	function is_weixin(){
		var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
        	return true; 
	    } else { 
	       	return false; 
	    } 
	}
	$(function(){
		if (is_weixin() && is_iPhone() && 0) {
			$('.video_iframe').each(function(){
				var image = $(this).data('image');
				var link = $(this).data('link');
				var width = $(this).width();
				var height = $(this).height();
				var imageStr = '<img src="'+image+'">';
				var height = 'style="height:'+height+'px;"';
				shortcode = '<a href="'+link+'" target="_blank" class="poster" '+height+'>'+imageStr+'<span class="play_btn"></span>';
				$(this).replaceWith(shortcode);
			})
		};
		//在移动端  将 embed 元素替换为 html5支持的video 或者 只用一张图片替换
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
			else if(flashChecker() && !try_canvas()){
				//支持 FLASH 
			}
			//用图片替换，让用户进入视频网站观看
			else{
				var imageStr = /iPad/.test(navigator.userAgent)?'':((image != 0 && image!=undefined)?'<img src="'+image+'">':'');
				var height = /iPad/.test(navigator.userAgent)?'style="height:'+swf_h+'px;"':'';
				var time = $('#link-report').attr('duration');
				shortcode = '<a href="'+video_link+'" target="_blank" class="poster" '+height+'>'+imageStr+'<span class="play_btn"></span><div class="time">'+time+'</div>';
				video_arr.eq(i).html(shortcode);
			}
		}
		
	});
})(jQuery);