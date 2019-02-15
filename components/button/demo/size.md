---
order: 2
title:
  en-US: Size
---

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

````jsx
import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
          <Button type="primary" size={size}>Primary</Button>
          <Button type="default" size={size}>Default</Button>
          <Button type="interfaceBtn" icon="icon-send" size={size}>Send</Button>
          <Button type="danger" size={size}>Danger</Button>
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);
````


