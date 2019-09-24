<template>
  <div class="main">
    <div class="tool">
      <novel-text></novel-text>
      <provide-code></provide-code>
    </div>
    <novel-text-show></novel-text-show>
    <el-backtop :bottom="100" :right="100">
      <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>
<script>
import novelText from './views/novelText'
import provideCode from './views/provideCode'
import novelTextShow from './views/novelTextShow'
export default {
  components: {
    novelText,
    provideCode,
    novelTextShow
  }
}
</script>
<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 16px;
}
html,
body,
div,
span {
  margin: 0;
  padding: 0;
}
.tool {
  box-sizing: content-box;
  display: flex;
}
</style>
