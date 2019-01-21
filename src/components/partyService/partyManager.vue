
<template>
  <div>
    <div class="top">
      <el-button type="primary" class="button">添加党员</el-button>
      <el-input placeholder="请输入内容" class="inputBox"></el-input>
      <el-button type="primary" class="button">搜索</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData3" tooltip-effect="dark" style="width: 100%" border >
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="time" label="出生日期"></el-table-column>
        <el-table-column prop="sex" label="学历"></el-table-column>
        <el-table-column prop="name" label="入党时间"></el-table-column>
        <el-table-column prop="name" label="是否正式党员"></el-table-column>
        <el-table-column prop="name" label="职务/职称"></el-table-column>
        <el-table-column prop="name" label="所在支部"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a @click="handleClick(scope.row)">修改</a>
            <a class="delete">删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      :pager-count="5"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="61"
      prev-text="上一页"
      next-text="下一页"
      class="paginationBox"
    ></el-pagination>
  </div>
</template>
<script>
export default {



  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男',
          time: '1983-11-21'
        },
        {
          date: '2016-05-02',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男',
          time: '1983-11-21'
        },
        {
          date: '2016-05-04',
          name: '王二虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '女',
          time: '1983-11-21'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '女',
          time: '1983-11-21'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男',
          time: '1983-11-21'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '女',
          time: '1983-11-21'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex: '男',
          time: '1983-11-21'
        }
      ]
    }
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}

</script>
<style >
.top {
  display: flex;
  margin-top: 30px;
}
.content {
  margin-top: 30px;
}

.inputBox {
  margin-left: 300px;
  margin-right: 380px;
}
.inputBox .el-input__inner {
  line-height: 30px;
  height: 30px;
  width: 300px;
}


a{
    padding: 9px 5px;
    font-size: 14px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color:#409eff;
}
</style>


