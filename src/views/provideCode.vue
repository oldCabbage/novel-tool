<template>
  <div class="novelCode">
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 8}"
      placeholder
      v-model="novelText"
      id="novelContent"
    ></el-input>
    <el-button
      type="success"
      @click="clickCopy"
      class="copy"
      data-clipboard-target="#novelContent"
    >复制</el-button>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      novelText: ""
    };
  },
  methods: {
    clickCopy() {
      let copyobj = new Clipboard(".copy");
      copyobj.on("success", e => {
        copyobj.off("error");
        copyobj.off("success");
        copyobj.destroy();
        e.clearSelection();
        this.$message({
          message: "复制成功",
          type: "success",
          duration: 400
        });
      });
      copyobj.on("error", e => {
        e.clearSelection();
        this.$message({
          message: '复制失败！可选中纹面文本，按"ctrl"+"C"复制',
          type: "warning",
          duration: 200
        });
      });
    }
  },
  computed: {
    intputNovelText() {
      return this.$store.state.intputNovelText;
    }
  },
  watch: {
    intputNovelText(newTex, oldText) {
      this.novelText = newTex;
    }
  }
};
</script>
<style scoped>
.novelCode {
  margin-left: 2px;
  width: 50%;
  height: 10px;
}
</style>
