---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.

````jsx
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="dashed" icon="icon-send">Send</Button>
    <Button type="dashed" icon="icon-receive">Receive</Button>
    <Button type="dashed" icon="icon-download">Export</Button>
    <Button type="dashed" icon="icon-json">JSON</Button>

    <Button type="dashed" icon="icon-send"></Button>
    <Button type="dashed" icon="icon-receive"></Button>
    <Button type="dashed" icon="icon-download"></Button>
    <Button type="dashed" icon="icon-json"></Button>
    <Button type="dashed" icon="icon-filter"></Button>
  </div>,
  mountNode
);
````
