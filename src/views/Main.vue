<template>
  <div>
    <!-- <img src="static/img"/> -->
    <el-input/>
    {{menuCollapse}}
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    menuCollapse() {
      return this.$store.state.main
    }
  },
  created() {
    this.$store.dispatch('aaaaa')
    this.$store.commit('bbbbb',88888)
  },
  methods: {
  },
  components: {
  }
}
</script>
