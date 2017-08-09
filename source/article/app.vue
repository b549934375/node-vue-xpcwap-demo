<style lang="sass">
@import "../lib/css/rotate";
@import "index.scss";
</style>

<template>
<div id="app">
    <!-- <loading></loading> -->
    <div class="topBox">
      <div v-if="viewData.cover" class="top-box-background" :style="{'background-image':'url('+viewData.cover+'@50w_100h_1e_1c.jpg)'}"></div>
      <div class="top-content">
        <h3 class="topTitle">{{viewData.title}}</h3>


        <!-- <p class="top_tittleLogo" v-show="videoInfo.video_format || videoInfo.is_vr">

          <span v-if="videoInfo.video_format">{{videoInfo.video_format}}</span>

          <img v-if="videoInfo.is_vr" class="marLeft" src="./static/top_vr.png" alt="">

        </p> -->

        <p class="top_smp">
          <span v-if="myCate.fcate" class="span1">
            <em>{{myCate.fcate.catename}}</em>
            <i> I </i>
            <em>{{myCate.cate.catename}}</em>
            <i> I </i>
            <em>{{viewData.duration}}</em>
          </span>
          <span class="span2">
            <em>{{viewData.count_viewed}} <i>播放</i> <i> I </i></em>
            <em>{{viewData.count_like}} <i>喜欢</i></em>
          </span>
        </p>
        <div class="videoBox">

          <div class="video-wraper" v-if="videoInfo.h5_url || videoInfo.mp4_url" v-html="videoInfo.h5_url || videoInfo.mp4_url" :style="videoShow ? {'z-index':2} : {'z-index':-1}">
          </div>

          <div class="video_imgBox" @click="videoClick" :style="videoShow ? {'opacity':0} : {'opacity':1}">

            <img class="img1" v-if="viewData.cover" :src="viewData.cover + '@750w_442h_1e_1c.jpg'" alt="">

            <img class="img2" src="./static/videoBtn.png" alt="">

            <p v-show="videoInfo.video_format || videoInfo.is_vr" class="top_tittleLogo" >

              <span v-if="videoInfo.video_format" class="border-1px">{{videoInfo.video_format}}</span>

              <span v-if="videoInfo.is_vr" class="border-1px">VR</span>
            
            </p>

          </div>
        </div>
        <div class="attention">
          <ul class="attenUl">
            <li v-for="(item,index) in myTeam.list" class="item">

              <a class="boxLeft" :href="index == 0 ? 'javascript:;' : $store.getters.routePath + '/user/index.html?id=' + item.userid" @click="index == 0 ? visitAuthor($store.getters.routePath + '/user/index.html?id=' + item.userid) : ''">

                <img class="img1" :src="item.face_origin" alt="">

                <img class="img2" src="./static/userLever.png" alt="">

              </a>

              <div class="boxRight">

                <h3>{{item.username}}</h3>

                <span>{{item.roleStr}}</span>

              </div>

              <div :class="['attenBtn',item.is_followed ? 'attened' : 'atten']" @click="attenFn(item)">

                <div v-show="item.is_following" class="loader" style="background-color:#B83C2F">
                  <div class="loader-inner ball-clip-rotate">
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="wordsBox border-1px">
          <div class="p-box">
            <p v-if="viewData.content" :class="[(limitLine && limitLineAction) ? 'limit-line-3' : '']" :style="{'text-align': limitLineAction ? 'left' : 'left'}" >{{viewData.content}}
            </p>
          </div>
          <div v-show="limitLine" class="showBtn" @click="limitLineAction = !limitLineAction">

            <span>{{limitLineAction  ? '展开' : '收起'}}</span>

            <img v-if="limitLineAction" src="./static/arrow-down.png" alt="">
            <img v-else src="./static/arrow-up.png" alt="">
          </div>
        </div>

        <div class="forGood">
          <div v-if="viewData.is_private == 0" @click="tabGood" :class="['goodButton',viewData.isLikeArticle? 'gooded': '']">
            <!-- <span class="gooded" style="display:none"></span> -->
          </div>
          
          <p v-show="myActivity.length" class="p1">
            <a v-for="smTitle in myActivity" :href="smTitle.link">{{smTitle.title}}
            </a>
          </p>
          <p class="iconBox">
            <img :class="'icon-show-' + viewData.authorized" src="./static/icon-people.png" alt="">
            <img :class="'icon-show-' + viewData.authorized" src="./static/icon-money.png" alt="">
            <img :class="'icon-show-' + viewData.authorized" src="./static/icon-nav.png" alt="">
            <img :class="'icon-show-' + viewData.authorized" src="./static/icon-reload.png" alt="">
          </p>
          <img class="upArrow" src="./static/arrowUp.png" alt="">
        </div>
      </div>
      


    </div>
    <!-- 评论 -->
    <div class="commentBox">
      <comment :hotCom="myComment" :id="viewData.articleid"></comment>
    </div>
    <!-- 其他视频 -->
    <othersVideo :videosData="otherWorks" :idWrapper="myTeam"></othersVideo>
    <footer class="footerBox">
      
      <img class="footerImg1" src="http://cs.vmoiver.com/Uploads/Activity/2017-04-20/58f849dee8e45.png" alt="">
      
      
      <p>分享影视创作深度干货，关注新片场</p>
      <span class="footerImg2"></span>
      <a class="footerImg3" href="http://www.xinpianchang.com/"></a>
    </footer>
</div>
</template>

<script>

// import loading from '../components/loading.vue'
// import $ from 'jquery'

import  '../lib/js/jsBridge.js'

import  '../lib/js/zhugeio.js'

// import  '../lib/js/transfervideo.js'

import magic from '../lib/js/magic.js'

import comment from '../components/mobile_comment.vue'
 
import othersVideo from '../components/othersVideo.vue'

import wx from 'weixin-js-sdk'

const ERR_OK = 0;

const request = magic.getRequest();

const ua = magic.getUa();

export default {
  data () {
    return {
      videoShow:false,              //视频点击播放判断

      wordsShow:false,              //文字详情判断
      wordsHeight:true,
      wordsSize:false,

      viewData:{},                  //获取过来总的data
      myTeam:{},                    //作品参与者数据
      myCate:{},                    //作品分类数据
      videoInfo:{},                 //video信息数据
      myActivity:{},                //活动数据
      myComment:{},                 //评论数据
      otherWorks:{},                //其他作品
      limitLine:false,
      limitLineAction:true,
      followFlag:true,
      play:false

    }
  },
  components: {
     comment,                        //评论组件
     othersVideo                     //其他视频组件
     // loading
  },
  created(){

    if(!ua.isAndroid && !ua.isIOS){

        location.href = "http://www.xinpianchang.com/a" + magic.getRequest().id;

    }else{
        this.getData();
    }
    
  },
  mounted(){

    
    zhuge.track("新片场WAP-作品页-页面访问");

    magic.bdStatistics();

    

  },
  methods:{
    visitAuthor(link){

        zhuge.track("新片场WAP-作品页-点击作者头像",{},function(){

          location.href = link;

        });

      
    },
    videoClick(){
      zhuge.track("新片场WAP-作品页-播放视频");

      var _video = document.getElementsByClassName('video')[0];
      if(!window.iframeReplaceFlag){
        this.videoShow = true;
      }
      
      if(_video){

        _video.play();

      }
    },
    
    attenFn(item){

      zhuge.track("新片场WAP-作品页-点击关注作者");

      var _this = this;
      if(this.viewData.userid){
        if(this.followFlag){
          this.followFlag = false;
          item.is_following = true;
          $.ajax({
            type: "GET",
            xhrFields: {withCredentials: true},
            dataType: "json",
            url: _this.$store.getters.baseUrl + '/user/follow/ts-' + (item.is_followed ? 'un' : 'do'),
            data:{
              userid: item.userid
            },
            success:function(response){

              _this.followFlag = true;

              if (response.status === 1 || response.msg === '你已经关注此用户') {

                item.is_followed = false;

                item.is_following = false;

              }else if (response.status === 2) {

                zhuge.track("新片场WAP-作品页-关注作者成功");

                item.is_followed = true;

                item.is_following = false;

              }else if(response.status === 0){

                alert(response.msg);

              }
            }

          });
        }
        

      }else{

        location.href = this.$store.getters.loginUrl;

      };
      
    },
    getData(){
      var _this = this;
      $.ajax({
        type: "GET",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: _this.$store.getters.baseUrl + '/article/filmplay/ts-articleApi',
        data:{//23254  26478
          id:request.id
        },
        success:function(response){
          if (response.status === ERR_OK) {
            let myData = response.data;
            
            _this.viewData = Object.assign({}, _this.viewData, myData);

            if(_this.viewData.userid){
              _this.$store.commit('loginState',_this.viewData.userid);
            }

            if(magic.getStrLength(_this.viewData.content) > 150){
              _this.limitLine = true;
            }

            magic.setWechatTitle(_this.viewData.title + '-新片场');

            _this.myCate = myData.cate;
            _this.videoInfo = myData.video_info;

            
            myData.team.list.forEach(function(elem){
              elem.is_following = false;
            })
            _this.myTeam = myData.team;

            if(_this.myTeam.list){
              _this.myTeam.list.forEach(function(elem){
                console.log(/[avatar | default]/.test(elem.face_origin));
                if(!/[avatar | default]/.test(elem.face_origin)){
                  elem.face_origin = elem.face_origin  + '@84w_84h_1e_1c.jpg';
                }
              })
            }
            _this.myActivity = myData.activity;
            _this.myComment = myData.hotComment;
            _this.otherWorks = myData.relate_recommend;
            //console.log(myData.content.length,123);

            _this.viewData.content = _this.viewData.content.replace(/<[^>]+>/g,"");

            if(!_this.viewData.userid){

              _this.viewData.isLikeArticle = localStorage.getItem("isGooded" + _this.viewData.articleid) == 1;

            }

            

            magic.weixinShare(wx,{

              link : _this.viewData.is_private ? _this.viewData.share_link : location.href,

              title : _this.viewData.title + " | 新片场",

              desc : _this.viewData.content,

              img : _this.viewData.cover + '@300w_300h_1e_1c.jpg',

              page: '新片场WAP-作品页'

            });

            magic.preloadImages([myData.cover  + '@750w_442h_1e_1c.jpg']);

            var bridge = new jsBridge({
                registerCallback : function(wbridge){
                    wbridge.registerHandler("loadCompleteAction", function(data, responseCallback) {
                      var vAppStr = "",vAppMatch = navigator.userAgent.match(/App\s?([\d\.]+)\s?\//i);
                    if(vAppMatch){
                      vAppStr = vAppMatch[1] >= "5.1.2" ? " | 新片场" : "";
                    }
                      var shareData = {
                        'sharetitle': _this.viewData.title + vAppStr,
                        'sharedefaultdes':'来自' + _this.myTeam.list[0]['username'] + '的作品',
                        'shareweibodes': _this.viewData.title,
                        'sharelink':location.href,
                        'shareimgurl':_this.viewData.cover + "@300w_300h_1e_1c"
                      };

                      wbridge.callHandler('handlerShowShare',shareData, function(response) {});
                    });
                }
            });

            _this.$nextTick(function(){

                magic.iframeReplace();
  
            })
          }else{

            location.href = _this.$store.getters.baseUrl + '/a' + request.id;

          }
        }
      });
    },
    tabGood( commentid ){

      let _this = this;

      let goodChange = localStorage.getItem("isGooded" + this.viewData.articleid) == 1;

      // this.viewData.isLikeArticle = goodChange ? 0 : 1;

      localStorage.setItem("isGooded" + this.viewData.articleid,this.viewData.isLikeArticle ? 1 : 0);

      $.ajax({
        type: "POST",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: _this.$store.getters.baseUrl + '?app=article&ac=like',
        data:{
          articleid: this.viewData.articleid,
          islike: this.viewData.isLikeArticle?'n':'y'
        },
        success:function(response){
          if (response.status === 1) {
            
            ++_this.viewData.count_like;
            _this.viewData.isLikeArticle = 1;
            

            zhuge.track("新片场WAP-作品页-作品点赞",{
              isLogin : !!_this.viewData.userid
            });

            localStorage.setItem("isGooded" + _this.viewData.articleid,1);

          }else{

            --_this.viewData.count_like;
            _this.viewData.isLikeArticle = 0;

            zhuge.track("新片场WAP-作品页-作品取消赞",{
              isLogin : !!_this.viewData.userid
            });

            localStorage.setItem("isGooded" + _this.viewData.articleid,0);
            
            
            

          }
        }
      });
    }
  }
}

</script>