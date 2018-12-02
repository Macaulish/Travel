<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/HomeSwiper'
export default{
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
