

<template>
  <el-tabs tab-position="left" class="aside">
    <el-tab-pane label="党员管理">
      <PartyManager></PartyManager>
    </el-tab-pane>
    <el-tab-pane label="党员先锋">
      <PartyPioneer></PartyPioneer>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import PartyManager from '../components/partyService/partyManager'
import PartyPioneer from '../components/partyService/partyPioneer'
export default {
  components: {
    PartyManager,
    PartyPioneer
  }
}
</script>
<style >
/* .el-tabs__nav-scroll {
  width: 200px;
} */
.aside {
  background-color: rgba(243, 246, 248, 1);
}

.el-tabs__nav {
  /* float: left;
  margin-bottom: 0;
  margin-right: 10px; */
  background: white;
  margin: 30px 30px 0;
  width: 200px;
  text-align: center;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
}

.el-tabs--left .el-tabs__item.is-left {
  width: 200px;
  text-align: center;
}

.el-tabs__active-bar {
  width: 0 !important;
}
</style>
