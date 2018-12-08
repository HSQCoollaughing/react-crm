import React, { Component } from 'react';
import './index.scss'
class Order extends Component {
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
            <div className='order-page'>
               <h1> order page</h1>
               <h2>订单页面</h2>
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

            </div>
        );
    }
}

export default Order;