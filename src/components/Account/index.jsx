import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'
class Account extends Component {
    render() {
        return (
            <div className='invest-account-page'>
                <span className='avator'>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532680772728&di=1d61f9c4cfee9cb22cb8ae5cb3227c21&imgtype=0&src=http%3A%2F%2Fassets-glassx.qiniudn.com%2Fuploads%2Fuser%2Favatar%2F3570%2Fblue.png" alt=""/>
                </span>
                <div className='account-content'>
                    <div className='account-name'>曾博文</div>
                    <div className='account-role'>基金研究部</div>
                </div>
            </div>
        );
    }
}

Account.propTypes = {

};

export default Account;