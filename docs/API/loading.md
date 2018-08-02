# Loading 加载

**使用指南**

```js
import { Loading } from 'funt-ui';

Vue.use(Loading);
```

**代码演示**

**circular**

<loading-circular/>

```html
  <funt-loading />
  <funt-loading :size="35" />
  <funt-loading :size="40" />
```

**spinner**

<loading-spinner/>

```html
  <funt-loading />
  <funt-loading :size="35"  type="spinner"/>
  <funt-loading :size="40"  type="spinner"/>
```

**API**

| 参数 | 说明                           | 类型   | 默认值   |
| :--- | :----------------------------- | :----- | :------- |
| size | 大小,最大限制为 40px           | Number | 25px     |
| type | 类型,可选值为 circular spinner | String | circular |
