import React, { Component } from 'react';
import './index.scss'
import ask from '../../lib/ask'
class My extends Component {
    toMy=()=>{
        console.log('toMy');
        this.props.history.push('/my');
        // ask('queryRoadShowDataList',{
        //     data:{
        //     }
        // }).then((res)=>{
        //     console.log(res);
        // }).catch((error)=>{
        //     console.log(error);
        // })
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
            <div className='my-page'>
               <h1> My page</h1>
               <h2>我的页面</h2>
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

export default My;