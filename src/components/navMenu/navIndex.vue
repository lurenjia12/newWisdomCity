<template>
<div>
  <img src="" alt="">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">综合服务</el-menu-item>
    <el-menu-item index="3">综合执法</el-menu-item>
    <el-menu-item index="4">微信建设</el-menu-item>
    <el-menu-item index="5"><router-link to='/'>党建服务</router-link></el-menu-item>
    <el-menu-item index="6"><router-link to='/ws'>窗口服务</router-link></el-menu-item>
    <el-menu-item index="7">便民服务</el-menu-item>
    <el-menu-item index="8">系统设置</el-menu-item>
  </el-menu>
  <div></div>
</div>
</template>
