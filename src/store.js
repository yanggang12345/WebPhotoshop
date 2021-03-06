import Vue from 'vue'
import Vuex from 'vuex'
import tools from './state/tools'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 用户信息
    accountObj: {
      id: '',
      name: '',
      password: '',
      imgUrl: ''
    },
    // 鼠标在画布上坐标
    offset: [20, 40],
    // 绘图工具信息
    tools: tools,
    // 特殊效果信息
    effectArr: [
      {
        name: 'blackwhite',
        title: '黑白 Ctrl+Shift+W'
      }, {
        name: 'opsitecolor',
        title: '反色 Ctrl+Shift+I'
      }, {
        name: 'blur',
        title: '模糊 Ctrl+Shift+B'
      }, {
        name: 'cloud',
        title: '灰度化 Ctrl+Shift+M'
      }, {
        name: 'sharpen',
        title: '锐化 Ctrl+Shift+S'
      }, {
        name: 'float',
        title: '浮雕 Ctrl+Shift+F'
      }, {
        name: 'soft',
        title: '柔化 Ctrl+Shift+T'
      }, {
        name: 'painting',
        title: '油画 Ctrl+Shift+P'
      }, {
        name: 'wood',
        title: '积木 Ctrl+Shift+D'
      }, {
        name: 'curve',
        title: '雕刻 Ctrl+Shift+V'
      }, {
        name: 'turnold',
        title: '怀旧 Ctrl+Shift+O'
      }, {
        name: 'new',
        title: '新建'
      }, {
        name: 'colorpalettes',
        title: '色相/饱和度'
      }, {
        name: 'light',
        title: '亮度/对比度'
      }, {
        name: 'colorCurve',
        title: '曲线'
      }, {
        name: 'autolevel',
        title: '色阶'
      }
    ],
    // 当前使用的是哪个工具
    toolId: 5,
    // 全局绘图颜色
    globalColor: [0, 0, 0],
    // 所有的画布信息
    canvasArr: [
      // {
      //   name: '新建画布1.png',
      //   width: 820,
      //   height: 520,
      //   context: '',
      //   canvas: '',
      //   imgData: '',
      //   // 缩放比例
      //   scaleProportion: 1,
      //   // 操作历史记录
      //   dataArr: [{
      //     id: 24,
      //     imgData: ''
      //   }],
      //   index: 0
      // }
    ],
    // 当前使用的是第几个画布
    nowCanvas: 0,
    // 窗口
    showPops: {
      // 历史记录
      showRecord: true,
      // 工具
      showTools: true
    },
    // 标尺，网格
    ruler: {
      ruler: false
    },
    // 最近使用项
    recent: {
      item: true
    },
    // 各种弹窗开启
    popUpsKey: {
      // 新建
      newCanvas: false,
      // 关闭
      closeCanvas: false,
      // 清除
      clearCanvas: false,
      // 关于
      aboutWebPhotoshop: false,
      // 登录
      login: false
    },
    // 右侧弹窗
    mainPopKey: {
      // 色阶
      colorLevel: false,
      // 色相/饱和度
      colorpalettes: false,
      // 色彩曲线
      colorCurve: false,
      // 亮度/对比度
      light: false
    },
    // 画布上的弹窗
    canvasPopKey: {
      // 色彩选择器
      colorPicker: false
    }
  },
  mutations: {
    changeOffset (state, offsetArr) {
      state.offset = {...state.offset, offsetArr}
    },
    changeToolId (state, toolId) {
      state.toolId = toolId
    },
    addCanvasArr (state, obj) {
      state.canvasArr.push(obj)
    },
    popCanvasArr (state, index) {
      state.canvasArr.splice(index, 1)
      if (index < state.nowCanvas) state.nowCanvas = state.nowCanvas - 1
      if (state.canvasArr.length - 1 < state.nowCanvas) state.nowCanvas = state.canvasArr.length - 1
    },
    // 改变dataArr
    changeDataArr (state, obj) {
      state.canvasArr[state.nowCanvas].index = state.canvasArr[state.nowCanvas].dataArr.length
      state.canvasArr[state.nowCanvas].dataArr.push(obj)
    },
    // 改变index
    changeIndex (state, index) {
      state.canvasArr[state.nowCanvas].index = index
    },
    // 清除画布
    clearCanvas (state) {
      state.canvasArr[state.nowCanvas].dataArr = [].concat(state.canvasArr[state.nowCanvas].dataArr[0])
      state.canvasArr[state.nowCanvas].index = 0
    },
    changeCanvasArr (state, obj) {
      state.canvasArr[state.nowCanvas] = {...state.canvasArr[state.nowCanvas], obj}
    },
    changeNowCanvas (state, nowCanvas) {
      state.nowCanvas = nowCanvas
    },
    changeglobalColor (state, arr) {
      state.globalColor = [].concat(arr)
    },
    changePopUpsKey (state, arr) {
      state.popUpsKey[arr[0]] = arr[1]
    }
  },
  getters: {
    nowCanvasArr: state => {
      return state.canvasArr[state.nowCanvas]
    }
  }
})
