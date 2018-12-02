<template>
  <div class="header">
    <div class="header-left">
      <div class = "iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <div class = "iconfont">&#xe632;输入城市/景点/游玩主题</div>
    </div>
    <div class="header-right">
      <div class = "iconfont arrow-icon">城市&#xe62d;</div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display:flex
    background:#00bcd4
    line-height:.86rem
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
      width:1.24rem
      float:right
      text-align:center
      .arrow-icon
        margin-left:-.04rem
        font-size:.24rem
        
</style>
