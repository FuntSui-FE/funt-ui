# Lmarquee 跑马灯(单)

**使用指南**

```js
import { Lmarquee } from 'funt-ui';

Vue.use(Lmarquee);
```

**代码演示**
<lmarquee />

```html
  <funt-lmarquee>
    <funt-marquee-item v-for="(item,i) in list" :key="i">{{item}}</funt-marquee-item>
  </funt-lmarquee>
```

```js
export default {
  data() {
    return {
      list: ['Javascript是世界上最好的语言1', 'Javascript是世界上最好的语言2', 'Javascript是世界上最好的语言3', 'Javascript是世界上最好的语言4', 'Javascript是世界上最好的语言5']
    };
  }
};
```

**API**

| 参数     | 说明               | 类型   | 默认值 |
| :------- | :----------------- | :----- | :----: |
| duration | 动画持续时间(毫秒) | Number |  300   |
| interval | 动画切换间隙(毫秒) | Number |  2000  |
