<template>
  <div class="box" style="height:100%">
    <div class="headerNav">
      <img src="../assets/logo.jpg"
           alt="图片">
      <el-menu class="el-menu-demo"
               mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">
          <router-link to='/is'>综合服务</router-link>
        </el-menu-item>
        <el-menu-item index="3">综合执法</el-menu-item>
        <el-menu-item index="4">微信建设</el-menu-item>
        <el-menu-item index="5">
          <router-link to='/ps'>党建服务</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to='/ws'>窗口服务</router-link>
        </el-menu-item>
        <el-menu-item index="7">便民服务</el-menu-item>
        <el-menu-item index="8">系统设置</el-menu-item>
      </el-menu>
      <div class="userChange">
        我是来占位置的<br/>
        我是来占位置的
      </div>
    </div>
    <section class="content-container">
      <router-view />
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style>

</style>

