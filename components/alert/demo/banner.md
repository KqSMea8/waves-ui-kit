---
order: 6
iframe: 250
title:
  zh-CN: 顶部公告
  en-US: Banner
---

## zh-CN

页面顶部通告形式，默认有图标且`type` 为 'warning'。

## en-US

Display Alert as a banner at top of page.

````jsx
import { Alert } from 'antd';

ReactDOM.render(
  <div>
    <Alert message="Warning text very long warning text" banner closable />
    <br />
    <Alert type="error" message="Error text very long error text" banner closable />
    <br />
    <Alert type="info" message="Info text very long info text" banner closable />
    <br />
    <Alert type="success" message="Success text very long success text" banner closable />
  </div>,
  mountNode
);
````
