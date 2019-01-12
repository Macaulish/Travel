<template>
  <div id="container" @click="handleBannerClick">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img
            class="gallary-img"
            :src='item'
            alt=""
          >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
        autoplay: 33000,
        loop: true
      }
    }
  },
  methods: {
    handleBannerClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  #container
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    z-index: 999
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #0000008c
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: .2rem
</style>
