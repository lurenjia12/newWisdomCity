
<template>
  <div>
    <div class="top">
      <el-button type="primary" class="button">添加党员</el-button>
      <el-input placeholder="请输入内容" class="inputBox"></el-input>
      <el-button type="primary" class="button">搜索</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData3" tooltip-effect="dark" style="width: 100%" border>
        <el-table-column prop="name" label="序号"></el-table-column>
        <el-table-column prop="sex" label="发布时间"></el-table-column>
        <el-table-column prop="address" label="标题"></el-table-column>
        <el-table-column prop="name" label="状态"></el-table-column>
        <el-table-column prop="name" label="查看"></el-table-column>

        <el-table-column prop="name" label="操作">
          <template>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王二虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },

  methods: {}
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
/* .button {
  width: 156px;
  height: 30px;
  line-height: 30px;
} */
.el-button {
  padding: 0 0;
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


