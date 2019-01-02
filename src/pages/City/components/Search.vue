<template>
	<div class="search">
		<input type="text" class="search-input" placeholder="输入城市名或拼音">
		<!--<i class = "iconfont search-icon">&#xe632;</i>-->
	</div>
</template>
<script>
export default {
  name: 'citySearch'
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .68rem
		background: $bgColor
		padding: .1rem
		.search-input
			box-sizing: border-box
			padding: 0 .1rem
			height: .62rem
			width: 100%
			line-height: .62rem
			text-align: center
			border-radius: .1rem
			color: #666
</style>
