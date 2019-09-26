<template>
  <div class="novelText">
    <div class="block">
      <span>标题颜色:</span>
      <el-color-picker v-model="colorh"></el-color-picker>
      <span>段落颜色:</span>
      <el-color-picker v-model="colorp"></el-color-picker>
      <el-select v-model="valueH" placeholder="标题字体大小" clearable size="mini">
        <el-option
          v-for="item in fontSizeH"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="valueP" placeholder="段落字体大小" clearable size="mini">
        <el-option
          v-for="item in fontSizeP"
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
      <el-button type="defause" @click="cleanText(intputNovelText)">清除</el-button>
      <el-button type="defause" @click="editNovelText(intputNovelText)">编辑</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colorh: '#A63403',
      colorp: '#1e1e1e',
      intputNovelText: '',
      fontSizeH: [
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
          value: '22px',
          label: '22px'
        }
      ],
      valueH: '',
      fontSizeP: [
        {
          value: '12px',
          label: '12px'
        },
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
        }
      ],
      valueP: ''
    }
  },
  created: function () {
    this.getcolor()
  },
  methods: {
    setcolor () {
      let color = { colorh: this.colorh, colorp: this.colorp }
      localStorage.setItem('novel-color', JSON.stringify(color))
    },
    getcolor () {
      let color = localStorage.getItem('novel-color')
      if (!color) return
      color = JSON.parse(color)
      this.colorh = color.colorh
      this.colorp = color.colorp
    },
    cleanText () {
      this.intputNovelText = ''
    },
    editNovelText (text) {
      this.setcolor()
      this.$store.dispatch('getText', this.editText(text))
    },
    editText () {
      // if(location.host !== 'oldcabbage.net3v.net') return ;
      let style = `<style>#content-novel h6{font-size:${this.valueH == 0 ? '18px' : this.valueH};text-align:center;color:${this.colorh};}#content-novel p{font-size:${this.valueP == 0 ? '16px' : this.valueP};line-height:2em;text-indent:2em;color:${this.colorp};margin:0;padding:0}</style>`
      let novelTextContent = ''
      let novelTextArr = this.intputNovelText.split('\n')
      novelTextArr.forEach((item) => {
        let it = item.trim()
        if (it !== '') {
          if (/^第[\W\w]*章/.test(it)) {
            novelTextContent += `<h6>${it}</h6>`
          } else {
            novelTextContent += `<p>${it}</p>`
          }
        }
      })
      return novelTextContent == '' ? '' : `<div id="content-novel">${style + novelTextContent}</div>`
    }
  }
}
</script>
<style lang="scss" scoped>
.novelText {
  width: 50%;
  margin-right: 2px;
}
</style>
