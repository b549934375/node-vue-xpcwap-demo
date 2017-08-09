<style lang="sass">
// @import "../lib/css/rotate";
@function rem ($n){
  @return ($n/18)*1rem;
}

@mixin ele-click-prevent{
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(200,200,200,0); 
}

@mixin borderRadius($num){
  -moz-border-radius: $num;
    -webkit-border-radius: $num;
    border-radius: $num;
}

.comment-new-warp{
  margin: rem(30) rem(15);
  text-align:left;
  .item-title{
    margin-bottom: rem(30);
  }
}  
.showMore-box{
  width: 100%;
  height: rem(42);
  overflow:hidden;
  padding-top:rem(10);
  .showMore_btn{
    width: 4.5rem;
    height: 0.78rem;
    margin: 0 auto 0;
    @include ele-click-prevent;
    span{
      // width: 3.5rem;
      height: 0.77rem;
      display: inline-block;
      font-size: 0.77rem;
      line-height: 1.0;
      text-align: left;
      color: #333333;
      margin-left: rem(3);
    }
    img{
      width: rem(7);
      height: rem(4);
      display: inline-block;
      margin-top: rem(4);
    }
  } 
}  
// 参与评论部分
.review{
  width: 100%;
  margin-top: rem(28);
  .review-title{
    font-size: rem(20);
    font-weight: 600;
    color: #333;
    margin:0 0 rem(30) rem(20);
  }
  .review-unlogin-wraper{
    text-align: center;
    margin-bottom: rem(56);
    span,a{
      display: inline-block;
      font-size:rem(16);
      line-height: rem(16);
      color: #999;
    }
    .review-login-btn{
      color: #e74b3b;
    }
  }
  .review-logined-wraper{
    textarea{
      margin: 0 rem(20);
      font-size: rem(14);
      overflow:auto;
      appearance: none;
      -webkit-appearance: none;
      @include borderRadius(rem(2));
    }
    .review-textare-show{
      resize: none;
      width: rem(311);
      height: rem(15);
      line-height: rem(15);
      padding: rem(15) rem(12);
      border: 0.5px solid #999;
      color: #999;
    }
    .review-text-input{
      resize: none;
      width: rem(311);
      height: rem(64);
      border: 0.5px solid #333;
      padding: rem(12);
      color: #262626;
    }
    .review-btn-wraper{
      margin: rem(20) rem(20) rem(36) rem(20);
      overflow: hidden;
      .review-btn-submit,.review-btn-cancal{
        display: inline-block;
        width: rem(80);
        height: rem(32);
        font-size: rem(14);
        text-align: center;
        line-height: rem(32);
        float: right;
        @include borderRadius(rem(2.4));
      }
      .review-btn-submit{
        position: relative;
        color: #fff;
        background: #e74b3b;
        &:active{
          background: #b83c2f;
        }
        .review-loading{
          width: rem(80);
          height: rem(32);
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          background: #e74b3b;
          @include borderRadius(rem(2.4));
        }
      }
      .review-btn-unvalue{
        color: #fff;
        background: #ccc;
      }

      .review-btn-cancal{
        color: #333;
        background: #fff;
      }
    }
  }
}
.ball-clip-rotate > div{
  margin-top: 0.77rem;
}
.com-insert-list{
  margin: 0 rem(20) rem(30) rem(20);
}
  
</style>

<template>
<div>
  <!-- 热门评论 -->
  <div v-show="hotCom.list && hotCom.list.length" class="comment comment-new-warp">
    <h2 class="item-title comment-title">热门评论</h2>
    <ul class="com-list" id="com-list">
      <commentItem v-for="(comment,index) in hotComments" :comment="comment">
      </commentItem>
    </ul>
  </div>
  <!-- 全部评论 -->
  <div v-show="showBox || !hotCom.list.length" v-if="comments.length" class="comment comment-new-warp" id="comment">
    <h2 class="item-title comment-title">全部评论</h2>
    <ul class="com-list" id="com-list">
      <commentItem v-for="(comment,index) in comments" :comment="comment">
      </commentItem>
    </ul>
  </div>
  <!-- 插入的本地评论消息 -->
  <!-- <ul class="com-insert-list" v-show="commiteTempInsert.length">
    <commentItem v-for="(comment,index) in commiteTempInsert" :comment="comment">
    </commentItem>
  </ul> -->

  <div v-show="commentsPage != currnetPage && comments.length" class="showMore-box" @click="addMorePage">
    <div class="showMore_btn">
      <span>更多评论</span>
      <img src="http://cs.vmoiver.com/Uploads/Activity/2017-03-21/58d0d6b855bf9.png" alt="">
    </div>
  </div>
  <div class="review">
    <h3 class="review-title">参与评论</h3>

    <p v-show="!$store.state.LoginUserId" class="review-unlogin-wraper">
      <a class="review-login-btn" href="javascript:;" @click="login($store.getters.loginUrl)">登录</a>
      <span>后，发表评论</span>
    </p>

    <div v-show="$store.state.LoginUserId" class="review-logined-wraper">
      <textarea @focus="[focusChange = true, commiteSave ? commentContent = commiteSave : '']" :class="focusChange ? 'review-text-input' : 'review-textare-show'" :placeholder="focusChange ? '输入状态' : '你有什么想说的呢？'" v-model="commentContent">
      </textarea>
      <div v-show="focusChange" class="review-btn-wraper">
        <div :class="['review-btn-submit', commentContent ? '' : 'review-btn-unvalue']" @click="commitMsg">
          <span>发表</span>
          <div v-show="loading" class="loader review-loading">
            <div class="loader-inner ball-clip-rotate">
              <div></div>
            </div>
          </div>
        </div>
        <div class="review-btn-cancal" @click="cancelComment">取消</div>
      </div>
    </div>
    
  </div>
</div>    
</template>

<script>
    import magic from '../lib/js/magic.js'
    import commentItem from '../components/commentItem.vue'
    const request = magic.getRequest();

    export default {
      name: "allRecommend",
      props: ["id","hotCom"],
      components:{
        commentItem
      },
      data: function() {
        return {
          comments : [],
          hotComments : [],
          commentText : "",
          showBox:false,
          moreFlag:false,
          commentsPage:'',
          currnetPage:1,
          focusChange:false,
          commentContent:"",
          commiteSave : '',
          loading:false,
          commiteTempInsert:[],
          zhugeInputFlag:true
        }
      },
      watch:{
        id(){
          this.myDataFn(this.currnetPage);
        },
        hotCom(){
          this.hotComments = this.dealData(this.hotCom.list);
        },
        focusChange(){
          if(this.focusChange){
            zhuge.track("新片场WAP-作品页-点击输入框");
          }
        },
        commentContent(){
          if(this.commentContent.length && this.zhugeInputFlag){
            this.zhugeInputFlag = false;
            zhuge.track("新片场WAP-作品页-输入评论");
          }
        }
      },
      mounted: function() {

      },
      methods:{
        cancelComment(){
          if(this.commentContent){
            this.commiteSave = this.commentContent;
            this.commentContent = '';
            
          }else{
            this.commiteSave ='';
          }
          this.focusChange = false;
          zhuge.track("新片场WAP-作品页-点击取消");
        },
        login(url){

          zhuge.track("新片场WAP-作品页-评论点击登陆",{},function(){

            location.href = url;

          });

        },
        commitMsg(){

          var _this = this;

          var Content = this.commentContent;
          
          if(Content){

            this.loading = true;

            $.ajax({
              type: "POST",
              xhrFields: {withCredentials: true},
              dataType: "json",
              url: _this.$store.getters.baseUrl + '/article/comment/ts-ajax_do',
              data:{
                articleid: request.id,
                content: Content
              },
              success:function(response){

                _this.loading = false;

                _this.commentContent = "";

                _this.commiteSave = "";

                if(!_this.loading){
                  _this.focusChange = false;
                }

                if (response.status === 1) {

                  var commentAddOne = {
                    addtime_int: Date.parse(new Date()),//response.time
                    content: response.content,
                    count_approve: 0,
                    isLikeComment:response.islike,
                    reply:[],
                    userInfo: {
                      face: response.userface,
                      isadmin: response.isadmin,
                      userid: response.userid,
                      username: response.username
                    }
                  };

                  if(_this.hotCom.list.length && _this.showBox == false){

                    _this.hotCom.list.push(commentAddOne);

                  }else if(_this.hotCom.list.length && _this.showBox == true || !_this.hotCom.list.length){

                    _this.comments.push(commentAddOne);

                  };

                  // _this.commiteTempInsert.push(commentAddOne);

                  // _this.$nextTick(() => {
            
                  //     if(_this.commiteTempInsert.length){

                  //       var itemTop = $('.com-insert-list li:last-child').offset().top;

                  //       var this_scrollTop = $(window).scrollTop(itemTop);
              
                  //     }

                  // });
                  zhuge.track("新片场WAP-作品页-发布成功");
                } else if(response.status === 0){

                  alert(response.msg);

                }
                
              }
            });

          };
        },
        addMorePage(){
          
          zhuge.track("新片场WAP-作品页-查看更多评论");

          let _this = this;
          if(!this.hotCom.list.length){

            _this.showBox = true;
            
          }

          if(_this.showBox){

            if(_this.currnetPage < (_this.commentsPage)){
              _this.myDataFn(++_this.currnetPage);
            };

          }else{
            _this.showBox = true;
          }

          
        },
        myDataFn(num){
          var _this = this;

          $.ajax({
            type: "GET",
            xhrFields: {withCredentials: true},
            dataType: "json",
            url: _this.$store.getters.baseUrl + '/article/filmplay/ts-getCommentApi',
            data:{
              pagesize:6,
              page:num,
              id:request.id
            },
            success:function(response){
              if (response.status === 0) {

                response.data.list = _this.dealData(response.data.list);

                

                _this.comments = _this.comments.concat(response.data.list);

                _this.commentsPage = response.data.total_page;

               

                if(response.data.list.length){
                  _this.$store.commit('commentsShow');
                }

              } 
            }
          });
        },

        dealData(comments){
          comments.forEach(function(elem){

            
            if(!/[default | Home]/.test(elem.userInfo.face)){
              elem.userInfo.face = elem.userInfo.face  + '@70w_70h_1e_1c.jpg';
            }
            
            function limitInit(elem){

              if(magic.getStrLength(elem.content) > 210){

                elem.limit = 1;

              }else{
                elem.limit = 0;

              }
            }
            
            limitInit(elem)

            if(elem.reply.length != 0){
            
              limitInit(elem.reply)

            }
            
            elem.isLikeComment = localStorage.getItem("c" + elem.commentid) == 1;


          })
          return comments;
        },
        showAllComment(){
          this.moreComment = true;
        }
          
      }
    }

    
</script>