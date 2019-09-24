<template>
  <div class="novelCode">
    <p>html代码</p>
    <el-input
      resize="none"
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 8}"
      placeholder
      v-model="novelText"
      id="novelContent"
    ></el-input>
    <el-button type @click="clickCopy" class="copy" data-clipboard-target="#novelContent">复制</el-button>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  data () {
    return {
      novelText: ''
    }
  },
  methods: {
    clickCopy () {
      let copyobj = new Clipboard('.copy')
      copyobj.on('success', e => {
        if (e.text == '') {
          copyobj.off('error')
          copyobj.off('success')
          copyobj.destroy()
          e.clearSelection()
          this.$message({
            message: '复制失败！？？？？？东西在哪里？',
            type: 'warning',
            duration: 500
          })
          return
        }
        copyobj.off('error')
        copyobj.off('success')
        copyobj.destroy()
        e.clearSelection()
        this.$message({
          message: '复制成功',
          type: 'success',
          duration: 500
        })
      })
      copyobj.on('error', e => {
        e.clearSelection()
        this.$message({
          message: '复制失败！可选中纹面文本，按"ctrl"+"C"复制',
          type: 'warning',
          duration: 500
        })
      })
    }
  },
  computed: {
    intputNovelText () {
      return this.$store.state.intputNovelText
    }
  },
  watch: {
    intputNovelText (newTex, oldText) {
      this.novelText = newTex
    }
  }
}
</script>
<style lang='scss' scoped>
.novelCode {
  margin-left: 2px;
  width: 50%;
  height: 10px;
}
</style>
