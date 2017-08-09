<style lang="sass">
@function rem ($n){
  @return ($n/18)*1rem;
}

@mixin ele-click-prevent{
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(200,200,200,0); 
}

.commentItem{
  border-bottom: 1px solid #f0f0f0;
  .com-img{
    width: 40px;
    height: 40px;
    float: left;
    position: relative;
    .full{
      width: 35px;
      height: 35px;
      position: relative;
      top: 4px;
      border-radius: 50%;
    }
    .v-0{
      width: rem(10);
      height: rem(10);
      position: absolute;
      bottom: 0;
      right: 6px;
      display: none;
    }
    .v-3{
      width: rem(10);
      height: rem(10);
      position: absolute;
      bottom: 0;
      right: 6px;
      background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e79275.png') no-repeat center;
      background-size: 100%;
    }
    .v-4{
      width: rem(10);
      height: rem(10);
      position: absolute;
      bottom: 0;
      right: 2px;
      background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e88999.png') no-repeat center;
      background-size: 100%;
    }
  }
}

  
// .com-text-wx{
//   margin-top: 0;
//   .title{
//     margin-bottom: -2px;
//     span{
//       color: #000;
//       font-size: rem(14);
//     }
//   }
//   .time{
//     color: #a8a8a8!important;
//     font-size: 12px!important;
//   }
//   .intro{
//     margin-bottom: 5px;
//     font-size: 0.79rem;
//     margin-top: 5px;
//     color:#666;
//   }
// }
// .com-list{
//   li{
//     border-bottom: 1px solid #f0f0f0;
//   }
//   .com-img{
//     width: 40px;
//     height: 40px;
//     float: left;
//     .full{
//       border-radius: 50%;
//     }
//   }
// }

  .com-text-wx{
      margin-left: rem(48);
      overflow-x: hidden;
      margin-top: rem(20);
      .time{
        color: #999;
        font-size: rem(10);
      }
      .title{
        font-size: rem(14);
        display: inline-block;
        vertical-align: middle;
        font-weight: 600;
        margin-top: rem(10);
        span{
          color: #333333;
        }
      }
      .ope{
        a{
          margin-left: 20px;
          color: #c8c8c8;
          b{
            font-weight: normal;
          }
        }
      }
      .intro{
        overflow: hidden;
        a{
          font-size: rem(14);
          color: #37a;
        }
        .line-3{
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
        .replyColor{
          font-size: rem(14);
          text-align: justify;
          line-height: 1.8;
          .reply-span{
            color: #333;
            font-weight: 600;
          }
          .reply-span-main{
            color: #666;
          }
        }
        .reply-ground{
          margin-top: rem(16);
          background-color: #f8f8f8;
          padding: rem(7) rem(10);
        }
        .commentContent{
          line-height: rem(25.2);
          color: #333;
          font-size: rem(14);
          margin-top: rem(10);
          text-align: justify;
          
          img{
            vertical-align: middle;
            margin-bottom: rem(5);
          }
        }
      }
      .commentMore{
        margin-top: rem(10);
        height: rem(18);
        line-height: rem(18);
        color: #666;
        font-weight: 600;
      }
      // .replyWrapper{
      //   margin-top: rem(21);
      //   background-color: #f8f8f8;
      //   position: relative;
      //   font-size: rem(14);
      //   overflow: hidden;
      //   margin-bottom: rem(10);
      //   .showMoreBox{
      //     // height: 34px;
      //     margin: rem(5) rem(10) 0 rem(10);
      //     line-height: 1.8;

      //     // overflow : hidden;
      //     // text-overflow: ellipsis;
      //     // display: -webkit-box;
      //     // -webkit-line-clamp: 3;
      //     // -webkit-box-orient: vertical;
      //     .replyContent{
      //       text-align: justify;
      //       color: #666;
      //     }
      //   }
      //   .showMoreBtn{
      //     display: block;
      //     margin: rem(10) 0 rem(10) rem(10);
      //     height: rem(18);
      //     line-height: rem(18);
      //     background-color: #f8f8f8;
      //   }
      // }

  }
  .comment-new-warp .plus-v-p-14, .plus-v-c-14{
    display: inline-block;
    zoom: 1;
    vertical-align: top;
    width: 15px;
    height: 13px;
    margin-left: 2px;
    margin-top: 5px;
    background-size: 100%;
  }
  .wolai-comment{
    background: #00a2ff;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
  .con-text-wx{
    .ope{
      a{
        &:last-child{
          margin-left: 0;
        }
      }
    }
  }
  .com-edit{
    border:1px solid #666;
    text-align:center;
    margin:0.5rem 0;
    font-size:0.8rem;
    padding:0.3rem 0;
  }
  .comBox{
    width:rem(335);
    margin: rem(36) auto 0;
    .title{
      width: rem(130);
      height: rem(20);
      line-height: rem(20);
      text-align: left;
      font-size:rem(14);
      color: #333;
    }
    .ground-action{
      width: rem(335);
      height: 7.6rem;
      margin-top: rem(19);
      position:relative;
      textarea{
        border: 1px solid #666666;
        width: 100%;
        height: rem(90);
        resize: none;
        box-sizing:border-box;
        padding: rem(10);
        display: block;
        border-radius:0.2rem;
        font-size: rem(14);
        -webkit-tap-highlight-color: rgba(240,240,240,0);
        -moz-tap-highlight-color: rgba(240,240,240,0);
        outline:none;
        color:#000;
      }
      @mixin btnSize{
        width: rem(60);
        height: rem(30);
        position: absolute;
        bottom: 0;
        text-align: center;
        line-height: rem(30);
        border-radius:rem(2.4);
      }
      .clear{
        @include btnSize;
        right: 3.56rem;
        color: #999999;
      }
      .send{
        @include btnSize;
        right: 0;
        color: #fff;
        background-color: #e74c3b;
      }
      .color{
        color:#69c9ff;
      }
    }
  }
  .comment-title {
      font-size: rem(20);
      font-weight: bold;
      // margin-bottom: 0px;
      margin-left:0;
      color:#333;
  }  
  .com-text-wx .ope {
      // font-size: 12px;
      margin: rem(6) 0 rem(20) 0;
      color: #999;
      display: -webkit-box;
      display: -moz-box;
      display: box;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
  }
  .com-text-wx .ope .approve{
    @include ele-click-prevent;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size:rem(10);
    color:#999;
    .approve-num{
      margin-top: rem(2);
    }
  }
  .com-text-wx .ope .approve i{
      display:inline-block;
      width:20px;
      height:20px;
      background-size:100%;
      vertical-align: middle;
  }
  .com-text-wx .ope .approve .approve-iocn{
    width: rem(10);
    height: rem(10);
    margin-left: rem(4);
    background-image:url("../article/static/approe.png");
  }
  .com-text-wx .ope .approve .approved-iocn{
    width: rem(10);
    height: rem(10);
    margin-left: rem(4);
    background-image:url("../article/static/approed.png");
  }
  .com-success{
    padding:5px 0;
    width:80%;
    text-align:center;
    background:rgba(0, 0, 0, .55);
    color:#fff;
  }

 
</style>               
<template>
    
<li class="commentItem clearfix" :data-commentid="comment.commentid">

    <a class="com-img ww zg" :href="$store.getters.routePath + '/user/index.html?id='+comment.userInfo.userid">
        <img v-if="comment.userInfo" class="full" :src="comment.userInfo.face" alt="头像">
        <span :class="['v-' + comment.userInfo.isadmin]"></span>
    </a>
    <div class="com-text-wx">
        <div class="title zg">
            <span v-if="comment.userInfo">{{comment.userInfo.username}}</span>
        </div>
        <div class="intro zg">
          <div v-if="comment.reply.length != 0" class="reply-ground ">

              <p v-bind:class="['replyColor', comment.reply.limit ? 'line-3' : '']" >
                <span class="reply-span-main">回复</span>
                <span class="reply-span" v-html="'@'+comment.reply.username+':'"></span>
                <span class="reply-span-main" v-html="comment.reply.content"></span>

              <div v-if="comment.reply.limit" class="commentMore" @click="spread(comment.reply)">全文</div>
          </div>
          
          <p v-html="comment.content" v-bind:class="['commentContent',(comment.limit ? 'line-3' : '')]">
          </p>
        </div>
        <div v-if="comment.limit" class="commentMore" @click="spread(comment)">全文</div>
        <div class="ope">
            <span class="time">{{commentTime}}</span>
            <span class="approve" @click="approve(comment)">
              <span class="approve-num">{{comment.count_approve}}</span>
              <i v-bind:class="[comment.isLikeComment ? 'approved-iocn' : 'approve-iocn']">
              </i>
            </span>
        </div>
    </div>
</li>
        
</template>
<script>
    import magic from '../lib/js/magic.js'
    export default {
      name: "recommendItem",
      props: ["comment"],
      data: function() {
          return {
              showGround : 0,
              showSuccess : 0,
              showEdit : 0,
              bodyHeight : $(window).height(),
              commentText : "",
              approved : 0,
              commentTime:''

          }
      },
      mounted(){

        this.addtimeDeal();

      },
      methods:{
        spread(comment){

          comment.limit = 0;

        },  
        approve(comment){

          var approveLocalTrigger = localStorage.getItem("c" + comment.commentid) == 1;
          comment.isLikeComment = approveLocalTrigger ? 0 : 1;
          comment.count_approve = approveLocalTrigger ? --comment.count_approve : ++comment.count_approve;
          
          localStorage.setItem("c" + comment.commentid,comment.isLikeComment ? 1 : 0);
            
          let _this = this;
          console.log(_this.$store.state.LoginUserId);

          zhuge.track("新片场WAP-作品页-评论" + (comment.isLikeComment ? '点赞' : '取消点赞'),{
              isLogin : !!_this.$store.state.LoginUserId
          });

          $.ajax({
            type: "POST",
            xhrFields: {withCredentials: true},
            dataType: "json",
            url: _this.$store.getters.baseUrl+'/article/filmplay/ts-approve',
            data:{isLike: comment.isLikeComment?'y':'n',
              commentid:comment.commentid,
              type:0
            },
            success:function(response){
              // console.log(response);
            }
          });
        },
        addtimeDeal(){
          var currentDate = parseInt(new Date().getTime()/1000);
          
          var addtime = this.comment.addtime_int;

          var processTime =  currentDate - addtime;

          if(processTime < 7*24*60*60){

            if(processTime < 60){
              this.commentTime = "刚刚";
            }else if(60 <= processTime && processTime < 60*60){
              this.commentTime = parseInt(processTime/60) + "分钟前";
            }else if(60*60 <= processTime && processTime < 24*60*60){
              this.commentTime = parseInt(processTime/3600) + "小时前";
            }else if(24*60*60 <= processTime && processTime < 7*24*60*60){
              this.commentTime = parseInt(processTime/(24*3600)) + "天前";
            }

          }else{
            var adddate = new Date(addtime*1000);
            this.commentTime = (adddate.getMonth() + 1) + "月" + adddate.getDate() + "日";
          }
            
        }
          
      }
    }
</script>