---
order: 1
title:
  zh-CN: 内嵌菜单
  en-US: Left menu
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

## en-US

Vertical menu with avatar

````jsx
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <div>
      <div class="h400">
        <div class="left-menu">
          <div class="avatar-container">
            <div class="avatar-wrap"></div>
          </div>
          <div class="navigation-menu">
            <div class="menu-item active">
              <a href="#">
                <Icon type="icon-menuwalletfilled" style={{ fontSize: '28px' }} />
              </a>
            </div>
            <div class="menu-item">
              <a href="#">
                <Icon type="icon-menudexoutlined" style={{ fontSize: '28px' }} />
              </a>
            </div>
            <div class="menu-item">
              <a href="#">
                <Icon type="icon-menutokenoutlined" style={{ fontSize: '28px' }} />
              </a>
            </div>
          </div>
          <div class="navigation-bottom">
            <div class="menu-item">
              <a href="#">
                <Icon type="icon-menusettingoutlined" style={{ fontSize: '28px' }} />
              </a>
            </div>
            <div class="menu-item">
              <a href="#">
                <Icon type="icon-menuexit" style={{ fontSize: '28px' }} />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
````
