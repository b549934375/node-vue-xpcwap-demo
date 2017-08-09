<style lang="sass" scoped>


</style>

<template>
  <div class="header" data-page="首页">
    <div class="header-bar" flex="main:justify cross:center">

        <span class="menu-button menu-button_static trigger menu-button-header" data-trigger="[navShow,navHide]"></span>

        <a href="/"><img class="bar-logo" src="http://cs.vmoiver.com/Uploads/Activity/2017-04-14/58f088e3cebad.png" alt=""></a>
        
        {if !$TS_USER[user][userid]}
        <a class="fs_14_n c_b_2 zg" href="javascript:;" data-link="{SITE_URL}index.php?app=user&ac=login&callback={php echo urlencode(substr(SITE_URL,0,-1).$_SERVER[REQUEST_URI])}" data-zg="新片场WAP-首页-点击首页导航栏上的登录">登录</a>
        {else}
        <span class="bar-user zg" style="background-image:url('{$TS_USER[user][face_origin]}')" data-zg="新片场WAP-首页-点击首页导航栏上的头像" data-link="http://h5.xinpianchang.com/user/index.html?id={$TS_USER[user][userid]}"></span>
        {/if}

        
    </div>

    <div class="header-nav">
        <div class="nav-sreach">
            <form action="/index.php" mothod="get">
                <input type="hidden" name="app" value="search">
                <input type="search" name="kw" class="header-search" placeholder="请输入你想要搜索的关键字">
            </form>
            <span class="close dn"></span>
        </div>
        <ul class="nav-list fs_14_n c_b_2">

            <li class="c_r_1">首页</li>

            <li class=""><a href="/channel">作品</a></li>
            <li class=""><a href="/user/stars">创作人</a></li>
            <!-- <li class="">活动</li> -->
            {if $TS_USER[user][userid]}
             <li class=""><a href="/message/my/ts-notice">消息</a></li>
            {/if}
            <li class=""><a href="/service">服务</a></li>
        </ul> 
    </div>
    <!-- 切换条 -->
    <div class="tab-bar fs_12_b c_b_2 dn transition" flex="main:center">
        <span class="tab-item c_b_4 active">精选</span>
        <span class="tab-item c_b_4">关注</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}

</script>