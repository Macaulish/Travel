<template>
  <div class="header">
    <div class="header-left">
      <!--<div class = "iconfont back-icon">&#xe624;</div>-->
      <router-link to="/test" style="color:blue;">跳转</router-link>
    </div>
    <div class="header-input">
      <div class = "iconfont">&#xe632;输入城市/景点/游玩主题</div>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <div class = "iconfont arrow-icon">{{this.city}}&#xe62d;</div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    background:$bgColor
    line-height:$headerHeight
    .header-left
      width:.64rem
      float:left
      .back-icon
        font-size:.4rem
        text-align:center
    .header-input
      background:#fff
      height:.64rem
      line-height:.64rem
      border-radius:.1rem
      padding-left:.2rem
      margin-top:.12rem
      margin-left:.2rem
      flex:1
      color:#ccc
    .header-right
      min-width:1.04rem
      padding: 0 .1rem
      float:right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left:-.04rem
        font-size:.24rem
</style>
