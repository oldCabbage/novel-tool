<template>
  <div class="novelShow">
    <el-button type="defause" @click="showText">展示</el-button>
    <div v-html="this.text"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    showText () {
      this.text = this.$store.state.intputNovelText
    }
  }
}
</script>

<style scoped>
.novelShoe {
  background-color: #555;
  width: 100%;
}
</style>
