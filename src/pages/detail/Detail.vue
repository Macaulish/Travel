<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_600x330_682f736a.jpg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">谁傲雪世界谁傲雪世界谁傲雪世界傲雪世界傲雪世界傲雪世界</div>
        <div class="banner-number"><i class = "iconfont">&#xe62d;</i>32</div>
      </div>
    </div>
    <common-gallary @close="handleGallaryColse" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/Gallary'
export default {
  name: 'Detail',
  data () {
    return {
      imgs: ['http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg', 'http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg'],
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryColse () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      display: flex
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top ,#fff0, #00000045)
      font-size: .32rem
      .banner-tittle
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap
        flex: 1
        padding-left: .3rem
      .banner-number
        margin-top: .18rem
        padding: 0 .2rem
        background: black
        border-radius: .2rem
        line-height: .32rem
        height: .32rem
        font-size: .28rem
        i
          font-size: .24rem
</style>
