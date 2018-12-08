import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input,Icon } from 'antd';
import { Switch,Link, Route, Redirect, withRouter ,BrowserRouter} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './index.scss'
import Account from '../Account'
const Search = Input.Search;
// @observer
class Header extends Component {
    constructor(props){
        super(props)
    }
    search=(value)=>{
        console.log('value',value);
    }
    menuSwitch=(url)=>{
        this.props.history.push(url);
    }
    render() {
        return (
            <div className='header-page'>
                <div className='title'>
                    <img src={require('../../assets/logo.png')} alt=""/>    
                </div>
                <ul className='header-menu'>
                    {/* <Link to="/my">首页</Link>
                    <Link to="/order">研究报告</Link>
                    <Link to="/order">股票研究</Link>
                    <Link to="/order">卖方观点</Link>
                    <Link to="/order">活动日历</Link>
                    <Link to="/order">绩效考核</Link>
                    <Link to="/order">系统管理</Link> */}
                    <li onClick={()=>this.menuSwitch('/home')}>首页</li>
                    <li onClick={()=>this.menuSwitch('/researchReport')}>研究报告</li>
                    <li onClick={()=>this.menuSwitch('/stockResearch')}>股票研究</li>
                    <li onClick={()=>this.menuSwitch('/viewpoint')}>卖方观点</li>
                    <li onClick={()=>this.menuSwitch('/activity')}>活动日历</li>
                    <li onClick={()=>this.menuSwitch('/performance')}>绩效考核</li>
                    <li onClick={()=>this.menuSwitch('/systemManage')}>系统管理</li>
                </ul>
                <div className='searchContent'>
                <Search
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="搜索商品"
                    enterButton="搜索"
                    size="middle"
                    onSearch={(value=>this.search(value))}
                />
                </div>
                <div className='Account'>
                    <Account/>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);