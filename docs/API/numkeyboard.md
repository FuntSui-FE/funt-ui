# Numkeyboard 数字键盘

**使用指南**

```js
import { Numkeyboard } from 'funt-ui';

Vue.use(Numkeyboard);
```


**效果演示**  

<section class="code-box-demo code-box-demo-preview"><iframe id="demoFrame" name="demoFrame" title="antd-mobile" src="/funt-ui/API/numkeyboard-demo.html" style="width: 377px; height: 567px; border:1px solid rgb(247, 247, 247);"></iframe></section>


**代码演示**
```html
<template>
<div>
  <div class="numkeyboard-example">
    <funt-numkeyboard :value="phone" type="phone" label="手机号码：" placeholder="phone format"  @onChange="change" @onBlur="blur" @onFocus="focus"></funt-numkeyboard>
    <funt-numkeyboard v-model="value1" type="phone" label="手机号码：" placeholder="phone format"></funt-numkeyboard>
    <funt-numkeyboard v-model="value2" type="bankCard" label="银行卡号：" placeholder="bankCard format" textalign="right"></funt-numkeyboard>
    <funt-numkeyboard v-model="value3" label="小数点：" placeholder="percent format" textalign="center"></funt-numkeyboard>
  </div>
</div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      phone:'',
      value1: '186', 
      value2: '', 
      value3: '', 
    }
  },
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
```

**API**  
**numkeyboard**
| 参数         | 说明                                              | 类型   |  默认值  |
| :----------- | :-------------------------------------------------| :----- | :------: |
| value     | value 可选值 (和onChange配合使用) | String | ''  |
| v-model | 双向数据绑定 可选值 | String | ''  |
| label | label 可选值 | String | ''  |
| type | 银行卡bankCard;，手机号phone 可选值| String | '' |
| placeholder | placeholder  可选值| String | ''  |
| textalign      | 文本对齐方式  可选值| String | 'left'  |
| decimal      | 是否禁用键盘中的‘ . ’  可选值| Boolean | true  |
| onChange    | change 事件触发的回调函数, 可选值 (newVal: string): void  | Event |   -    |
| onBlur    | blur 事件触发的回调函数, 可选值 参数: 无  | Event |   -    |
| onFocus    | focus 事件触发的回调函数, 可选值 参数: 无 | Event |   -    |




