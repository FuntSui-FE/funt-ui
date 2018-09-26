<template>
  <div class="numkeypad-example">
    <h4>数字键盘</h4>
    <numkeyboard class="dddd-phone" :value="phone" type="phone" label="手机号码：" placeholder="phone format" @onChange="change" @onBlur="blur" @onFocus="focus"></numkeyboard>
    <numkeyboard v-model="bankCard" type="bankCard" label="银行卡号：" placeholder="bankCard format" textalign="right"></numkeyboard>
    <numkeyboard v-model="declnum" label="小数点：" :decimal="false" placeholder="percent format" textalign="center"></numkeyboard>
    <numkeyboard v-model="normal" label="数字：" placeholder="percent format" textalign="center"></numkeyboard>
    <h4>原生input输入框</h4>
    <div class="default-input">
      <input class="date_number" type="tel" placeholder="percentformat" />
    </div>
    <div class="default-input">
      <input class="date_number" type="tel" placeholder="请输入数字" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import numkeyboard from 'packages/numkeyboard';
export default {
  name: 'numkeyboard-example',
  components: {
    numkeyboard
  },
  data() {
    return {
      phone: '168',
      bankCard: '6226',
      declnum: '60.06',
      normal: ''
    };
  },
  mounted() {},
  methods: {
    change(v) {
      this.phone = v;
      console.log('change： ' + v);
    },
    blur() {
      console.log('blur');
    },
    focus() {
      console.log('focus');
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
// 自定义输入框样式
.dddd-phone {
  /deep/.funt-list-input {
    .funt-input-line {
      .funt-input-label {
        padding: 0;
        height: 24px;
        line-height: 24px;
      }
      .funt-input-control .fake-input-container {
        height: 24px;
        line-height: 24px;
      }
    }
  }
}
</style>
