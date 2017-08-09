<style lang="sass">
	@function rem ($n){
		@return ($n/18)*1rem;
	}
	.othersBox{
		width:100%;
		overflow: hidden;
		background: #fff;
		.title{
			width: rem(130);
			height: rem(18);
			font-size: rem(20);
			font-weight: 600;
			line-height: rem(18);
			text-align: left;
			color: #333333;
			margin-left: rem(20);
			margin-top: rem(30);
		}
		.slide-container{
			height:rem(220);
			overflow-y: hidden;
			// margin-left: rem(20);
		}
		.slide{
			width: 100%;
	        min-height: rem(300);
	        position: relative;
	        margin:rem(30) 0 3rem 0;

	        overflow-x: scroll;
		    overflow-y: hidden;
		    overflow-scrolling: touch;
		    -webkit-overflow-scrolling: touch;
		    white-space: nowrap;
			// &::-webkit-scrollbar-thumb{background-color:red;}
			// &::-webkit-scrollbar{display:none}
			// &::scrollbar{display:none}
	        .videoItem{
	        	&:first-child{
	        		margin-left: rem(20);
	        	}
	        	width: rem(220);
	            overflow: hidden;
	            display: inline-block;
	         
	            transition: width 0.4s,height 0.4s,top 0.4s,left 0.4s,z-index 0.4s;
	            margin-right:rem(20);

	            a{
	            	width: 100%;
	            	height: 100%;
	            	display: block;
	            	img{
			            width: 100%;
			            height: 100%;
			            
			        }
	            }
	            
		        .p1{
		        	text-align: left;
					font-size: rem(14);
					margin: rem(12) 0 rem(2) 0;
					color: #333;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
		        }
		        .p2{
		        	text-align: left;
					font-size: rem(10);
					color: #999;
					// margin-left: rem(10);
					overflow: hidden;
					span{
						display: inline-block;
						height: rem(14);
						font-size: rem(10);
						line-height: rem(14);
						margin-right: 0.2rem;
					}
					em{
						display: inline-block;
						height: rem(14);
						font-size: rem(10);
						line-height: rem(14);
						// margin-left: 0.2rem;
					}
		        }
	        }
	        .moreItem{
				width: rem(44);
				height: rem(44);
				display: inline-block;
				background: url('http://cs.vmoiver.com/Uploads/Activity/2017-04-19/58f756b039b8a.png') no-repeat center;
				background-size: 100%;
				margin:0 rem(20) rem(90) 0;
			}
		}
		
	}
</style>

<template>
<div v-if="videosData.length" class="othersBox" >
	<h3 class="title">作者其他视频</h3>
	<div class="slide-container">
		<ul id="slide" class="slide">
			<li class="videoItem" v-for="(item,index) in videosData">
				<a href="javascript:;" @click="visitOther($store.getters.routePath + '/article/index.html?id='+item.articleid)">
					<img :src="item.cover  + '@440w.jpg'" alt="">
				</a>
				<p class="p1">{{item.title}}</p>
				<p class="p2">
					<!-- <span v-if="item.cate">{{item.cate.fcate.catename}}</span> -->
					<em v-if="item.cate">{{item.cate.cate.catename}}</em> I
					<i>{{item.duration}}</i>
				</p>
			</li>
			
			
			<li v-show="idWrapper.authorids && idWrapper.authorids.length == 1 && videosData.length >= 3" class="moreItem" @click = "changePage">
			</li>
		</ul>
	</div>
	
</div>
</template>

<script>
export default {
  	props: ["videosData","idWrapper"],
	  	data () {
	    	return {
	      		

	    	}
	  	},
	  	mounted(){
	  	
	  	},
	  	methods:{
	  		visitOther(link){
	  			var _this = this;
	  			zhuge.track("新片场WAP-作品页-点击作者其他作品",{},function(){
	  				// setTimeout(function(){
	  					location.href = link;
	  				// },5000)
			    });
	  		},
	  		changePage(){
	  			var _this = this;
	  			zhuge.track("新片场WAP-作品页-点击作者其他作品最后的更多按钮",{},function(){
	  				// setTimeout(function(){
	  					location.href = _this.$store.getters.routePath + '/user/index.html?id=' +  _this.idWrapper.authorids[0];
	  				// },5000)
			    });

	  			
	  	}
  	}
}
</script>