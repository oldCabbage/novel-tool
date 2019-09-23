<template>
  <div class="main">
    <div class="tool">
      <novel-text></novel-text>
      <provide-code></provide-code>
    </div>
    <novel-text-show></novel-text-show>
  </div>
</template>
<script>
import novelText from './views/novelText'
import provideCode from './views/provideCode'
import novelTextShow from './views/novelTextShow'
export default {
  data () {
    return {}
  },
  components: {
    novelText,
    provideCode,
    novelTextShow
  }
}
</script>
<style lang="scss">
html,
body,
div ,
span{
  margin: 0;
  padding: 0;
}
.tool {
  box-sizing: content-box;
  display: flex;
}
</style>
