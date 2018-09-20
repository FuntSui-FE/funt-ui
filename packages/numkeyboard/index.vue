<template>
  <div class="funt-numkeypad">
    <div class="funt-list-input">
      <div class="funt-input-line">
        <div class="funt-input-label funt-input-label-5">{{label}}</div>
        <div v-if="isMobile()" class="funt-input-control" :class="outsideclass" @touchstart="showkeyboard">
          <div class="fake-input-container" :class=" 'fake-input-container-' + textalign">
            <div class="fake-input-placeholder">{{placeholders}}</div>
            <div role="textbox" aria-label="money format" class="fake-input" :class="{focus: flag}">{{value}}</div>
          </div>
        </div>
        <div v-else class="funt-input-control" :class="outsideclass" @click="showkeyboard">
          <div class="fake-input-container" :class=" 'fake-input-container-' + textalign">
            <div class="fake-input-placeholder">{{placeholders}}</div>
            <div role="textbox" aria-label="money format" class="fake-input" :class="{focus: flag}">{{value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
import funtKeyBoard from '../customkeyboard';
import Vue from 'vue';
let KeyBoardConstructor = Vue.extend(funtKeyBoard);

let keyboardUid = 0;
let keyboardUids = [];
let keyboard;

export default basic({
  name: 'numkeyboard',
  props: {
    type: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    textalign: {
      type: String,
      default: 'left'
    },
    value: {
      type: String,
      default: ''
    },
    decimal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      outsideclass: 'funt-keyboard-exactAreaClassName-outside',
      flag: false
    };
  },
  created() {
    // 创建唯一标识，组件数组
    this.customUid = keyboardUid++;
    this.CustomKeyBoardId = this.createLetters(this.customUid);
    keyboardUids.push(this);
  },
  mounted() {},
  beforeDestroy() {
    this.hidekeyboard();
    // 清空 组件数组
    keyboardUids.forEach((item, index) => {
      if (item.CustomKeyBoardId === this.CustomKeyBoardId) {
        keyboardUids.splice(index, 1);
      }
    });
    if (keyboard) {
      keyboard.flag = false;
      keyboard.showkey = false;
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      if (keyboard) {
        keyboard.value = newValue;
      }
    }
  },
  methods: {
    // 更新值
    updatevalue(v) {
      this.$emit('input', v);
      this.$emit('onChange', v);
    },
    // 隐藏键盘
    hidekeyboard(all) {
      if (keyboard) {
        keyboard.flag = false;
      }
      keyboardUids.forEach((item, index) => {
        if (item.CustomKeyBoardId !== this.CustomKeyBoardId) {
          if (all) {
            item.$emit('onBlur');
          }
          item.flag = false;
        }
      });
      if (all || this.flag) {
        this.$emit('onBlur');
      }
      this.flag = false;
    },
    // 聚焦打开键盘
    openkeyboard() {
      keyboardUids.forEach((item, index) => {
        if (item.CustomKeyBoardId !== this.CustomKeyBoardId) {
          item.flag = false;
        }
      });
      if (!this.flag) {
        this.$emit('onFocus');
      }
      this.flag = true;
    },
    //打开键盘
    showkeyboard() {
      // 打开键盘
      let value = this.value;
      if (!keyboard) {
        let CustomKeyBoardDom = document.createElement('div');
        CustomKeyBoardDom.id = 'CustomKeyBoardDom-wrapper';
        document.body.appendChild(CustomKeyBoardDom);
        keyboard = new KeyBoardConstructor().$mount('#CustomKeyBoardDom-wrapper');
        keyboard.showkey = true;
        setTimeout(() => {
          keyboard.flag = true;
          this.openkeyboard();
        }, 10);
      } else {
        if (keyboard) {
          keyboard.showkey = true;
          setTimeout(() => {
            keyboard.flag = true;
            this.openkeyboard();
          }, 10);
        }
      }
      // 设置键盘数据
      keyboard.outsideclass = this.outsideclass;
      keyboard.value = value;
      keyboard.type = this.type;
      keyboard.decimal = this.decimal;
      keyboard.CustomKeyBoardId = this.CustomKeyBoardId;
      // 监听事件
      if (!keyboard._events[`updatevalue${this.CustomKeyBoardId}`]) {
        keyboard.$on(`updatevalue${this.CustomKeyBoardId}`, v => {
          this.updatevalue(v);
        });
      }
      if (!keyboard._events[`hidekeyboard`]) {
        keyboard.$on('hidekeyboard', v => {
          if (keyboard && keyboard.flag) {
            this.hidekeyboard('all');
          }
        });
      }
    },
    // 生成 唯一id 返回字符串
    createLetters(num) {
      let uid = num || 0;
      let times = String(String(new Date().getTime()) + uid).split('');
      let letter = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a'];
      let str = '';
      times.forEach((item, index) => {
        str += letter[item];
      });
      return str;
    },
    isMobile() {
      if (window.location.pathname.indexOf('funt-ui') > -1) {
        return false;
      }
      let flag = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/gi.test(navigator.userAgent);
      return flag;
    }
  },
  computed: {
    placeholders() {
      return this.value.length > 0 ? '' : this.placeholder;
    }
  }
});
</script>
