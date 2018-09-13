# Numkeyboard 数字键盘

**使用指南**

```js
import { Numkeyboard, Customkeyboard} from 'funt-ui';

Vue.use(Numkeyboard, Customkeyboard);
```


**效果演示**
<section class="code-box-demo code-box-demo-preview"><iframe id="demoFrame" name="demoFrame" title="antd-mobile" src="/funt-ui/API/numkeyboard-demo.html" style="width: 377px; height: 567px; border:1px solid rgb(247, 247, 247);"></iframe></section>


**代码演示**
```html
<template>
<div>
  <div class="numkeyboard-example">
    <funt-numkeyboard :options="forms[0]" @touchstart.native="showkeyboard(0)"></funt-numkeyboard>
    <funt-numkeyboard :options="forms[1]" @touchstart.native="showkeyboard(1)"></funt-numkeyboard>
    <funt-numkeyboard :options="forms[2]" @touchstart.native="showkeyboard(2)"></funt-numkeyboard>
    <funt-customkeyboard :options="keyboardopt" @update="updateValue" @hidekeyboard='hidekeyboard'></funt-customkeyboard>
  </div>
</div>
</template>
```

```js
<script>
export default {
  name: 'numkeyboard',
  data() {
    return {
      keyboardopt: {},
      curtKeypadIndex:0,
      forms: [
        {
          type: 'phone',
          value: '',
          outsideclass: 'exactAreaClassName',
          label: '手机号码：',
          placeholder: 'phone format',
          textalign: 'left',
          flag: false
        },
        {
          type: 'bankCard',
          value: '',
          outsideclass: 'exactAreaClassName',
          label: '银行卡号：',
          placeholder: 'bankCard format',
          textalign: 'right',
          flag: false
        },
        {
          type: 'percent',
          value: '',
          outsideclass: 'exactAreaClassName',
          label: '小数点：',
          placeholder: 'percent format',
          textalign: 'center',
          flag: false,
          decimal: true
        }
      ]
    };
  },
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
    }
  }
};
</script>
```

**API**  
**numkeyboard**
| 参数         | 说明                                              | 类型   |  默认值  |
| :----------- | :-------------------------------------------------| :----- | :------: |
| options      | 参数配置,详见以下 options                         | Object | 详见下表 |
| showkeyboard | 事件类型,必选值  参数index                              | Event  |   -    |
| hidekeyboard | 事件类型,必选值                               | Event  |   -    |
| updateValue | 事件触发的回调函数                           | Event  |   -    |

**options**

| 参数            | 说明             |  类型   | 默认值 |
| :-------------- | :--------------- | :-----: | :----: |
| value      | value 必填值 | String | ''  |
| flag | 焦点标识 必填值 | Boolean | false  |
| label | label 必填值 | String | ''  |
| type | 银行卡bankCard;，手机号phone 可选值| String | '' |
| placeholder | placeholder  可选值| String | ''  |
| textalign      | 文本对齐方式  可选值| String | 'left'  |
| decimal      | 是否显示键盘中的‘ . ’  可选值| Boolean | true  |

**showkeyboard**  
打开键盘函数：参数 form的index值，  
隐藏原生键盘 `document.activeElement.blur()`  
设置当前form的index ``  
遍历form,设置flag  
传值给键盘  

**hidekeyboard**  
隐藏键盘函数  
遍历form,设置`flag`为`false`    
传值给键盘   

**updateValue**  
事件触发的回调函数 , (val: string): void   
更新对应值



