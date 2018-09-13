<template>
  <div id="funt-number-keyboard-container" :class="outsideclass">
    <div class="funt-number-keyboard-wrapper" :class="{'funt-number-keyboard-wrapper-hide': !options.flag}">
      <ul v-if="isMobile()" class="funt-number-keyboard-ul-wrapper mobile-keyboard">
        <li v-for="(item, index) in keyboardLi" :key="index" @touchstart="keyStart($event,computText(item,true))" @touchend="keyEnd($event,computText(item,true))" class="funt-number-keyboard-item" :class="computClass(item)">{{computText(item,false)}}</li>
      </ul>
      <ul v-else class="funt-number-keyboard-ul-wrapper pc-keyboard">
        <li v-for="(item, index) in keyboardLi" :key="index" @mousedown="keyStart($event,computText(item,true))" @mousemove="keyMove($event,computText(item,true))" @mouseup="keyEnd($event,computText(item,true))" class="funt-number-keyboard-item" :class="computClass(item)">{{computText(item,false)}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
const onkeyboard = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
export default basic({
  name: 'customekeyboard',
  props: {
    options: {
      type: Object,
      default: {
        type: '',
        value: {
          type: String,
          default: '',
          require: true
        },
        label: '数字键盘：',
        placeholder: 'number format',
        textalign: 'left',
        flag: false,
        decimal: {
          type: Boolean,
          default: false
        }
      }
    }
  },
  data() {
    return {
      money: '',
      outsideclass: 'funt-keyboard-exactAreaClassName',
      vueTouch: {
        move: true,
        leave: true,
        longTouch: true,
        type: 'tap'
      },
      keyboardLi: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'delete']
    };
  },
  mounted() {
    this.outClick();
  },
  computed: {
    disable() {
      return this.options.decimal || this.options.type == 'phone' || this.options.type == 'bankCard';
    }
  },
  methods: {
    // clickoutside
    outClick() {
      let eventType = this.isMobile() ? 'touchend' : 'click';
      onkeyboard(document, eventType, e => {
        if (!this.ifInExact(document.getElementsByClassName(this.outsideclass), e.target)) {
          this.fakeOut();
        }
      });
    },
    isMobile() {
      if (window.location.pathname.indexOf('funt-ui') > -1) {
        return false;
      }
      let flag = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/gi.test(navigator.userAgent);
      return flag;
    },
    // 判断是否在键盘和选项内
    ifInExact(exactElms, target) {
      for (let i = 0; i < exactElms.length; i++) {
        let elm = exactElms[i];
        if (elm.contains(target) || elm == target) {
          return true;
        }
      }
      return false;
    },
    // 小数点和删除 class
    computClass(item) {
      if (item == '.') {
        if (!this.options.decimal || this.options.type == 'phone' || this.options.type == 'bankCard') {
          return 'keyboard-decimal funt-number-keyboard-item-disabled';
        }
        return 'keyboard-decimal';
      } else if (item == 'delete') {
        return 'keyboard-delete';
      } else {
        return '';
      }
    },
    // 显示键盘值
    computText(item, keyFlag) {
      if (item == '.') {
        if (this.options.decimal || this.options.type == 'phone' || this.options.type == 'bankCard') {
          return '';
        }
      } else if (item == 'delete') {
        if (keyFlag) {
          return 'delete';
        }
        return '';
      }
      return item;
    },
    // 关闭键盘
    fakeOut() {
      this.$emit('hidekeyboard', false);
    },
    // 更新值
    updateValue() {
      this.typeComputed(this.options.type);
      this.$emit('update', String(this.money));
    },
    // 类型处理
    typeComputed(type) {
      let money = this.money;
      let newValue = this.money;
      switch (type) {
        case 'bankCard':
          newValue = money.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;
        case 'phone':
          newValue = money.replace(/\D/g, '').substring(0, 11);
          const valueLen = newValue.length;
          if (valueLen > 3 && valueLen < 8) {
            newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`;
          } else if (valueLen >= 8) {
            newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(7)}`;
          }
          break;
        case 'number':
          newValue = money.replace(/\D/g, '');
          break;
        case 'text':
        case 'password':
        default:
          break;
      }
      this.money = newValue;
    },
    // 键盘逻辑
    // 键盘事件start
    keyStart(e, keyNum) {
      e.preventDefault();
      document.activeElement.blur();
      this.money = this.options.value;
      this.vueTouch.move = true;
      this.vueTouch.leave = true;
      this.vueTouch.longTouch = true;
      clearInterval(this.pressTimes);
      this.time = setTimeout(
        function() {
          if (this.vueTouch.leave && this.vueTouch.move) {
            this.vueTouch.type == 'longtap';
            this.longPress(e, keyNum);
            this.vueTouch.longTouch = false;
          }
        }.bind(this),
        400
      );
    },
    // 键盘事件move
    keyMove(e, keyNum) {
      document.activeElement.blur();
    },
    // 键盘事件end
    keyEnd(e, keyNum) {
      e.preventDefault();
      this.money = this.options.value;
      clearTimeout(this.time);
      clearInterval(this.pressTimes);
      if (this.vueTouch.longTouch && this.vueTouch.move) {
        this.vueTouch.type == 'tap';
        this.vueTouch.leave = false;
      }
      this._handleEnd(e, keyNum);
    },
    // 长按事件
    longPress(e, keyNum) {
      e.preventDefault();
      if (keyNum == 'delete') {
        this.pressTimes = setInterval(() => {
          this._handleDeleteKey();
        }, 30);
      } else {
        clearInterval(this.pressTimes);
      }
    },
    //单击事件
    _handleEnd(e, keyNum) {
      if (keyNum == '') return false;
      switch (String(keyNum)) {
        //小数点
        case '.':
          this._handleDecimalPoint();
          break;
        //删除键
        case 'delete':
          this._handleDeleteKey();
          break;
        // 数字键
        default:
          this._handleNumberKey(keyNum);
          break;
      }
    },
    //处理小数点函数
    _handleDecimalPoint() {
      //如果包含小数点，直接返回
      if (this.money.indexOf('.') > -1) return false;
      //如果小数点是第一位，补0
      if (!this.money.length) {
        this.money = '0.';
      } else {
        //如果不是，添加一个小数点
        this.money = this.money + '.';
      }
      this.updateValue();
    },
    //处理删除键
    _handleDeleteKey() {
      let S = this.money;
      //如果没有输入，直接返回
      if (!S.length) {
        return false;
      }
      //否则删除最后一个
      this.money = S.substring(0, S.length - 1);
      this.updateValue();
    },
    //处理数字
    _handleNumberKey(num) {
      let S = this.money;
      this.money = S + num;
      //没有小数点
      if (!(S.indexOf('.') > -1)) {
        //如果第一位是0，只能输入小数点
        if (num == 0 && S.length == 0) this.money = '0.';
        else {
          if (S.length && Number(S.charAt(0)) === 0) return;
          this.money = S + num;
        }
      }
      this.updateValue();
    }
  }
});
</script>
