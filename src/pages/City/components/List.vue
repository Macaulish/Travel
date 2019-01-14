<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button"> {{ item.name }} </div>
                    </div>
        </div>
      </div>
      <div
              class="area"
              v-for="(value,alphabet) of cities"
              :key="alphabet"
              :ref="alphabet"
            >
        <div class="title border-topbottom">{{alphabet}}</div>
        <ul class="item-list" v-for="item of value" :key="item.id">
          <li
                        class="item border-bottom"
                        @click="handleCityClick(item.name)"
                    >
                        {{item.name}}
                    </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'cityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.list
		top:1.74rem
		left:0
		bottom:0
		right:0
		position: absolute
		overflow:hidden
	.title
		line-height:.4rem
		background: #eee
		padding-left: .2rem
		color: #666
		font-size: .26rem
	.button-list
		padding: .1rem .6rem .1rem .1rem
		overflow: hidden
		.button-wrapper
			float: left
			width: 33.33%
			.button
				border: .02rem solid #ccc
				text-align: center
				margin: .1rem
				padding: .1rem 0
				padding-radius: .06rem
	.item-list
		.item
			line-height:.76rem
			padding-left: .2rem
</style>
