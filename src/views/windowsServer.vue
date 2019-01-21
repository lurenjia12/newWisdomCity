<template>
  <el-tabs tab-position="left" class="aside">
    <el-tab-pane label="法制教育">
      <LegalEducation></LegalEducation>
    </el-tab-pane>
    <el-tab-pane label="法制咨询">
      <LegalConsulting></LegalConsulting>
    </el-tab-pane>
    <el-tab-pane label="人民调解">
      <PeopleMediation></PeopleMediation>
    </el-tab-pane>
    <el-tab-pane label="信息曝光">
      <InformationExposure></InformationExposure>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import LegalEducation from '../components/windowsServer/legalEducation'
import LegalConsulting from '../components/windowsServer/legalConsulting'
import PeopleMediation from '../components/windowsServer/peopleMediation'
import InformationExposure from '../components/windowsServer/informationExposure'
export default {
  components: {
    LegalEducation,
    LegalConsulting,
    PeopleMediation,
    InformationExposure
  }
}
</script>
