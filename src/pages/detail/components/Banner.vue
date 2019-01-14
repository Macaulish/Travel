<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">{{ sightName }}</div>
                <div class="banner-number"><i class = "iconfont">&#xe62d;</i>{{this.bannerImg.length}}</div>
            </div>
        </div>
        <common-gallary @close="handleGallaryColse" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
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
