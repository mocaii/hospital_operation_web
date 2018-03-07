import React,{ Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { public_url } from '../../tools/common';
import { Link } from 'react-router-dom'
import style from './index.module.scss';

const menu1 = (
    <Menu className={style.menu}>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" to="http://www.alipay.com/">今日菜单</Link>
        </Menu.Item>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" to="http://www.taobao.com/">菜品管理</Link>
        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu className={style.menu}>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" to="http://www.alipay.com/">订单导出</Link>
        </Menu.Item>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" to="http://www.taobao.com/">打印订单</Link>
        </Menu.Item>
    </Menu>
);

const profileMenu = (
    <Menu className={style.menu}>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修改密码</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
        </Menu.Item>
    </Menu>
);

class Index extends Component {
    render(){
        return(
            <div>
                <header className={style.header}>
                    <div className={style.content}>
                        <div className={style.log}>
                            <span className={style.middle_helper}/>
                            <img src={public_url+"/static/pages/layout/Logo.png"}
                                 alt={"Logo"}
                                 height="40"
                            />
                        </div>
                        <Dropdown overlay={menu1} placement="bottomLeft">
                            <div className={style.menu}>
                                <span>菜单管理</span>
                            </div>
                        </Dropdown>
                        <Dropdown overlay={menu2} placement="bottomLeft">
                            <div className={style.menu}>
                                <span>订单管理</span>
                            </div>
                        </Dropdown>
                        <Link to="" className={style.menu_color}>
                            <div className={style.menu}>
                                <span>子账号管理</span>
                            </div>
                        </Link>
                        <Link to=""  className={style.menu_color}>
                            <div className={style.menu}>
                                <span>病床管理</span>
                            </div>
                        </Link>
                        <div className={style.name}>
                            <span>momo.zxy</span>
                        </div>
                        <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomCenter">
                            <div className={style.profilePicture}>
                                <span className={style.middle_helper}/>
                                <img src={public_url+"/static/pages/layout/profilePicture.jpg"}
                                     alt={"profilePicture"}
                                />
                            </div>
                        </Dropdown>
                    </div>
                </header>
                <div className={style.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Index