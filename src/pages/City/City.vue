<template>
  <div>
    <city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<alphabet-list></alphabet-list>
  </div>
</template>
<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import alphabetList from './components/Alphabet'

export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    alphabetList
  }
}
</script>
<style lang="stylus" scoped></style>
