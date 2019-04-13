<template>
  <div>
    数据：{{ data }}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Test',
  data () {
    return {
      data: '张三'
    }
  },
  mounted () {
    this.getTestData()
  },
  methods: {
    getTestData () {
      axios.get('/testcors')
        .then(this.getTestDataSucc)
    },
    getTestDataSucc (data) {
      this.data = data
      console.log(data)
    }
  }
}
</script>
