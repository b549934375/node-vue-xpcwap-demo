<style lang="sass" scoped>
@function rem ($n){
	@return ($n/18)*1rem;
}
@mixin size($w,$h){
	width:($w/18)*1rem;
	height:($h/18)*1rem;
}

.loading-fade{opacity:0}
.loading{
  width: 100%;
  height: 2rem;
  margin: 1rem auto 0;
}

.loader {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 25%;
  // max-width: 25%;
  // height: 200px;
  align-items: center;
  justify-content: center;
}

@-webkit-keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px); }
  66% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px); }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px); }
  66% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px); }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

.ball-pulse-sync > div:nth-child(1) {
  -webkit-animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(2) {
  -webkit-animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(3) {
  -webkit-animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s 0s infinite ease-in-out; }

.ball-pulse-sync > div {
  background-color: #fff;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin: 2px;
  background-color:#d8d8d8;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block; }


</style>

<template>
  <div class="loading">
    <div class="loader">
      <div class="loader-inner ball-pulse-sync">
        <div></div>
        <div></div>
        <div></div>
      </div>
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