<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"
    ></city-list>
    <alphabet-list
        :cities="cities"
        @change="handleLetterChange"
    ></alphabet-list>
  </div>
</template>
<script>
import axios from 'axios'
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
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped></style>
