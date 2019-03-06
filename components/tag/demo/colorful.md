---
order: 1
title:
  zh-CN: 多彩标签
  en-US: Colorful Tag
---

## zh-CN

我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

## en-US

We preset a series of colorful tag style for different situation usage.
And you can always set it to a hex color string for custom color.

````jsx
import { Tag } from 'antd';

ReactDOM.render(
  <div>
    <h4 style={{ marginBottom: 10 }}>Transaction status:</h4>
    <div>
      <Tag color="tcompleted">Completed</Tag>
      <Tag color="tunconfirmed">Unconfirmed</Tag>
    </div>
    <h4 style={{ marginBottom: 10, marginTop: 20 }}>Portfolio:</h4>
    <div>
      <Tag color="qualified">Qualified</Tag>
      <Tag color="suspicious">Suspicious</Tag>
    </div>
    <h4 style={{ marginBottom: 10, marginTop: 20 }}>Leasing:</h4>
    <div>
      <Tag color="lactive">Active</Tag>
      <Tag color="lcancelled">Canceled</Tag>
    </div>
  </div>,
  mountNode
);
````

````css
.ant-tag {
  margin-bottom: 8px;
}
````
