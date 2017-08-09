<style lang="sass" scoped>
@function rem ($n){
	@return ($n/18)*1rem;
}
@mixin size($w,$h){
	width:($w/18)*1rem;
	height:($h/18)*1rem;
}
@mixin infoTitle{
  width: rem(130);
  font-size: rem(20);
  font-weight: 600;
  line-height: 1.0;
  text-align: left;
  color: #333333;
  margin: 0 0 rem(30) rem(20);
}

// border-bottom一像素bug
@mixin border-bottom-1px($color){
    position: relative;
    &:after{
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid $color;
        content: ' ';
    }
        
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .border-bottom-1px::after{
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    } 
}
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom-1px::after{
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    } 
}

@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom-1px::after{
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}

.information{
  width: 100%;
  margin-top: rem(30);
  .data-box{
    width: 100%;
    @include border-bottom-1px(#cdcdcd);
    padding-bottom: rem(10);
    margin-bottom: rem(30);
    h3{
      @include infoTitle;
    }
    .data-item{
      width: rem(335);
      // height: rem(16);
      font-size: rem(14);
      overflow: hidden;
      margin: rem(20) 0 rem(20) rem(20);
      span{
        // height: rem(16);
        float: left;
        text-align: left;
        color: #666;
      }
      em{
        height: rem(16);
        float: right;
        text-align: right;
        color: #666;
      }
    }
  }
  .identifBox{
    width: 100%;
    @include border-bottom-1px(#cdcdcd);
    padding-bottom: rem(1);
    h3{
      @include infoTitle;
    }
    p{
      width: rem(335);
      font-size: rem(14);
      text-align: left;
      color: #666;;
      margin: rem(30) 0 rem(30) rem(20);
      text-align:justify;
    }
  }
  .detailBox{
    width: 100%;
    @include border-bottom-1px(#cdcdcd);
    padding-bottom: rem(10);
    h3{
      @include infoTitle;
      margin-top: rem(30);
    }
    .ageItem{
      width: rem(335);
      // height: rem(16);
      font-size: rem(14);
      overflow: hidden;
      margin: rem(30) 0 rem(20) rem(20);
      span{
        height: rem(16);
        float: left;
        text-align: left;
        color: #666;
      }
      em{
        height: rem(16);
        float: right;
        text-align: right;
        color: #666;
      }
    }
    .schoolItem{
      width: rem(335);
      // height: rem(16);
      font-size: rem(14);
      overflow: hidden;
      margin: 0 0 rem(30) rem(20);
      span{
        height: rem(16);
        float: left;
        text-align: left;
        color: #666;
        line-height: rem(16);
      }
      em{
        height: rem(16);
        line-height: rem(16);
        float: right;
        text-align: right;
        color: #666;
      }
    }
  }
  .aboutMe{
    width: 100%;
    position: relative;
    margin-bottom: rem(30);
    h3{
      width: rem(130);
      font-size: rem(20);
      font-weight: 600;
      line-height: 1.0;
      text-align: left;
      color: #333333;
      margin-left: rem(20);
      margin-top: rem(30);
    }
    .words-box{
      width:rem(335);
      // height: rem(48);
      // transition: all 0.2s;
      overflow: hidden;
      margin: rem(30) auto 0;
      .words{
        width: 100%;
        font-size: rem(14);
        // text-align: justify;
        color: #666;
        overflow: hidden;
        line-height: 1.8;
      }
    }
    .showBtn{
      width: 2.2rem;
      height: 1rem;
      color: #fff;
      position: absolute;
      bottom: -1.1rem;
      right: 1.2rem;
      overflow: hidden;
      span{
        width: 1.7rem;
        height: 1rem;
        float: left;
        line-height: 1rem;
        font-size: 0.61111rem;
        font-weight: 400;
        letter-spacing: 0.4px;
        color: #000;
      }
      img{
        width: 0.45rem;
        object-fit: contain;
        float: left;
        display: inline-block;
        margin-top: 0.3rem;
      }
    }
  }
}
.limit-line-3{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>

<template>
  <div class="information">
    <div class="data-box border-bottom-1px">
      <h3>个人数据</h3>
      <p v-if="infoData.isadmin != 0" class="data-item">
        <span>站内播放</span>
        <em>{{infoData.count_article_view}}</em>
      </p>

      <p v-if="infoData.isadmin != 0" class="data-item">
        <span>被喜欢</span>
        <em>{{infoData.count_liked}}</em>
      </p>

      <p class="data-item">
        <span>关注</span>
        <em>{{infoData.count_follow}}</em>
      </p>
      
      <p class="data-item">
        <span>粉丝</span>
        <em>{{infoData.count_followed}}</em>
      </p>
    </div>
    <div v-show="infoData.isadmin !=0 " class="identifBox border-bottom-1px">
      <h3>认证描述</h3>
      <p>{{infoData.desc}}</p>
    </div>
    <div v-if="infoData.age || infoData.graduation" class="detailBox border-bottom-1px">
      <h3>详细信息</h3>
      <p v-if="infoData.age" class="ageItem">
        <span>年龄</span>
        <em>{{infoData.age}}</em>
      </p>
      <p v-if="infoData.graduation" class="schoolItem">
        <span>毕业院校</span>
        <em>{{infoData.graduation}}</em>
      </p>
    </div>
    <div class="aboutMe">
      <h3>关于我</h3>
      <div class="words-box">

        <p v-html="infoData.about ? infoData.about : 'TA还没有留下任何讯息...'" :class="['words', wordsSize ? 'limit-line-3' : '']">
        </p>

      </div>
      
      <div v-show="wordsShow" class="showBtn " @click="wordsSize = !wordsSize">

        <span>{{wordsSize ? '收起':'展开'}}</span>

        <img v-if="!wordsSize" src="../user/static/black-icon-down.png" alt="">
        <img v-if="wordsSize" src="../user/static/black-icon-up.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import magic from '../lib/js/magic.js'
export default {
  props: ["infoData"],
  data () {
    return {

      wordsShow:false, 

      wordsSize:true

    }
  },
  mounted:function(){

    $('.scroll').scrollTop(0);

    if(magic.getStrLength(this.infoData.about) > 150){

      this.wordsShow = true;

      wordsSize:false;

    }
  }
}

</script>