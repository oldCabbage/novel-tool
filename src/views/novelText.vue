<template>
  <div class="novelText">
    <div class="block">
      <span>标题颜色:</span>
      <el-color-picker v-model="colorh"></el-color-picker>
      <span>段落颜色:</span>
      <el-color-picker v-model="colorp"></el-color-picker>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { ColorPicker } from "element-ui";
Vue.use(ColorPicker);
export default {
  data() {
    return {
      colorh: "#FE4E03",
      colorp: "#26201D"
    };
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss" scoped>
.novelText {
  width: 50%;
  height: 500px;
  .block {
    span {
      // display: block;
    }
  }
}
</style>
