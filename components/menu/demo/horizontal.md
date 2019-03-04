---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Menu
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

````jsx
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'Assets',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
<Menu
  onClick={this.handleClick}
  selectedKeys={[this.state.current]}
  mode="horizontal"
>
  <Menu.Item key="Assets">
    <Icon type="icon-assetsfilled" />Assets
  </Menu.Item>
  <Menu.Item key="Portfolio">
    <Icon type="icon-portfoliofilled" />Portfolio
  </Menu.Item>
  <Menu.Item key="Transactions">
    <Icon type="icon-transactionfilled" />Transactions
  </Menu.Item>
  <Menu.Item key="Leasing">
    <Icon type="icon-leasingfilled" />Leasing
  </Menu.Item>
</Menu>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
