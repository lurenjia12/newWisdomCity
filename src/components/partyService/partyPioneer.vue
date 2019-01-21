<template>
  <div>
    <div class="top">
      <el-select v-model="value" placeholder="全部">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder="请输入内容" class="inputBox"></el-input>
      <el-button type="primary" class="button">搜索</el-button>
    </div>
    <div class="content">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        border
      >
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="address" label="出生日期"></el-table-column>
        <el-table-column prop="name" label="学历"></el-table-column>
        <el-table-column prop="name" label="入党时间"></el-table-column>
        <el-table-column prop="name" label="是否正式党员"></el-table-column>
        <el-table-column prop="name" label="职务/职称"></el-table-column>
        <el-table-column prop="name" label="所在支部"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a  @click="handleClick(scope.row)">修改</a>
            <a >删除</a>
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
      :page-size="2"
      layout="prev, pager, next, jumper"
      :total=this.tableData3.length
      prev-text="上一页"
      next-text="下一页"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '党员学习'
        },
        {
          value: '选项3',
          label: '组织生活'
        },
        {
          value: '选项4',
          label: '志愿服务'
        },
        {
          value: '选项5',
          label: '组织建设'
        }
      ],
      value: '',
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
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
      ],
      multipleSelection: []
    }
  }

}
</script>
<style >
</style>
