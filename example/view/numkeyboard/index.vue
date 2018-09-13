<template>
  <div class="numkeypad-example">
    <h4>数字键盘</h4>
    <numkeyboard :options="forms[0]" @touchstart.native="showkeyboard(0)">
    </numkeyboard>
    <numkeyboard :options="forms[1]" @touchstart.native="showkeyboard(1)">
    </numkeyboard>
    <numkeyboard :options="forms[2]" @touchstart.native="showkeyboard(2)">
    </numkeyboard>
    <h4>原生input输入框</h4>
    <div class="default-input">
      <input class="date_number" type="tel" placeholder="percentformat" />
    </div>
    <div class="default-input">
      <input class="date_number" type="tel" placeholder="请输入数字" />
    </div>
    <customkeyboard :options="keyboardopt" @update="updateValue" @hidekeyboard='hidekeyboard'></customkeyboard>
  </div>
</template>
<script type="text/ecmascript-6">
import numkeyboard from 'packages/numkeyboard/index';
import customkeyboard from 'packages/customkeyboard/index';
export default {
  name: 'numkeypad-example',
  components: {
    numkeyboard,
    customkeyboard
  },
  data() {
    return {
      keyboardopt: {},
      forms: [
        {
          type: 'phone',
          value: '',
          label: '手机号码：',
          placeholder: 'phone format',
          textalign: 'left',
          flag: false
        },
        {
          type: 'bankCard',
          value: '',
          label: '银行卡号：',
          placeholder: 'bankCard format',
          textalign: 'right',
          flag: false
        },
        {
          type: 'percent',
          value: '',
          label: '小数点：',
          placeholder: 'percent format',
          textalign: 'center',
          flag: false
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 隐藏键盘
    hidekeyboard() {
      this.forms.forEach((item, index, arr) => {
        this.forms[index].flag = false;
      });
      this.keyboardopt = this.forms[0];
    },
    // 更新对应值
    updateValue(v) {
      this.forms.forEach((item, index, arr) => {
        if (this.curtKeypadIndex == index) {
          this.forms[index].value = v;
          this.keyboardopt.value = v;
        }
      });
    },
    // 打开键盘
    showkeyboard(i) {
      document.activeElement.blur();
      this.curtKeypadIndex = i;
      this.forms.forEach((item, index, arr) => {
        if (i == index) {
          this.forms[index].flag = true;
        } else {
          this.forms[index].flag = false;
        }
      });
      this.keyboardopt = this.forms[i];
      console.log(this.forms[i]);
    }
  }
};
</script>
<style lang="less" scoped>
h4 {
  text-align: center;
  padding: 5px;
}
.default-input {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 15px;
  input {
    width: 100%;
    height: 30px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
