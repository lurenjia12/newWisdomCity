<template>
  <el-tabs tab-position="left" class="aside table">
    <el-tab-pane label="就业失业">
      <loseAndGet></loseAndGet>
    </el-tab-pane>
    <el-tab-pane label="生育登记">
      <birthRegist></birthRegist>
    </el-tab-pane>
    <el-tab-pane label="临时救助">
      <tempAssistance></tempAssistance>
    </el-tab-pane>
    <el-tab-pane label="医疗救助">
      <medicalAssistance></medicalAssistance>
    </el-tab-pane>
    <el-tab-pane label="最低生活保障">
      <subsistenceAllow></subsistenceAllow>
    </el-tab-pane>
    <el-tab-pane label="高龄补贴">
      <oldAgeAllow></oldAgeAllow>
    </el-tab-pane>
    <el-tab-pane label="高领年审">
      <oldAgeTrial></oldAgeTrial>
    </el-tab-pane>


  </el-tabs>
</template>
<script>
import oldAgeTrial from '../components/integratedService/oldAgeTrial.vue'
import oldAgeAllow from '../components/integratedService/oldAgeAllowance.vue'
import subsistenceAllow from '../components/integratedService/subsistenceAllowances.vue'
import medicalAssistance from '../components/integratedService/medicalAssistance.vue'
import tempAssistance from '../components/integratedService/tempAssistance.vue'
import loseAndGet from '../components/integratedService/loseAndGet.vue'
import birthRegist from '../components/integratedService/birthRegist.vue'
export default {
  components: {
    birthRegist,
    loseAndGet,
    tempAssistance,
    medicalAssistance,
    subsistenceAllow,
    oldAgeAllow,
    oldAgeTrial
  }
}
</script>
<style>
.table{
  margin-top: 30px;
}
</style>
