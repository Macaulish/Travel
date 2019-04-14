<template>
  <div style="width:100%">
    <strong>这节用了webpack代理请求解决跨域问题。</strong>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="日期"
          width="100">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
    <div>
      <hr>
      <p style="font-family:'PingFang SC';font-size:20px;">{{ testData }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Test',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      testData: {
        one: {
          one_1: 'one_1',
          one_2: 'one_112'
        }
      }
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
