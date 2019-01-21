<template>
  <div>
    <el-table ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              border>
      <el-table-column type="selection"
                       label="全选"
                       width='55'>
      </el-table-column>
      <el-table-column label="标题"
                       width="120"
                       prop="address">
      </el-table-column>
      <el-table-column prop="name"
                       label="用户"
                       width="120">
      </el-table-column>
      <el-table-column label="发布时间"
                       show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="address"
                       label="审核状态"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address"
                       label="操作"
                       show-overflow-tooltip>
        <template slot-scope="scope">
          <a>查看</a>
          <a>导出</a>
          <a class="delete">删除</a></template>
      </el-table-column>
    </el-table>
    <el-pagination background
                   :pager-count="5"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage3"
                   :page-size="10"
                   layout="prev, pager, next, jumper"
                   :total="31"
                   prev-text="上一页"
                   next-text="下一页"
                   class="paginationBox"></el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      }
    }
  }
</script>
