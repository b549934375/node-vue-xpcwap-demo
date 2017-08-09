<style lang="sass">
@function rem ($n){
	@return ($n/18)*1rem;
}
@mixin size($w,$h){
	width:($w/18)*1rem;
	height:($h/18)*1rem;
}
.container{
	width:100%;
	position:relative;
	overflow: hidden;
	.userLogo{
		width: rem(100);
		height: rem(100);
		position: relative;
		margin: rem(110) auto 0;
		.img1{
			width: 100%;
			height: 100%;
			border-radius:50%;
		}
		.v-0{
			width: rem(22);
			height: rem(22);
			position: absolute;
			bottom: 0;
			right: rem(10);
			display: none;
		}
		.v-3{
			width: rem(22);
			height: rem(22);
			position: absolute;
			bottom: 0;
			right: rem(10);
			background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e79275.png') no-repeat center;
			background-size: 100%;
		}
		.v-4{
			width: rem(22);
			height: rem(22);
			position: absolute;
			bottom: 0;
			right: rem(10);
			background:url('http://cs.vmoiver.com/Uploads/Activity/2017-04-17/58f4632e88999.png') no-repeat center;
			background-size: 100%;
		}
	}
	.userTitle{
		
		margin: rem(30) auto 0;
		color: #fff;
		h3{
			font-size: rem(30);
			font-weight: 500;
			line-height: rem(39);
			// opacity: 0.8;
			text-align: center;
			padding: 0 rem(50);
		}
		h5{
			font-size: rem(14);
			font-weight: 600;
			line-height: rem(23);
			text-align: center;
			margin-top: rem(4);
			opacity: 0.7;
			font-weight: 500;
			line-height: 1.64;
		}
	}
	.info-words{
		width: 13rem;
		max-height: 6.8rem;
		color: #fff;
		opacity: 0.5;
		font-size: rem(14);
		line-height: 1.64;
		text-align: center;
		margin: rem(20) auto;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	    letter-spacing: 1px;
	}
	.sixin-btn{
		@include size(80,32);
		display: block;
		font-size: rem(14);
		// font-weight: 500;
		text-align: center;
		line-height: rem(32);
		color: #fff;
		opacity: 0.7;
		border-radius: rem(2);
		border: 1px solid rgba(255,255,255,0.70);
		margin: rem(55) auto;
	}
	.arrow-up-btn{
		width: rem(17);
		height: rem(9);
		// display: block;
		// margin: rem(94) auto 0;
		position: absolute;
		bottom: rem(20);
		left: 50%;
		margin-left: rem(-8);
	}
	
}
</style>

<template>
  <div class="container" :style="{'height':isHeight+ 'px'}">
  	<div class="userLogo">

   		<img v-if="personData.face" class="img1" :src="personData.face.face_360" alt="">

   		<span :class="['v-' + personData.isadmin]"></span>

   	</div>
    <div class="userTitle">
   	    <h3>{{personData.username}}</h3>

   	    <h5 v-if="personData.sarea && personData.sarea.province" v-show="personData.desc">

   	    	{{personData.rolename}}／{{personData.sarea.province.name}}


   	    </h5>
    </div>
    <p class="info-words" v-html="personData.desc"></p>
    
	<div class="sixin-btn" @click="firstMsg">联系TA</div>
    <img class="arrow-up-btn" src="../article/static/arrowUp.png">
  </div>
</template>

<script>
export default {

    props:["personData","isHeight"],

    methods:{
    	firstMsg(){
    		var _this = this;
    		zhuge.track("新片场WAP-个人页-点击第一屏私信",{
		        "是否登陆": !!_this.$store.state.LoginUserId
		    },function(){
    		 	_this.$store.commit('sendMsg',_this.personData.userid)
    		});
    	}
    }

}

</script>