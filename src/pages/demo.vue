<template>
<div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
</div>
</template>

<script>

import { Pagination } from 'element-ui'

export default {
  name: "demo",
  components:{
    [Pagination.name]:Pagination
  },
  data() {
    return {
      pageSize:10,
      pageNum:1,
      total:100
    }
 },
}
</script>

