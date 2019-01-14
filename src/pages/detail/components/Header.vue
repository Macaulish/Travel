<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <i class = "iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-fixed-back">
        <div class = "iconfont back-icon">&#xe624;</div>
      </router-link>
      <div class="header-fixed-title">
        经典详情
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: bisque
    display: flex
    justify-content: center
    align-items: center
    .header-abs-back
      font-size: .4rem
      color: blue
  .header-fixed
    z-index: 2
    position: fixed
    text-align: center
    top: 0
    left: 0
    right: 0
    background:$bgColor
    line-height:$headerHeight
    .header-fixed-back
      float: left
      width:.64rem
      .back-icon
        font-size:.4rem
        text-align:center
</style>
