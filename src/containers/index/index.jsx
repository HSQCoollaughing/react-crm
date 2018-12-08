import React, { Component } from 'react';
import {Provider, inject, observer } from 'mobx-react';
import { observable } from "mobx";
import './index.scss'

// @inject('listStore')
// @observer
class index extends Component {
    constructor(props){
        // @observable title = "2222";
        super(props)
    }
    toMy=()=>{
        console.log('toMy');
        this.props.history.push('/my');
    }
    toIndex=()=>{
        console.log('toMy');
        this.props.history.push('/index');
    }
    toOrder=()=>{
        console.log('toMy');
        this.props.history.push('/order');
    }
    render() {
        return (
            <div className='index-page'>
                 <i className="iconfont">&#xe65f;</i>
                 <i className='iconfont'>&#xe600;</i>
                 <i className='iconfont'>&#xe63c;</i>
                 <i className='iconfont'>&#xe635;</i>
                <h1>index page</h1>
                <h2>首页</h2>
                <button onClick={()=>this.toMy()}>我的页面</button>
                <button onClick={()=>this.toIndex()}>首页</button>
                <button onClick={()=>this.toOrder()}>订单页面</button>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
                <div>jjjjjjkjkjk</div>
            </div>
        );
    }
}

export default index;