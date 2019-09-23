<template>
  <div class="novelText">
    <div class="block">
      <span>标题颜色:</span>
      <el-color-picker v-model="colorh"></el-color-picker>
      <span>段落颜色:</span>
      <el-color-picker v-model="colorp"></el-color-picker>

      <el-select v-model="value" placeholder="请选择" clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-input
        type="textarea"
        :autosize="{ minRows: 8, maxRows: 8}"
        placeholder="小说文本··"
        v-model="intputNovelText"
        resize="none"
      ></el-input>
      <el-button type="defause" @click="editNovelText(intputNovelText)">编辑</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colorh: '#FE4E03',
      colorp: '#26201D',
      intputNovelText: '',
      options: [
        {
          value: '14px',
          label: '14px'
        },
        {
          value: '16px',
          label: '16px'
        },
        {
          value: '18px',
          label: '18px'
        },
        {
          value: '20px',
          label: '20px'
        },
        {
          value: '24px',
          label: '24px'
        }
      ],
      value: ''
    }
  },
  methods: {
    editNovelText (text) {
      this.$store.dispatch('getText', text)
    },
    editText () {
      var novelTextContent = ''
      var novelTextArr = intputNovelText.split('\n')
      novelTextArr.forEach(function (item) {
        let it = item.trim()
        if (it !== '') {
          if (/^第[Ww]*章/.text(it)) {
            novelTextContent += `<h6>${it}</h6>`
          } else {
            novelTextContent += `<p>${it}</p>`
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.novelText {
  width: 50%;
  margin-right: 2px;
  height: 500px;
}
</style>
