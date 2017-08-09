<style lang="sass">
@import "index.scss";
</style>

<template>
  <div id="app">
    <!-- <loading></loading> -->

    <div class="sm-top-box" :style="{'transform':'translateY(' + (swipShow ? -200 : 0) + 'px)'}">
      <div class="top-info-bar">

        <div class="userLogo">

          <img v-if="userInfo.face" class="img1" :src="userInfo.face.face_54" alt="">

          <span :class="['v-' + userInfo.isadmin]"></span>

        </div>
        <h3>{{userInfo.username}}</h3>

        <div :class="['atten-box',userInfo.isfollow ? 'attened' : 'atten']"  @click="attenFn">
          <!-- {{userInfo.isfollow?'已关注':'关注'}} -->
        </div>

        <div class="msg-box" @click="$store.commit('sendMsg',userInfo.userid)">

          <!-- <img src="http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f49c1b750e9.png" alt=""> -->

        </div>
      </div>
      <div class="changeBox border-1px">
        <ul class="nav-ul">
          <li v-for="tab in tabRender" @click.stop.prevent="tabFn(tab)" :class="['tabItem' ,(tab.choose ? 'tabed' :'')]">

            <span>{{tab.text}}</span>
        
          </li>
        </ul>
        
      </div>
    </div>

    <div class="restrain" :style="{'height':screenHeight + 'px'}">
      <!-- 顶部浮动模块 -->
      <div class="container" :style="{'transform':'translateY(' + (!swipShow ? -screenHeight : 0) + 'px)'}">

        <div class="top_floatBox" :style="{'height':screenHeight + 'px'}">

          <div v-if="userInfo.face" class="top-box-background" :style="{'background-image':'url('+userInfo.face.face_origin+'@50w_100h_1e_1c.jpg)'}">

           <!--  <img v-if="userInfo.face" :style="{'height':screenHeight + 'px'}" :src="userInfo.face.face_360" alt=""> -->

          </div>

          <!-- 个人信息组件 -->
          <personalTop :personData="userInfo" :userid="isLoginId" :isHeight="screenHeight"></personalTop>

        </div>

        <div class="mainBox scroll" :style="{'height':screenHeight + 'px','padding-top': (!swipShow ? '6rem' : 0)}">

          <keep-alive>

            <component :is="currentView" :type="workType" :infoData="userInfo"></component>

          </keep-alive>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import  '../lib/js/jsBridge.js'

import  '../lib/js/zhugeio.js'

import magic from '../lib/js/magic.js'

import personalTop from '../components/personalTop.vue'
import loading from '../components/loading.vue'

import information from '../components/information.vue'
import works from '../components/works.vue'
import worksLike from '../components/works.vue'

import touch from '../lib/js/touchjs.min.js'

import wx from 'weixin-js-sdk'

const request = magic.getRequest();
const ua = magic.getUa();

export default {
  data () {
    return {
      tabRender : [
        {
          text : "资料",
          choose : false,
          show:'information'
        },{
          text : "作品",
          choose : true,
          show:'works'
        },{
          text : "喜欢",
          choose : false,
          show:'worksLike'
        }
      ],
      tabed:false,                      //切换状态码

      currentView:'works',        //当前展示组件

      swipShow:true,                     //滑动显示状态吗

      userInfo:{},                        //个人信息数据
      
      isLoginId:'',

      scrollTopBar:false,                  //吸顶条判断码

      workType:"works",

      imgArr:[],

      screenHeight:$(window).height()

      // title: this.userInfo.username + '-新片场'
    }
  },
  components: {
    information,
    works,
    worksLike,
    personalTop,
    loading
  },
  watch:{
    userInfo(){

      if(this.userInfo.isadmin == 3 || this.userInfo.isadmin == 4){
        magic.setWechatTitle(this.userInfo.username + '的作品集');
      }else{
        magic.setWechatTitle(this.userInfo.username + '-新片场');
      };
      
    }
  },
  created(){
    if(!ua.isAndroid && !ua.isIOS && request['from'] != 'space'){

        location.href = "http://www.xinpianchang.com/u" + magic.getRequest().id;

    }else{
      this.fetchData();

      this.isLogin();
    }

  },
  mounted(){



    var _this = this;

    achieveScreenHeightForFuckApp();

    function achieveScreenHeightForFuckApp(){

      if($(window).height()){

        
        _this.screenHeight = $(window).height();

        return;

      }else{

        setTimeout(function(){

          achieveScreenHeightForFuckApp();

        },50)

      }
      
    }

    magic.innerScroll('.scroll');
    
    

    var scrollContainer = document.querySelector('.scroll');

    touch.on('.restrain', 'swipeup swipedown', function(ev){

        if(ev.type=='swipeup' ){

          zhuge.track("新片场WAP-个人页-滑动到第二屏");
          _this.swipShow = false;

        }

        else if(ev.type=='swipedown' && _this.userInfo.isadmin != 0 && scrollContainer.scrollTop < 5){
 
          _this.swipShow = true;

        }
    });

    magic.bdStatistics();

  },
  methods:{
    secondMsg(){
      var _this = this;
      zhuge.track("新片场WAP-个人页-点击第二屏私信",{
        "是否关注": _this.userInfo.isfollow,
        "是否登陆": !!_this.$store.state.LoginUserId
      },function(){
        _this.$store.commit('sendMsg',_this.userInfo.userid)
      });
    },
    attenFn(){
      zhuge.track("新片场WAP-个人页-点击关注");
      var _this = this;
      
      if(this.isLoginId){
        $.ajax({
          type: "GET",
          xhrFields: {withCredentials: true},
          dataType: "json",
          url: _this.$store.getters.baseUrl + '/user/follow/ts-' + (this.userInfo.isfollow ? 'un' : 'do'),
          data:{
            userid:_this.userInfo.userid
          },
          success:function(response){

            if (response.status === 1) {

              
              _this.userInfo.isfollow = false;


            }else if (response.status === 2) {

              zhuge.track("新片场WAP-个人页-关注作者成功");
              _this.userInfo.isfollow = true;


            }else if(response.status === 0){

              alert(response.msg);

            }
          }

        });
      }else{
        
        location.href = this.$store.getters.loginUrl;

      };
    },
    
    isLogin(){
      var _this = this;
      $.ajax({
        type: "GET",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: _this.$store.getters.baseUrl + '/user/init',
        success:function(response){

          _this.logingData = 1;

          _this.isLoginId = response.data.userid;

          _this.$store.commit("loginState",response.data.userid);


        }
      });
    },

    fetchData(){
      var _this = this;
      $.ajax({
        type: "GET",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: _this.$store.getters.baseUrl + '/user/space/ts-getUserInfoApi',
        data:{
          id:request.id
        },
        success:function(response){
          if (response.status === 0) {

            let persData = response.data;

            _this.userInfo = Object.assign({}, _this.userInfo, persData);

            zhuge.track("新片场WAP-个人页-页面访问",{
              isadmin : _this.userInfo.isadmin
            });

            if(_this.userInfo.isadmin != 3 && _this.userInfo.isadmin != 4){

              _this.swipShow = false;

              _this.tabRender.splice(1,1);

              _this.tabFn(_this.tabRender[0]);

            }
            
            magic.preloadImages([persData.face.face_100,persData.face.face_54]);

            magic.weixinShare(wx,{

              title : persData.username + '的作品集',

              desc : persData.desc,

              img : persData.face.face_origin + '@300w_300h_1e_1c.jpg?' +  new Date().getTime(),

              page : "新片场WAP-个人页"

            });

            var bridge = new jsBridge({
                registerCallback : function(wbridge){
                    wbridge.registerHandler("loadCompleteAction", function(data, responseCallback) {
                      var vAppStr = "",vAppMatch = navigator.userAgent.match(/App\s?([\d\.]+)\s?\//i);
                    if(vAppMatch){
                      vAppStr = vAppMatch[1] >= "5.1.2" ? " | 新片场" : "";
                    }
                      var shareData = {
                        'sharetitle': persData.username + '的作品集' + vAppStr,
                        'sharedefaultdes': persData.desc,
                        'shareweibodes': persData.desc,
                        'sharelink': location.href,
                        'shareimgurl': persData.face.face_54 + "@300w_300h_1e_1c"
                      };

                      wbridge.callHandler('handlerShowShare',shareData, function(response) {});
                    });
                }
            });
          }
        }
      });
    },
    tabFn(n){
      //tab组件切换功能
      this.tabRender.forEach(function(elem){
        elem.choose = false;
      })
      n.choose = true;
      this.workType = n.show;
      this.currentView = n.show;
      var _this = this;

      zhuge.track("新片场WAP-个人页-点击tab" + n.text,{
        "是否是创作人页" : _this.userInfo.isadmin != 0
      });
    }
  }
}

</script>
