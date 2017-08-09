<style lang="sass">
@function rem ($n){
	@return ($n/18)*1rem;
}
@mixin size($w,$h){
	width:($w/18)*1rem;
	height:($h/18)*1rem;
}
.no-works-notice{
  font-size:rem(20);
  font-weight:600;
  color: #999999;
  margin-top:rem(141);
  text-align:center;
}
.works-box{
  width: 100%;
  margin-top: rem(15);
  margin-bottom:2rem;
  .works-item{
    width: 100%;
    position: relative;
    margin-top: rem(60);
    &:first-child{
      margin-top: rem(30);
    }
    .img-cover{
      width: 100%;
      height: rem(211);
      position: absolute;
      top: 0;
      left: 0;
      background:rgba(0, 0, 0, 0.20);
      z-index: 1;
    }
    .item-img{
      width: 100%;
      height: rem(211);
      display: block;
    }
    .item-title,{
      width: rem(338);
      margin: 0 auto;
      font-size: rem(20);
      color: #333;
      font-weight: 600;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-name{
      width: rem(338);
      margin: rem(9) auto 0;
      color: #666;
      overflow: hidden;
      .span-name{
        font-size: rem(10);
        display: inline-block;
        float: left;
      }
      .span-icon{
        width: rem(10);
        height: rem(10);
        display: inline-block;
        float: left;
        margin: rem(2) 0 0 rem(2);
      }
      .v-0{
        display: none;
      }
      .v-3{
        background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e79275.png') no-repeat center;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
      .v-4{
        background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e88999.png') no-repeat center;
        background-size: 100%;
        -webkit-background-size: 100%;
      }
    }
    
    .item-descrip{
      width: 18.66rem;
      // height: 0.67rem;
      margin: rem(20) auto rem(8);
      overflow: hidden;
      span{
        // line-height: 0.67rem;
        font-weight: normal;
        font-size: rem(10);
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .span1{
        float: left;
        width: 9.6rem;
      }
      .span2{
        float: right;
        width: 8rem;
        text-align: right;
      }
    }
    .item-icon{
      height: rem(20);
      line-height: rem(20);
      overflow: hidden;
      position: absolute;
      top: rem(10);
      left:rem(20);
      z-index: 2;
      span{
        width: rem(22);
        height: rem(16);
        float: left;
        font-size: rem(9);
        color: #fff;
        text-align: center;
        line-height: rem(16);
        border-radius:1px;
        margin-right: rem(10);
        border:0.5px solid #fff;
      }
    }
  }
}
.to-end{
  border-bottom:1px solid #f0f0f0;
  text-align:center;
  color: #878787;
  font-size:rem(10);
  margin:0 rem(20) rem(30);
}
.to-end span{
  display:inline-block;
  padding:rem(4) rem(10);
  background:#fff;
  position:relative;
  top:rem(11);
}

</style>

<template>
<div>

    <ul class="works-box">
      <li v-for="(item,index) in items" class="works-item">
        <a href="javascript:;" @click="visitWork($store.getters.routePath + '/article/index.html?id='+item.articleid)">
          <span class="img-cover"></span>
          <img class="item-img" :src="item.cover  + '@750w.jpg'" alt="">
          <p class="item-descrip">
            <span v-if="item.cate" class="span1">
              <!-- {{item.cate.fcate.catename}}
              <i>I</i> -->
              {{item.cate.cate.catename}}
              <i>I</i>
              {{item.duration}}
            </span>
            <!-- <span class="span2">
              {{item.count_viewed+'播放'}}
              <i>I</i> 
              {{item.count_like+'喜欢'}} 
            </span> -->
          </p>
          <p class="item-title">
            {{item.title}}
          </p>
          <p v-if="type != 'works'" class="item-name">
            <span class="span-name">
              {{item.author ? item.author.username : '多位作者'}}
            </span>
            <span :class="['span-icon', 'v-'+item.author.isadmin ]"></span>
          </p>
          <p class="item-icon">
            <span v-if="item.video_format">{{item.video_format}}</span>
            <span v-if="item.is_vr">VR</span>
          </p>
        </a>
      </li>
    </ul>
    <!-- {{ajaxFlag}} -->
    <p v-if="(ajaxFlag && !items.length) || (!ajaxAnimate && !items.length)" class="no-works-notice">{{type == 'works' ? 'TA还没有上传过作品' : 'TA还没有喜欢过作品'}}</p>
    
    <div v-if="!ajaxAnimate && items.length" class="to-end">
      <!-- <em></em> -->
      <span>END</span>
      <!-- <em></em> -->
    </div>


    <ajaxLoading v-show="!ajaxFlag && ajaxAnimate" :style="'margin-top:' + [pgNo == 1 ?'40%': '']"></ajaxLoading>

</div>
</template>

<script>
import touch from '../lib/js/touchjs.min.js'
import ajaxLoading from '../components/ajax_loading.vue'

import magic from '../lib/js/magic.js'
const request = magic.getRequest();

const ERR_OK = 0;
const persHost = 'http://qcc.test.xinpianchang.com';
export default {
  props: ["type","infoData"],
  components: {
    ajaxLoading
  },
  data () {
    return {
      items:[],
      rawItems:[],
      // pgSize: this.worksInfo.page_size,
      pgNo: 1,
      ajaxFlag : true,
      ajaxAnimate : true ,
      scrollTop : 0
    }
  },
  mounted:function(){
    var _this = this;
    this.ajaxAction();

    var screenHeight=$(window).height() < 600 ? 600 : $(window).height();
    var onOff=true;

    _this.scroll(function(direction,ScrollTop) { 
        _this.ajax(ScrollTop);
    }); 
  },
  activated(){

    $('.scroll').scrollTop(this.scrollTop);

  },
  deactivated(){

    this.scrollTop = $('.scroll')[0].scrollTop;

  },
  methods: {
    visitWork:function(link){
      var _this = this;
      zhuge.track("新片场WAP-个人页-点击" + (_this.type == "works" ? "作品" : "喜欢") +"tab下的作品",{
        "是否是创作人页" : _this.infoData.isadmin != 0
      },function(){
        location.href = link;
      })
    },
    scroll:function( fn ){
      var beforeScrollTop = $('.scroll')[0].scrollTop,
              fn = fn || function() {};
      $('.scroll')[0].addEventListener("scroll", function() {
          var afterScrollTop = $('.scroll')[0].scrollTop,
              delta = afterScrollTop - beforeScrollTop;
          if( delta === 0 ) return false;
          fn( delta > 0 ? true : false ,afterScrollTop);
          beforeScrollTop = afterScrollTop;
      }, false);
    },
    ajax:function(scrollTop){

      var screenHeight=$(window).height() < 600 ? 600 : $(window).height();
      var arrAjax=[];
      var listHeiht=$(".works-box").height();
      var isSee=scrollTop + 1.5*screenHeight >= listHeiht ?true:false;

      if(isSee && this.ajaxFlag){
        this.ajaxAction(true);
      }
    },
    ajaxAction(){
      var _this = this;
      this.ajaxFlag = false;
      $.ajax({
        type: "GET",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: _this.$store.getters.baseUrl + '/user/space/ts-' + (_this.type == 'works' ? 'getUserArticleApi'  : 'getUserLikeArticleApi'),
        data:{
          id: request.id,
          page: _this.pgNo
        },
        success:function(response){
          if (response.data.list.length) {
            _this.pgNo++;
            _this.ajaxFlag = true;
            _this.items = _this.items.concat(response.data.list);
          }else{
            _this.ajaxAnimate =false;
          }
        }
      });
    }
  }
}

</script>