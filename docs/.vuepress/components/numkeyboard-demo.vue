<template>
  <div class="numkeypad-example">
    <h4>数字键盘</h4>
    <numkeyboard class="dddd-phone" :value="phone" type="phone" label="手机号码：" placeholder="phone format" @onChange="change" @onBlur="blur" @onFocus="focus"></numkeyboard>
    <numkeyboard v-model="bankCard" type="bankCard" label="银行卡号：" placeholder="bankCard format" textalign="right"></numkeyboard>
    <numkeyboard v-model="percet" label="小数点：" :decimal="false" placeholder="percent format" textalign="center"></numkeyboard>
    <numkeyboard v-model="normal" label="数字：" placeholder="number" textalign="center"></numkeyboard>
  </div>
</template>
<script type="text/ecmascript-6">
import numkeyboard from '../../../packages/numkeyboard';
export default {
  name: 'numkeypad-example',
  components: {
    numkeyboard
  },
  data() {
    return {
      phone: '168',
      bankCard: '',
      percet: '',
      normal: ''
    };
  },
  methods: {
    change(v) {
      this.phone = v;
      // console.log('change： ' + v);
    },
    blur() {
      // console.log('blur');
    },
    focus() {
      // console.log('focus');
    }
  }
};
</script>

<style lang="less">
@import url('../../../styles/index');
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
