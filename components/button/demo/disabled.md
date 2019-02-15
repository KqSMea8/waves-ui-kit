---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

````jsx
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary (disabled)</Button>
    <br />
    <Button type="wshadow" icon="icon-send">Send</Button>
    <Button type="wshadow" icon="icon-send" disabled>Send (disabled)</Button>
        <br />
      <Button type="danger">Danger</Button>
      <Button type="danger" disabled>Danger (disabled)</Button>
  </div>,
  mountNode
);
````
